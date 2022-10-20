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

const getLengthOfStr = (str) => {
  let temp = "";
  let max = 0;
  3;

  for (let i = 0; i < str.length; i++) {
    if (!temp.includes(str[i])) {
      // 알바벳이 중복이 아닐 때 실행
      temp += str[i];
    } else {
      // 알파벳이 중복될 경우 실행됨
      if (temp.length > max) max = temp.length; // temp.length가 더 클 때만 max를 갱신
      temp = str[i]; // temp초기화를 겸해서 현재값인 str[i]할당
    }
  }
  return Math.max(max, temp.length);
  // 위 코드로는 마지막에 temp에서 if문이 실행되지 않기 때문에
  // 마지막의 temp는 Math.max()를 사용해서 직접 비교해줘야 한다
};

console.log(getLengthOfStr("abcabcabc"));
console.log(getLengthOfStr("aaaaba"));
console.log(getLengthOfStr("sttrgaqe"));
