const bcrypt = require('bcryptjs');
const encryptPw = (text)=> bcrypt.hashSync(text); // salt is dafault if i haven't enetered 8 then its default value is 10

const decryptPw= (userData, hashedMeaasage) =>bcrypt.compareSync(userData,hashedMeaasage);

module.exports ={encryptPw, decryptPw};