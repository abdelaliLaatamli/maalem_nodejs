const express = require('express') ;
const { userController , categoryController } = require('./../controllers');


// routes 
exports.router = (()=>{

    var apiRouter = express.Router();

    // user routes
    apiRouter.route('/register').post( userController.singUp );
    apiRouter.route('/login').post( userController.login );
    // apiRouter.route('/user/profile').get( userAPI.getUserProfile );
    // apiRouter.route('/user').get( userAPI.getuserDetails );
    // apiRouter.route('/user').put( userAPI.getUserUpdate );

    // category routes
    apiRouter.route('/categories').get( categoryController.allCategories );
    apiRouter.route('/categories/:id').get( categoryController.getCategory );
    apiRouter.route('/categories').post( categoryController.createCategory );
    apiRouter.route('/categories/:id').put( categoryController.updateCategory );
    apiRouter.route('/categories/:id').delete( categoryController.deleteCategory );

    return apiRouter;

})();