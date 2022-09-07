function solution(s) {
  let answer = "";
  for (let item of s) {
    if (answer.includes(item)) {
      continue;
    } else {
      answer += item;
    }
  }

  return answer;
}
console.log(solution("ksekkset"));
