const { skillRepository } = require('./../repositories');
const skillHandleErrors = require('./../handlers/models/skillHandlers');

module.exports.getSkills = async ( request , response  ) => {

    try{
        const skills = await skillRepository.getSkills();
        response.status(200).json( skills );
    }catch(err){
        const errors = skillHandleErrors(err);
        response.status(400).json( errors );
    }
    
}


module.exports.getSkill = async ( request , response  ) => {

    const skillId = request.params.id;

    try{
        const skill = await skillRepository.getSkill(skillId);
        response.status(200).json( skill );
    }catch(err){
        const errors = skillHandleErrors(err);
        response.status(400).json( errors );
    }
    
}



module.exports.createSkill = async ( request , response ) => {

    try{
        const skill = await skillRepository.createSkill( request.body );

        response.status(201).json( skill );
    }catch(err){
        console.log( err )
        const errors = skillHandleErrors(err);
        response.status(400).json( errors );

    }

}


module.exports.updateSkill = async ( request , response ) => {

    const skillId = request.params.id

    try{
        const skill = await skillRepository.updateSkill( skillId , request.body );
        response.status(202).json( skill );
    }catch(err){
        const errors = skillHandleErrors(err);
        response.status(400).json( errors );
    }

}

module.exports.deleteSkill = async ( request , response ) => {

    const skillId = request.params.id

    try{
        await skillRepository.deleleSkill( skillId );
        response.sendStatus(204);
    }catch(err){
        const errors = skillHandleErrors(err);
        response.status(400).json( errors );
    }

}