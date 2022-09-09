function solution(str) {
  let answer = str
    .split("")
    .map((item) => +item)
    .filter((item) => String(item) !== "NaN")
    .join("");
  return parseInt(answer);
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));
// console.log(typeof 3 === "number");
// NaN는 왜 fliter로 걸러지지 않는 것일까? 어쩔 수 없이 문자로 바꿔서 필터링했다
