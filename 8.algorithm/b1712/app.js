const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const splitInput = input[0].split(" ");
const A = +splitInput[0];
const B = +splitInput[1];
const C = +splitInput[2];
const X = Math.floor(A / (C - B));

/*
if (X >= 0) {
  console.log(X + 1);
} else {
  console.log(-1);
}
*/

B >= C ? console.log(-1) : console.log(X + 1);
