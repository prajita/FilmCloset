var mongoose = require('mongoose');
//Movie schema
var ProducerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    bio: [
           { type: String,
            required: true
           }
    ]
})
var Producer = mongoose.model('Producer', ProducerSchema, 'Producers');

module.exports.getProducers = function (callback, limit) {
    Producer.find(callback).limit(limit);
}

module.exports.addProducer = function (producerObj, callback) {
    Producer.create(producerObj, callback);
}
module.exports.getProducerById = function (id, callback) {
    Producer.findById(id,callback);
}
module.exports.updateProducer = function (id, producerObj, options,callback) {
    var query = { _id: id };
    var update = {
        bio: producerObj.bio
    }
    Producer.findOneAndUpdate(query, update,options, callback);
}

//{name: "Jonny Depp",sex: "Male",dob: "09-23-1990",isProducer: true, bio: [{movie: "Pirates of the Caribbean: On Stranger Tides",role: "Jack Sparrow",year: 2011},{movie: "Alice in Wonderland",role: "Mad Hatter",year: 2010}]}