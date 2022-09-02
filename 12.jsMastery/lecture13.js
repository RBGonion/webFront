// 주어진 배열에서 중복을 제거 하라
const fruits = ["🍌", "🍎", "🍇", "🍌", "🍎", "🍑"];
//  ['🍌', '🍎', '🍇', '🍑']

const set = new Set(fruits);
const setCgArray = Array.from(set);
console.log(set);
console.log(setCgArray);

// 주어진 두 세트의 공통된 아이템만 담고 있는 세트 만들어라
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([1, 2, 3]);

const answer = [];
for (let item of set1) {
  if (set2.has(item)) {
    answer.push(item);
  }
}
console.log(answer);

const set99 = new Set([1, 2, 3]);
console.log(set99);
