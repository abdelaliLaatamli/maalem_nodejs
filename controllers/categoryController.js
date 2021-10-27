const { createCategory } = require("./../repositories/categoryRepository");
const categoryHandleErrors = require('./../handlers/models/categoryHandlers');

module.exports.createCategory = async ( request , response ) => {

    // const { name , subCategories  , skills  } = request.body;
    try{
        const category = await createCategory(request.body);
        console.log( category )
        response.status(200).json( category );
    }catch(err){

        // console.log( err )
        const errors = categoryHandleErrors(err)
        response.status(400).json( errors );
    }

    
}