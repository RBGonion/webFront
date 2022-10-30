function topK(nums, k) {
  let obj = {};

  //for문과 객체를 사용하여 요소의 종류와 갯수를 담아준다
  for (let i = 0; i < nums.length; i++) {
    let temp = nums[i];
    if (!obj[temp]) {
      obj[temp] = 1;
    } else {
      obj[temp] = Number(obj[temp]) + 1;
    }
  }

  // Object.values()과 map메서드를 사용하여 중복되지 않는 요소의 갯수 배열을 구한다
  const arr = [];
  Object.values(obj).map((elem) => {
    if (!arr.includes(elem)) arr.push(elem);
  });

  //중복되지 않는 요소의 갯수 배열을 내림차순으로 정렬한 뒤,
  //k개만큼 잘라준다
  //map메서드와 for문을 사용하여 k개로 잘린 배열 요소의 키에 해당하는 값을 찾아서 answer배열에 넣어준다
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  const answer = [];
  arr
    .sort((a, b) => b - a)
    .slice(0, k)
    .map((elem) => {
      for (let i = 0; i < values.length; i++) {
        if (elem === values[i]) answer.push(keys[i]);
      }
    });

  return answer;
}

console.log(topK([1, 5, 2, 2, 2, 2, 3, 4, 4, 5, 6, 4], 3));

// Object.keys(obj)는 동적으로 추가된 프로퍼티를 인식하지 못하는 것 같다
// 그게 아니라 Object.keys(obj)를 변수로 등록한 뒤에 값을 추가하니까 추가된 값이 반영되지 않았던 것
// Object.keys(obj).find()를 통해 특정 value에 해당하는 key를 찾을 수 있다
// Object.keys(obj)
// Object.values(obj)
// Object.entries(obj)

//for문과 객체를 사용하여 요소의 종류와 갯수를 담아준다
//Object.values(obj)과 map메서드를 사용하여 중복되지 않는 요소의 갯수 배열을 구한다
//중복되지 않는 요소의 갯수 배열을 내림차순으로 정렬한 뒤, k개만큼 잘라준다
//map메서드와 for문을 사용하여 k개로 잘린 배열 요소의 키에 해당하는 값을 찾아서 answer배열에 넣어준다
