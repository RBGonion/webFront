const player = new Hero();
let ghosts = [];

function init() {
  document.addEventListener(
    // 문서 전체에 keydown이벤트 추가, 이벤트 객체를 인자로 가지는 checkKey함수를 실행
    "keydown",
    function (e) {
      // 왜 함수로 한 번 더 감싸주는 걸까??
      checkKey(e, true);
    },
    false
  );

  document.addEventListener(
    // 문서 전체에 keyup이벤트 추가, 이벤트 객체를 인자로 가지는 checkKey함수를 실행
    "keyup",
    function (e) {
      // 왜 함수로 한 번 더 감싸주는 걸까??
      // 인자를 넣고 실행하고 싶어서라고 하면 이해가 되는데
      checkKey(e, false);
    },
    false
  );

  setInterval(function () {
    // function(){initGhost()}를 2초마다 실행하는 setInterval 추가
    // 왜 함수로 한 번 더 감싸주는 걸까??
    // 이 경우에는 인자도 없는데 왜 바로 initGhost를 넣지 않고 function(){initGhost()}를 넣은걸까
    initGhost();
  }, 2000);

  window.requestAnimationFrame(updateAllghosts); // updateAllghosts함수를 인자로 가지는 window.requestAnimationFrame() 실행
}

function checkKey(e, isMoving) {
  if (isMoving) {
    // key의 up, down에 따라 true, false가 바뀌는 플래그 변수를 조건식으로 사용한 조건문, 즉 키를 누르는 동안만 실행되는 함수
    const keyID = e.keyCode || e.which; // 단축 평가를 사용하여 전자가 truthy값이면 전자 반환, 전자가 falshy값이면서 후자가 truthy값이라면 후자를 반환하는 변수

    switch (keyID) {
      case 39: // keyID가 39라면 실행
        player.move("right"); // Hero클래스로 생성한 player인스턴스의 move메서드? move프로퍼티? > 평소에 사용하는 API처럼 변수가 아니라면 ""를 사용하여 메서드에 인자를 전달함
        e.preventDefault(); // keyup, keydown에 어떤 기본 동작이 있어서 preventDefault를 사용한 것일까?
        break;
      case 37: // keyID가 37이라면 실행
        player.move("left"); // Hero클래스로 생성한 player인스턴스의 move메서드? move프로퍼티? > 평소에 사용하는 API처럼 변수가 아니라면 ""를 사용하여 메서드에 인자를 전달함
        e.preventDefault(); // keyup, keydown에 어떤 기본 동작이 있어서 preventDefault를 사용한 것일까?
        break;
    }
  } else {
    player.stop(); // Hero클래스로 생성한 player인스턴스의 stop메서드 실행
  }
}

function initGhost() {
  const ghost = new Ghost(); // Ghost클래스로 생성한 인스턴스를 ghost변수에 할당
  ghosts.push(ghost); // 생성한 인스턴스를 ghosts배열 요소에 추가
}

function updateAllghosts() {
  ghosts.forEach((el, idx) => {
    // ghost배열의 요소별로 if문의 함수 실행
    if (!el.isDead) {
      // ghosts의 el는 요소이므로, Ghost클래스를 통해 만들어진 인스턴스이다. 따라서 el.isDead라는 프로퍼티가 false일 때 실행되는 조건문이다
      el.move(player); // player를 인자로 가지는 el의 move메서드 실행
    } else {
      ghosts.splice(idx, 1); // splice를 통해 el.isDead값이 true인 요소를, index를 통해 원본 배열에서 잘라낸다
    }
  });

  window.requestAnimationFrame(updateAllghosts); // updateAllghosts를 인자로 가지는 window.requestAnimationFrame()실행
}

init(); // init함수 실행
