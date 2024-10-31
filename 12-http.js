const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("<h1>WELCOME TO OUR HOME PAGE</h1>");
    return;
  }
  if (req.url === "/about") {
    res.end("<h1>HERE IS ABOUT US PAGE</h1>");

    return;
  }

  res.end(
    `<h1> Ooops!</h1> 
    <p>we can't seem to find page you lookign for</p>
    <a href="/">back home</a>`
  );
});

server.listen(5000);
