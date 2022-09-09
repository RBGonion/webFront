function solution(arr) {
  let totalArr = [];
  let widthTotal = 0;
  let heightTotal = 0;
  let rightCross = 0;
  let leftCross = 0;

  for (let i = 0; i < arr.length; i++) {
    widthTotal = 0;
    heightTotal = 0;

    for (let j = 0; j < arr[i].length; j++) {
      widthTotal += arr[i][j];
      if (i === j) {
        rightCross += arr[i][j];
      }
      if (i + j === 4) {
        console.log(i, j);
        console.log(arr[i][j]);
        leftCross += arr[i][j];
      }
      for (let k = 0; k < arr.length; k++) {
        heightTotal += arr[j][i];
      }
    }
    totalArr.push(widthTotal);

    totalArr.push(heightTotal / 5);
  }
  totalArr.push(rightCross);
  totalArr.push(leftCross);
  console.log(totalArr);

  return Math.max(...totalArr);
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
