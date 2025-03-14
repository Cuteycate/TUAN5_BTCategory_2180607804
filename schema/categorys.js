let mongoose = require('mongoose');
let categorySchema = mongoose.Schema({
    name: {
        type: String,
        quantity: Number,
        required: true,
        unique: true
    },
    description: {
        type: String,
        default: ""
    }, 
    isDeleted: {
        type: Boolean,
        default: false
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Category', categorySchema);
