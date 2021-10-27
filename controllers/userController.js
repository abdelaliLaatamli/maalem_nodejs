const { createUser , findUser } = require('./../repositories/userRepository');
const generateToken  = require('./../utils/jwt.utils');
const userHandleErrors = require('./../handlers/models/userHandlers');

module.exports.singUp = async ( request , response ) => {

    let { username , email, password , sex , bday } = request.body;

    try {
        const user = await createUser({ username , email, password , sex , bday });
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
        const user = await findUser(email , password);

        const token = generateToken(user._id);
        response.status(200).json({ user: user._id , token : token });

    }catch(err){
        const errors = userHandleErrors(err);
        response.status(400).json( errors );
    }


}