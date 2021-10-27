const { Zone } = require('../models');


module.exports.getZones = async () => {
    try{
        return  await Zone.find().where({ status : true }).populate('cities');
    }catch(e){
        throw e
    }
}


module.exports.getZone = async ( zoneId ) => {
     
    try{

        const zone = await Zone.findById( zoneId ).where({ status : true }).populate('cities');
        
        if( !zone ){
            throw Error('Zone Not found');
        }

        return zone ;
    }catch(e){
        throw e
    }
}



module.exports.createZone = async ( zone ) => {

    try{
        return await Zone.create( zone );
    } catch(e) {
        throw e;
    }

}


module.exports.updateZone = async ( zoneId , zone ) => {

    try{

        const zoneFound = await Zone.findById( zoneId ).where({ status : true});

        if( !zoneFound ){
            throw Error('Zone Not found');
        }

        return await Zone.findByIdAndUpdate( zoneId , zone , { new: true } );

    }catch(e){
        throw e; 
    }
}

module.exports.deleleZone = async ( zoneId ) => {

    try{
        const zoneFound = await Zone.findById(zoneId);

        if( !zoneFound ){
            throw Error('Skill Not found');
        }

        return await Zone.findByIdAndUpdate( zoneId , { status : false , deleted_at : Date.now() } );

    }catch(e){
        throw e ;
    }

}