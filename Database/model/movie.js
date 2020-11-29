"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var MovieSchema = new mongoose_1.Schema({
    original_title: {
        type: String,
        required: [true]
    },
    poster_path: {
        type: String,
        required: [true]
    },
    video: {
        type: Boolean,
        required: [true]
    },
    vote_average: {
        type: Number,
        required: [true]
    },
    overview: {
        type: String,
        required: [true]
    },
    release_date: {
        type: Date,
        required: [true]
    },
    title: {
        type: String,
        required: [true]
    },
    popularity: {
        type: Number,
        required: [true]
    },
    adult: {
        type: Boolean,
        required: [true]
    },
    backdrop_path: {
        type: String,
        required: [true]
    },
    id: {
        type: Number,
        required: [true]
    },
    genre_ids: [{
            type: Number,
            required: [true]
        }],
    vote_count: {
        type: Number,
        required: [true]
    },
    original_language: {
        type: String,
        required: [true]
    }
});
exports.Movie = mongoose_1.model('Movie', MovieSchema);
