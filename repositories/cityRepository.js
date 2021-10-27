const { City } = require('../models');


module.exports.getCities = async () => {
    try{
        return  await City.find().where({ status : true });
    }catch(e){
        throw e
    }
}


module.exports.getCity = async ( cityId ) => {
     
    try{

        const city = await City.findById( cityId ).where({ status : true });
        
        if( !city ){
            throw Error('City Not found');
        }

        return city ;
    }catch(e){
        throw e
    }
}



module.exports.createCity = async ( city ) => {

    try{
        return await City.create( city );
    } catch(e) {
        throw e;
    }

}


module.exports.updateCity = async ( cityId , city ) => {

    try{

        const cityFound = await City.findById( cityId ).where({ status : true});

        if( !cityFound ){
            throw Error('City Not found');
        }

        return await City.findByIdAndUpdate( cityId , city , { new: true } );

    }catch(e){
        throw e; 
    }
}

module.exports.deleleCity = async ( cityId ) => {

    try{
        const cityFound = await City.findById(cityId);

        if( !cityFound ){
            throw Error('City Not found');
        }

        return await City.findByIdAndUpdate( cityId , { status : false , deleted_at : Date.now() } );

    }catch(e){
        throw e ;
    }

}