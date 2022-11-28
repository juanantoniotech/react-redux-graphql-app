import { getUser, getUsuarioActivo } from "./05-funciones";
describe("Pruebas eb 05-funciones", () => {
  test("getUser debe retornar un objeto", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();
    expect(testUser).toStrictEqual(user);
  });

  test("getUsuarioActivo debe retornar un objeto con un nombre dinámico", () => {
    const name = "Juan Antonio";

    const activeUser = getUsuarioActivo(name);

    expect(activeUser).toStrictEqual({
      uid: "ABC567",
      username: name,
    });
  });
});
