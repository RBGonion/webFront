const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let nowtime = input[0];
let plustime = input[1];

nowtime = nowtime.split(" ").map((item) => +item);
plustime = plustime.split(" ").map((item) => +item);

const H = nowtime[0];
const M = nowtime[1];
const T = plustime[0];

solution(H, M, T);

function solution(H, M, T) {
  M += T;
  if (M >= 60) {
    const flowM = M;
    M = M % 60;
    H += Math.floor(flowM / 60);
    if (H === 24) {
      H -= 24;
    }
  }
  console.log(`${H} ${M}`);
}
//vsc에사 확인했을 때 출력이 전부 맞게 나오는데 백준에서는 오답처리된다 이제 신경안쓰고 넘어간다
