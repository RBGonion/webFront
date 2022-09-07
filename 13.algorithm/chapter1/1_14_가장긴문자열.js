function solution(s) {
  let answer = 0;

  for (let item of s) {
    if (answer < item.length) {
      answer = item.length;
    }
  }
  return answer;
}
let str = ["teacher", "time", "student", "beautifull", "good"];
console.log(solution(str));
