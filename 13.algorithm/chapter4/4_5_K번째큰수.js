function solution(n, k, card) {
  let answer;
  let caseArr = [];
  // 카드 3장의 합배열을 구하는 3중 for문
  for (let i = 0; i < card.length; i++) {
    for (let j = i + 1; j < card.length; j++) {
      for (let k = j + 1; k < card.length; k++) {
        let totalElem = card[i] + card[j] + card[k];
        caseArr.push(totalElem);
      }
    }
  }

  //합배열 요소들의 크기배열을 구하는 2중 for문
  //sort를 사용하지 않고 풀기 위하여 작성하였다
  let indexArr = [];
  for (let i = 0; i < caseArr.length; i++) {
    let count = 1;
    for (let j = 0; j < caseArr.length; j++) {
      if (i !== j && caseArr[j] > caseArr[i]) {
        count++;
      }
    }
    indexArr.push(count);
  }

  //크기배열에서 3번째로 큰 수의 index를 찾아 답을 구하는 for문
  for (let i = 0; i < indexArr.length; i++) {
    if (indexArr[i] === 3) {
      answer = caseArr[i];
    }
  }

  return answer;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
