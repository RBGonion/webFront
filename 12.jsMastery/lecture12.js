// const array = [1, 2, 3];
// for (const item of array) {
//   console.log(item);
// }

// const obj = { 0: 1, 1: 2 };
// for (const item in obj) {
//   console.log(item);
// }

// 이터러블이 되기 위해서는
// [Symbol.iterator]()가 Iterator를 반환해야 한다
// Iterator는 next()를 반환해야하고
// next()는 {IDBCursorWithValue, done}을 반환해야한다

//

// const multiple = {
//   [Symbol.iterator]() {
//     const max = 10;
//     let num = 0;
//     return {
//       next() {
//         return { value: num++ * 2, done: num > max };
//       },
//     };
//   },
// };
// for (const num of multiple) {
//   console.log(num);
// }

//

// function* multipleGenerator() {
//   for (let i = 0; i < 10; i++) {
//     yield i * 2;
//   }
// }
// const multiple = multipleGenerator();

// let next = multiple.next();
// console.log(next.value, next.done);

//

// function sum(first, second, ...nums) {
//   console.log(nums);
// }
// sum(1, 2, 3, 4, 5, 6);

// const people = { name: "bob", age: 20, job: "enginier" };

// function display(people) {
//   console.log("이름", people.name);
//   console.log("나이", people.age);
//   console.log("직업", people.job);
// }

// function display({ name, age, job }) {
//   console.log("이름", name);
//   console.log("나이", age);
//   console.log("직업", job);
// }

// display(people);

// const people = { name: "bob", age: 20, job: "enginier" };

// function display({ name, age, job }) {
//   console.log("이름", name);
//   console.log("나이", age);
//   console.log("직업", job);
// }

// display(people);

const prop = {
  name: "Button",

  styles: {
    size: 20,

    color: "black",
  },
};

function changeColor({ styles: { color } }) {
  console.log(color);
}

changeColor(prop);
