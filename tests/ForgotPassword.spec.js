const{test, expect} = 
require('@playwright/test')

test('Verify Forgot Password' , async({page}) =>{
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.locator('.orangehrm-login-forgot').click();
  await page.getByPlaceholder('Username').fill('Admin');
  await page.locator('.orangehrm-forgot-password-button').click();
  await expect(page.getByText('Reset Password link sent successfully')).toBeVisible();
})
