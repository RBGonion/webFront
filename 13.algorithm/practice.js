let obj = {
  func1: function () {
    console.log(this);
  },
  property1: "value1",
  property2: "value2",
};

let obj2 = {
  useCall1: "value1",
  useCall2: function () {
    console.log("usecall");
  },
};

obj.func1();
console.log("////");
obj.func1.call(obj2);
