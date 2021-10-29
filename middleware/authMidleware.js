const jwt = require('jsonwebtoken');
const { jwtsecret } =  require('./../config');


const authMidleware = async ( request , response , next ) => {

    let token = request.headers.authorization

    if ( token ){

        token = token.replace("Bearer ", "");  
        try{
            let isVerified = jwt.verify(token, jwtsecret );
        }catch(e){
            response.status(401).json({ msg : 'you are not authorized' });
        }
        next();
    }else{
        response.status(401).json({ msg : 'you are not authorized' });
    }

}



module.exports = authMidleware;