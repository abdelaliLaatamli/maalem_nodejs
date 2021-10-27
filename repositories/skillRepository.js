const { Skill } = require('../models');


module.exports.getSkills = async () => {
    try{
        return  await Skill.find().where({ status : true }).populate('category');
    }catch(e){
        throw e
    }
}


module.exports.getSkill = async ( skillId ) => {
     
    try{

        const skill = await Skill.findById(skillId).where({ status : true }).populate('category').exec();
        
        if( !skill ){
            throw Error('Skill Not found');
        }

        return skill ;
    }catch(e){
        throw e
    }
}



module.exports.createSkill = async ( skill ) => {

    try{
        return await Skill.create( skill );
    } catch(e) {
        throw e;
    }

}


module.exports.updateSkill = async ( skillId , skill ) => {

    try{

        const skillFound = await Skill.findById( skillId ).where({ status : true});

        if( !skillFound ){
            throw Error('Skill Not found');
        }

        return await Skill.findByIdAndUpdate( skillId , skill , { new: true } );

    }catch(e){
        throw e; 
    }
}

module.exports.deleleSkill = async ( skillId ) => {

    try{
        const skillFound = await Skill.findById(skillId);

        if( !skillFound ){
            throw Error('Skill Not found');
        }

        return await Skill.findByIdAndUpdate( skillId , { status : false , deleted_at : Date.now() } );

    }catch(e){
        throw e ;
    }

}