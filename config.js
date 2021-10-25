const dotenv = require('dotenv');
dotenv.config();
// console.log(`Your port is ${process.env.PORT}`); // 8626

module.exports = {
    port : process.env.PORT
}