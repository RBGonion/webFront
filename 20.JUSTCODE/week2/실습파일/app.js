const users = [
  {
    id: 1,
    name: "Rebekah Johnson",
    email: "Glover12345@gmail.com",
    password: "123qwe",
  },
  {
    id: 2,
    name: "Fabian Predovic",
    email: "Connell29@gmail.com",
    password: "password",
  },
];

const posts = [
  {
    id: 1,
    title: "test1",
    content: "Node.js에 내장되어 있는 http 모듈을 사용해서 HTTP server를 구현.",
    userId: 1,
  },
  {
    id: 2,
    title: "test2",
    content: "Request/Response와 Stateless!!",
    userId: 1,
  },
  {
    id: 3,
    title: "test3",
    content: "Node.js에 내장되어 있는 http 모듈을 사용해서 HTTP server를 구현.",
    userId: 1,
  },
  {
    id: 1,
    title: "test4",
    content: "Node.js에 내장되어 있는 http 모듈을 사용해서 HTTP server를 구현.",
    userId: 1,
  },
  {
    id: 2,
    title: "test5",
    content: "Node.js에 내장되어 있는 http 모듈을 사용해서 HTTP server를 구현.",
    userId: 1,
  },
  {
    id: 3,
    title: "test6",
    content: "Node.js에 내장되어 있는 http 모듈을 사용해서 HTTP server를 구현.",
    userId: 1,
  },
];

function createUser(req, res) {
  const user = req.body.data;
  users.push({
    id: user.id,
    name: user.name,
    email: user.email,
    password: user.password,
  });

  console.log("after: ", users);

  res.json({ message: "USER_CREATED" });
}

function createPost(req, res) {
  const post = req.body.data;
  posts.push({
    id: post.id,
    title: post.title,
    content: post.content,
    userId: 1,
  });
  console.log(posts);
  res.json({ message: "postCreated" });
}

function readPost(req, res) {
  const post = req.body.data;
  res.json({ posts });
}

function modifyPost(req, res) {
  for (let item of posts) {
    if (item.id === 1) {
      item.content = "노드";
    }
  }
  console.log(posts);
  res.json({ message: "ok" });
}

function deletePost(req, res) {
  posts.pop();
  console.log(posts);
  res.json({ message: "delete" });
}

function searchUserPost(req, res) {
  const temp = [];

  for (let item of posts) {
    if (item.id === 1) {
      temp.push(item);
    }
  }

  res.json({
    data: {
      userID: 1,
      userName: "Rebekah Johnson",
      postings: temp,
    },
  });
}

//
//
//

const http = require("http");
const express = require("express");

const app = express();
app.use(express.json());

app.post("/signup", createUser);
app.post("/posting", createPost);
app.get("/readPost", readPost);
app.patch("/modifyPost", modifyPost);
app.delete("/delete", deletePost);
app.post("/searchUserPost", searchUserPost);

const server = http.createServer(app);
server.listen(8000, () => {
  console.log("ok");
});
