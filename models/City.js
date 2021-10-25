const mongoose = require('mongoose');


const cityShema = new mongoose.Schema({

    name : {
        type: String ,
        required :[ true , 'please enter the City name' ]
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
    }

})

const City = mongoose.model('City' , cityShema );

module.exports = City;