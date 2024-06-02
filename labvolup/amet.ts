class Person {
  private _firstName: string;

  constructor(firstName: string) {
    this._firstName = firstName;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(name: string) {
    if (name.length > 0) {
      this._firstName = name;
    } else {
      console.error("The name cannot be empty.");
    }
  }
}

// Usage
const person = new Person("Riyad");
console.log(person.firstName); // Output: Riyad

// If you try to set an empty string as the name, it will log an error
person.firstName = ""; // Error: The name cannot be empty.
