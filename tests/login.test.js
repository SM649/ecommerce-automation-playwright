// tests/loginDataDriven.test.js
import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";
import users from "../test-data/users.json" assert { type: "json" };

test.describe("Login Tests - Data Driven", () => {
  test("Login with valid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto('/');
    await loginPage.login(users.validUser.username, users.validUser.password);

    const titleText = await loginPage.verifyLoginSuccess();
    expect(titleText).toBe("Products"); // Assert successful login
  });

  test("Login with invalid credentials", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(users.invalidUser.username, users.invalidUser.password);

    const errorText = await loginPage.verifyLoginFailure();
    expect(errorText).toContain("Username and password do not match");
  });
});
