const { cityRepository } = require('./../repositories');
const cityHandleErrors = require('./../handlers/models/cityHandlers');

module.exports.getCities = async ( request , response  ) => {

    try{
        const cities = await cityRepository.getCities();
        response.status(200).json( cities );
    }catch(err){
        const errors = cityHandleErrors(err);
        response.status(400).json( errors );
    }
    
}


module.exports.getCity = async ( request , response  ) => {

    const cityId = request.params.id;

    try{
        const city = await cityRepository.getCity(cityId);
        response.status(200).json( city );
    }catch(err){
        const errors = cityHandleErrors(err);
        response.status(400).json( errors );
    }
    
}



module.exports.createCity = async ( request , response ) => {

    try{
        const city = await cityRepository.createCity( request.body );

        response.status(201).json( city );
    }catch(err){

        const errors = cityHandleErrors(err);
        response.status(400).json( errors );

    }

}


module.exports.updateCity = async ( request , response ) => {

    const cityId = request.params.id

    try{
        const city = await cityRepository.updateCity( cityId , request.body );
        response.status(202).json( city );
    }catch(err){
        const errors = cityHandleErrors(err);
        response.status(400).json( errors );
    }

}

module.exports.deleteCity = async ( request , response ) => {

    const cityId = request.params.id

    try{
        await cityRepository.deleleCity( cityId );
        response.sendStatus(204);
    }catch(err){
        const errors = cityHandleErrors(err);
        response.status(400).json( errors );
    }

}