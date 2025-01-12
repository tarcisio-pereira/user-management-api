const { Person } = require("./person"); // Substitua pelo caminho correto

describe("Person class", () => {
  test("should create a person instance with the given name", () => {
    const person = new Person("Tarcísio");
    expect(person.name).toBe("Tarcísio");
  });
});
