const { Person } = require("./person"); // Substitua pelo caminho correto

describe("Person class", () => {
  test("1. should create a person instance with the given name", () => {
    const person = new Person("Tarcísio");
    expect(person.name).toBe("Tarcísio");
  });
});

describe("Person_1 class", () => {
  test("2. should create a person instance with the given name", () => {
    const person = new Person("Carlos");
    expect(person.name).toBe("Carlos");
  });
});

describe("Person_2 class", () => {
  test("3. should create a person instance with the given name", () => {
    const person = new Person("Pedro");
    expect(person.name).toBe("Pedro");
  });
});
