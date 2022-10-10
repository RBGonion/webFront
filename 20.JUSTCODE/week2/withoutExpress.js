const http = require("http");
const { url } = require("inspector");

const server = http.createServer((req, res) => {
  const { url, method } = req;
  console.log("req.url", req.url);
  console.log("req.method", req.method);
  console.log("res.url", res.url);
  console.log("res.method", res.method);
  console.log("request received");

  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ message: "welcome" }));
});

server.listen(8000, () => {
  console.log("8000:server.link");
});
