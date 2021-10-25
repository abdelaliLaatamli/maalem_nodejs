const { User } = require('./../models/Models');



module.exports.singUp = async ( request , response ) => {

        let { username , email, password , sex , bday } = request.body;
        bday = new Date(bday);

        try {
            const user = await User.create({ username , email, password , sex , bday });
            console.log( user );
        // const token = createToken(user._id);
        // res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
            response.status(201).json({ user: user._id });
        } catch(err) {
            console.log( err );
            // const errors = handleErrors(err);
            // res.status(400).json({ errors });
            response.status(400).json({ err });
        }
}