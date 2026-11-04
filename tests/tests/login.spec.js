
const { test, expect } = require('@playwright/test');

test('Verify login with valid credentials', async ({ page }) => {

    // Open OrangeHRM login page
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Enter username
    await page.locator('input[name="username"]').fill('Admin');

    // Enter password
    await page.locator('input[name="password"]').fill('admin123');

    // Click Login button
    await page.locator('button.orangehrm-login-button').click();

    // Verify Dashboard URL
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

});
