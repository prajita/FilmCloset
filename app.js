var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
Movie = require('./models/Movie');
Actor = require('./models/Actor');

mongoose.connect('mongodb://prajita:mamon1992@ds131954.mlab.com:31954/film-closet', { useNewUrlParser: true });
var db = mongoose.connection;

var app = express();
app.use(bodyParser.json());
app.get('/', function (req, res) {
    res.send('Hello Word!');
});
//apis for movie
app.get('/api/movies', function (req, res) {
    Movie.getMovies(function (err, movies) {
        if (err) {
            throw err;
        } else {
            res.json(movies)
        }
    })
});

app.get('/api/movies/:_id', function (req, res) {
    Movie.getMovieById(req.params._id, (err, movie) => {
        if (err) {
            throw err;
        } else {
            res.json(movie)
        }
    })
});

app.put('/api/movies/:_id', function (req, res) {
    Movie.updateMovie(req.params._id, req.body, {},(err, movie) => {
        if (err) {
            throw err;
        } else {
            res.json(movie)
        }
    })
});
app.post('/api/movies', function (req, res) {
    Movie.addMovie(req.body, function (err, movie) {
        if (err) {
            throw err;
        } else {
            res.json(movie)
        }
    })
});
//apis for actor
app.get('/api/actors', function (req, res) {
    Actor.getActors(function (err, actors) {
        if (err) {
            throw err;
        }
        res.json(actors)

    })
});

app.post('/api/actors', function (req, res) {
    Actor.addActor(req.body, function (err, actor) {
        if (err) {
            throw err;
        } else {
            res.json(actor)
        }
    })
});


app.put('/api/actors/:_id', function (req, res) {
    Actor.updateActor(req.params._id, req.body, {}, function (err, actor) {
        if (err) {
            throw err;
        } else {
            res.json(actor)
        }
    })
});


app.listen(3000);
console.log('running on port 3000....');
