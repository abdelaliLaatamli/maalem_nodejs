const { portfolioRepository } = require('./../repositories');


module.exports.createPortFolio = async ( request , response ) => {

    const { userId , portfolio } = request.body ;

    try{
        
        const createdportfolio = await portfolioRepository.createPortFolio(userId , portfolio);
        response.status(201).json( createdportfolio );
    }catch(err){
        console.log(err)
        response.status(200).json(err);
    }

    // response.status(200).json(request.body);

    
}