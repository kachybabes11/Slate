import mongoose from "mongoose";
import dotenv from "dotenv";
import dns from "dns";
dotenv.config()


dns.setServers(["8.8.8.8", "1.1.1.1"]);

export const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Database connected successfully")
    }
    catch(error){
        console.error("Error connecting to MONDODB", error);
        process.exit(1)

    }
}