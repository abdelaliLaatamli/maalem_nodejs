const express = require('express') ;
const {
    userController , 
    categoryController , 
    skillController ,
    zoneController ,
    cityController,
    portFolioController ,
    resourceController
} = require('./../controllers');
// const { authMidleware , pMidleware } = require('./../middleware');

// routes 
exports.router = (()=>{

    const apiRouter = express.Router();

    // // user routes
    // apiRouter.route('/register').post( userController.singUp );
    // apiRouter.route('/login').post( userController.login );
    apiRouter.route('/user/profile').get( userController.userProfile );
    // apiRouter.route('/user').get( userAPI.getuserDetails );
    // apiRouter.route('/user').put( userAPI.getUserUpdate );

    // category routes
    apiRouter.route('/categories').get( categoryController.allCategories );
    apiRouter.route('/categories/:id').get( categoryController.getCategory );
    apiRouter.route('/categories').post( categoryController.createCategory );
    apiRouter.route('/categories/:id').put( categoryController.updateCategory );
    apiRouter.route('/categories/:id').delete( categoryController.deleteCategory );


    // skills routes
    apiRouter.route('/skills').get( skillController.getSkills );
    apiRouter.route('/skills/:id').get( skillController.getSkill );
    apiRouter.route('/skills').post( skillController.createSkill );
    apiRouter.route('/skills/:id').put( skillController.updateSkill );
    apiRouter.route('/skills/:id').delete( skillController.deleteSkill );


    // zone routes
    apiRouter.route('/zones').get( zoneController.getZones );
    apiRouter.route('/zones/:id').get( zoneController.getZone );
    apiRouter.route('/zones').post( zoneController.createZone );
    apiRouter.route('/zones/:id').put( zoneController.updateZone );
    apiRouter.route('/zones/:id').delete( zoneController.deleteZone );

    
    // city routes
    apiRouter.route('/cities').get( cityController.getCities );
    apiRouter.route('/cities/:id').get( cityController.getCity );
    apiRouter.route('/cities').post( cityController.createCity );
    apiRouter.route('/cities/:id').put( cityController.updateCity );
    apiRouter.route('/cities/:id').delete( cityController.deleteCity );


    // portfolio routes
    apiRouter.route('/portfolios').post( portFolioController.createPortFolio );
    apiRouter.route('/portfolios/:id').get( portFolioController.getPortFolio );
    apiRouter.route('/portfolios/:id').put( portFolioController.updatePortFolio );
    apiRouter.route('/portfolios/:id').delete( portFolioController.deletePortFolio );

    // city routes
    apiRouter.route('/resources').get( resourceController.getResources );
    apiRouter.route('/resources/:id').get( resourceController.getResource );
    apiRouter.route('/resources').post( resourceController.createResource );
    apiRouter.route('/resources/:id').put( resourceController.updateResource );
    apiRouter.route('/resources/:id').delete( resourceController.deleteResource );

    return apiRouter;

})();