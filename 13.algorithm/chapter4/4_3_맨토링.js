function solution(test) {
  let answer;
  let couple = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      for (let k = j + 1; k < arr[i].length; k++) {
        couple.push([arr[i][j], arr[i][k]]);
      }
    }
  }
  for (let i = 0; i < couple.length; i++) {
    let count = 0;
    for (let j = i + 1; j < couple.length; j++) {
      if (couple[i].join("") === couple[j].join("")) {
        count++;
      }
    }
    if (count === 2) {
      console.log(couple[i]);
    }
  }

  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
solution(arr);
