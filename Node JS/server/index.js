const http = require('http')
const fs = require('fs')
const url = require('url')

const myServer = http.createServer((req, res) => {
     console.log('New req send by sahil meo');
     const myURL = url.parse(req.url, true)
     console.log(myURL)
     const log = `${Date.now()} : ${req.method} ${req.url}  new req received\n`
     fs.appendFile("log.txt", log, (err) => {
          if (err) {
               console.error('Error writing to log file:', err);
               res.end("Internal Server Error");
               return;
          }

          switch (req.url) {
               case '/':
                    res.end("You are on home page Right now");
                    break;
               case '/about':
                    res.end("Hey it's me Sahil Meo");
                    break;
               default:
                    res.end("Nothing is available yet on this path");
                    break;
          }
     })
})

myServer.listen(8000, () => {
     console.log('My Server Is Start');
})