import { getHeroesByOwner } from "./08-imp-exp";
import heroes from "./data/heroes";

describe("Pruebas en 08-imp-exp", () => {
  test("debe retornar 3 elementos cuyo owner sea DC", () => {
    const ownerName = "DC";
    const dcHeroes = getHeroesByOwner(ownerName);

    expect(dcHeroes.length).toBe(3);
    for (let index = 0; index < dcHeroes.length; index++) {
      expect(dcHeroes[index].owner).toBe(ownerName);
    }

    // Option2
    expect(dcHeroes).toEqual(heroes.filter((el) => el.owner === ownerName));
  });

  test("debe retornar dos elementos cuyo owner sea Marvel", () => {
    const ownerName = "Marvel";
    const marvelHerores = getHeroesByOwner(ownerName);
    expect(marvelHerores.length).toBe(2);

    for (let index = 0; index < marvelHerores.length; index++) {
      expect(marvelHerores[index].owner).toBe(ownerName);
    }
  });
});
