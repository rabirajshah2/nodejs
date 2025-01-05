// server => API => browser(react) 

const http = require('http');
const myModule = require("./myModule");
const numFor = require("./numFormatter");

const otp =require("./randomNumber");

http.createServer((req, res ) => {
res.writeHead(200, { 'content-Type': 'text/plain'});
const result = myModule.capitalize("my name is rabi raj sah");
const lower = myModule.lowerize(result);

const resultFormatter =numFor(10000000);

const val =otp(5);

res.end(result + " " + lower + " , " + resultFormatter + " The random num is" + val);
}).listen(4000);

console.log("App is running");