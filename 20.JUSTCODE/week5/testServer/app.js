const express = require("express");
const app = express();
const cors = require("cors"); // cors 모듈 호출

app.use(express.json()); // body-parser
app.use(express.urlencoded({ extended: true })); // body-parser
// extended: true의 경우, 객체 형태로 전달된 데이터 내에서 또 다른 중첩된 객체를 허용
// extended: false의 경우, 중첩된 객체를 허용하지 않음

app.use(cors()); // cors 모듈 적용

app.get("/user/signup", function (req, res) {
  res.send("Hello World");
});

app.post("/user/signup", (req, res) => {
  console.log(req, res);
});

app.listen(4000);
