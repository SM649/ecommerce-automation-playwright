// product.test.js
// Tests for verifying product page and add-to-cart actions

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductPage } = require('../pages/ProductPage');

test.describe('🛍️ Product Page Tests', () => {
  test('View and add product to cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page);

    // Step 1: Login
    await page.goto('https://www.saucedemo.com/');
    await loginPage.login('standard_user', 'secret_sauce');

    // Step 2: Verify product list
    const productCount = await productPage.verifyProductsVisible();
    expect(productCount).toBeGreaterThan(0);

    // Step 3: Add product to cart
    await productPage.addFirstProductToCart();

    // Step 4: Go to cart
    await productPage.goToCart();

    // Step 5: Verify the product is in the cart
    await expect(page.locator('.cart_item')).toHaveCount(1);
  });
});
