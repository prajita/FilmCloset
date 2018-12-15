var mongoose = require('mongoose');
//ImageFile schema
var ImageFileSchema = mongoose.Schema({
    unique_id: {
        type: String,
        required: false
    },
    Post_image: {
        type: String,
        required: false
    }
})
var ImageInp = mongoose.model('ImageInp', ImageFileSchema, 'ImageFile');

module.exports = ImageInp;