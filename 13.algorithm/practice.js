function solution(k, arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    let point = i;
    let total = 0;
    if (point === arr.length - 2) break;
    while (point <= i + 2) {
      total += arr[point++];
    }
    answer.push(total);
  }
  return Math.max(...answer);
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
