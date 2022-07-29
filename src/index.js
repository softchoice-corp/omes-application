const http = require('http');
const port = process.env.PORT || 3000;

// Current date 
var now = new Date();
var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = now - start;
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay);

const mathOperations = require('./calculator');
var result = mathOperations.sum(day,7)

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = ('This is a sample NodeJS application for OMES!!!!!!!\nThe application adds 7 days to the current day of the year - ' + day + '.\n\n' + day + '+7=' + result)
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
