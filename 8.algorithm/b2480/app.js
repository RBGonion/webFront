const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0].split(" ").map((input) => +input);

const a = input[0];
const b = input[1];
const c = input[2];
const maxNumber = Math.max(...input);

solution(a, b, c);

function solution(a, b, c) {
  if (a === b && a === c) {
    console.log(10000 + a * 1000);
  } else if (a === b || a === c) {
    console.log(1000 + a * 100);
  } else if (b === c) {
    console.log(1000 + a * 100);
  } else {
    console.log((reward = maxNumber * 100));
  }
}
