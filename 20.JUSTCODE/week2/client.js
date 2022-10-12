const fs = require("fs");

fs.readFile("./sendPostings.js", (err, data) => {
  console.log(data.toString());
});
