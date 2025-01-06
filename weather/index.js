const http = require("http");
const {getWeather} = require("./weather");
const {dateFormatter} =require("./moment");

http.createServer(async(req, res)=>{
    res.writeHead(200,{"content-Type":"text/html"});
    const {sunrise,sunset}=await getWeather();
    const sunriseDate = dateFormatter(sunrise);
    const sunsetDate = dateFormatter(sunset);
    res.end(`Today's sunrise will be at ${sunriseDate} and sunset will be at ${sunsetDate}`);
}).listen(3777);
console.log("App is running on port 3777");