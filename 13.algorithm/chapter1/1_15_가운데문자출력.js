function solution(s) {
  let answer = "";

  if (s.length % 2 === 1) {
    answer = s[Math.floor(s.length / 2)];
  } else {
    answer += s[s.length / 2 - 1];
    answer += s[s.length / 2];
  }
  return answer;
}
console.log(solution("good"));
