const { User , PortFolio } = require('../models');
const mongoose = require('mongoose');


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

    try {
        const session = await mongoose.startSession();     
                                     
        const createdPortFolio = await session.withTransaction(async () => { 

            const createdPortFolios = await PortFolio.create( [ portFolio ] , { session } );
            // console.log(createdPortFolio)
            // console.log(createdPortFolio[0]._id)
            // await User.findByIdAndUpdate( userId , { portfolio : reatedPortFolio[0]._id } , {  session  });
            await User.findByIdAndUpdate( userId , { portfolio : createdPortFolios[0]._id } , {  session  });
    
            return createdPortFolios;
        });

        session.endSession();

        console.log('success');
        return createdPortFolio ;
    } catch (error) {
        console.log(error);
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