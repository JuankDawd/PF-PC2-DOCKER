"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var theMovie_1 = require("../interface/theMovie");
var movie_1 = require("../model/movie");
var axios = require('axios');
var rutas = express_1.Router();
rutas.post('/llenar', function (req, res) {
    movie_1.Movie.find().then(function (moviedb) {
        if (moviedb.length == 0) {
            axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=13725d0ecdb0da4d1057c4bf847a20b6&language=en-US').then(function (response) {
                var theMovieDB = theMovie_1.Convert.toTheMovieDB(response.data['results']);
                theMovieDB.forEach(function (value) {
                    movie_1.Movie.create(value).then();
                });
                res.json({
                    ok: true
                });
            });
        }
        else {
            res.json({
                ok: false,
                message: "base de datos ya llena"
            });
        }
    });
});
rutas.get('/llenar', function (req, res) {
    movie_1.Movie.find().then(function (ress) {
        res.json({
            ress: ress
        });
    });
});
rutas.delete('/llenar', function (req, res) {
    movie_1.Movie.deleteMany({}).then(function (ok) {
        res.json({
            ok: true
        });
    });
});
exports.default = rutas;
