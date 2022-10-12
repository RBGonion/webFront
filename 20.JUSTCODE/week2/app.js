const http = require("http");

const server = http.createServer();

const httpRequestListener = function (req, res) {
  res.setHeader("Access-control-Allow-Origin", "*");
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Hello World!" }));
};
