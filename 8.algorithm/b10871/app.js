const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

firstInput = input[0].split(" ").map((input) => +input);
secondInput = input[1].split(" ").map((input) => +input);

const N = firstInput[0];
const X = firstInput[1];

const newArray = [];

for (let i = 0; i < N; i++) {
  if (X > secondInput[i]) {
    newArray.push(secondInput[i]);
  }
}
console.log(newArray.join(" "));
