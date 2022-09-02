// const dog = { name: "초코", howl: "멍멍" };

// const des = Object.getOwnPropertyDescriptors(dog);
// console.log(des);

// const desc = Object.getOwnPropertyDescriptor(dog, "name");
// console.log(desc);

//
//
//

//생성자 함수 선언
function Animal(name, emoji) {
  this.name = name;
  this.emoji = emoji;
}

//프로토타입 레벨 함수 정의
Animal.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};

//생성자 함수 선언
function Dog(name, emoji, owner) {
  //super(name, emoji) 대신 call함수를 사용한다
  Animal.call(this, name, emoji);
  this.owner = owner;
}

//현재 dog1은 Dog를 상속하고 있다
//아래 코드로 dog1이 Dog상속 후 Animal을 상속하도록 상속도를 바꿔 볼 것이다
Dog.prototype = Object.create(Animal.prototype);

//프로토타입 레벨 함수 정의
Dog.prototype.play = () => {
  console.log("애옹");
};

function Tiger(name, emoji) {
  Animal.call(this, name, emoji);
}

Tiger.prototype = Object.create(Animal.prototype);
Tiger.prototype.hunt = () => {
  console.log("사냥사냥");
};

const dog1 = new Dog("멍멍", "👻", "정현");
dog1.play();
dog1.printName();

const tiger1 = new Tiger("어흥", "👽");
tiger1.printName();
//
//프로토타입 베이스의 객체지향프로그래밍과
//클래스 베이스의 객체지향프로그래밍 비교

class Animal {
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  printName() {
    console.log(`${this.name} ${this.emoji}`);
  }
}

class Dog extends Animal {
  play() {
    console.log("놀기");
  }
}
class Tiger extends Animal {
  hunt() {
    console.log(`사냥`);
  }
}
const dog2 = new Dog("멍멍", "멍멍2");
const tiger2 = new Tiger("어흥", "어흥2");
