import { Page } from '@playwright/test';

export class CheckoutPage {
    constructor(private page: Page) { }

    async completeCheckout() {
        await this.page.click('#checkout');
        await this.page.fill('#first-name', 'Test');
        await this.page.fill('#last-name', 'User');
        await this.page.fill('#postal-code', '12345');
        await this.page.click('#continue');
        await this.page.click('#finish');
    }

    async getConfirmationMessage(): Promise<string> {
        return (await this.page.locator('.complete-header').innerText()).trim();
    }
}