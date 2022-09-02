const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input.map((input) => +input);

for (let i = 1; i <= input; i++) {
  console.log(i);
}
