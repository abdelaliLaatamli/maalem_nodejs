const mongoose = require('mongoose');


const categoryShema = new mongoose.Schema({

    name : {
        type: String ,
        required :[ true , 'please enter an text' ],
        unique: true 
    },
    parent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category" ,
        default: null
    }

}, { versionKey: false })

const Category = mongoose.model('Category' , categoryShema );

module.exports = Category;