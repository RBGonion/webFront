function isValid(s) {
  let answer1 = true;
  let answer2 = true;

  //객체로 괄호에 숫자값을 부여
  let obj = {
    "(": 1,
    ")": -1,
    "{": 2,
    "}": -2,
    "[": 3,
    "]": -3,
  };

  //입력값이 홀수라면 false를 반환
  if (s.length % 2 !== 0) return false;

  //괄호를 숫자로 변환하여 배열에 담기
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    let temp = s[i];
    arr.push(obj[temp]);
  }

  //answer1 검증
  for (let i = 0; i < s.length; i++) {
    let curr = arr[i];
    let post = arr[i + 1];

    if (curr + post === 0) {
      i++;
    } else {
      answer1 = false;
    }
  }

  //answer2 검증
  for (let i = 0; i < s.length / 2; i++) {
    if (arr[i] + arr[s.length - 1 - i] !== 0) {
      answer2 = false;
    }
  }

  //둘 중 하나라도 true라면 true반환
  return answer1 || answer2;
}
console.log(isValid("({(([]))})")); // 반으로 잘랐을 때 좌우 대칭인가?
console.log(isValid("[]{}()()(){}{}")); // 순서대로 쌍이 맞는가?
module.exports = { isValid };
