function isPrime(num) {
  let answer = [];
  const reverseArr = [];

  for (let item of arr) {
    let reverseItem = "";
    for (let i = String(item).length - 1; i >= 0; i--) {
      reverseItem += String(item)[i];
    }
    reverseArr.push(parseInt(reverseItem));
  }

  for (let item of reverseArr) {
    let checkPrime = [];
    for (let i = 2; i < item; i++) {
      if (item / i !== Math.floor(item / i)) {
        checkPrime.push("true");
      } else {
        checkPrime.push("false");
      }
    }
    if (item !== 1 && !checkPrime.includes("false")) {
      answer.push(item);
    }
  }

  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(isPrime(arr));
