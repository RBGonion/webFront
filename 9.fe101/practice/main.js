"use strict";

const User = function (name, age) {
  this.name = name;
  this.age = age;
  this.showName = function () {
    console.log(this.name);
  };
};

const mike = new User("Mike", 30);
const boom = new User("Boom", 50);

class User2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  showName() {
    console.log(this.name);
  }
}

const tom = new User2("Tom", 19);

/*
class PopUp {
  constructor() {
    this.popUp = document.querySelector(".pop-up");
    this.popUpText = document.querySelector(".pop-up__message");
    this.popUpRefresh = document.querySelector(".pop-up__refresh");
    this.popUpRefresh.addEventListener("click", () => {});
  }
  setClickListener(onClick) {
    this.onClick = onClick;
  }
}
*/

//class는 오브젝트를 선언한 const와 같은 역할을 한다
//class는 객체를 찍어내는 공장이라고 생각하면 된다

//constructor는 function키워드와 같은 역할을 한다
//constructor를 통해 필요한 것들을 초기화시킴

//const 대신 this.변수명이라는 멤버변수를 사용한다
//this는 instance라고도 한다
//this는 자신이 속한 오브젝트, 즉 자기 자신을 의미한다

//setClickListener()는 addEventListenter()과 같은 역할을 한다

//class에서 showName()같은 메소드를 사용하면 Prototype에 저장된다
//생성자 함수 function은 showName()같은 메소드를 사용하면 객체 내부에 저장된다

//
