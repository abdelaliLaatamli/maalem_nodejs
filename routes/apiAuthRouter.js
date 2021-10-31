const express            = require('express') ;
const { userController } = require('./../controllers');

// routes 
exports.router = (()=>{

    const authRouter = express.Router();

    // auth routes
    authRouter.route('/register').post( userController.singUp );
    authRouter.route('/login').post( userController.login );

    return authRouter;

})();