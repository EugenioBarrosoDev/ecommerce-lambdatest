import { test, expect } from '@playwright/test';

test('login', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=common/home');
  await page.getByRole('button', { name: ' My account' }).hover();
  await page.getByRole('link', { name: 'Login', exact: true }).click();
  await page.getByPlaceholder('E-Mail Address').click();
  await page.getByPlaceholder('E-Mail Address').fill('eugeasc@gmail.com');
  await page.getByPlaceholder('E-Mail Address').press('Tab');
  await page.getByPlaceholder('Password').fill('1234');
  await page.getByPlaceholder('Password').press('Tab');
  await page.getByRole('link', { name: 'Forgotten Password', exact: true }).press('Tab');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: ' My account' }).hover();
  await page.getByRole('link', { name: 'Logout', exact: true }).click();
  await page.getByRole('link', { name: 'Continue' }).click();
});