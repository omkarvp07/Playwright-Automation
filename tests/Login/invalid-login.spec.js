
const { test, expect } = require('@playwright/test');

test('Verify login with invalid credentials', async ({ page }) => {

    // Open OrangeHRM login page
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Enter invalid username
    await page.locator('input[name="username"]').fill('InvalidUser');

    // Enter invalid password
    await page.locator('input[name="password"]').fill('WrongPassword123');

    // Click Login button
    await page.locator('button.orangehrm-login-button').click();

    // Verify error alert message
    await expect(page.locator('.oxd-alert-content-text')).toHaveText('Invalid credentials');

});
