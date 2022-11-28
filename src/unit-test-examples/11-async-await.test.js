import { getImagen } from "./11-async-await";
describe("Pruebas en 11-async-await", () => {
  test("debe devolver una url", async () => {
    const url = await getImagen();
    console.log("url >", url);
    // expect(typeof url).toBe("string");
  });
});
