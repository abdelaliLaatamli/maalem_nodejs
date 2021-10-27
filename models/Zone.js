const mongoose = require('mongoose');


const zoneShema = new mongoose.Schema({

    name : {
        type: String ,
        required :[ true , 'please enter the zone name' ]
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
    cities: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "City"
        }
    ]

},{ versionKey: false });

const Zone = mongoose.model('Zone' , zoneShema );

module.exports = Zone;