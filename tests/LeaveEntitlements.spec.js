const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.locator('input[name="username"]').fill('Admin');
    await page.locator('input[name="password"]').fill('admin123');
    await page.locator('.orangehrm-login-button').click();
});

test('Add Leave Entitlement', async ({ page }) => {

    // Enter employee name
    await page.getByPlaceholder('Type for hints...').fill('James John Bond');

    // Select employee from suggestions
    await page.getByText('James John Bond', { exact: true }).click();

    // Select Leave Type
    await page.locator('.oxd-select-text').click();
    await page.locator('.oxd-select-option').nth(3).click();

    // Enter entitlement amount
    await page.locator('.oxd-input').last().fill('22');

    // Click Apply
    await page.getByRole('button', { name: 'Apply' }).click();

    // Click Confirm on popup
    await page.getByRole('button', { name: 'Confirm' }).click();

});
