class ClassA {
  constructor() {
    this._value = 1;
    console.log(`classA: ${this.get()}`);
  }
  get() {
    return this._value;
  }
}
class ClassB extends ClassA {
  constructor() {
    super();
    this._value = 2;
    console.log(`classB: ${this.get()}`);
  }
  get() {
    return this._value * 2;
  }
}

const instance = new ClassB();
console.log(`instance: ${instance.get()}`);
