const getPrefix = (strs) => {
  let arr = [new Array(strs[0].length)]; // 빈 배열을 선언
  // [] 일반적인 빈 배열
  // [빈자리1, 빈자리2, 빈자리3, 빈자리4, 빈자리5 ]
  // [s, t, null, null, null]
  // s t a i r
  let answer = ""; // 정답 변수 선언

  for (let i = 0; i < strs.length; i++) {
    //strs = ["start", "stair", "step"];

    for (let j = 0; j < strs[i].length; j++) {
      // s t a r t 0~4
      // s t a i r 0~4
      // s t e p 0~3
      if (i === 0) {
        arr[j] = strs[i][j]; // arr배열에 요소를 셋팅 arr.push(strs[i][j])
      } else {
        if (arr[j] !== strs[i][j]) {
          arr[j] = null;
        }
      }
    }
  }

  let count = 0;
  while (arr[count] !== null) {
    answer += arr[count];
    count++;
  }

  return answer;
};

console.log(getPrefix(["start", "stair", "step", "sasfsadfnjkf"]));
console.log(getPrefix(["start", "wework", "today"]));
