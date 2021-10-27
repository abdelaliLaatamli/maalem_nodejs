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
    },
    // subCategories: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Category"
    // }],
    skills: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Skill"
        }
    ]

}, { versionKey: false })

const Category = mongoose.model('Category' , categoryShema );

module.exports = Category;