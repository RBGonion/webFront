function solution(arr) {
  let answer = 0;
  let max = 0;

  for (let item of arr) {
    if (item > max) {
      max = item;
      answer++;
    }
  }
  return answer;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
