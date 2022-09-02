// class Counter {
//   value;
//   constructor(startValue) {
//     if (isNaN(startValue) || startValue < 0) {
//       this.value = 0;
//     } else {
//       this.value = startValue;
//     }
//   }
//   get value() {
//     return this.value;
//   }
//   increment = () => {
//     this.value++;
//   };
// }

// const counter = new Counter(2);

// counter.increment();
// counter.increment();
// counter.increment();
// console.log(counter.value);

//constructor은 class가 호출되면 함께 실행되는 블록이다
//constructor안에 class가 실행될 때 함께 실행시킬 것들을 전부 넣어준다
//메서드를 밖으로 뺀건 메서드는 호출될 때 실행시켜야 하기 때문

//counter내에서 선언하는 프로퍼티에는 this를 붙혀준다

//class 내에서는 변수나 화살표함수를 예약어(let, const)없이 선언할 수 있는 듯 하다
//>그게아니라 class라는 객체 안에서 key와 vlaue(프로퍼티)가 선언된 것이라고 생각하는게 맞는 것 같다
//>그리고 함수 선언시 function은 생략하는 것이 맞다

//class내부에서 어떤 값을 return해주려면 class와 constructor사이에 적어주어야 한다

//그리고 지금 counter class에서는 static이 선언되어 있지 않은데
//왜 counter.value로 호출이 되는건지?
//>밑에서 counter라는 인스턴스를 만들었기 때문

//그런대 get을 쓰지 않아도 counter.value()가 아니라 counter.value로 호출되는건 왜일까
//내가 정리한거랑은 조금 다른 것 같은데

//고정값이 아니라 동적으로 바뀌는 프로퍼티는 constructor 밖에서 함수로 선언 후 리턴을 해준다
//이 떄, 함수형식이 아니라 프로퍼티처럼 호출하기 위하여 get을 사용한다

class Employee {
  constructor(name, department, worktime) {
    if (department === "hire") {
      this.name = name;
      this.department = department;
      this.worktime = worktime;
      // this.hiresalary();
    } else {
      this.name = name;
      this.department = department;
      this.worktime = worktime;
      this.tempsalary();
    }
  }

  hiresalary() {
    console.log(`월급은 ${this.worktime * 8000}입니다1`);
  }

  tempsalary() {
    return "월급은" + this.worktime * 10000 + "입니다2";
  }
}

const employee = new Employee("jack", "hire", 100);
const employee2 = new Employee("olsn", "temp", 100);

// employee.hiresalary;
// employee.hiresalary();
// console.log(employee2.tempsalary());

//인스턴스부터 선언한다
//const bob = new FullTimeEmployee('bob','sw',10);
//const jop = new PartTimeEmployee('job','sw',10);

//인스턴스 호출문을 선언한다
//console.log(bob.calculatePay());
//console.log(jon.calculatePay());

//미리 선언한 인스턴스의 부모클래스를 만들고 constructor과 미리 호출해둔 함수를 선언한다

//

// class Counter {
//   constructor(input) {
//     if (isNaN(input) || input < 0) {
//       this.value = 0;
//     } else {
//       this.value = input;
//     }
//   }
//   increase() {
//     this.value++;
//   }
// }

// const counter = new Counter(3);
// counter.increase();
// counter.increase();

// console.log(counter.value);

class Counter {
  c = "C";
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  get add() {
    console.log("getter");
  }

  set add(value) {
    console.log(value);
  }
}
const counter = new Counter("A", "B");

counter.add = "setter";
counter.add;
console.log(counter);
