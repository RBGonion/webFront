let array1 = new Array(3); // 배열의 공간만을 할당
console.log(array1);

let array2 = new Array(1, 2, 3); // 인자를 직접 입력
console.log(array2);

let array3 = Array.of(1, 2, 3, 4, 5); //인자의 개수가 정해지지 않았을 때, 인자를 제한없이 받을 수 있을 때
console.log(array3);

let array4 = ["1", "2", "3"]; //배열 리터럴 사용
console.log(array4);

let array5 = Array.from(array4); //기존의 array를 이용하여 배열 생성
console.log(array5);

let array6 = Array.from({
  // 객체를 통해 배열을 생성, key는 index번호이며 length를 입력해줘야 한다
  0: "value1",
  1: "value2",
  length: 2,
});
console.log(array6);

// 일반적응로 배열은 동일한 메모리 크기를 가지며,
// 연속적으로 이어져 있어야 한다
// 하지만 JS에서 배열은 연속적으로 이어져 있지 않고
// 오브젝트와 유사하다
// JS의 배열은 일반적인(다른 언어들의) 배열의 동작을 흉내낸 특수한 객체이다
// 이것을 보완하기 위해서 타입이 정해져 있는 타입 배열이 있다 (Typed Collection)

const fruits = ["🍌", "🍎", "🍇", "🍑"];

console.log(fruits[0]);

const pizza = { name: "pizza", price: 2 };
const ramen = { name: "ramen", price: 3 };
const sushi = { name: "sushi", price: 1 };
const store1 = [pizza, ramen];

const store2 = Array.from(store1);
store2.push(sushi);
console.log("store1", store1);
console.log("store2", store2);

//여기서 store2는 store1을 참조하고 있다
//따라서 원본값의 변경이 생긴다면 store1과 store2에 모두 적용된다
//store2가 store1을 참조하기 전에 store1에 어떤 객체를 추가한다면 store2에도 적용된다
//store2가 store1을 참조한 후에 store1에 어떤 객체를 추가한다면 store2에 적용되지 않는다
//store2에 다른 객체를 추가한다면 store2에만 추가된다

// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

// const testarr1 = ["🍌", "🍓", "🍇", "🍓"];

// function changekiwi(arr) {
//   const answer = [];
//   for (let x of arr) {
//     if (x === "🍓") {
//       x = "🥝";
//     }
//     answer.push(x);
//   }
//   return answer;
// }

// console.log(changekiwi(testarr1));

const testarr1 = ["🍌", "🍓", "🍇", "🍓"];

function changekiwi(arr, from, to) {
  const answer = [];
  for (let x of arr) {
    if (x === from) {
      x = to;
    }
    answer.push(x);
  }
  return answer;
}

console.log(changekiwi(testarr1, "🍓", "🥝"));

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2

const testarr2 = ["🍌", "🥝", "🍇", "🥝"];
const testarr2filter = testarr2.filter((item) => item === "🥝");
console.log(testarr2filter.length);

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

// const testarr3 = ["🍌", "🥝", "🍇"];
// const testarr4 = ["🍌", "🍓", "🍇", "🍓", "🍌"];

// function fruitFilter() {
//   const answer = [];
//   for (let i = 0; i < testarr3.length; i++) {
//     for (let j = 0; j < testarr4.length; j++) {
//       if (testarr3[i] === testarr4[j]) {
//         answer.push(testarr3[i]);
//       }
//     }
//   }
//   return answer;
// }
// console.log(fruitFilter());

//for문을 중첩해서 쓰는 것이 아니라
//includes() 배열함수를 if문의 조건식으로 넣어서 answer을 리턴해준다
//그렇게 하면 중복 입력 문제도 해결

function solution(arr1, arr2) {
  const answer = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      answer.push(arr1[i]);
    }
  }
  return answer;
}

console.log(solution(["🍌", "🥝", "🍇"], ["🍌", "🍓", "🍇", "🍇", "🍓", "🍌"]));

//11-12퀴즈

const nums = [3, 16, 5, 25, 4, 34, 21];

const result2 = nums
  .filter((num) => num > 5)
  .reduce((avg, num, _, array) => avg + num / array.length, 0);
console.log(result2);
