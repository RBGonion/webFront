function solution(s) {
  let answer;
  let countMap = new Map();

  function countFunc(countValue) {
    if (typeof countValue !== "number") {
      return 1;
    } else {
      countValue = ++countValue;
      return countValue;
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (!countMap.has(s[i])) {
      let countValue;
      countMap.set(s[i], countFunc(countValue));
    } else {
      let countValue = countMap.get(s[i]);
      countMap.set(s[i], countFunc(countValue));
    }
  }
  let max = 0;
  countMap.forEach((value, key) => {
    if (max < value) {
      max = value;
      countMap.set("max", key);
    }
  });

  answer = countMap.get("max");

  return answer;
}

let str = "BACBACCACCBDEEEEBBBBBBBBBBEEDE";
console.log(solution(str));

// let newMap = new Map();

// newMap.set("A", { number: 1 });
// newMap.set("B", 1);
// console.log(newMap.get("B"));
// newMap.set("B", 3);

// console.log(newMap.get("B"));
// console.log(newMap);

// function solution(s) {
//   let answer;
//   let sH = new Map();
//   for (let x of s) {
//     if (sH.has(x)) sH.set(x, sH.get(x) + 1);
//     else sH.set(x, 1);
//   }
//   let max = Number.MIN_SAFE_INTEGER;
//   for (let [key, val] of sH) {
//     if (val > max) {
//       max = val;
//       answer = key;
//     }
//   }
//   return answer;
// }

// let str = "BACBACCACCBDEDE";
// console.log(solution(str));
