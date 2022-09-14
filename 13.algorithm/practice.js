function solution(m, product) {
  let answer = 0;
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  for (let i = 0; i < product.length; i++) {
    let money = m - (product[i][0] / 2 + product[i][1]); // 첫 번째 for문에서 배열 전채를 순회하면서 할인 적용할 요소를 지정하고 총값에서 제함
    let cnt = 1;
    for (let j = 0; j < product.length; j++) {
      if (j !== i && product[j][0] + product[j][1] > money) break; // i번째 요소는 첫 for문에서 사용되었으므로 생략하는 조건을 넣는다
      if (j !== i && product[j][0] + product[j][1] <= money) {
        // i번째가 아니면서 요금보다 가격이 낮을 때 count를 올림
        money -= product[j][0] + product[j][1];
        cnt++;
      }
    }
    answer = Math.max(cnt);
  }
  return answer;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
