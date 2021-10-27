const { 
    createCategory ,
    updateCategory ,
    allCategories ,
    getCategory ,
    deleleCategory
} = require("./../repositories/categoryRepository");
const categoryHandleErrors = require('./../handlers/models/categoryHandlers');



module.exports.allCategories = async (request , response) => {

    try{
        const categories = await allCategories();
        response.status(200).json( categories );
    }catch(err){
        const errors = categoryHandleErrors(err);
        response.status(400).json( errors );
    }

}

module.exports.getCategory = async ( request , response ) => {

    const categoryId = request.params.id

    try{
        const category = await getCategory( categoryId );
        response.status(200).json( category )
    }catch(err){
        const errors = categoryHandleErrors(err);
        response.status(400).json( errors );
    }

}


module.exports.createCategory = async ( request , response ) => {

    try{
        const category = await createCategory(request.body);
        response.status(201).json( category );
    }catch(err){

        const errors = categoryHandleErrors(err);
        response.status(400).json( errors );
    }
    
}

module.exports.updateCategory = async ( request , response ) => {

    const categoryId = request.params.id;
    try{
        const updatedCategory = await updateCategory( categoryId , request.body );
        response.status(202).json( updatedCategory );
    }catch(err){
        const errors = categoryHandleErrors(err);
        response.status(400).json( errors );
    }

}


module.exports.deleteCategory = async ( request , response ) => {

    const categoryId = request.params.id;

    try{
        await deleleCategory( categoryId  ); 
        response.sendStatus(204);
    }catch(err){
        const errors = categoryHandleErrors(err);
        response.status(400).json( errors );
    }
} 