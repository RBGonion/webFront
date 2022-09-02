const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input.map((item) => +item);

//내 풀이

const a = input[0];
const b = input[1];

const first = input[1] % 10;
const second = Math.floor((input[1] % 100) / 10);
const third = Math.floor(input[1] / 100);

console.log(`${first * a}\n${second * a}\n${third * a}\n${a * b}`);

/*라매개발자 풀이
solution(input[0], input[1]);

function solution(A, B) {
  const stringB = String(B);
  const one = stringB[2];
  const ten = stringB[1];
  const hun = stringB[0];

  console.log(A * one);
  console.log(A * ten);
  consoel.log(A * hun);
  console.log(A * B);
}

*/
