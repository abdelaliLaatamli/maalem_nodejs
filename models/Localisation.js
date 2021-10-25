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
    
});


const Localisation = mongoose.model('localisations' , localisationShema);

module.exports = Localisation;