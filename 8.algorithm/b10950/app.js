const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const textCaseArray = [];
for (let i = 1; i <= +input[0]; i++) {
  const tempValue = input[i].split(" ").map((item) => +item);
  textCaseArray.push({ A: tempValue[0], B: tempValue[1] });
}

solution(+input[0], textCaseArray);

function solution(T, testcaseArray) {
  for (let i = 0; i < T; i++) {
    const A = testcaseArray[i].A;
    const B = textCaseArray[i].B;
    console.log(A + B);
  }
}
