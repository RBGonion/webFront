const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = 2;
let counter = 1;
let range = 1;

while (range < N) {
  range += counter++ * 6;
}
console.log(range);
console.log(counter);


최소거리 = 1
6*(0)      1+1 ~ 6*(1)       +1 > 최소거리 +1
6*(1)     +1+1 ~ 6*(1+2)     +1 > 최소거리 +2
6*(1+2)   +1+1 ~ 6*(1+2+3)   +1 > 최소거리 +3
6*(1+2+3) +1+1 ~ 6*(1+2+3+4) +1 > 최소거리 +4

2~7 > count + 1
8~19 > count + 2
20~36 > count + 3

let NumberArr = [];
for(let i = 0; i < ; i++){
  NumberArr.push(i);
}