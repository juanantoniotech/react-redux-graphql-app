import { retornaArreglo } from "./07-deses-arr";
describe("Pruebas en 07-deses-arr", () => {
  test("Debe retornar un array de string y un número", () => {
    // Option1
    const arraryTest = ["ABC", 123];
    const expectedArray = retornaArreglo();
    expect(expectedArray).toMatchObject(arraryTest);

    // Option 2
    const [letters, numbers] = retornaArreglo();

    expect(letters).toBe("ABC");
    expect(numbers).toBe(123);

    expect(typeof letters).toBe("string");
    expect(typeof numbers).toBe("number");

    // Option 3: valida que se obtenga cualquier string
    expect(letters).toStrictEqual(expect.any(String));
  });
});
