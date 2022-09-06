function solution(a, b, c) {
  let answer;
  let total = a + b + c;
  let max;

  if (a > b) {
    max = a;
  } else {
    max = b;
  }

  if (c > max) {
    max = c;
  }

  if (total - max > max) {
    answer = "Yes";
  } else {
    answer = "NO";
  }

  return answer;
}

console.log(solution(13, 23, 17));
