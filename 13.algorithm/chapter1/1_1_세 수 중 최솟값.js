function solution(a, b, c) {
  let answer;
  if (a > b) {
    if (b > c) {
      answer = c;
    } else {
      answer = b;
    }
  } else {
    if (a > c) {
      answer = c;
    } else {
      answer = a;
    }
  }
  return answer;
}

console.log(solution(2033, 500, 111));
