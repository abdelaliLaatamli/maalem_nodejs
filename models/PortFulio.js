const mongoose = require('mongoose');



const portFulioShema = new mongoose.Schema({

    yearsExp: {
        type:Number ,
        required: [true , 'years of experience is required']
    },
    details: {
        type : String ,
        required: true
    },
    address: {
        type: String ,
        required: false
    },
    numbreVisites: {
        type:Number,
        default:0
    },
    localisation:{
        type:  mongoose.Schema.Types.ObjectId ,
        require: false,
        ref: 'localisations',
        default: null
    }
});



const Portfolio = mongoose.model('portfolio' , portFulioShema);

module.exports = Portfolio;