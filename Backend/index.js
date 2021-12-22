import Express  from "express";
import connectingDB from './database/db.js'
import router from './router/index.js';
import dotenv from 'dotenv';
import cors from 'cors';

// Enable environment variables
dotenv.config({ path: 'variables.env' });

// Creater Server
const server = Express(); 

// Enable cors
// const whitelist = ['http://localhost:3000'];
// const corsOptions = {
//     origin: (origin, callback) => {
//         const existe = whitelist.some(dominio => dominio === origin);
//         (existe) ? callback(null, true) : callback(new Error('You are not access'))
//     } 
// }
// server.use(cors(corsOptions))
server.use(cors())
// Connecting MongoDB
connectingDB();

// Enable the body parser
server.use(Express.urlencoded({ extended: true }));

// Enable JSON handling
server.use(Express.json());

// Router
server.use('/', router);

// Config localhost and port 
const host = process.env.host || '0.0.0.0';
const port = process.env.port || 4000

server.listen((host, port), () => {
    console.log('The server its running');
})