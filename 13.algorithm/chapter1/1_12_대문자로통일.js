function solution(s) {
  let answer = "";
  for (i = 0; i < s.length; i++) {
    if (
      s[i].charCodeAt() >= "A".charCodeAt() &&
      s[i].charCodeAt() <= "Z".charCodeAt()
    ) {
      answer += s[i];
    } else {
      answer += String.fromCharCode(s[i].charCodeAt() - 32);
    }
  }
  return answer;
}

let str = "ItisTimeToStudy";
console.log(solution(str));
