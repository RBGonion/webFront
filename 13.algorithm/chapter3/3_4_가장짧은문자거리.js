function solution(s, t) {
  let answer = [];
  let count = 0;
  let regArr = [];
  let reverseArr = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== t) {
      count++;
      regArr.push(count);
    } else {
      count = 0;
      regArr.push(count);
    }
  }

  count = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== t) {
      count++;
      reverseArr.unshift(count);
    } else {
      count = 0;
      reverseArr.unshift(count);
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (regArr[i] > reverseArr[i]) {
      answer.push(reverseArr[i]);
    } else {
      answer.push(regArr[i]);
    }
  }

  return answer;
}

let str = "teachermode";
console.log(solution(str, "e"));
