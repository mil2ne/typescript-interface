interface Person8 {
  name: string;
  age?: number;
  readonly gender: string;
}

const p81: Person8 = {
  name: 'Mark',
  gender: 'MALE'
};

// p81.gender = 'femail';  // readonly error