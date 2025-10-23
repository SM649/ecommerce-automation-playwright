// CheckoutPage.js
// This class manages actions on the checkout flow.
const { expect } = require('@playwright/test');

exports.CheckoutPage = class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.checkoutButton = '#checkout';
    this.firstNameInput = '#first-name';
    this.lastNameInput = '#last-name';
    this.postalCodeInput = '#postal-code';
    this.continueButton = '#continue';
    this.finishButton = '#finish';
    this.successMessage = '.complete-header';
  }

  async startCheckout() {
    await this.page.locator(this.checkoutButton).click();
  }

  async fillCheckoutDetails(firstName, lastName, postalCode) {
    await this.page.fill(this.firstNameInput, firstName);
    await this.page.fill(this.lastNameInput, lastName);
    await this.page.fill(this.postalCodeInput, postalCode);
    await this.page.locator(this.continueButton).click();
  }

  async completeOrder() {
    await this.page.locator(this.finishButton).click();
  }

  async verifyOrderSuccess() {
    await expect(this.page.locator(this.successMessage)).toHaveText('Thank you for your order!');
  }
};
