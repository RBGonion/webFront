function solution(n, arr) {
  let answer;
  let totalArr = [];

  for (let i = 0; i < arr.length; i++) {
    let total = 0;
    for (let j = 0; j < String(arr[i]).length; j++) {
      total += parseInt(String(arr[i])[j]);
    }
    totalArr.push(total);
  }
  const max = Math.max(...totalArr);
  let maxCount = 0;
  for (let item of totalArr) {
    if (item === max) {
      maxCount++;
    }
  }
  let indexCount = 0;
  const indexArr = [];
  for (let item of totalArr) {
    if (item === max) {
      indexArr.push(indexCount);
    }
    indexCount++;
  }
  let finalMax = 0;
  for (let i = 0; i < totalArr.length; i++) {
    if (maxCount === 1) {
      answer = arr[totalArr.indexOf(max)];
    } else {
      for (let i = 0; i < indexArr.length; i++) {
        if (arr[indexArr[i]] > finalMax) {
          finalMax = arr[indexArr[i]];
        }
      }
      answer = finalMax;
    }
  }

  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
