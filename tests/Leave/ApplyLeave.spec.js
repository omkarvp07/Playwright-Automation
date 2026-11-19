
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.locator('input[name="username"]').fill('Admin');
    await page.locator('input[name="password"]').fill('admin123');
    await page.locator('.orangehrm-login-button').click();

});

test('Apply Leave', async ({ page }) => {

    // Click Leave
    await page.getByText('Leave', { exact: true }).click();

    // Click Apply
    await page.getByText('Apply', { exact: true }).click();

    // Select Leave Type
    await page.locator('.oxd-select-text').first().click();
    await page.getByText('CAN - Bereavement', { exact: true }).click();

    // Enter From Date
    await page.getByPlaceholder('yyyy-dd-mm').first().fill('2026-30-11');

    // Enter To Date
    await page.getByPlaceholder('yyyy-dd-mm').nth(1).fill('2026-30-11');

    // Enter Comments
    await page.locator('textarea').fill('Sick Leave');

    // Click Apply button
    await page.getByRole('button', { name: 'Apply' }).click();

    // Verify success message
    await expect(page.getByText('Successfully Saved')).toBeVisible();

});
