var mongoose = require('mongoose');
var actorSchema = mongoose.Schema({
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
    isProducer: {
        type: Boolean,
        required: true
    },
    bio: [{
        movie: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true
        },
        year: {
            type: Number,
            required: true
        }
    }]
})
var Actor = mongoose.model('Actor', actorSchema, 'Actors');

//get Actors
module.exports.getActors = function (callback, limit) {
    Actor.find(callback).limit(limit);
}

module.exports.addActor = function (actorObj, callback) {
    Actor.create(actorObj, callback)
}
module.exports.getActorById = function (id, callback) {
    Actor.findById(id,callback);
}
module.exports.updateActor = function (id, actorobj, options,callback) {
    var query = { _id: id };
    var update = {
        bio: actorObj.bio,
        isProducer: actorObj.isProducer
    }
    Actor.findOneAndUpdate(query, update,options, callback);
}

//{name: "Jonny Depp",sex: "Male",dob: "09-23-1990",isProducer: true, bio: [{movie: "Pirates of the Caribbean: On Stranger Tides",role: "Jack Sparrow",year: 2011},{movie: "Alice in Wonderland",role: "Mad Hatter",year: 2010}]}