const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    port      : process.env.PORT      ,
    dbhost    : process.env.DBHOST    ,
    dbport    : process.env.DBPORT    ,
    dbname    : process.env.DBNAME    ,
    jwtsecret : process.env.JWTSECRET
}