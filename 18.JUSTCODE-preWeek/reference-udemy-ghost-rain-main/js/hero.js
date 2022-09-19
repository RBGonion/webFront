class Hero {
  constructor() {
    this.heroElement = document.getElementById("hero"); // hero클래스의 인스턴스에 heroElement라는 키를 생성하고, id가 hero인 span태그를 선택하여 값으로 저장
    this.left = Number(getComputedStyle(this.heroElement).left.split("px")[0]); // hero클래스의 인스턴스에 left라는 키를 생성하고, heroElement의 left(좌표)값을 value로 저장

    this.speed = 10;
    this.isRightKey = false;
    this.isLeftKey = false;
  }

  move(direction) {
    // Hero의 move메서드 생성
    switch (direction) {
      case "right":
        this.heroElement.className = "right"; // 매개변수인 direction의 값이 right이라면, heroElement의 class를 right로 변경(classList.add()를 사용하여 class에 추가하는 것이 아니므로, class값이 변경된다)
        this.setLeft(-this.speed); // Hero클래스의 -speed를 인자로 가지는 Hero클래스의 setLeft메서드 실행
        break;
      case "left":
        this.heroElement.className = "left"; // 매개변수인 direction의 값이 left라면, heroElement의 class를 left로 변경
        this.setLeft(this.speed); // Hero클래스의 speed를 인자로 가지는 Hero클래스의 setLeft메서드 실행
        break;
      default: // switch문 종료 예약어
    }
  }

  stop() {
    // Hero의 stop메서드 생성
    this.heroElement.className = "face"; // // heroElement의 class를 stop으로 변경
  }

  setLeft(left) {
    //left를 매개 변수로 가지는, Hero의 setLeft메서드 생성
    const newleft = this.left - left; // constructor에서 정의된 left값에서 인자로 전달된 left값을 뺀 뒤, newLeft변수에 할당

    if (newleft > BG_WIDTH - HERO_WIDTH || newleft < 0) return; // 조건식이 true라면 return한다(메서드를 실행 중간에 멈추기 위한 코드)

    this.left = newleft; // this.left에 newleft값을 할당
    this.heroElement.style.left = this.left + "px"; // heroElementdml left값에 this.left + "px"을 할당
  }
}
