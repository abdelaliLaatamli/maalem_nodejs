const mongoose = require('mongoose');

const localisationShema = new mongoose.Schema({

    latitude: {
        type : String ,
        required: true
    },
    longitude: {
        type: String ,
        required: true
    }
    
},{ versionKey: false });


const Localisation = mongoose.model('Localisation' , localisationShema);

module.exports = Localisation;