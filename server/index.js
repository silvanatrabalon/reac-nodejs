//with Express
const express = require('express');
const app = express();

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
); 
/*
//with NodeJS
const http = require('http');
const url = require('url');
const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url,true).query;
  switch (req.method) {
      case "GET":
        if (url.parse(req.url,true).pathname === '/api/greeting') {
            const name = queryObject.name  || 'World';
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify({ greeting: `Hello ${name}!` }));    
            res.end();
        }
        break;
      default:
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.write('404 NOT FOUND');
          res.end('hello word');
          break;
  }
});

server.listen(3001, () =>
  console.log('Node server is running on localhost:3001')
);
*/