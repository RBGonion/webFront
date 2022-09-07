function solution(s) {
  let answer = [];
  for (let item of s) {
    if (answer.includes(item)) {
      continue;
    } else {
      answer.push(item);
    }
  }

  return answer;
}
let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));
