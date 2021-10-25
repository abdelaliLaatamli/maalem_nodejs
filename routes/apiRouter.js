const express = require('express') ;
const userController = require('./../controllers/userController');


// routes 
exports.router = (()=>{

    var apiRouter = express.Router();

    // user routes
    apiRouter.route('/user/register').get( userController.singUp );
    // apiRouter.route('/user/register/').post( userAPI.register );
    // apiRouter.route('/user/login/').post( userAPI.login );
    // apiRouter.route('/user/profile').get( userAPI.getUserProfile );
    // apiRouter.route('/user').get( userAPI.getuserDetails );
    // apiRouter.route('/user').put( userAPI.getUserUpdate );

    return apiRouter;

})();