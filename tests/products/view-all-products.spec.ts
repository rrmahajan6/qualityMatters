// spec: tests/test-plan-automation-exercise.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Product Browsing and Management', () => {
  test('View All Products', async ({ page }) => {
    // Navigate to https://automationexercise.com/
    await page.goto('https://automationexercise.com/');

    // Click on the 'Products' link in the navigation menu
    await page.getByRole('link', { name: ' Products' }).click();

    // Verify the All Products heading is visible
    await expect(page.getByRole('heading', { name: 'All Products' })).toBeVisible();

    // Verify product grid is displayed with multiple product cards
    const productImage = page.locator('img[alt="ecommerce website products"]').first();
    await expect(productImage).toBeVisible();

    // Verify product name is visible in the all products section (use nth to avoid strict mode issue)
    const productName = page.getByText('Blue Top').nth(1);
    await expect(productName).toBeVisible();

    // Verify product price is visible (use nth to avoid strict mode issue)
    const productPrice = page.getByText('Rs. 500').nth(1);
    await expect(productPrice).toBeVisible();

    // Verify View Product links are visible
    const viewProductLinks = page.getByRole('link', { name: ' View Product' });
    await expect(viewProductLinks.first()).toBeVisible();
  });
});
