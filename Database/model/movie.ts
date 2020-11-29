import { Schema,model,Document } from 'mongoose'

const MovieSchema = new Schema({
    original_title:{
        type:String,
        required:[true]
    },
    poster_path:{
        type:String,
        required:[true]
    },
    video:{
        type:Boolean,
        required:[true]
    },
    vote_average:{
        type:Number,
        required:[true]
    },
    overview:{
        type:String,
        required:[true]
    },
    release_date:{
        type:Date,
        required:[true]
    },
    title:{
        type:String,
        required:[true]
    },
    popularity:{
        type:Number,
        required:[true]
    },
    adult:{
        type:Boolean,
        required:[true]
    },
    backdrop_path:{
        type:String,
        required:[true]
    },
    id:{
        type:Number,
        required:[true]
    },
    genre_ids:[{
        type:Number,
        required:[true]
    }],
    vote_count:{
        type:Number,
        required:[true]
    },
    original_language:{
        type:String,
        required:[true]
    }
})

interface IMovie extends Document{
    original_title:    string;
    poster_path:       string;
    video:             boolean;
    vote_average:      number;
    overview:          string;
    release_date:      Date;
    title:             string;
    popularity:        number;
    adult:             boolean;
    backdrop_path:     string;
    id:                number;
    genre_ids:         number[];
    vote_count:        number;
    original_language: string;
}

export const Movie=model<IMovie>('Movie',MovieSchema);
