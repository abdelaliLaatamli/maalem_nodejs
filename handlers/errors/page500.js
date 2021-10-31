const logger = require('./../logger')


module.exports =  (error, req, res, next) => {

    if( typeof error === 'string' ){
        logger.error(error);
    } else if( typeof error === 'object' ){

        if( error.stack ){
            const errordetails = regexError(error.stack)
            logger.error({ message : error.message , error : errordetails });
        }

    }
    
    res.status(500).json({ error : 'Something broke!' });

}


const regexError = (errorStack) => {
    
    const regex = /at\s(.*\w*.\w+):(\d+):\d+/m;

    const match = errorStack.match(regex);
    
    const error = { file : match[1] , line: match[2] } ;

    return error;

}