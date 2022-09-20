function randomRange(min, max) {
  // 최대, 최솟값 사이에서 무작위 수를 리턴하는 함수
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

class Ghost {
  constructor() {
    this.isDead = false; // Ghost클래스의 isDead프로퍼티를 추가하고 false를 할당
    this.create(); //  Ghost클래스의 create메서드 실행
  }

  create() {
    // Ghost클래스의 create메서드
    this.ghostElement = document.createElement("div"); // ghostElement변수에 생성한 div할당
    this.top = 0; // 생성될 인스턴스에 top이라는 프로퍼티를 생성하고 0을 할당

    this.ghostElement.style.position = "absolute"; // 생성한 ghostElement변수에 position값 할당
    this.ghostElement.style.top = this.top + "px"; // ghostElement변수에 top값 할당 (position값이 있다면 할당할 수 있다)
    this.ghostElement.style.left =
      randomRange(0, BG_WIDTH - GHOST_WIDTH) + "px"; // ghostElement변수에 left값을 할당

    this.ghostElement.style.width = GHOST_WIDTH + "px"; // ghostElement변수에 width값 할당
    this.ghostElement.style.height = GHOST_HEIGHT + "px"; // ghostElement변수에 height값 할당
    this.ghostElement.style.background = 'url("./images/ghost.png") no-repeat'; // ghostElement변수에 이미지 주소 할당

    bg.appendChild(this.ghostElement); // ghostElement변수를 bg요소에 연결
  }

  move(hero) {
    // Ghost클래스의 move메서드
    this.top++; // ??

    if (this.top > BG_HEIGHT - (HERO_HEIGHT + GHOST_HEIGHT)) {
      //
      const ghostLeft = Number(this.ghostElement.style.left.split("px")[0]); // 생성된 ghostElement의 left값을 ghostLeft변수에 할당(Ghost.create()에서 left가 정의됐기 때문에 바로 읽을 수 있다)

      if (
        hero.left < ghostLeft + GHOST_WIDTH &&
        hero.left + HERO_WIDTH > ghostLeft
      ) {
        this.isDead = true; // this.isDead값에 true할당
        this.die(); // Ghost클래스의 die메서드 실행
        return; // move함수 종료
      }

      if (this.top > BG_HEIGHT - GHOST_HEIGHT) {
        this.isDead = true; // this.isDead값에 true할당
        this.remove(); // Ghost클래스의 remove메서드 실행
        return; // move함수 종료
      }
    }

    this.ghostElement.style.top = this.top + "px"; // 생성한 ghostElement의 top값에 this.top + "px"값을 할당
  }

  remove() {
    this.ghostElement.remove(); // 생성한 ghostElement를 remove()로 제거
  }

  die() {
    this.ghostElement.style.backgroundPosition = "-45px"; // ghostElement의 backgroundPosition값을 변경(image splite크기에 맞게 변경)

    const soundEffect = new Audio("./audio/dying.wav"); // 사운드 추가
    soundEffect.play(); // 사운드 실행

    setTimeout(() => {
      this.remove(); // 3초 뒤, Ghost클래스를 통해 생성된 인스턴스를 제거
    }, 3000);
  }
}
