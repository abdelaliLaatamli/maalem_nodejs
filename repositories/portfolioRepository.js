const { PortFolio } = require('../models');


// module.exports.getCities = async () => {
//     try{
//         return  await City.find().where({ status : true });
//     }catch(e){
//         throw e
//     }
// }


module.exports.getPortFolio = async ( userId ) => {
     
    // try{

    //     const city = await PortFolio.findById( cityId ).where({ status : true });
        
    //     if( !city ){
    //         throw Error('City Not found');
    //     }

    //     return city ;
    // }catch(e){
    //     throw e
    // }
}



module.exports.createPortFolio = async ( userId , portFolio ) => {

    try{
        return await PortFolio.create( city );
    } catch(e) {
        throw e;
    }

}


module.exports.updatePortfolio = async ( portfolioId , portFolio ) => {

    try{

        const cityFound = await PortFolio.findById( portfolioId ).where({ status : true});

        if( !cityFound ){
            throw Error('City Not found');
        }

        return await PortFolio.findByIdAndUpdate( portfolioId , portFolio , { new: true } );

    }catch(e){
        throw e; 
    }
}

module.exports.delelePortfolio = async ( portfolioId , userId ) => {

    try{
        const portfolioFound = await PortFolio.findById(portfolioId);

        if( !portfolioFound ){
            throw Error('City Not found');
        }

        return await PortFolio.findByIdAndUpdate( portfolioId , { status : false , oldUser : userId  , deleted_at : Date.now() } );

    }catch(e){
        throw e ;
    }

}