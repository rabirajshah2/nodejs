const http = require("http");
const {genQR} =require("./qrcode");

http.createServer(async(req, res)=>{
    const myImage = await genQR("https://rabirajsah.com.np");
    res.writeHead(200,{"content-Type":"text/html"});
    res.end(`<img src="${myImage}">`);
}).listen(3777);

console.log("App is running on port 3777: ");

