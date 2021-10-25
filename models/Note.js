const mongoose = require('mongoose');


const noteShema = new mongoose.Schema({

    characteristic : {
        type: String ,
        enum : [ 'time-respect' , 'prise' , 'tools' , 'Quality' ],
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
    }

})

const Note = mongoose.model('Note' , noteShema );

module.exports = Note;