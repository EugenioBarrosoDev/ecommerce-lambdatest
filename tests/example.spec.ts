import { test, expect } from '@playwright/test';



test.describe('navigation', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=common/home');
  });

  test.describe('test1',()=> {
    
  })
})