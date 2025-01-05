const crypto = require("crypto");

const randomNum = (length) =>crypto.randomInt(0,Math.pow(10,length));

module.exports = randomNum;