import { test, expect } from "@playwright/test";

test("Aparece error si no se agrega producto(s) a la venta.", async ({
  page,
}) => {
  await page.goto("https://jocular-lamington-cb5ab7.netlify.app/usuarios/home");
  await page.getByRole("button", { name: "Iniciar sesión" }).click();
  await page.locator('input[name="email"]').click();
  await page.locator('input[name="email"]').fill("asd@gmail.com");
  await page.locator('input[name="email"]').press("Tab");
  await page.locator('input[name="password"]').fill("1234");
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByText("point_of_sale").click();
  await page
    .locator("div")
    .filter({ hasText: /^Apellido Cliente$/ })
    .getByRole("textbox")
    .click();
  await page
    .locator("div")
    .filter({ hasText: /^Apellido Cliente$/ })
    .getByRole("textbox")
    .fill("Soliz");
  await page
    .locator("div")
    .filter({ hasText: /^Apellido Cliente$/ })
    .getByRole("textbox")
    .press("Tab");
  await page
    .locator("div")
    .filter({ hasText: /^CI$/ })
    .getByRole("textbox")
    .fill("13718137");
  await page.getByRole("button", { name: "Cobrar" }).click();
  await expect(page.getByRole("alert")).toHaveText(
    "Por favor, complete todos los campos obligatorios."
  );
});
