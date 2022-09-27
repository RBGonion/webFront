function solution(str1, str2) {
  let answer = "YES";
  let tempArr1 = [];
  let tempArr2 = [];

  if (str1.length !== str2.length) {
    answer = "NO";
    return answer;
  }

  for (let i = 0; i < str1.length; i++) {
    tempArr1.push(str1[i].charCodeAt());
    tempArr2.push(str2[i].charCodeAt());
  }
  tempArr1 = tempArr1.sort((a, b) => a - b);
  tempArr2 = tempArr2.sort((a, b) => a - b);

  for (let i = 0; i < str1.length; i++) {
    if (tempArr1[i] !== tempArr2[i]) {
      answer = "NO";
      return;
    }
  }
  return answer;
}

let a = "AbaAefewCe";
let b = "wbafeeeACA";
console.log(solution(a, b));
