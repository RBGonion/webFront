// 강의를 보기 전, 투포인터를 활용한 풀이
// function solution(k, arr) {
//   let answer = [];
//   for (let i = 0; i < arr.length; i++) {
//     let point = i;
//     let total = 0;
//     if (point === arr.length - k + 1) break;
//     while (point <= i + k - 1) {
//       total += arr[point++];
//     }
//     answer.push(total);
//   }
//   return Math.max(...answer);
// }

// let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
// console.log(solution(3, a));

//강의 설명을 듣고 난 후 풀이(sliding window)
function solution(k, arr) {
  let answer,
    sum = 0;
  for (let i = 0; i < k; i++) sum += arr[i];
  answer = sum;
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    answer = Math.max(answer, sum);
  }

  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
