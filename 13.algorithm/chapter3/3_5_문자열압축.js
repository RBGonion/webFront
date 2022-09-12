function solution(s) {
  let answer = "";

  let count = 0;
  for (let i = 0; i < s.length; i++) {
    count++;
    if (s[i] !== s[i + 1]) {
      if (count !== 1) {
        answer += `${s[i]}${count}`;
        count = 0;
      } else {
        answer += s[i];
        count = 0;
      }
    }
  }

  return answer;
}

let str = "KKHSSSSSSSE";
console.log(solution(str));
