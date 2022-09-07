function solution(s) {
  let answer = "";
  for (i = 0; i < s.length; i++) {
    if (s[i] === "A") {
      answer += "#";
    } else {
      answer += s[i];
    }
  }
  return answer;
}

let str = "BANANA";
console.log(solution(str));
