import { test, expect } from '@playwright/test';
test('get twittah', async ({ page }) => {
    await page.goto('https://twittah.web.app');
    await expect(page.getByTestId('app-name')).toBeVisible();
    await expect(page.getByTestId('app-name')).toHaveText('Twittah!');
  });
test('get login',async ({page})=>{
    await page.goto('https://twittah.web.app')
    await page.getByTestId('login-field').click();
    await page.getByTestId('login-field').fill('josave')
    await page.getByTestId('password-field').click();
    await page.getByTestId('password-field').fill('123456');
    await page.getByTestId('login-button').click({
        timeout: 100,
    });
    await expect(page.getByTestId('menu-signout')).toBeVisible();
    await page.getByTestId('menu-signout').click();
    await expect(page.getByTestId('app-name')).toHaveText('Twittah!');
});
