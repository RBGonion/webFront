let arr = [1, 2];
let count = 2;

function solution(n) {
  if (n <= 2) return n;

  arr.push((arr[count - 1] + arr[count - 2]) % 1234567);
  if (count !== n) solution(count++);
  return arr[n - 1];
}

console.log(solution(5));


function solution(4) { 
  // 재귀 -> 상향 -> 하향 
  // 반복문 -> 하향 -> 상향 
  //dp -> [1,2] [1,2,3] [1,2,3,5] 
  //재귀 -> [5] -> [3,5] -> [2,3,5] -> [1,2,3,5] if(n==1) 
  return 1 if(n==2) return 2 
  
  // 종료조건 
  // dp[1,2] 
  // n < 2 return 1 
  
  // dp[1,1] 
  // dp[1,2] 2 return 2 // n 이 1이나 2에 도달하면 더이상 재귀를 호출하지 말아라 
  
  return (solution(4-2) + solution(4-1) ) % 1234567 
  //solution (2) + solution(3) % 1234567 
  // solution (2) -> 더이상 재귀 호출 x 2를 반환 
  // solution(3) -> solution(1) , (2)를 호출 -> 
}