// 1. function

// type alias
type EatType = (food: string) => void;

// interface
interface IEat {
  (food: string) : void;
}

// 2. array 

// type alias
type PersonList = string[];

// interface
interface IPersonList {
  [index: number]: string;
}

// 3. intersection

interface ErrorHandling {
  success: boolean;
  error?: {message: string};
}

interface ArtistsData {
  artists: {name: string}[];
}

// type alias
type ArtistsResponseType = ArtistsData & ErrorHandling;


// interface
interface IArtistResponse extends ArtistsData, ErrorHandling {}

let art: ArtistsResponseType;
let iar: IArtistResponse;

// 4. union types

interface Bird {
  fly(): void;
  layEggs(): void;
}

interface Fish {
  swim(): void;
  layEggs(): void;
}

type PetType = Bird | Fish;

// interface IPet extends PetType {} // error

// class Pet implements PetType {} // error


// 5. Declaration Merging - interface
// type alias 에서는 불가

interface MergingInterface {
  a: string;
}

interface MergingInterface {
  b: string;
}

let mi: MergingInterface;
