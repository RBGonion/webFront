function solution(arr) {
  let answer = Number.MAX_SAFE_INTEGER;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] < answer) {
      answer = arr[i];
    }
  }

  return answer;
}

let arr = [5, 7, 3, 1, 2, 9, 11];
console.log(solution(arr));
