// ProductPage.js
// This class handles actions on the product listing page.

exports.ProductPage = class ProductPage {
  constructor(page) {
    this.page = page;
    this.inventoryItems = '.inventory_item';
    this.addToCartButtons = '.btn_inventory';
    this.cartIcon = '.shopping_cart_link';
  }

  // Navigate to product page after login
  async goto() {
    await this.page.goto('**/inventory.html');
  }

  // Add the first available product to cart
  async addFirstProductToCart() {
    await this.page.locator(this.addToCartButtons).first().click();
  }

  // Go to cart page
  async goToCart() {
    await this.page.locator(this.cartIcon).click();
  }

  // Verify product list is visible
  async verifyProductsVisible() {
    await this.page.waitForSelector(this.inventoryItems);
    const count = await this.page.locator(this.inventoryItems).count();
    return count;
  }
};
