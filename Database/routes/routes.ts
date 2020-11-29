import { Router,Request,Response } from "express";
import { Convert, TheMovieDB } from '../interface/theMovie';
import { Movie } from '../model/movie';
const axios = require('axios');


const rutas=Router();

rutas.post('/llenar',(req:any,res:Response)=>{
    Movie.find().then(moviedb=>{        
        if(moviedb.length==0){
            axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=13725d0ecdb0da4d1057c4bf847a20b6&language=en-US').then(function (response) {
        const theMovieDB = Convert.toTheMovieDB(response.data['results']);
            theMovieDB.forEach(value=>{
                Movie.create(value).then();
            })
            res.json({
                ok:true
            })
        })
        }else{
            res.json({
                ok:false,
                message:"base de datos ya llena"
            })
        }
    })
});

rutas.get('/llenar',(req:any,res:Response)=>{
    Movie.find().then(ress=>{
        res.json({
            ress
        })
    })    
});

rutas.delete('/llenar',(req:any,res:Response)=>{
    Movie.deleteMany({}).then(ok=>{
        res.json({
            ok:true
        })
    });
});

export default rutas;