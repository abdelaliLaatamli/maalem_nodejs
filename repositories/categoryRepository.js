const { Category } = require('./../models');


module.exports.allCategories = async () => {
    try{
        return  await Category.find({});
    }catch(e){
        throw e
    }
}


module.exports.getCategory = async ( categoryId ) => {
    try{
        const category = await Category.findById(categoryId);

        if( !category ){
            throw Error('Category Not found');
        }

        return category ;
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
        const categoryFound = await Category.findById(categoryId);

        if( !categoryFound ){
            throw Error('Category Not found');
        }
        const updatedCategory = await Category.findByIdAndUpdate( categoryId , category , { new: true } );
        return updatedCategory;
    }catch(e){
        throw e; 
    }
}

module.exports.deleleCategory = async ( categoryId ) => {

    try{
        const categoryFound = await Category.findById(categoryId);

        if( !categoryFound ){
            throw Error('Category Not found');
        }
        
        return await Category.findByIdAndDelete(categoryId , { new: true });
        // return await Category.findByIdAndRemove(categoryId , { new: true });
    }catch(e){
        throw e ;
    }

}