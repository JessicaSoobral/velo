import { test, expect } from '@playwright/test';

// AAA - Arrange, Act, Assert (Preparar, Agir, Verificar)

test('deve consultar pedido', async ({ page }) => {
    //Arrange
    await page.goto('http://localhost:5173/');
    await expect(page.getByTestId('hero-section').getByRole('heading')).toContainText('Velô Sprint');

    await page.getByRole('link', { name: 'Consultar Pedido' }).click();
    await expect(page.getByRole('heading')).toContainText('Consultar Pedido');

    //Act

    await page.getByRole('textbox', { name: 'Número do Pedido' }).fill('VLO-4I3TZQ');
    await page.getByRole('button', { name: 'Buscar Pedido' }).click();

    //Assert
    await expect(page.getByText('Pedido', { exact: true })).toBeVisible({ timeout: 10_000 });
    await expect(page.getByText('VLO-4I3TZQ', { exact: true })).toBeVisible();
    await expect(page.getByText('APROVADO', { exact: true })).toBeVisible();
});