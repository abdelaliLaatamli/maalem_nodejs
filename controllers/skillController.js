const { getSkills , createSkill , getSkill , updateSkill , deleleSkill } = require('./../repositories/skillRepository');
const skillHandleErrors = require('./../handlers/models/skillHandlers');

module.exports.getSkills = async ( request , response  ) => {

    try{
        const skills = await getSkills();
        response.status(200).json( skills );
    }catch(err){
        const errors = skillHandleErrors(err);
        response.status(400).json( errors );
    }
    
}


module.exports.getSkill = async ( request , response  ) => {

    const skillId = request.params.id;

    try{
        const skill = await getSkill(skillId);
        response.status(200).json( skill );
    }catch(err){
        const errors = skillHandleErrors(err);
        response.status(400).json( errors );
    }
    
}



module.exports.createSkill = async ( request , response ) => {

    try{
        const skill = await createSkill( request.body );
        response.status(201).json( skill );
    }catch(err){

        const errors = skillHandleErrors(err);
        response.status(400).json( errors );

    }

}


module.exports.updateSkill = async ( request , response ) => {

    const skillId = request.params.id

    try{
        const skill = await updateSkill( skillId , request.body );
        response.status(202).json( skill );
    }catch(err){
        const errors = skillHandleErrors(err);
        response.status(400).json( errors );
    }

}

module.exports.deleteSkill = async ( request , response ) => {

    const skillId = request.params.id

    try{
        await deleleSkill( skillId );
        response.sendStatus(204);
    }catch(err){
        const errors = skillHandleErrors(err);
        response.status(400).json( errors );
    }

}