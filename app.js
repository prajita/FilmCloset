var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
Movie = require('./models/Movie');
Actor = require('./models/Actor');
Producer = require('./models/Producer');
var multer = require('multer');



mongoose.connect('mongodb://prajita:mamon1992@ds131954.mlab.com:31954/film-closet', { useNewUrlParser: true });
var db = mongoose.connection;

var app = express();
app.use(bodyParser.json());
app.use(cors());
//multer
//to create a storage which says where and how the files/images should be saved
var Storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "./Images");
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    }
});

//create a multer object 

var upload = multer({
    storage: Storage
}).array("imgUploader", 1); //Field name and max count

//apis
app.get('/', function (req, res) {
    res.send('Hello Word!');
});
app.get('/api/movies/image/', function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            console.log(JSON.stringify(err));
            res.status(400).send('fail saving image');
        } else {
            console.log('The filename is ' + res.req.file.filename);
            res.send(res.req.file.filename);
        }
    });
});

//apis for movie
app.get('/api/movies', async function (req, res) {
    await Movie.getMovies(function (err, movies) {
        if (err) {
            throw err;
        } else {
            res.send(movies);
        }
    })
});

app.get('/api/movies/:_id', async function (req, res) {
    await Movie.getMovieById(req.params._id, (err, movie) => {
        if (err) {
            throw err;
        } else {
            res.send(movie);
        }
    })
});

app.put('/api/movies/:_id', async function (req, res) {
    await Movie.updateMovie(req.params._id, req.body, {}, (err, movie) => {
        if (err) {
            throw err;
        } else {
            res.send(movie);
        }
    })
});
app.post('/api/movies', async function (req, res) {
    await Movie.addMovie(req.body, function (err, movie) {
        if (err) {
            throw err;
        } else {
            res.send(movie);
        }
    })
});
//apis for actor
app.get('/api/actors', async function (req, res) {
    await Actor.getActors(function (err, actors) {
        if (err) {
            throw err;
        }
        // res.header("Access-Control-Allow-Origin", "*");
        res.send(actors);

    })
});
app.get('/api/actors/:_id', async function (req, res) {
    await Actor.getActorById(req.params._id, (err, actor) => {
        if (err) {
            throw err;
        } else {
            res.send(actor);
        }
    })
});

app.post('/api/actors', async function (req, res) {
    await Actor.addActor(req.body, function (err, actor) {
        if (err) {
            throw err;
        } else {
            res.send(actor);
        }
    })
});


app.put('/api/actors/:_id', function (req, res) {
    Actor.updateActor(req.params._id, req.body, {}, function (err, actor) {
        if (err) {
            throw err;
        } else {
            res.send(json(actor));
        }
    })
});


//apis for producer
app.get('/api/producers', async function (req, res) {
    await Producer.getProducers(function (err, producers) {
        if (err) {
            throw err;
        }
        // res.header("Access-Control-Allow-Origin", "*");
        res.send(producers);

    })
});
app.get('/api/producers/:_id', async function (req, res) {
    await Producer.getProducerById(req.params._id, (err, producer) => {
        if (err) {
            throw err;
        } else {
            res.send(producer);
        }
    })
});

app.post('/api/producers', async function (req, res) {
    await Producer.addProducer(req.body, function (err, producer) {
        if (err) {
            throw err;
        } else {
            res.send(producer);
        }
    })
});


app.put('/api/producers/:_id', async function (req, res) {
    await Producer.updateProducer(req.params._id, req.body, {}, function (err, producer) {
        if (err) {
            throw err;
        } else {
            res.send(json(producer));
        }
    })
});


app.listen(3000);
console.log('running on port 3000....');
