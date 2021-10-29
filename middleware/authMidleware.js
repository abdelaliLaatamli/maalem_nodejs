const jwt = require('jsonwebtoken');
const { jwtsecret } =  require('./../config');


const authMidleware = async ( request , response , next ) => {

    let token = request.headers.authorization

    if ( !token ){

        response.status(401).json({ msg : 'you are not authorized' });
    }

    token = token.replace("Bearer ", "");  
    try{
        let isVerified = jwt.verify(token, jwtsecret );
    }catch(e){
        response.status(401).json({ msg : 'you are not authorized' });
    }
    // go to next page 
    next();

}



module.exports = authMidleware;