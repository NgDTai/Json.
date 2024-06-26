const mongoose = require('mongoose');

var AuthorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    year: Number,
    author: String,
    isDeleted:{
        type:Boolean,
        default:false
    }
}, { timestamps: true })
module.exports = new mongoose.model('Author', bookSchema)