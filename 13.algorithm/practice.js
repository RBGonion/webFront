const reverse = (x) => {
  x = String(x); // 숫자인 인자를 문자열로 변환
  answer = ""; // 빈 문자열
  for (let i = x.length - 1; i >= 0; i--) {
    console.log(answer);
    answer += x[i]; // 숫자를 뒤집어진 문자열로 만듬
  }
  if (answer.includes("-")) return -parseInt(answer); // - 뒤집은 문자열
  else return parseInt(answer); // 뒤집은 문자열
};

console.log(reverse(-123403300));

// 숫자를 뒤집는다
// 맨앞자리에 0이 오면 없엔다
// 마이너스가 있다면 유지한다
