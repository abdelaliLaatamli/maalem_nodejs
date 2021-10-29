const mongoose = require('mongoose');



const resourceShema = new mongoose.Schema({

    link : {
        type: String ,
        required :[ true , 'please enter an link of resource' ]
    },
    resourceType: {
        type:String ,
        enum : [ 'img' , 'vedio' ],
        default: 'img'
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
},{ versionKey: false });

const Resource = mongoose.model('Resource' , resourceShema );

module.exports = Resource;