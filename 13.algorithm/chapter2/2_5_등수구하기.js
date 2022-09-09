function solution(arr) {
  let answer = [];
  let count;

  for (let i = 0; i < arr.length; i++) {
    count = arr.length;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        count--;
      }
    }
    answer.push(count);
  }

  return answer;
}

let arr = [89, 89, 92, 100, 76, 25, 57, 57];
console.log(solution(arr));
