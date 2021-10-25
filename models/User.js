const mongoose = require('mongoose');



const userShema = new mongoose.Schema({
    username : {
        type: String ,
        required :[ true , 'please enter an username' ]
    },
    email: {
        type: String ,
        required : [true , 'please enter email']
    },
    password: {
        type: String ,
        required: [true , 'Please enter password']
    },
    sex: {
        type:String ,
        enum : [ 'man' , 'woman' ],
        default: 'man'
    },
    bday: {
        type: Date ,
        required: [true , 'please enter Your BrithDay' ]
    },
    status:{
        type: Boolean ,
        default : true
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    deleted_at: {
        type: Date,
        default: null ,
        required: false
    },
    portfolio: {
        type: mongoose.Schema.Types.ObjectId ,
        require:false,
        ref: 'Portfolio',
        default: null
    }
    

});


// fire a function before doc saved to db
userShema.pre('save', async function(next) {
    console.log( this );
    
    // const salt = await bcrypt.genSalt();
    // this.password = await bcrypt.hash(this.password, salt);
    next();
});
  

const User = mongoose.model('User' , userShema );

module.exports = User;