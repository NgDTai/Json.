const mongoose = require('mongoose');

var AuthorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
})
module.exports = new mongoose.model('author', authorSchema);