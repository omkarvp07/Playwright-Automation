const { test, expect } = require('@playwright/test');

test('Verify OrangeHRM login page', async ({ page }) => {

    // Open OrangeHRM login page
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Verify page title
    await expect(page).toHaveTitle('OrangeHRM');

    // Verify username field
    await expect(page.locator('input[name="username"]')).toBeVisible();

    // Verify password field
    await expect(page.locator('input[name="password"]')).toBeVisible();

    // Verify Login button
    await expect(page.locator('button.orangehrm-login-button')).toBeVisible();

});
