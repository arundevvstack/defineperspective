import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { SearchPerformanceData, SearchPerformanceDailyItem, SearchQueryItem, SearchPageItem } from '@/types/intelligence';

interface RawRow {
  key: string;
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}

function parseCsv(content: string): RawRow[] {
  // Support both actual newlines and literal \n delimiter from GSC collection script
  const lines = content.includes('\n')
    ? content.trim().split(/\r?\n/)
    : content.trim().split('\\n');

  if (lines.length <= 1) return [];

  const rows: RawRow[] = [];
  // Skip header line
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    // Handle quoted fields
    let key = '';
    let rest = '';

    if (line.startsWith('"')) {
      const closingQuote = line.indexOf('",');
      if (closingQuote !== -1) {
        key = line.substring(1, closingQuote).replace(/""/g, '"');
        rest = line.substring(closingQuote + 2);
      } else {
        continue;
      }
    } else {
      const firstComma = line.indexOf(',');
      if (firstComma !== -1) {
        key = line.substring(0, firstComma);
        rest = line.substring(firstComma + 1);
      } else {
        continue;
      }
    }

    const parts = rest.split(',');
    if (parts.length >= 4) {
      const clicks = parseInt(parts[0], 10) || 0;
      const impressions = parseInt(parts[1], 10) || 0;
      const ctr = parseFloat(parts[2]) || 0;
      const position = parseFloat(parts[3]) || 0;

      rows.push({ key, clicks, impressions, ctr, position });
    }
  }

  return rows;
}

export function getSearchPerformanceData(windowDays: number = 28): SearchPerformanceData {
  try {
    const normalizedDir = path.join(process.cwd(), 'data', 'gsc-api', 'normalized');
    const dateCsvPath = path.join(normalizedDir, 'date.csv');
    const queryCsvPath = path.join(normalizedDir, 'query.csv');
    const pageCsvPath = path.join(normalizedDir, 'page.csv');

    if (!fs.existsSync(dateCsvPath)) {
      return {
        summary: {
          totalClicks: {
            value: null,
            unit: 'clicks',
            meta: {
              sourceProvider: 'Google Search Console',
              evidenceClassification: 'CONFIGURED',
              lastRetrievedAt: null,
              status: 'DATA_NOT_CONNECTED',
              confidenceScore: 0,
              notes: 'GSC credentials not connected in production; historical archive missing.',
            },
          },
          totalImpressions: {
            value: null,
            unit: 'impressions',
            meta: {
              sourceProvider: 'Google Search Console',
              evidenceClassification: 'CONFIGURED',
              lastRetrievedAt: null,
              status: 'DATA_NOT_CONNECTED',
              confidenceScore: 0,
            },
          },
          averageCtr: {
            value: null,
            unit: '%',
            meta: {
              sourceProvider: 'Google Search Console',
              evidenceClassification: 'CALCULATED',
              lastRetrievedAt: null,
              status: 'DATA_NOT_CONNECTED',
              confidenceScore: 0,
            },
          },
          averagePosition: {
            value: null,
            unit: 'rank',
            meta: {
              sourceProvider: 'Google Search Console',
              evidenceClassification: 'CALCULATED',
              lastRetrievedAt: null,
              status: 'DATA_NOT_CONNECTED',
              confidenceScore: 0,
              notes: 'Retrospective weighted average search position across all indexed queries.',
            },
          },
        },
        dailyTrend: [],
        topQueries: [],
        topPages: [],
        dataLagNotice: 'Google Search Console data reflects a standard 48-hour processing window.',
        provenance: {
          sourceProvider: 'Google Search Console',
          evidenceClassification: 'CONFIGURED',
          lastRetrievedAt: null,
          status: 'DATA_NOT_CONNECTED',
          confidenceScore: 0,
          notes: 'Live GSC API is NOT CONNECTED. Operator must provision GSC OAuth refresh token.',
        },
      };
    }

    // Read date rows from verified local evidence archive
    const dateContent = fs.readFileSync(dateCsvPath, 'utf-8');
    const dateRows = parseCsv(dateContent);

    // Sort by date ascending
    dateRows.sort((a, b) => a.key.localeCompare(b.key));

    // Slice last windowDays
    const sliceDays = dateRows.slice(-windowDays);

    let sumClicks = 0;
    let sumImpressions = 0;
    let weightedPositionSum = 0;

    const dailyTrend: SearchPerformanceDailyItem[] = sliceDays.map((r) => {
      sumClicks += r.clicks;
      sumImpressions += r.impressions;
      weightedPositionSum += r.position * r.impressions;

      return {
        date: r.key,
        clicks: r.clicks,
        impressions: r.impressions,
        ctr: Number((r.ctr * 100).toFixed(2)),
        avgPosition: Number(r.position.toFixed(1)),
      };
    });

    const averageCtr = sumImpressions > 0 ? Number(((sumClicks / sumImpressions) * 100).toFixed(2)) : 0;
    const averagePosition = sumImpressions > 0 ? Number((weightedPositionSum / sumImpressions).toFixed(1)) : 0;

    // Read top queries
    let topQueries: SearchQueryItem[] = [];
    if (fs.existsSync(queryCsvPath)) {
      const queryContent = fs.readFileSync(queryCsvPath, 'utf-8');
      const queryRows = parseCsv(queryContent);

      const queryMap = new Map<string, { clicks: number; impressions: number; weightedPos: number }>();
      for (const q of queryRows) {
        const existing = queryMap.get(q.key) || { clicks: 0, impressions: 0, weightedPos: 0 };
        existing.clicks += q.clicks;
        existing.impressions += q.impressions;
        existing.weightedPos += q.position * q.impressions;
        queryMap.set(q.key, existing);
      }

      topQueries = Array.from(queryMap.entries())
        .map(([query, d]) => ({
          query,
          clicks: d.clicks,
          impressions: d.impressions,
          ctr: d.impressions > 0 ? Number(((d.clicks / d.impressions) * 100).toFixed(2)) : 0,
          avgPosition: d.impressions > 0 ? Number((d.weightedPos / d.impressions).toFixed(1)) : 0,
        }))
        .sort((a, b) => b.clicks - a.clicks || b.impressions - a.impressions)
        .slice(0, 50);
    }

    // Read top pages
    let topPages: SearchPageItem[] = [];
    if (fs.existsSync(pageCsvPath)) {
      const pageContent = fs.readFileSync(pageCsvPath, 'utf-8');
      const pageRows = parseCsv(pageContent);

      const pageMap = new Map<string, { clicks: number; impressions: number; weightedPos: number }>();
      for (const p of pageRows) {
        const existing = pageMap.get(p.key) || { clicks: 0, impressions: 0, weightedPos: 0 };
        existing.clicks += p.clicks;
        existing.impressions += p.impressions;
        existing.weightedPos += p.position * p.impressions;
        pageMap.set(p.key, existing);
      }

      topPages = Array.from(pageMap.entries())
        .map(([pageUrl, d]) => ({
          pageUrl,
          clicks: d.clicks,
          impressions: d.impressions,
          ctr: d.impressions > 0 ? Number(((d.clicks / d.impressions) * 100).toFixed(2)) : 0,
          avgPosition: d.impressions > 0 ? Number((d.weightedPos / d.impressions).toFixed(1)) : 0,
        }))
        .sort((a, b) => b.clicks - a.clicks || b.impressions - a.impressions)
        .slice(0, 25);
    }

    const latestDate = sliceDays.length > 0 ? sliceDays[sliceDays.length - 1].key : null;

    // Explicitly classify local CSV as historical evidence archive, NOT active live connection
    return {
      summary: {
        totalClicks: {
          value: sumClicks,
          unit: 'clicks',
          meta: {
            sourceProvider: 'Google Search Console (Historical Evidence Archive)',
            evidenceClassification: 'SOURCE-VERIFIED',
            lastRetrievedAt: latestDate,
            status: 'OPERATIONAL',
            confidenceScore: 1.0,
            notes: 'Extracted from verified sc-domain:defineperspective.in evidence archive. Live API connection pending.',
          },
        },
        totalImpressions: {
          value: sumImpressions,
          unit: 'impressions',
          meta: {
            sourceProvider: 'Google Search Console (Historical Evidence Archive)',
            evidenceClassification: 'SOURCE-VERIFIED',
            lastRetrievedAt: latestDate,
            status: 'OPERATIONAL',
            confidenceScore: 1.0,
          },
        },
        averageCtr: {
          value: averageCtr,
          unit: '%',
          meta: {
            sourceProvider: 'Google Search Console (Historical Evidence Archive)',
            evidenceClassification: 'CALCULATED',
            lastRetrievedAt: latestDate,
            status: 'OPERATIONAL',
            confidenceScore: 1.0,
          },
        },
        averagePosition: {
          value: averagePosition,
          unit: 'rank',
          meta: {
            sourceProvider: 'Google Search Console (Historical Evidence Archive)',
            evidenceClassification: 'CALCULATED',
            lastRetrievedAt: latestDate,
            status: 'OPERATIONAL',
            confidenceScore: 1.0,
            notes: 'Retrospective weighted average search position across all indexed queries. NOT live keyword rank.',
          },
        },
      },
      dailyTrend,
      topQueries,
      topPages,
      dataLagNotice: 'Google Search Console data reflects a standard 48-hour processing window.',
      provenance: {
        sourceProvider: 'Google Search Console (Historical Evidence Archive)',
        evidenceClassification: 'SOURCE-VERIFIED',
        lastRetrievedAt: latestDate,
        status: 'OPERATIONAL',
        confidenceScore: 1.0,
        notes: 'Data sourced from verified local GSC evidence archive. Live API connection is NOT CONNECTED in cloud environment.',
      },
    };
  } catch (error) {
    console.error('[GSC CONNECTOR] Error reading Search Console data:', error);
    return {
      summary: {
        totalClicks: {
          value: null,
          unit: 'clicks',
          meta: {
            sourceProvider: 'Google Search Console',
            evidenceClassification: 'NOT VERIFIED',
            lastRetrievedAt: null,
            status: 'LAST_SYNC_FAILED',
            confidenceScore: 0,
          },
        },
        totalImpressions: {
          value: null,
          unit: 'impressions',
          meta: {
            sourceProvider: 'Google Search Console',
            evidenceClassification: 'NOT VERIFIED',
            lastRetrievedAt: null,
            status: 'LAST_SYNC_FAILED',
            confidenceScore: 0,
          },
        },
        averageCtr: {
          value: null,
          unit: '%',
          meta: {
            sourceProvider: 'Google Search Console',
            evidenceClassification: 'CALCULATED',
            lastRetrievedAt: null,
            status: 'LAST_SYNC_FAILED',
            confidenceScore: 0,
          },
        },
        averagePosition: {
          value: null,
          unit: 'rank',
          meta: {
            sourceProvider: 'Google Search Console',
            evidenceClassification: 'CALCULATED',
            lastRetrievedAt: null,
            status: 'LAST_SYNC_FAILED',
            confidenceScore: 0,
          },
        },
      },
      dailyTrend: [],
      topQueries: [],
      topPages: [],
      dataLagNotice: 'Google Search Console data reflects a standard 48-hour processing window.',
      provenance: {
        sourceProvider: 'Google Search Console',
        evidenceClassification: 'NOT VERIFIED',
        lastRetrievedAt: null,
        status: 'LAST_SYNC_FAILED',
        confidenceScore: 0,
      },
    };
  }
}

export interface GscLiveCredentials {
  clientEmail?: string;
  privateKey?: string;
  siteUrl?: string;
}

export interface GscLiveFetchResult {
  success: boolean;
  status: 'OPERATIONAL' | 'DATA_NOT_CONNECTED' | 'LAST_SYNC_FAILED';
  data: SearchPerformanceData | null;
  error?: string;
  requiredCredentials?: string[];
}

export function normalizePrivateKey(key?: string): string {
  if (!key) return '';
  return key.replace(/\\n/g, '\n').trim();
}

function base64UrlEncode(strOrBuffer: string | Buffer): string {
  const buf = typeof strOrBuffer === 'string' ? Buffer.from(strOrBuffer, 'utf8') : strOrBuffer;
  return buf.toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

export function createServiceAccountJwt(
  clientEmail: string,
  privateKey: string,
  scope: string = 'https://www.googleapis.com/auth/webmasters.readonly',
  aud: string = 'https://oauth2.googleapis.com/token'
): string {
  if (!clientEmail) {
    throw new Error('clientEmail is required for service account JWT creation');
  }
  if (!privateKey) {
    throw new Error('privateKey is required for service account JWT creation');
  }

  const now = Math.floor(Date.now() / 1000);
  const header = {
    alg: 'RS256',
    typ: 'JWT',
  };

  const claimSet = {
    iss: clientEmail,
    scope: scope,
    aud: aud,
    exp: now + 3600,
    iat: now,
  };

  const encodedHeader = base64UrlEncode(JSON.stringify(header));
  const encodedClaimSet = base64UrlEncode(JSON.stringify(claimSet));
  const signInput = `${encodedHeader}.${encodedClaimSet}`;

  const formattedKey = normalizePrivateKey(privateKey);
  const signer = crypto.createSign('RSA-SHA256');
  signer.update(signInput);
  signer.end();

  const signature = signer.sign(formattedKey);
  const encodedSignature = base64UrlEncode(signature);

  return `${signInput}.${encodedSignature}`;
}

interface CachedToken {
  accessToken: string;
  expiresAt: number;
}
let cachedGscToken: CachedToken | null = null;

export async function getGoogleAccessToken(
  clientEmail: string,
  privateKey: string,
  timeoutMs: number = 10000
): Promise<{ accessToken: string; error?: string }> {
  const now = Math.floor(Date.now() / 1000);
  if (cachedGscToken && cachedGscToken.expiresAt > now + 300) {
    return { accessToken: cachedGscToken.accessToken };
  }

  let jwtAssertion: string;
  try {
    jwtAssertion = createServiceAccountJwt(clientEmail, privateKey);
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return { accessToken: '', error: `JWT signing failed: ${msg}` };
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const params = new URLSearchParams();
    params.append('grant_type', 'urn:ietf:params:oauth:grant-type:jwt-bearer');
    params.append('assertion', jwtAssertion);

    const response = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
      signal: controller.signal,
    });

    clearTimeout(timer);

    if (!response.ok) {
      const errText = await response.text();
      let parsedError = `HTTP ${response.status}`;
      try {
        const json = JSON.parse(errText);
        parsedError = json.error_description || json.error || parsedError;
      } catch {
        parsedError = errText.slice(0, 150);
      }
      return { accessToken: '', error: `Google OAuth error: ${parsedError}` };
    }

    const tokenData = await response.json();
    if (!tokenData.access_token) {
      return { accessToken: '', error: 'OAuth response missing access_token' };
    }

    const expiresIn = Number(tokenData.expires_in) || 3600;
    cachedGscToken = {
      accessToken: tokenData.access_token,
      expiresAt: now + expiresIn,
    };

    return { accessToken: tokenData.access_token };
  } catch (err: unknown) {
    clearTimeout(timer);
    const msg = err instanceof Error ? err.message : String(err);
    return { accessToken: '', error: `OAuth token exchange failed: ${msg}` };
  }
}

interface SearchAnalyticsRow {
  keys?: string[];
  clicks?: number;
  impressions?: number;
  ctr?: number;
  position?: number;
}

async function querySearchAnalytics(
  siteUrl: string,
  accessToken: string,
  body: Record<string, unknown>,
  timeoutMs: number = 10000
): Promise<{ ok: boolean; error?: string; rows: SearchAnalyticsRow[] }> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  const endpoint = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`;
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
    clearTimeout(timer);
    if (!res.ok) {
      const errText = await res.text();
      let errMsg = `HTTP ${res.status}`;
      try {
        const j = JSON.parse(errText);
        errMsg = j.error?.message || errMsg;
      } catch {
        errMsg = errText.slice(0, 150);
      }
      return { ok: false, error: errMsg, rows: [] };
    }
    const data = await res.json();
    return { ok: true, rows: data.rows || [] };
  } catch (err: unknown) {
    clearTimeout(timer);
    const msg = err instanceof Error ? err.message : String(err);
    return { ok: false, error: msg, rows: [] };
  }
}

export function isGscLiveConfigured(): boolean {
  return Boolean(process.env.GSC_CLIENT_EMAIL && process.env.GSC_PRIVATE_KEY);
}

export async function fetchLiveGscPerformance(
  credentials?: GscLiveCredentials,
  windowDays: number = 28
): Promise<GscLiveFetchResult> {
  const clientEmail = credentials?.clientEmail || process.env.GSC_CLIENT_EMAIL;
  const privateKey = credentials?.privateKey || process.env.GSC_PRIVATE_KEY;
  const siteUrl = credentials?.siteUrl || process.env.GSC_SITE_URL || 'https://defineperspective.in';

  if (!clientEmail || !privateKey) {
    return {
      success: false,
      status: 'DATA_NOT_CONNECTED',
      data: null,
      error: 'Google Search Console Live API credentials not configured in environment.',
      requiredCredentials: ['GSC_CLIENT_EMAIL', 'GSC_PRIVATE_KEY', 'GSC_SITE_URL'],
    };
  }

  // 1. Authenticate with Google
  const authResult = await getGoogleAccessToken(clientEmail, privateKey);
  if (!authResult.accessToken) {
    return {
      success: false,
      status: 'LAST_SYNC_FAILED',
      data: null,
      error: authResult.error || 'Failed to authenticate Google Service Account.',
      requiredCredentials: ['GSC_CLIENT_EMAIL', 'GSC_PRIVATE_KEY', 'GSC_SITE_URL'],
    };
  }

  // 2. Compute date window
  const end = new Date();
  end.setDate(end.getDate() - 3); // GSC standard 72h data lag
  const start = new Date(end);
  start.setDate(start.getDate() - windowDays);

  const startDate = start.toISOString().split('T')[0];
  const endDate = end.toISOString().split('T')[0];

  // 3. Query Search Analytics in parallel: daily trend, top queries, top pages
  try {
    const [dateRes, queryRes, pageRes] = await Promise.all([
      querySearchAnalytics(siteUrl, authResult.accessToken, {
        startDate,
        endDate,
        dimensions: ['date'],
        rowLimit: 50,
      }),
      querySearchAnalytics(siteUrl, authResult.accessToken, {
        startDate,
        endDate,
        dimensions: ['query'],
        rowLimit: 50,
      }),
      querySearchAnalytics(siteUrl, authResult.accessToken, {
        startDate,
        endDate,
        dimensions: ['page'],
        rowLimit: 25,
      }),
    ]);

    if (!dateRes.ok) {
      return {
        success: false,
        status: 'LAST_SYNC_FAILED',
        data: null,
        error: `Search Console API error (date breakdown): ${dateRes.error}`,
      };
    }

    let sumClicks = 0;
    let sumImpressions = 0;
    let weightedPosSum = 0;

    const dailyTrend: SearchPerformanceDailyItem[] = (dateRes.rows || []).map((r) => {
      const clicks = Number(r.clicks) || 0;
      const impressions = Number(r.impressions) || 0;
      const ctr = Number(((r.ctr || 0) * 100).toFixed(2));
      const avgPosition = Number((r.position || 0).toFixed(1));

      sumClicks += clicks;
      sumImpressions += impressions;
      weightedPosSum += avgPosition * impressions;

      return {
        date: r.keys?.[0] || '',
        clicks,
        impressions,
        ctr,
        avgPosition,
      };
    });

    dailyTrend.sort((a, b) => a.date.localeCompare(b.date));

    const averageCtr = sumImpressions > 0 ? Number(((sumClicks / sumImpressions) * 100).toFixed(2)) : 0;
    const averagePosition = sumImpressions > 0 ? Number((weightedPosSum / sumImpressions).toFixed(1)) : 0;

    const topQueries: SearchQueryItem[] = (queryRes.rows || []).map((r) => ({
      query: r.keys?.[0] || '',
      clicks: Number(r.clicks) || 0,
      impressions: Number(r.impressions) || 0,
      ctr: Number(((r.ctr || 0) * 100).toFixed(2)),
      avgPosition: Number((r.position || 0).toFixed(1)),
    }));

    const topPages: SearchPageItem[] = (pageRes.rows || []).map((r) => ({
      pageUrl: r.keys?.[0] || '',
      clicks: Number(r.clicks) || 0,
      impressions: Number(r.impressions) || 0,
      ctr: Number(((r.ctr || 0) * 100).toFixed(2)),
      avgPosition: Number((r.position || 0).toFixed(1)),
    }));

    const retrievedAt = new Date().toISOString();

    const data: SearchPerformanceData = {
      summary: {
        totalClicks: {
          value: sumClicks,
          unit: 'clicks',
          meta: {
            sourceProvider: 'Google Search Console (Live API)',
            evidenceClassification: 'LIVE-VERIFIED',
            lastRetrievedAt: retrievedAt,
            status: 'OPERATIONAL',
            confidenceScore: 1.0,
            notes: `Live Search Analytics queried for ${siteUrl} (${startDate} to ${endDate}).`,
          },
        },
        totalImpressions: {
          value: sumImpressions,
          unit: 'impressions',
          meta: {
            sourceProvider: 'Google Search Console (Live API)',
            evidenceClassification: 'LIVE-VERIFIED',
            lastRetrievedAt: retrievedAt,
            status: 'OPERATIONAL',
            confidenceScore: 1.0,
          },
        },
        averageCtr: {
          value: averageCtr,
          unit: '%',
          meta: {
            sourceProvider: 'Google Search Console (Live API)',
            evidenceClassification: 'CALCULATED',
            lastRetrievedAt: retrievedAt,
            status: 'OPERATIONAL',
            confidenceScore: 1.0,
          },
        },
        averagePosition: {
          value: averagePosition,
          unit: 'rank',
          meta: {
            sourceProvider: 'Google Search Console (Live API)',
            evidenceClassification: 'CALCULATED',
            lastRetrievedAt: retrievedAt,
            status: 'OPERATIONAL',
            confidenceScore: 1.0,
            notes: 'Weighted average position across all active queries.',
          },
        },
      },
      dailyTrend,
      topQueries,
      topPages,
      dataLagNotice: 'Google Search Console data reflects a standard 48-72 hour processing window.',
      provenance: {
        sourceProvider: 'Google Search Console (Live API)',
        evidenceClassification: 'LIVE-VERIFIED',
        lastRetrievedAt: retrievedAt,
        status: 'OPERATIONAL',
        confidenceScore: 1.0,
        notes: `Live Search Console performance retrieved for property: ${siteUrl}. Window: ${startDate} to ${endDate}.`,
      },
    };

    return {
      success: true,
      status: 'OPERATIONAL',
      data,
    };
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return {
      success: false,
      status: 'LAST_SYNC_FAILED',
      data: null,
      error: `Live Search Console API execution failed: ${msg}`,
    };
  }
}

