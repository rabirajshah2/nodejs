const qrcode = require("qrcode");

const generateQr =  async(url) =>{
    const res = await qrcode.toString(url,{type : 'terminal'});
    return res;
}
module.exports ={generateQr}