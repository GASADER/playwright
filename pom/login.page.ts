import { Locator, Page, expect } from "@playwright/test";
import { validUser } from "../fixtures/User";
import { app} from '../fixtures/App'

export class LoginPage {
  readonly _page: Page;
  readonly _usernameInput: Locator;
  readonly _passwordInput: Locator;
  readonly _loginButton: Locator;
  readonly _logoutButton: Locator;
  readonly _logo: Locator;
  readonly _logoText: string;

  constructor(page: Page) {
    this._page = page;
    this._logoText = "Twittah!";
    this._usernameInput = page.getByTestId("login-field");
    this._passwordInput = page.getByTestId("password-field");
    this._loginButton = page.getByTestId('login-button');
    this._logoutButton = page.getByTestId('menu-signout');
    this._logo = page.getByTestId('app-name');
  }

  async getTwittah(){
    await this._page.goto(app.baseUrl)
  }
  async login(){
    await this._usernameInput.fill(validUser.username);
    await this._passwordInput.fill(validUser.password);
    await this._loginButton.click();
  }
  async logout(){
    await this._logoutButton.click();
  }
  async shouldBeDisplay(){
    await expect(this._logo).toHaveText(this._logoText);
  }
}
