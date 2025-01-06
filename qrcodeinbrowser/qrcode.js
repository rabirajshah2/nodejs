const QRCode = require('qrcode')

const genQR = async(url) =>{
    const result =await QRCode.toDataURL(url);
    return result;
}

module.exports = {genQR}

