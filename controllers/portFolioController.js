const { portfolioRepository } = require('./../repositories');
const portFolioHandlers = require('./../handlers/models/portFolioHandlers');

module.exports.getPortFolio = async ( request , response ) => {

    const portfolioId = request.params.id ;

    try{
        
        const portfolio = await portfolioRepository.getPortFolio( portfolioId );
        response.status(200).json( portfolio );

    }catch(err){

        const errors = portFolioHandlers(err); 
        response.status(400).json(errors);

    }

    
}


module.exports.createPortFolio = async ( request , response ) => {

    const { userId , portfolio } = request.body ;

    try{
        
        const createdportfolio = await portfolioRepository.createPortFolio(userId , portfolio);
        response.status(201).json( createdportfolio );

    }catch(err){
        const errors = portFolioHandlers(err); 
        response.status(400).json(errors);
    }

    
}


module.exports.deletePortFolio = async ( request , response ) => {

    const portfolioId = request.params.id ;

    try{
        
        // const portfolio = await portfolioRepository.deletePortFolio( portfolioId );
        await portfolioRepository.delelePortfolio( portfolioId );
        response.sendStatus(204); //sendStatus(204);

    }catch(err){

        const errors = portFolioHandlers(err); 
        response.status(400).json(errors);

    }

    
}