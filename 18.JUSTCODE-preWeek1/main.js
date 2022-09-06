function objectVariables() {
  // 아래의 코드는 수정하지 마세요.
  let testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas",
  };

  // 아래의 코드를 수정해주세요.
  let playerNumber = testObj;
  console.log(playerNumber);
  console.log(testObj[16]);
  playerNumber[16] = "어지럽다진짜";
  console.log(playerNumber);
  console.log(testObj[16]);
  let player = testObj;
  return player;
}
console.log(objectVariables());
