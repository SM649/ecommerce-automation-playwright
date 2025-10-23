// pages/LoginPage.js

export class LoginPage {
  constructor(page) {
    this.page = page;
    // Define page elements (locators)
    this.usernameInput = "#user-name";
    this.passwordInput = "#password";
    this.loginButton = "#login-button";
    this.errorMessage = "[data-test='error']";
    this.title = ".title";
  }

  // Navigate to login page
  async goto() {
    await this.page.goto("/");
  }

  // Perform login action
  async login(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }

  // Verify login success
  async verifyLoginSuccess() {
    await this.page.waitForSelector(this.title);
    return await this.page.locator(this.title).textContent();
  }

  // Verify login failure
  async verifyLoginFailure() {
    return await this.page.locator(this.errorMessage).textContent();
  }
}
