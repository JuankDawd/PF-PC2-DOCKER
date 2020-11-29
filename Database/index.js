"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("./classes/server"));
var mongoose_1 = __importDefault(require("mongoose"));
var body_parser_1 = __importDefault(require("body-parser"));
var express_fileupload_1 = __importDefault(require("express-fileupload"));
var cors_1 = __importDefault(require("cors"));
var routes_1 = __importDefault(require("./routes/routes"));
var axios_1 = __importDefault(require("axios"));
var server = new server_1.default();
//Levanar express
server.start(function () {
    console.log('servidor corriendo en el puerto ' + server.port);
});
//preparar Informacion del posteo BodyParser
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
//cors
server.app.use(cors_1.default());
//fileupload
server.app.use(express_fileupload_1.default({ useTempFiles: true }));
//rutasDelBakcend
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
//rutas
server.app.use('/rutas', routes_1.default);
//conexion BD
mongoose_1.default.connect('mongodb://db:27017/Movies', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, function (err) {
    if (err)
        throw err;
    console.log('Base de datos Online');
    axios_1.default.post('http://localhost:3000/rutas/llenar').then(function (ress) {
        console.log(ress.data);
    });
});
