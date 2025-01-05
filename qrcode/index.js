const {generateQR} = require('./qrcode')

const main = async () => {
    const result = await generateQR("https://rabirajsah.com.np");
    console.log(result);
}
main();
