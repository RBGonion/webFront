function solution(s) {
  let answer = "YES";
  if (
    s.toUpperCase().split("").join() !==
    s.toUpperCase().split("").reverse().join()
  ) {
    answer = "NO";
  }

  return answer;
}
let str = "found7, time study Yduts emit ,7Dnuof";
console.log(solution(str));
