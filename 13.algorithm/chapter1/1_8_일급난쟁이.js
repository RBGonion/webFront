function solution(arr) {
  let answer = arr;
  for (i = 0; i < arr.length; i++) {
    let total = 0;

    for (i = 0; i < arr.length; i++) {
      total += arr[i];
    }

    for (i = 0; i < arr.length; i++) {
      for (j = i + 1; j < arr.length; j++) {
        if (total - (arr[i] + arr[j]) === 100) {
          answer.splice(j, 1);
          answer.splice(i, 1);
        }
      }
    }
  }
  return answer;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
