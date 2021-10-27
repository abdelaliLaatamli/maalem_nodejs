const { Category } = require('./../models');


module.exports.allCategories = async () => {
    try{
        return  await Category.find({});
    }catch(e){
        throw e
    }
}

module.exports.createCategory = async ( category ) => {

    try{
        return await Category.create(category);
    } catch(e) {
        throw e;
    }

}


module.exports.updateCategory = async ( categoryId , category ) => {
    try{

        const updatedCategory = await Category.findByIdAndUpdate( categoryId , category , { new: true } );
        return updatedCategory;
    }catch(e){
        throw e; 
    }
}