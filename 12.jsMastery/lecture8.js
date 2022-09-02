let apple = {
  name: "apple",
  "hello-bye": "😄",
  0: 1,
  ["hello-bye1"]: "😃",
};
console.log(apple["hello-bye1"]);
apple.emoji = "👺";

console.log(apple.emoji);
console.log(apple["emoji"]);

function addKey(obj, key, value) {
  obj[key] = value;
}

class Fruit {
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
}
const apple1 = new Fruit("apple", "ap");
const orange = new Fruit("orange", "ora");

console.log(apple1);
console.log(orange);
console.log(apple1.name);
console.log(apple1.emoji);
apple1.display();
