//7-2 함수의 기본

function add(a, b) {
  const result = a + b;
  console.log(result);
  return result;
}
add(1, 2);

//사용 예제2
function fullName(firstName, lastname) {
  return `${firstName} ${lastName}`;
}

let lastName = "kim";
let firstName = "JH";

console.log(fullName(firstName, lastName));

//7-3 함수와 메모리(참조)

function add(a, b) {
  return a + b;
}
const sum = add;

console.log(sum(1, 2));
console.log(add(1, 2));

//7-5 함수의 인자

function add(a, b) {
  console.log(a);
  console.log(b);
  console.log(arguments);
  console.log(arguments[1]);
  return a + b;
}

add();

//7-6 함수 표현식

let add = function (a, b) {
  return a + b;
};
console.log(add(1, 2));
