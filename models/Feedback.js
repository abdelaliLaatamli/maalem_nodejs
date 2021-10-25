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
        default : false
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
    notes:[]

})

const Feedback = mongoose.model('Feedback' , feedbackShema );

module.exports = Feedback;