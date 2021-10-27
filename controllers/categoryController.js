const { createCategory , updateCategory , allCategories } = require("./../repositories/categoryRepository");
const categoryHandleErrors = require('./../handlers/models/categoryHandlers');



module.exports.allCategories = async (request , response) => {

    try{
        const categories = await allCategories();
        response.status(200).json( categories );
    }catch(err){
        response.status(400).json( {err} );
    }

}

module.exports.createCategory = async ( request , response ) => {

    try{
        const category = await createCategory(request.body);
        response.status(200).json( category );
    }catch(err){

        const errors = categoryHandleErrors(err);
        response.status(400).json( errors );
    }
    
}

module.exports.updateCategory = async ( request , response ) => {

    const categoryId = request.params.id;
    try{
        const updatedCategory = await updateCategory( categoryId , request.body ); //await upda(request.body);
        response.status(200).json( updatedCategory );
    }catch(err){

        const errors = categoryHandleErrors(err);
        response.status(400).json( errors );
    }


}