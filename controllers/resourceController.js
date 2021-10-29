const { resourceRepository } = require('./../repositories')
const { resourcesHandleErrors } = require('./../handlers/models');

module.exports.getResources = async ( request , response ) => {

    try{
        const resources = await resourceRepository.getResources();
        response.status(200).json( resources );
    }catch(err){
        const errors = resourcesHandleErrors(err);
        response.status(400).json( errors );
    }

} 


module.exports.getResource  = async ( request , response ) => {

    const resourceId = request.params.id ;

    try{
        const resource = await resourceRepository.getResource(resourceId);
        response.status(200).json( resource );
    }catch(err){
        const errors = resourcesHandleErrors(err);
        response.status(400).json( errors );
    }
} 


module.exports.createResource  = async ( request , response ) => {
    const resource = request.body;
    try{
        const createdResource = await resourceRepository.createResource(resource);
        response.status(201).json( createdResource );
    }catch(err){
        const errors = resourcesHandleErrors(err);
        response.status(400).json( errors );
    }

} 


module.exports.updateResource  = async ( request , response ) => {

    const resourceId = request.params.id ;
    const resource = request.body;

    try{

        const updatedResource = await resourceRepository.updateResource( resourceId , resource );
        response.status(202).json( updatedResource );

    }catch(err){

        const errors = resourcesHandleErrors(err);
        response.status(400).json( errors );

    }
} 



module.exports.deleteResource  = async ( request , response ) => {
    const resourceId = request.params.id

    try{
        await resourceRepository.deleleResource( resourceId );
        response.sendStatus(204);
    }catch(err){
        const errors = resourcesHandleErrors(err);
        response.status(400).json( errors );
    }
} 