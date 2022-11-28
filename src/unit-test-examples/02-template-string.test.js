import { getSaludo } from "./02-template-string";
describe("Pruebas en 02-template-string", () => {
  test('getSaludo debe retonar "Hola Juan"', () => {
    const name = "Juan";
    const message = getSaludo(name);
    expect(message).toBe(`Hola ${name}`);
  });
});
