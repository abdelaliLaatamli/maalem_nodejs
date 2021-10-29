const { User , PortFolio , Resources } = require('../models');
const mongoose = require('mongoose');



module.exports.getPortFolio = async ( portfolioId ) => {
     
    try{

        const portfolio = await PortFolio.findById( portfolioId );//.where({ status : true });
        
        if( !portfolio ){
            throw Error('Portfolio Not found');
        }

        return portfolio ;
    }catch(e){
        throw e
    }
}


module.exports.createPortFolio = async ( userId , portFolio ) => {

    const session = await mongoose.startSession(); 

    session.startTransaction();

    try {

        const user = await User.findById(userId);

        if( !user ){
            throw Error('User not found');
        }

        if( user.portfolio != null ){
            throw Error('User already have a portFolio');
        }

        // check resouces is 
        if( portFolio.resources ){

            if( portFolio.resources.length > 0 ){
                // TODO: chech if object for create or just string 
                const resourcesDto = portFolio.resources;
                const resources = await Resources.create( resourcesDto , {session} );
                const resourseIds = resources.map( resource => resource._id );
                portFolio.resources = resourseIds
            }

        }



        const createdPortFolios = await PortFolio.create( [ portFolio ] , { session } );

        if( createdPortFolios.length !== 1 ){
            throw Error(`PortFolio Objects ${createdPortFolios.length}`);
        }

        const createdPortFolio = createdPortFolios[0] ;

        if( !createdPortFolio._id ){
            throw Error('PortFolio Not Created');
        }

        await User.findByIdAndUpdate( userId , { portfolio : createdPortFolio._id } , {  session  });
       
        await session.commitTransaction();
        session.endSession();

        console.log('success');

        return createdPortFolio ;

    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        console.log(error);
        console.log('faild');
        throw error ;
    }

}


module.exports.updatePortfolio = async ( portfolioId , portFolio ) => {


    const session = await mongoose.startSession(); 

    session.startTransaction();

    try {


        // check resouces is 
        if( portFolio.resources ){

            if( portFolio.resources.length > 0 ){

                // TODO: chech if object for create or just string 
                const resourcesbkp = portFolio.resources;
                const resourcesIds = resourcesbkp.filter( resource => typeof resource === 'string' );
                const resourcesDto = resourcesbkp.filter( resource => typeof resource === 'object' );
                const resources = await Resources.create( resourcesDto , {session} );
                const resourseCreatedIds = resources.map( resource => resource._id );
                const resourcesAllIds = [ ...resourcesIds , ...resourseCreatedIds ];
                portFolio.resources = resourcesAllIds;
            }
    
        }

        const updatedPortFolio = await PortFolio.findByIdAndUpdate( portfolioId , portFolio , {  session , new : true  });
       
        await session.commitTransaction();
        session.endSession();

        console.log('success');

        return updatedPortFolio ;

    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        console.log(error);
        console.log('faild');
        throw error ;
    }

    // return { portfolioId , portFolio }
    // try{

    //     const cityFound = await PortFolio.findById( portfolioId ).where({ status : true});

    //     if( !cityFound ){
    //         throw Error('City Not found');
    //     }

    //     return await PortFolio.findByIdAndUpdate( portfolioId , portFolio , { new: true } );

    // }catch(e){
    //     throw e; 
    // }
}

module.exports.delelePortfolio = async ( portfolioId ) => {
    
    const session = await mongoose.startSession(); 

    session.startTransaction();

    try {

        const user = await User.findOne( { portfolio : portfolioId } );

        const portFolio = await PortFolio.findById( portfolioId );

        if( !portFolio ){
            throw Error('Portfolio Not found');
        }

        await PortFolio.findByIdAndDelete( portfolioId  , {  session  });
        

        await User.findByIdAndUpdate( user._id , { portfolio: null } , {session} );//findOne( { portfolio : portfolioId } );
       
        await session.commitTransaction();
        session.endSession();

        console.log('success');

        // return createdPortFolio ;

    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        // console.log(error);
        console.log('faild');
        throw error ;
    }

}