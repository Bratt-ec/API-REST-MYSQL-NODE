import express from "express";
import db  from './config/db.js';
import { Rutas } from "./routes/index.js";
import cors from 'cors';
import bodyParser from 'body-parser';

// Requerimos express
const app = express();
app.use(express.json());

// Permitir consultas para un dominio en específico
const whiteList = ['http://localhost:3000'];
const corsOptions = {
    origin: (origin, callback) =>{
        // console.log(origin);
        const existe = whiteList.some(dominio => dominio === origin);
        if(existe){
            callback(null, true);
        }else{
            callback(new Error('No permitido por CORS'));
        }
    }
}
// Habilitar CORS
app.use(cors());

// Conectamos a la BD
db.authenticate()
    .then(() => console.log('Base de datos conectada'))
    .catch(error => console.log(error));

// Habilitar body parser
app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({extended: true}));


// ADD ROUTER
app.use('/', Rutas());

// Puerto y Start server
app.listen(5000, ()=>{
    console.log(`Server iniciado en puerto: 5000`);
});