import { Page, Locator } from '@playwright/test';
import { PRODUCTS, PRODUCTS_SELECTORS } from '../utils/ProductsConstants';

export class ProductsPage {
  constructor(private page: Page) { }

  private productByName(name: string): Locator {
    return this.page.locator(PRODUCTS_SELECTORS.PRODUCT_ITEM).filter({
      has: this.page.locator(PRODUCTS_SELECTORS.PRODUCT_NAME, { hasText: name })
    });
  }

  async getProductInfo(name: string) {
    const product = this.productByName(name);

    return {
      name: (await product.locator(PRODUCTS_SELECTORS.PRODUCT_NAME).textContent())!.trim(),
      price: (await product.locator(PRODUCTS_SELECTORS.PRODUCT_PRICE).textContent())!.trim()
    };
  }

  async addProductToCart(name: string): Promise<void> {
    await this.productByName(name)
      .locator(PRODUCTS_SELECTORS.ADD_TO_CART_BUTTON)
      .click();
  }

  async addRandomProductAndGetInfo() {
    const productList = Object.values(PRODUCTS);
    const randomIndex = Math.floor(Math.random() * productList.length);
    const productName = productList[randomIndex];

    const product = this.productByName(productName);

    const name = await product.locator(PRODUCTS_SELECTORS.PRODUCT_NAME).innerText();
    const price = await product.locator(PRODUCTS_SELECTORS.PRODUCT_PRICE).innerText();

    await product.locator(PRODUCTS_SELECTORS.ADD_TO_CART_BUTTON).click();

    return {
      name: name.trim(),
      price: price.trim()
    };
  }
}