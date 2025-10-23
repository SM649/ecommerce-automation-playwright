// tests/cartFlow.test.js
import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";
import { CartPage } from "../pages/CartPage.js";
import users from "../test-data/users.json" assert { type: "json" };

test.describe("E-commerce Cart Flow", () => {
  let loginPage;
  let cartPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    cartPage = new CartPage(page);

    // Go to site and login before each test
    await loginPage.goto();
    await loginPage.login(users.validUser.username, users.validUser.password);
    await expect(page.locator(".title")).toHaveText("Products");
  });

  test("Add an item to the cart and verify it appears", async ({ page }) => {
    await cartPage.addItemToCart();
    await cartPage.goToCart();

    const itemCount = await cartPage.getCartItemCount();
    expect(itemCount).toBe(1);

    // Take screenshot after success
    await page.screenshot({ path: "test-results/cart-success.png" });
  });

  test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status !== testInfo.expectedStatus) {
      await page.screenshot({
        path: `test-results/${testInfo.title.replace(/\s+/g, "_")}-failed.png`,
      });
    }
  });
});
