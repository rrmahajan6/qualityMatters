const {test, expect, playwright} = require('@playwright/test')

// test.describe.configure({mode:'parellel'});
// test.describe.configure({mode:'serial'});
test('@smoke has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('navigation to website', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/');
  await page.waitForTimeout(3000);
});
