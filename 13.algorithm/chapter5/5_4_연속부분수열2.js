function solution(m, arr) {
  let answer = 0;

  for (let i = 0; i < arr.length; i++) {
    let point = i;
    let total = 0;
    while (total < m) {
      if (arr[point] === undefined) break;
      total += arr[point++];
      answer++;
      if (total > m) answer--;
    }
  }
  return answer;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));

//NaN만 처리하면 끝나는데 생각보다 많이 까다로운 것 같다
//NaN끼리 비교가 안되고 타입도 숫자라서 하드코딩 하지 않고 어떻게 처리하는게 좋은지 모르겠다
