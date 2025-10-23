// checkout.test.js
// Tests for verifying checkout flow

const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductPage } = require('../pages/ProductPage');
const { CheckoutPage } = require('../pages/CheckoutPage');

test.describe('💳 Checkout Flow Tests', () => {
  test('Complete checkout process', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page);
    const checkoutPage = new CheckoutPage(page);

    // Step 1: Login
    await page.goto('https://www.saucedemo.com/');
    await loginPage.login('standard_user', 'secret_sauce');

    // Step 2: Add item to cart
    await productPage.addFirstProductToCart();
    await productPage.goToCart();

    // Step 3: Start checkout
    await checkoutPage.startCheckout();

    // Step 4: Fill details and continue
    await checkoutPage.fillCheckoutDetails('Saleh', 'Muhammad', '46000');

    // Step 5: Finish order
    await checkoutPage.completeOrder();

    // Step 6: Verify success message
    await checkoutPage.verifyOrderSuccess();
  });
});
