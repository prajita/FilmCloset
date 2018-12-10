var mongoose = require('mongoose');
//Movie schema
var movieSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    actors: [{
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    }
    ],
    producers: [{
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    }
    ],
    poster: {
        type: String,
        required: true
    },
    yearOfRelease: {
        type: Number,
        required: true
    },
    plot: {
        type: String,
        required: true
    }
})
var Movie = mongoose.model('Movie', movieSchema, 'Movies');

//get Movies
module.exports.getMovies = function (callback, limit) {
    Movie.find(callback).limit(limit);
}

//add movie
module.exports.addMovie = function (movieObj, callback) {
    Movie.create(movieObj, callback);
}

module.exports.getMovieById = function (id, callback) {
    Movie.findById(id, callback);
}
module.exports.updateMovie = function (id, movieObj, options,callback) {
    var query = { _id: id };
    var update = {
        plot: movieObj.plot
    }
    Movie.findOneAndUpdate(query, update,options, callback);
}




// sample:
// {name: "Knight and Day",yearOfRelease: 2010,poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZvydaJABq9J-LYg4PxdlZ3lWS5Kc90DUkoqBeWPg047Ivw30J",
// actors: {name: "Tom Cruise",id: "123"}[{name: "Cameron Diaz",id: "123"},], producers: [name "James Mangold", id: "456"]}



