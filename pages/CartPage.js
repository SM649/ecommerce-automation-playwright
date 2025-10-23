// pages/CartPage.js

export class CartPage {
  constructor(page) {
    this.page = page;
    this.addToCartButton = "#add-to-cart-sauce-labs-backpack";
    this.cartIcon = ".shopping_cart_link";
    this.cartItem = ".cart_item";
    this.checkoutButton = "#checkout";
    this.pageTitle = ".title";
  }

  async addItemToCart() {
    await this.page.click(this.addToCartButton);
  }

  async goToCart() {
    await this.page.click(this.cartIcon);
  }

  async getCartItemCount() {
    return await this.page.locator(this.cartItem).count();
  }

  async proceedToCheckout() {
    await this.page.click(this.checkoutButton);
  }
}
