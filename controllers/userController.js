const { User } = require('./../models/Models');
const { generateToken } = require('./../utils/jwt.utils');
const userHandleErrors = require('./../handlers/models/userHandlers');

module.exports.singUp = async ( request , response ) => {

    let { username , email, password , sex , bday } = request.body;

    try {

        const user = await User.create({ username , email, password , sex , bday });
        const token = generateToken(user._id);
        response.status(201).json({ user: user._id , token : token });

    } catch(err) {

        const errors = userHandleErrors(err);
        response.status(400).json({ errors });
        // response.status(400).json({ err });

    }
}