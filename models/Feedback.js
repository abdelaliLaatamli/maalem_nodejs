const mongoose = require('mongoose');


const feedbackShema = new mongoose.Schema({

    text : {
        type: String ,
        required :[ true , 'please enter an text' ]
    },
    score: {
        type: Number ,
        required : [true , 'please enter score']
    },
    status:{
        type: Boolean ,
        default : False
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    deleted_at: {
        type: Date,
        default: null ,
        required: false
    }

})

const Feedback = mongoose.model('Feedback' , feedbackShema );

module.exports = Feedback;