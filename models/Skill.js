const mongoose = require('mongoose');


const skillShema = new mongoose.Schema({

    name : {
        type: String ,
        required :[ true , 'please enter the skill name' ]
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
    category:{
          type: mongoose.Schema.Types.ObjectId,
          ref: "Category",
          required : [true , 'please specify category!']
    }
    

},{ versionKey: false });

const Skill = mongoose.model('Skill' , skillShema );

module.exports = Skill;