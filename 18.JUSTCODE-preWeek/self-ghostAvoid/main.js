const feild = document.querySelector("#feild");

const FEILD_WIDTH = parseInt(getComputedStyle(feild).width);
const FEILD_HEIGHT = parseInt(getComputedStyle(feild).height);

console.log(FEILD_WIDTH, FEILD_HEIGHT);

function makeHero() {
  const hero = document.createElement("div");
  hero.id = "hero"; // hero.setAttribute("id", "hero");
  // const HERO_WIDTH = parseInt(getComputedStyle(hero).width);
  // const HERO_HEIGHT = parseInt(getComputedStyle(hero).height);
  hero.style.top = `${FEILD_HEIGHT - 54}px`;
  hero.style.left = `${FEILD_WIDTH / 2}px`;
  feild.append(hero);
}

const keys = {}; // keyup과 keydown을 이용하여 동시 입력을 처리

function moveHeroKeyup(event) {
  let coordinateTop = parseInt(getComputedStyle(hero).top);
  let coordinateLeft = parseInt(getComputedStyle(hero).left);

  // switch (event.key) {
  //   case "ArrowUp":
  //     coordinateTop -= 10;
  //     hero.style.top = coordinateTop + "px";
  //     break;

  //   case "ArrowRight":
  //     coordinateLeft += 10;
  //     hero.style.left = coordinateLeft + "px";
  //     break;

  //   case "ArrowDown":
  //     coordinateTop += 10;
  //     hero.style.top = coordinateTop + "px";
  //     break;

  //   case "ArrowLeft":
  //     coordinateLeft -= 10;
  //     hero.style.left = coordinateLeft + "px";
  //     break;

  //   default:
  // }

  if (event.key === "ArrowUp") {
    keys.up = true;
  } else if (event.key === "ArrowDown") {
    keys.down = true;
  } else if (event.key === "ArrowLeft") {
    keys.left = true;
  } else if (event.key === "ArrowRight") {
    keys.right = true;
  }

  if (keys.up && keys.left) {
    coordinateTop -= 10;
    coordinateLeft -= 10;
    hero.style.top = coordinateTop + "px";
    hero.style.left = coordinateLeft + "px";
  } else if (keys.up && keys.right) {
    coordinateTop -= 10;
    coordinateLeft += 10;
    hero.style.top = coordinateTop + "px";
    hero.style.left = coordinateLeft + "px";
  } else if (keys.down && keys.left) {
    coordinateTop += 10;
    coordinateLeft -= 10;
    hero.style.top = coordinateTop + "px";
    hero.style.left = coordinateLeft + "px";
  } else if (keys.down && keys.right) {
    coordinateTop += 10;
    coordinateLeft += 10;
    hero.style.top = coordinateTop + "px";
    hero.style.left = coordinateLeft + "px";
  } else if (keys.up) {
    coordinateTop -= 10;
    hero.style.top = coordinateTop + "px";
  } else if (keys.down) {
    coordinateTop += 10;
    hero.style.top = coordinateTop + "px";
  } else if (keys.left) {
    coordinateLeft -= 10;
    hero.style.left = coordinateLeft + "px";
  } else if (keys.right) {
    coordinateLeft += 10;
    hero.style.left = coordinateLeft + "px";
  }
}

document.addEventListener("keydown", moveHeroKeyup);

function moveHeroKeydown(event) {
  if (event.key === "ArrowUp") {
    keys.up = false;
  } else if (event.key === "ArrowDown") {
    keys.down = false;
  } else if (event.key === "ArrowLeft") {
    keys.left = false;
  } else if (event.key === "ArrowRight") {
    keys.right = false;
  }
}

document.addEventListener("keyup", moveHeroKeydown);

function makeRandomNumber(max, min) {
  return Math.random() * (max - min) + min;
}

function ghostMove(ghost, ghostInterval) {
  let heroLeft = parseInt(hero.style.left);
  let heroTop = parseInt(hero.style.top);
  let ghostLeft = parseInt(ghost.style.left);
  let ghostTop = parseInt(ghost.style.top);

  //캐릭터 추적 조건문1
  if (heroLeft > ghostLeft) {
    ghost.style.left = `${ghostLeft + 5}px`;
  } else {
    ghost.style.left = `${ghostLeft - 5}px`;
  }

  //캐릭터 추적 조건문2
  if (heroTop > ghostTop) {
    ghost.style.top = `${ghostTop + 5}px`;
  } else {
    ghost.style.top = `${ghostTop - 5}px`;
  }

  //캐릭터 충돌 확인
  let span = document.querySelector(".hidden");
  if (ghostLeft < heroLeft + 20 && heroLeft + 20 < ghostLeft + 45) {
    if (ghostTop < heroTop + 20 && heroTop + 20 < ghostTop + 45) {
      if (span.className === "hidden") span.className = "display";
    }
  }
  //data속성을 이용하여 ghost개체별로 유지 시간을 제한
  if (parseInt(ghost.dataset.count) < 30) {
    ghost.dataset.count = parseInt(ghost.dataset.count) + 1;
  } else {
    clearInterval(ghostInterval); // setInterval 제거
    ghost.remove(); // ghost 개체 제거
  }
}

function makeGhost() {
  const ghost = document.createElement("div");
  ghost.className = "ghost";

  //무작위 생성 위치 부여
  if (Math.random() > 0.5) {
    if (Math.random() > 0.5) {
      ghost.style.top = `0px`;
      ghost.style.left = `${makeRandomNumber(FEILD_WIDTH - 50, 0)}px`;
    } else {
      ghost.style.top = `${FEILD_HEIGHT - 50}px`;
      ghost.style.left = `${makeRandomNumber(FEILD_WIDTH - 50, 0)}px`;
    }
  } else {
    if (Math.random() > 0.5) {
      ghost.style.top = `${makeRandomNumber(FEILD_HEIGHT - 50, 0)}px`;
      ghost.style.left = `0px`;
    } else {
      ghost.style.top = `${makeRandomNumber(FEILD_HEIGHT - 50, 0)}px`;
      ghost.style.left = `${FEILD_WIDTH - 50}px`;
    }
  }
  ghost.dataset.count = 0;
  const ghostInterval = setInterval(function () {
    ghostMove(ghost, ghostInterval);
  }, 1000);

  feild.append(ghost);
}

document.querySelector("#startBtn").addEventListener("click", () => {
  document.querySelector("#startBtn").style.display = "none";
  makeHero();
  setInterval(makeGhost, 500);
});
