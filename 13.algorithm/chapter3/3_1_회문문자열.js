function solution(s) {
  let answer = "YES";
  let transWord = "";
  for (let i = 0; i < s.length; i++) {
    if (
      s[i].charCodeAt() >= "A".charCodeAt() &&
      s[i].charCodeAt() <= "Z".charCodeAt()
    ) {
      transWord += s[i];
    } else {
      transWord += String.fromCharCode(s[i].charCodeAt() - 32);
    }
  }

  if (s.length % 2 === 0) {
    for (let i = 0; i < s.length / 2; i++) {
      if (transWord[i] !== transWord[transWord.length - i - 1]) {
        answer = "NO";
      }
    }
  } else {
    for (let i = 0; i < s.length / 2 - 1; i++) {
      if (transWord[i] !== transWord[transWord.length - i - 1]) {
        answer = "NO";
      }
    }
  }

  return answer;
}

let str = "gooG";
console.log(solution(str));
