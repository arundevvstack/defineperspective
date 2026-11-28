import fs from 'fs';
import path from 'path';
import { ProtectedAsset, AssetProtectionTier, RiskLevel } from '@/types/intelligence';

// In-memory registry with persistent fallback initialized from url_inventory.txt & baseline audits
let protectedAssetsStore: ProtectedAsset[] = [];

export function getProtectedAssets(): ProtectedAsset[] {
  if (protectedAssetsStore.length > 0) {
    return [...protectedAssetsStore];
  }

  try {
    const inventoryPath = path.join(process.cwd(), 'url_inventory.txt');
    const urls: string[] = fs.existsSync(inventoryPath)
      ? fs.readFileSync(inventoryPath, 'utf-8')
        .split('\n')
        .map((u) => u.trim())
        .filter(Boolean)
      : [];

    const now = new Date().toISOString();

    protectedAssetsStore = urls.map((url, index) => {
      const slug = url === '/' ? 'home' : url.replace(/^\//, '').replace(/\//g, '-');

      let protectionTier: AssetProtectionTier = 'PRIMARY_SERVICE';
      if (url.includes('red-chamber') || url.includes('urban-fashion-02') || url.includes('still-ai-fashion-film')) {
        protectionTier = 'FLAGSHIP_CORE';
      } else if (url.includes('kerala') || url.includes('trivandrum') || url.includes('kochi') || url.includes('bangalore') || url.includes('mumbai') || url.includes('delhi')) {
        protectionTier = 'REGIONAL_HUB';
      } else if (url.includes('knowledge-center') || url.includes('blog')) {
        protectionTier = 'EDITORIAL';
      } else if (url.includes('portfolio') || url.includes('case-studies')) {
        protectionTier = 'PORTFOLIO_CASE_STUDY';
      }

      // Convert slug to readable title
      const titleWords = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

      return {
        id: `prot_${index + 1}_${slug.slice(0, 16)}`,
        url,
        slug,
        title: `${titleWords} | Define Perspective AI Studio`,
        h1: titleWords,
        canonicalUrl: `https://defineperspective.in${url}`,
        metaDescription: `Protected commercial asset for ${titleWords} at DP AI Studio.`,
        protectionTier,
        isLocked: true,
        baselineTimestamp: now,
        rankingKeywordsCount: 0,
        historicalClicks: 0,
        historicalImpressions: 0,
        prohibitedAutonomousActions: [
          'AUTONOMOUS_SLUG_CHANGE',
          'AUTONOMOUS_CANONICAL_REWRITE',
          'AUTONOMOUS_TITLE_REWRITE',
          'AUTONOMOUS_CONTENT_REPLACEMENT',
          'AUTONOMOUS_PAGE_DELETION',
          'AUTONOMOUS_NOINDEX_INJECTION',
          'AUTONOMOUS_SCHEMA_REMOVAL'
        ]
      };
    });

    // Enrich with GSC metrics if Pages.csv exists
    const pagesCsvPath = path.join(process.cwd(), 'data', 'gsc-export', 'Pages.csv');
    if (fs.existsSync(pagesCsvPath)) {
      const lines = fs.readFileSync(pagesCsvPath, 'utf-8').split(/\r?\n/).slice(1);
      const metricsMap = new Map<string, { clicks: number; imp: number }>();

      for (const line of lines) {
        const parts = line.split(',');
        if (parts.length >= 5) {
          const rawUrl = parts[0].trim().replace(/^https?:\/\/(www\.)?defineperspective\.in/, '');
          const cleanPath = rawUrl.split('?')[0].replace(/\/$/, '') || '/';
          const clicks = parseInt(parts[1], 10) || 0;
          const imp = parseInt(parts[2], 10) || 0;
          metricsMap.set(cleanPath, { clicks, imp });
        }
      }

      for (const asset of protectedAssetsStore) {
        const m = metricsMap.get(asset.url);
        if (m) {
          asset.historicalClicks = m.clicks;
          asset.historicalImpressions = m.imp;
        }
      }
    }

    return [...protectedAssetsStore];
  } catch (error) {
    console.error('[PROTECTED ASSETS] Error initializing registry:', error);
    return [];
  }
}

export function isAssetProtected(targetUrl: string): { isProtected: boolean; asset?: ProtectedAsset; riskLevel: RiskLevel } {
  const assets = getProtectedAssets();
  const clean = targetUrl.replace(/^https?:\/\/(www\.)?defineperspective\.in/, '').replace(/\/$/, '') || '/';
  const found = assets.find(a => a.url === clean || a.canonicalUrl === targetUrl);

  if (!found) {
    return { isProtected: false, riskLevel: 'LOW' };
  }

  let riskLevel: RiskLevel = 'HIGH';
  if (found.protectionTier === 'FLAGSHIP_CORE' || found.url === '/' || found.url.includes('red-chamber')) {
    riskLevel = 'CRITICAL';
  } else if (found.historicalClicks > 5 || found.historicalImpressions > 50) {
    riskLevel = 'CRITICAL';
  }

  return { isProtected: true, asset: found, riskLevel };
}

export function toggleAssetLock(id: string, lockState: boolean, actor: string = 'admin'): { success: boolean; asset?: ProtectedAsset; error?: string } {
  const assets = getProtectedAssets();
  const asset = assets.find(a => a.id === id);
  if (!asset) return { success: false, error: 'Asset not found in protected registry' };

  // Hard Constitution Rule: FLAGSHIP_CORE assets can NEVER be unlocked via automated or standard API calls
  if (asset.protectionTier === 'FLAGSHIP_CORE' && lockState === false) {
    return { 
      success: false, 
      asset: { ...asset },
      error: 'SECURITY VIOLATION: Flagship core assets (Red Chamber, Urban Fashion 02, STILL) are permanently protected and cannot be unlocked.' 
    };
  }

  asset.isLocked = lockState;
  console.log(`[PROTECTED ASSETS] Lock state updated: ${asset.url} -> isLocked=${lockState} by ${actor}`);
  return { success: true, asset: { ...asset } };
}

export function validateAssetMutation(
  targetUrl: string, 
  actionType: string,
  hasHumanApproval: boolean = false
): { allowed: boolean; riskLevel: RiskLevel; reason?: string } {
  const check = isAssetProtected(targetUrl);
  if (!check.isProtected || !check.asset) {
    return { allowed: true, riskLevel: 'LOW' };
  }

  // If asset is protected and locked:
  if (check.asset.isLocked) {
    // Check if action is strictly prohibited
    if (check.asset.prohibitedAutonomousActions.includes(actionType) && !hasHumanApproval) {
      return {
        allowed: false,
        riskLevel: check.riskLevel,
        reason: `PROHIBITED ACTION: ${actionType} on protected asset ${targetUrl} is strictly blocked under the Zero-Regression Constitution. Explicit human authorization required.`
      };
    }
  }

  if (check.riskLevel === 'CRITICAL' && !hasHumanApproval) {
    return {
      allowed: false,
      riskLevel: 'CRITICAL',
      reason: `CRITICAL RISK ASSET: Direct modification of ${targetUrl} requires reviewed change governance proposal and human approval.`
    };
  }

  return { allowed: true, riskLevel: check.riskLevel };
}
