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
  readonly _invalidLoginMsg: Locator;
  readonly _invalidTxt: string;

  constructor(page: Page) {
    this._page = page;
    this._logoText = "Twittah!";
    this._usernameInput = page.getByTestId("login-field");
    this._passwordInput = page.getByTestId("password-field");
    this._loginButton = page.getByTestId('login-button');
    this._logoutButton = page.getByTestId('menu-signout');
    this._logo = page.getByTestId('app-name');
    this._invalidLoginMsg = page.getByTestId("error-message");
    this._invalidTxt = "ล็อกอินหรือรหัสผ่านไม่ถูกต้อง";
  }

  async getTwittah(){
    await this._page.goto(app.baseUrl)
  }
  async login(username,password){
    await this._usernameInput.fill(username);
    await this._passwordInput.fill(password);
    await this._loginButton.click();
  }
  async logout(){
    await this._logoutButton.click();
  }
  async shouldBeDisplay(){
    await expect(this._logo).toHaveText(this._logoText);
  }

  async shouldBeDisplayInvalidLogin() {
    await expect(this._invalidLoginMsg).toHaveText(this._invalidTxt)
  }
}
