// import { test, expect } from "@playwright/test";

// test("Twitter Login", async ({ page }) => {
//   await page.goto("https://twitter.com/");
//   await page
//     .locator(
//       '//*[@id="react-root"]/div/div/div[2]/main/div/div/div[1]/div[1]/div/div[3]/div[5]/a'
//     )
//     .click();
//   const userInput: string =
//     '//*[@id="layers"]/div[2]/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div/div/div/div[5]/label/div/div[2]/div/input';
//   await page.locator(userInput).fill("robotoodds91397");
//   await page
//     .locator(
//       '//*[@id="layers"]/div[2]/div/div/div/div/div/div[2]/div[2]/div/div/div[2]/div[2]/div/div/div/div[6]-field'
//     )
//     .click();
//   const passwordInput: string = "";
//   await page.locator("password-field").fill("A123456!");
//   await page.getByTestId("login-button").click({
//     timeout: 100,
//   });
//   await page.getByTestId("password-field").fill("Hello Robot Framework");
//   await page.locator(
//     '//*[@id="react-root"]/div/div/div[2]/main/div/div/div[1]/div[1]/div/div[3]/div[5]/a'
//   );
//   await expect(page.getByTestId("menu-signout")).toBeVisible();
//   await page.getByTestId("menu-signout").click();
//   await expect(page.getByTestId("app-name")).toHaveText("Twittah!");
// });
