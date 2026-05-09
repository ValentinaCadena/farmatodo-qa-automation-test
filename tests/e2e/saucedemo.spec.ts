import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';
import { ProductsPage } from '../../src/pages/ProductsPage';
import { CartPage } from '../../src/pages/CartPage';
import { CheckoutPage } from '../../src/pages/CheckoutPage';

test.describe('E2E SauceDemo - Producto aleatorio', () => {
  test('Agregar un producto aleatorio al carrito y validar información, terminar el proceso de compra', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    await page.goto('https://www.saucedemo.com/');

    const user = await loginPage.loginWithRandomUser();
    await loginPage.dashboard();

    console.log(`Usuario usado: ${user}`);

    const productInfo = await productsPage.addRandomProductAndGetInfo();

    console.log(`Producto agregado: ${productInfo.name}`);
    console.log(`Precio capturado: ${productInfo.price}`);

    await page.click('.shopping_cart_link');

    const cartInfo = await cartPage.getCartProductInfo(productInfo.name);

    expect(cartInfo.name).toBe(productInfo.name);
    expect(cartInfo.price).toBe(productInfo.price);

    console.log('Validación exitosa: Producto en carrito coincide con el agregado');

    const checkoutPage = new CheckoutPage(page);

    await checkoutPage.completeCheckout();

    const confirmationText = await checkoutPage.getConfirmationMessage();
    expect(confirmationText).toBe('Thank you for your order!');

  });
});
