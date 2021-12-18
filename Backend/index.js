import Express  from "express";
import connectingDB from './database/db.js'
import router from './router/index.js';
import dotenv from 'dotenv';

// Enable environment variables
dotenv.config({ path: 'variables.env' });

// Creater Server
const server = Express(); 

// Connecting MongoDB
connectingDB();

// Enable the body parser
server.use(Express.urlencoded({ extended: true }));

// Enable JSON handling
server.use(Express.json());

// Router
server.use('/', router);

server.listen(4000, () => {
    console.log('lisntening server 4000')
})