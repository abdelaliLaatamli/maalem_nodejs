const { userRepository } = require('./../repositories');
const generateToken  = require('./../utils/jwt.utils');
const userHandleErrors = require('./../handlers/models/userHandlers');

module.exports.singUp = async ( request , response ) => {

    let { username , email, password , sex , bday } = request.body;

    try {
        const user = await userRepository.createUser({ username , email, password , sex , bday });
        const token = generateToken(user._id);
        response.status(201).json({ user: user._id , token : token });
    } catch(err) {

        const errors = userHandleErrors(err);
        response.status(400).json({ errors });

    }
}



module.exports.login = async ( request , response ) => {

    const { email , password } = request.body;

    try{
        const user = await userRepository.findUser(email , password);

        const token = generateToken(user._id);
        response.status(200).json({ user: user._id , token : token });

    }catch(err){
        const errors = userHandleErrors(err);
        response.status(400).json( errors );
    }


}


module.exports.userProfile = async( request , response ) => {

    const loggedUserId = "6179ba77b1b554b91ad96b08";

    try{
        const userProfile = await userRepository.userProfile(loggedUserId);
        response.status(200).json( userProfile );
    }catch(err){
        const errors = userHandleErrors(err);
        response.status(400).json( errors );
    }
    

}   