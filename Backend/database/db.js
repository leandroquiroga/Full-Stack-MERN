import mongoose from "mongoose";

const connectingDB = async ()  => {
    try {
        const db = await mongoose.connect(process.env.mongodb, {
            useNewUrlParser: true,
        });
        console.log(`Connection success ! ${db.connection.name}`)
    } catch (error) {
        console.log(error);
    }
} 

export default  connectingDB;