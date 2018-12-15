var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
Movie = require('./models/Movie');
Actor = require('./models/Actor');
Producer = require('./models/Producer');
ImageInp =  require('./models/ImageFile');
var multer = require('multer');
const path = require("path");
const port = process.env.PORT || 3000;

mongoose.connect('mongodb://prajita:mamon1992@ds131954.mlab.com:31954/film-closet', { useNewUrlParser: true });
var db = mongoose.connection;
var app = express();
app.use(bodyParser.json());
app.use(cors());
var upload = multer({
    storage: multer.diskStorage({

        destination: function (req, file, callback) { callback(null, './uploads'); },
        filename: function (req, file, callback) {
            callback(null, (file.originalname));
        }

    }),
    fileFilter: function (req, file, callback) {
        var ext = path.extname(file.originalname)
        if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
            return callback(null, false)
        }
        callback(null, true)
    }
});

app.use(express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.post('/upload', upload.any(), (req, res) => {
    console.log("req.body:::"); //form fields
    console.log(req.body);
    console.log("req.file:::");
    console.log(req.files); //form files

    var img = new ImageInp({
        Post_image: req.files[0].filename
    })

    img.save((err, test) => {
        if (err) {
            console.log(err)
        } else {
            console.log("successfully saved image")
        }
    })

})

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


app.listen(port);
console.log('running on port 3000....');



