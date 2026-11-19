const { test, expect } = require('@playwright/test');


test('Login with empty credentials', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.locator('.orangehrm-login-button').click();

    const errorMessage = page.locator('.oxd-input-field-error-message');

    await expect(errorMessage).toBeVisible();

    await expect(errorMessage).toHaveText('Required');

});
