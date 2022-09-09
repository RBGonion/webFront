function solution(arr) {
  let answer = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      let top = arr[i - 1]?.[j] ?? 0;
      let bottom = arr[i]?.[j - 1] ?? 0;
      let right = arr[i + 1]?.[j] ?? 0;
      let left = arr[i]?.[j + 1] ?? 0;

      if (
        arr[i][j] > top &&
        arr[i][j] > bottom &&
        arr[i][j] > right &&
        arr[i][j] > left
      ) {
        console.log(i, j);
        answer++;
      }
    }
  }

  return answer;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));
