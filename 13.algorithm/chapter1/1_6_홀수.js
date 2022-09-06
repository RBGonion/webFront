function solution(arr) {
  let oddArr = [];
  let oddTotal = 0;
  let minOdd = Number.MAX_SAFE_INTEGER;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      oddArr.push(arr[i]);
    }
  }

  for (i = 0; i < oddArr.length; i++) {
    oddTotal += oddArr[i];
  }

  for (i = 0; i < oddArr.length; i++) {
    if (oddArr[i] < minOdd) {
      minOdd = oddArr[i];
    }
  }
  answer = `${oddTotal}/n${minOdd}`;
  return answer;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));
