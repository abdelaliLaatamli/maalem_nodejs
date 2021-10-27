const { Category } = require('./../models/index');

module.exports.createCategory = async ( category ) => {

    try{
        
        return await Category.create(category);
    } catch(e) {
        throw e;
    }


}