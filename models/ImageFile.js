var mongoose = require('mongoose');
//ImageFile schema
var ImageFileSchema = mongoose.Schema({
    unique_id: {
        type: String,
        required: true
    },
    Post_image: {
        type: String,
        required: true
    },
    Post_title: {
        type: String,
        required: true
    }
})
var ImageInp = mongoose.model('ImageInp', ImageFileSchema, 'ImageFile');

module.exports = ImageInp;