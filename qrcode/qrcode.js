const qrcode= require("qrcode");

const generateQR = async (url) => {
    try {
      const result=(await qrcode.toString(url,{type:'terminal'}));
      return result;
    } catch (err) {
      console.error(err)
    }
  }
  module.exports={generateQR};

