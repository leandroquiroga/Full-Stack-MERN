import mongoose from "mongoose";
import dotenv from 'dotenv';

// Enable environment variables
dotenv.config({ path: 'variables.env' });

const connectingDB = async () => {
    try {
        const db = await mongoose.connect('mongodb+srv://root:colorado14@cluster0.rlpyy.mongodb.net/Application?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`Connection success ! ${db.connection.name}`)
    } catch (error) {
        console.log(error);
    }
} 

export default  connectingDB;