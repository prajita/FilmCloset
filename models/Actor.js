var mongoose = require('mongoose');
var async = require('async');
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
        type: String,
        required: true
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
    Actor.findById(id, callback);
}
module.exports.updateActor = function (id, actorobj, options, callback) {
    var query = { _id: id };
    var update = {
        bio: actorObj.bio
    }
    Actor.findOneAndUpdate(query, update, options, callback);
}
module.exports.updateAllActor = function (input) {
    console.log("update actors for the movie.............",JSON.stringify(input))
    input.listOfActors.map(e => {
         Actor.updateOne({name: e.name},{ $push: {bio: input.movie}  });
    });
    

}
module.exports.updateAllActorCheck = function (input, callback) {
    console.log("update actors for the movie.............",JSON.stringify(input))
    
    async.mapValues(input.listOfActors, function(item,key,cb){
    Actor.updateOne({name: e.name},{ $push: {bio: input.movie} ,cb });
    }, function(err, results) {
    callback();  
        
     
        
});

    

}

//{name: "Jonny Depp",sex: "Male",dob: "09-23-1990",isProducer: true, bio: [ "Pirates of the Caribbean: On Stranger Tides", "Alice in Wonderland"]}
