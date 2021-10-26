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