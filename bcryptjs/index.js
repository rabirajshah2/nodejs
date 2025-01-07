const {encryptPw, decryptPw} = require("./bcrypt");

const userData = "rabiraj";
const result = encryptPw(userData);
console.log(result);

const isTrue = decryptPw(userData,result);
console.log(isTrue);