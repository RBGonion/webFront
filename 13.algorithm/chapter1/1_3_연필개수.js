function solution(n) {
  let answer;
  if (n % 12 > 0) {
    answer = Math.ceil(n / 12);
  } else {
    answer = n / 12;
  }
  return answer;
}

console.log(solution(195));
