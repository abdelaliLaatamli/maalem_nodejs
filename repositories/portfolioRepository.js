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

    try{
        // mongoose
        // const session = await PortFolio.startSession();
        const session = await mongoose.startSession();

        const createdPortFolios = await session.withTransaction( async () => {
            console.log(portFolio)
            const createdPortFolio = await PortFolio.create( [portFolio] , { session: session } );
            console.log(createdPortFolio._id)
            // await User.findByIdAndUpdate( userId , { portfolio : createdPortFolio._id } );
            await User.findByIdAndUpdate( userId , { portfolio :createdPortFolio._id } , { session: session });
            return createdPortFolio;
            // return Customer.create([{ name: 'Test' }], { session: session })
        });
 
        session.endSession();
        return createdPortFolios;
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