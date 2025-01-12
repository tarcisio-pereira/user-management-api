const { Person } = require("./person"); // Substitua pelo caminho correto

describe("Person class", () => {
  test("should create a person instance with the given name", () => {
    const person = new Person("Tarcísio");
    expect(person.name).toBe("Tarcísio");
  });
});

describe("Person class", () => {
  test("should create a person instance with the given name", () => {
    const person = new Person("Carlos");
    expect(person.name).toBe("Carlos");
  });
});

describe("Person class", () => {
  test("should create a person instance with the given name", () => {
    const person = new Person("Pedro");
    expect(person.name).toBe("Carlos");
  });
});
