function solution(s, t) {
  let answer = 0;
  for (i = 0; i < s.length; i++) {
    if (s[i] === t) {
      answer++;
    }
  }
  return answer;
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R"));
