import { test, expect } from "@playwright/test";
import { LoginPage } from "../pom/login.page";
import { HomePage } from "../pom/home.page";
import { validUser, invalidUsers } from "../fixtures/User";
// test("get twittah", async ({ page }) => {
//   await page.goto("https://twittah.web.app");
//   await expect(page.getByTestId("app-name")).toBeVisible();
//   await expect(page.getByTestId("app-name")).toHaveText("Twittah!");
// });
test("get login", async ({ page }) => {
  await page.goto("https://twittah.web.app");
  await page.getByTestId("login-field").click();
  await page.getByTestId("login-field").fill("josave");
  await page.getByTestId("password-field").click();
  await page.getByTestId("password-field").fill("123456");
  await page.getByTestId("login-button").click({
    timeout: 100,
  });
  await expect(page.getByTestId("menu-signout")).toBeVisible();
  await page.getByTestId("menu-signout").click();
  await expect(page.getByTestId("app-name")).toHaveText("Twittah!");
});

test.describe("Login", async () => {
  let loginPage;
  let homePage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);

    await loginPage.getTwittah();
  });

  test("login with POM", async () => {
    await loginPage.login(validUser.username, validUser.password);
    await loginPage.logout();
    await loginPage.shouldBeDisplay();
  });

  test("should able to tweet", async () => {
    await loginPage.login(validUser.username, validUser.password);
    await homePage.postMessage();
  });

  for (let invalidUser of invalidUsers) {
    test(`invalid user should not able to login ${invalidUser.displayname}`, async () => {
      await loginPage.login(invalidUser.username, invalidUser.password);
      await loginPage.shouldBeDisplayInvalidLogin();
    });
  }
});
