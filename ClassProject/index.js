const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200; //success response code
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hwelcome to new class!\n');
});

server.listen(port, hostname, () => {
  console.log('Server is running successfully on local host');
});