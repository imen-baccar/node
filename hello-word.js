// console.log("HELLO WORLD");


var http = require("http");


let server = http.createServer((req, res) => {
  res.writeHead(200, { Content_Type: 'text/plain' });
  res.write("hello word")
  res.end();
});

server.listen(4000);
console.log("server listen to port 4000");