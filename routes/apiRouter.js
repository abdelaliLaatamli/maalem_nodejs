const express = require('express') ;
const userController = require('./../controllers/userController');
const categoryController = require('./../controllers/categoryController');


// routes 
exports.router = (()=>{

    var apiRouter = express.Router();

    // user routes
    apiRouter.route('/register').post( userController.singUp );
    apiRouter.route('/login').post( userController.login );
    // apiRouter.route('/user/profile').get( userAPI.getUserProfile );
    // apiRouter.route('/user').get( userAPI.getuserDetails );
    // apiRouter.route('/user').put( userAPI.getUserUpdate );
    apiRouter.route('/categories').post( categoryController.createCategory  );

    return apiRouter;

})();