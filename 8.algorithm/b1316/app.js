const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const testCase = +input[0];
let tureFalseBox = [];
let count = 0;

for (let i = 1; i < input.length; i++) {
  let splitInput = input[i].split("");
  let tempArr = [];

  for (let j = 0; j < splitInput.length; j++) {
    if (j === 0) {
      tempArr.push(splitInput[j]);
      continue;
    }

    if (0 < j < splitInput.length) {
      if (tempArr.indexOf(splitInput[j]) === -1) {
        tempArr.push(splitInput[j]);
        continue;
      } else {
        if (splitInput[j] === splitInput[j - 1]) {
          tempArr.push(splitInput[j]);
          continue;
        }
      }
    }
  }
  if (splitInput.join() === tempArr.join()) {
    count++;
  }
}
console.log(count);

/*
const testCase = +input[0];
let count = 0;

for (let i = 1; i < input.length; i++) {
  const splitInput = input[i].split("");
  let tempArr = [];
  let tureFalseBox = [];

  for (let j = 0; j < splitInput.length; j++) {
    if (j === 0) {
      tempArr.push(splitInput[j]);
    } else if (0 < j < splitInput.length - 1) {
      if (
        tempArr.indexOf(splitInput[j]) === -1 &&
        (splitInput[j] === splitInput[j - 1] ||
          splitInput[j] === splitInput[j + 1])
      ) {
        tempArr.push(splitInput[j]);
      } else {
        tureFalseBox.push("false");
      }
    } else if (
      j === splitInput.length - 1 &&
      tempArr.indexOf(splitInput[j]) !== -1 &&
      splitInput[j - 1] !== splitInput[j - 2]
    ) {
      tureFalseBox.push("false");
    }
  }

  if (tureFalseBox.length === 0) {
    count++;
  }
}
console.log(count);
*/
