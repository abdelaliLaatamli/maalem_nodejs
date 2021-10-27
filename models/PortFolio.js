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
        required: false,
        default: null 
    },
    numbreVisites: {
        type:Number,
        default:0
    },
    localisation:{
        type:  mongoose.Schema.Types.ObjectId ,
        require: false,
        ref: 'Localisation',
        default: null
    },
    zone:{
        type:  mongoose.Schema.Types.ObjectId ,
        require: true,
        ref: 'Zone' 
    },
    feedbacks: [
        // {
        //   type: mongoose.Schema.Types.ObjectId,
        //   ref: "Feedback"
        // }
    ],
    categories: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category"
        }
    ]
},{ versionKey: false });



const Portfolio = mongoose.model('Portfolio' , portFulioShema);

module.exports = Portfolio;