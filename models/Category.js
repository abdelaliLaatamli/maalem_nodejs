const mongoose = require('mongoose');


const categoryShema = new mongoose.Schema({

    name : {
        type: String ,
        required :[ true , 'please enter an text' ]
    },
    subCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category" ,
        default: null
    },
    skills: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Skill"
        }
    ]

})

const Category = mongoose.model('Category' , categoryShema );

module.exports = Category;