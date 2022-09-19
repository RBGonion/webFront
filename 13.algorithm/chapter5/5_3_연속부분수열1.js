function solution(m, arr) {
  let answer = 0;

  for (let i = 0; i < arr.length; i++) {
    rightPoint = i;
    total = 0;

    while (total < m) total += arr[rightPoint++];
    if (total > 6) continue;
    if (total === 6) answer++;
  }

  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
