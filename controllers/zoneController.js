const { zoneRepository } = require('./../repositories');
const zoneHandleErrors = require('./../handlers/models/zoneHandlers');

module.exports.getZones = async ( request , response  ) => {

    try{
        const zones = await zoneRepository.getZones();
        response.status(200).json( zones );
    }catch(err){
        const errors = zoneHandleErrors(err);
        response.status(400).json( errors );
    }
    
}


module.exports.getZone = async ( request , response  ) => {

    const zoneId = request.params.id;

    try{
        const zone = await zoneRepository.getZone(zoneId);
        response.status(200).json( zone );
    }catch(err){
        const errors = zoneHandleErrors(err);
        response.status(400).json( errors );
    }
    
}



module.exports.createZone = async ( request , response ) => {

    try{
        const zone = await zoneRepository.createZone( request.body );

        response.status(201).json( zone );
    }catch(err){

        const errors = zoneHandleErrors(err);
        response.status(400).json( errors );

    }

}


module.exports.updateZone = async ( request , response ) => {

    const zoneId = request.params.id

    try{
        const zone = await zoneRepository.updateZone( zoneId , request.body );
        response.status(202).json( zone );
    }catch(err){
        const errors = zoneHandleErrors(err);
        response.status(400).json( errors );
    }

}

module.exports.deleteZone = async ( request , response ) => {

    const zoneId = request.params.id

    try{
        await zoneRepository.deleleZone( zoneId );
        response.sendStatus(204);
    }catch(err){
        const errors = zoneHandleErrors(err);
        response.status(400).json( errors );
    }

}