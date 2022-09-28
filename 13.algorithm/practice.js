// function solution(s, t) {
//   let answer = 0;
//   return answer;
// }

// let a = "bacaAacba";
// let b = "abc";
// console.log(solution(a, b));
function sliceCityFromAddress(address) {
  console.log(
    address.slice(address.indexOf("시") - 3, address.indexOf("시") + 1)
  );
}
sliceCityFromAddress(
  `"경기도 성남시 분당구 중앙공원로 53" /
    "서울특별시 강남구 테헤란로 427 위워크타워"`
);
