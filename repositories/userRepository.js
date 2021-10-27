const { User } = require('./../models/index');
const bcrypt = require('bcrypt');


module.exports.createUser= async (user) => {

    try {
        return await User.create(user);
    } catch( err ) {
        throw err ;
    }   

}


module.exports.findUser = async ( email , password ) => {
    try{

        const user = await User.findOne({ email });
        if( !user ){
            throw Error('User not Found');
        }

        const auth = await bcrypt.compare( password , user.password );

        if( auth ){
            return user;
        }

        throw Error('incorrect password');

    }catch(err){
        throw err ;
    }
}


module.exports.userProfile = async ( userId ) => {

    try{

        // const user = await User.findById( userId )//.where({ status : true }).populate('cities');
        const user = await User.findById( userId ).where({ status : true }).populate('portfolio');
        
        if( !user ){
            throw Error('User Not found');
        }

        return user ;
    }catch(e){
        throw e
    }


}