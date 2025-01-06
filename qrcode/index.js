const {generateQr} = require("./qrcode");
 
console.log(generateQr("https://rabiraj.com.np"));

const main = async () =>{
    console.log(await generateQr("https://rabiraj.com.np"));
}
main();