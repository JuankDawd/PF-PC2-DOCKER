import Server from './classes/server';
import mongoose from 'mongoose';


import bodyParser from 'body-parser';
import fileUpload from 'express-fileupload'

import cors  from "cors";
import rutas from './routes/routes';
import Axios from 'axios';



const server = new Server();

//Levanar express
server.start(()=>{
    console.log('servidor corriendo en el puerto '+server.port);
});

//preparar Informacion del posteo BodyParser
server.app.use(bodyParser.urlencoded({ extended:true }));
server.app.use(bodyParser.json());

//cors
server.app.use( cors());

//fileupload
server.app.use( fileUpload({useTempFiles:true}) );

//rutasDelBakcend
server.app.use(bodyParser.urlencoded({ extended:true }));
server.app.use(bodyParser.json());

//rutas
server.app.use('/rutas',rutas);


//conexion BD
mongoose.connect('mongodb://db:27017/Movies',
                {useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true},(err)=>{
                    if (err) throw err;
                    console.log('Base de datos Online');
                    Axios.post('http://localhost:3000/rutas/llenar').then(ress=>{
                        console.log(ress.data);
                    })
                });
