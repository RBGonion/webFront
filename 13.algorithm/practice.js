function romanToNum(s) {
  // 여기에 코드를 작성해주세요.
  answer = 0;
  const romaNum = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = s.length; i > 0; i--) {
    //접근 순서
    //prev < curr: curr-prev값을 더하고, 다음 순회를 생략하기
    //prev > curr: 차례대로 계속 더하기
    //prev = curr: 차례대로 계속 더하기
    //마지막 순회값: 그대로 넣기

    let curr = s[i - 1]; // 객체의 프로퍼티를 동적으로 불러올 때는 대괄호 표기법과 변수를 사용해야 한다
    let prev = s[i - 2]; // 따라서 순회값을 변수로 할당 후, 객체[변수명]의 형식으로 프로퍼티 값을 호출

    if (!prev) {
      //마지막 숫자는 prev가 undefined가 되므로, curr값을 더한 뒤 순회 종료
      answer += romaNum[curr];
      continue;
    }
    if (romaNum[prev] >= romaNum[curr]) {
      // 현재 순서의 값이 다음 순서의 값과 같거나 작다면 정상적인 순서이므로 현재값을 answer에 더해준다
      answer += romaNum[curr];
    } else if (romaNum[prev] < romaNum[curr]) {
      // 현재 순서의 값이 다음 순서의 값보다 크다면,
      // 다음 순서값 - 현재 순서값을 answer에 더해주고,
      // 다음 순회까지 미리 계산되었으므로 i--를 통해 다음 순회를 생략한다
      answer += romaNum[curr] - romaNum[prev];
      i--;
    }
  }

  return answer;
}

console.log(romanToNum("III")); // 3
console.log(romanToNum("XII")); // 12
console.log(romanToNum("XXVII")); // 27
console.log(romanToNum("XXIX")); // 29
