const mongoose = require('mongoose');


const categoryShema = new mongoose.Schema({

    name : {
        type: String ,
        required :[ true , 'please enter an text' ],
        unique: true 
    },
    subCategories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    }],
    skills: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Skill"
        }
    ]

})

const Category = mongoose.model('Category' , categoryShema );

module.exports = Category;