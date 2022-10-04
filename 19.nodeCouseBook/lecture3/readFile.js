const fs = require("fs");

fs.readFile("./readme.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log("1번", data.toString());
  fs.readFile("./readme.txt", (err, data) => {
    if (err) {
      throw err;
    }
    console.log("2번", data.toString());
    fs.readFile("./readme.txt", (err, data) => {
      if (err) {
        throw err;
      }
      console.log("3번", data.toString());
    });
  });
});

fs.readFile("./readme.txt")
  .then((data) => {
    console.log("1번", data.toString());
    return fs.readFile("./readme.txt");
  })
  .then((data) => {
    console.log("2번", data.toString());
    return fs.readFile("./readme.txt");
  })
  .then((data) => {
    console.log("3번", data.toString());
    return fs.readFile("./readme.txt");
  })
  .catch((err) => {
    console.error(err);
  });

async function main() {
  let data = await fs.readFile("./readme.txt");
  console.log("1번", data.toString());
  data = await fs.readFile("./readme.txt");
  console.log("2번", data.toString());
  data = await fs.readFile("./readme.txt");
  console.log("3번", data.toString());
}
main();
