function solution(arr1, arr2) {
  let answer = [];
  let first = 0;
  let second = 0;

  while (arr1.length > first && arr2.length > second) {
    if (arr1[first] <= arr2[second]) {
      answer.push(arr1[first++]);
    } else {
      answer.push(arr2[second++]);
    }
  }
  while (first < arr1.length) answer.push(arr1[first++]);
  while (second < arr2.length) answer.push(arr2[second++]);
  return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
