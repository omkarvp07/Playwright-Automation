test('Empty Login Fields', async ({page})=>{
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
await page.locator(input=[name="username"]).fill()
await page.locator(input=[name="password"]).fill()
await page.locator()
});
