import { Page } from '@playwright/test';
import { getRandomUser, LOGIN_USERS } from '../utils/LoginConstants';

export class LoginPage {
  constructor(private page: Page) { }

  async loginWithRandomUser(): Promise<string> {
    
    const validUsers = LOGIN_USERS.filter(user => user.USERNAME !== 'locked_out_user');
    const randomIndex = Math.floor(Math.random() * validUsers.length);
    const user = validUsers[randomIndex];

    await this.page.locator('//input[@id="user-name"]').fill(user.USERNAME);
    await this.page.locator('//input[@id="password"]').fill(user.PASSWORD);
    await this.page.click('//input[@id="login-button"]');

    await this.page.waitForURL('**/inventory.html', { timeout: 10000 });

    return user.USERNAME;
  }

  async dashboard() {
    const tab = this.page.locator('//span[@class="title"]');
    await tab.waitFor({ state: 'visible', timeout: 30000 });
    return await tab.textContent();
  }
}