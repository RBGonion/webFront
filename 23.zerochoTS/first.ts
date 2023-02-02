const a: string = "5";
const b: number = 5;
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;

function add(x: number, y: number): number {
  return x + y;
}
type Add = (x: number, y: number) => number;
const add2: Add = (x, y) => x + y;

const add3: (x: number, y: number) => number = (x, y) => x + y;

interface Add2 {
  (x: number, y: number): number;
}
const add4: Add2 = (x, y) => x + y;

const arr: string[] = ["123", "456"]; // 배열의 타입 선언
const arr2: Array<number> = [123, 456]; // 제네릭을 통한 배열의 타입 선언
const arr3: [number, number, string] = [123, 456, "hello"]; // 튜플(길이가 정해진 배열)의 타입 선언
const obj: { lat: number; lon: number } = { lat: 37.5, lon: 127.5 }; // 객체의 타입 선언

const enum EDirection {
  UP,
  Down,
  Left,
  Right,
}

console.log(EDirection.Right);
