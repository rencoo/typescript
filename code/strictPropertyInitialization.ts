class C {
  foo: number;
  baz!: boolean;
  constructor() {
    this.initialize();
  }

  initialize() {
    this.foo = 0;
  }
}

const c = new C();