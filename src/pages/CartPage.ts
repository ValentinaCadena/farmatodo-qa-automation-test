import { Page, Locator } from '@playwright/test';

export class CartPage {
    constructor(private page: Page) { }

    private cartItemByName(name: string): Locator {
        return this.page.locator('.cart_item').filter({
            has: this.page.locator('.inventory_item_name', { hasText: name })
        });
    }

    async getCartProductInfo(name: string) {
        await this.page.waitForURL('**/cart.html');

        const item = this.cartItemByName(name);

        const itemName = await item.locator('.inventory_item_name').innerText();
        const itemPrice = await item.locator('.inventory_item_price').innerText();

        return {
            name: itemName.trim(),
            price: itemPrice.trim()
        };
    }
}