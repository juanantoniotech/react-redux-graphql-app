describe("Pruebas en ----- <Prueba>", () => {
  test("Esta es una prueba", () => {
    // 1. Inicialización
    const message_1 = "Hola Juan";

    // 2. Estímulo
    const message_2 = message_1.trim();

    // 3. Observar los comportamientos
    expect(message_1).toBe(message_2);
  });
});
