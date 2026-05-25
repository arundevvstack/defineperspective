import { test, expect } from '@playwright/test';

test.describe('Enterprise Conversion Architecture', () => {
  test('homepage renders and navigation is stable', async ({ page }) => {
    await page.goto('/');
    
    // Validate Hero Cinematic Rendering
    const heroHeadline = page.locator('h1.sr-only');
    await expect(heroHeadline).toBeAttached();
    
    // Validate CTA existence (Phase 6)
    const primaryCta = page.getByRole('link', { name: /request consultation/i });
    await expect(primaryCta).toBeVisible();
  });

  test('cinematic showcase interaction', async ({ page }) => {
    await page.goto('/');
    const showcaseButton = page.getByRole('button', { name: /view cinematic showcase/i });
    await expect(showcaseButton).toBeVisible();
    
    // Interaction test without actually loading YouTube payload to avoid flakiness
    await showcaseButton.click();
    const lightbox = page.locator('div[role="dialog"]');
    await expect(lightbox).toBeVisible();
  });

  test('case study navigation and routing', async ({ page }) => {
    await page.goto('/case-studies');
    const firstCaseStudy = page.locator('a[href^="/case-studies/"]').first();
    await expect(firstCaseStudy).toBeVisible();
    
    await firstCaseStudy.click();
    // Validate that the case study loaded and the Phase 6 CTA is present
    await expect(page.getByRole('link', { name: /request consultation/i })).toBeVisible();
  });
});
