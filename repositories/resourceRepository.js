const { Resource } = require('../models');


module.exports.getResources = async () => {
    try{
        return  await Resource.find().where({ status : true }).populate('category');
    }catch(e){
        throw e
    }
}


module.exports.getResource = async ( resourceId ) => {
     
    try{

        const resources = await Resource.findById(resourceId).where({ status : true });;//.populate('category').exec();
        
        if( !resources ){
            throw Error('Resource Not found');
        }

        return resources ;
    }catch(e){
        throw e
    }
}



module.exports.createResource = async ( resource ) => {

    try{
        return await Resource.create( resource );
    } catch(e) {
        throw e;
    }

}


module.exports.updateResource = async ( resourceId , resource ) => {

    try{

        const resourceFound = await Resource.findById( resourceId ).where({ status : true});

        if( !resourceFound ){
            throw Error('Resource Not found');
        }

        return await Resource.findByIdAndUpdate( resourceId , resource , { new: true } );

    }catch(e){
        throw e; 
    }
}

module.exports.deleleResource = async ( resourceId ) => {

    try{
        const resourceFound = await Resource.findById(resourceId);

        if( !resourceFound ){
            throw Error('Resource Not found');
        }

        return await Resource.findByIdAndUpdate( resourceId , { status : false , deleted_at : Date.now() } );

    }catch(e){
        throw e ;
    }

}