var mongoose = require('mongoose');
//Movie schema
var movieSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    actors: [{
        type: String,
        required: true
    }
    ],
    producers: [{
        type: String,
        required: true
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
module.exports.updateMovie = async function (id, movieObj, options, cb) {
    var query = { _id: id };
    var update = {
        plot: movieObj.plot,
        producers: movieObj.producers,
        name: movieObj.name,
        actors: movieObj.actors,
        yearOfRelease: movieObj.yearOfRelease,

    }
    let data=await Movie.findByIdAndUpdate(query, update, options)
    cb(data);
       
}




// sample:
// {name: "Knight and Day",yearOfRelease: 2010,poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZvydaJABq9J-LYg4PxdlZ3lWS5Kc90DUkoqBeWPg047Ivw30J",
// actors: {name: "Tom Cruise",id: "123"}[{name: "Cameron Diaz",id: "123"},], producers: [name "James Mangold", id: "456"]}



