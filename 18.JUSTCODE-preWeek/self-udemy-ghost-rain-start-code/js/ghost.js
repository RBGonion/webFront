function makeGhost() {
  let randomStyleLeft = Math.ceil(
    Math.random() * parseInt(getComputedStyle(bg).width)
  );

  const ghost = document.createElement("div");

  ghost.style.backgroundImage = "url('./images/ghost.png')";
  ghost.style.width = "45px";
  ghost.style.height = "54px";
  ghost.style.position = "absolute";
  ghost.style.top = "0px";
  ghost.style.left = `${randomStyleLeft}px`;
  bg.append(ghost);

  let ghostStyleLeft = parseInt(ghost.style.top);

  const setIntervalId = setInterval(function () {
    ghost.style.top = `${ghostStyleLeft}px`;
    ghostStyleLeft += 10;
    console.log(ghostStyleLeft);
    if (ghostStyleLeft > 250) {
      ghost.remove();
      clearInterval(setIntervalId);
      console.log(ghostStyleLeft);
      return;
    }
  }, 500);
}

const testInverval = setInterval(makeGhost, 1000);
setTimeout(() => {
  clearInterval(testInverval);
}, 5000);
