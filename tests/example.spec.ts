import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
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

test('environment variable test', async ({ page }) => {
  expect.soft(process.env.ENV_URL, 'env url is ok').toBe('https://playwright.dev/');
  expect.soft(process.env.USERID, 'userid is ok').toBe('dev.userid');
  expect.soft(process.env.PASSWORD, 'password is ok').toBe('dev.password');
})