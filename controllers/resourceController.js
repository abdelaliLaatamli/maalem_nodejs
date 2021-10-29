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

} 


module.exports.createResource  = async ( request , response ) => {

} 


module.exports.updateResource  = async ( request , response ) => {

} 



module.exports.deleteResource  = async ( request , response ) => {

} 