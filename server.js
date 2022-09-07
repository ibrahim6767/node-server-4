import * as dotenv from 'dotenv'

import express from "express";

import mongoose from "mongoose";

import bookmarkRoute from './routes/bookmarkRoute.js'



// dotenv
dotenv.config()

// express
const app = express()

// middleware
app.use(express.json())


// routes
app.use('/api/bookmarks', bookmarkRoute)



// connecting mongoDB and starting to listen for requests
const connectDB = async() => {

    try{
        // connecting mongoDB
        await mongoose.connect('mongodb+srv://rasaf:mernPortfolioProject2@movie-manager-database.kqrlktc.mongodb.net/?retryWrites=true&w=majority')

        /* after the mongoDB is connected, we want to start to listen for requests */
        app.listen(8000 , ()=> {

            console.log('MongoDB is connected & Listening')

        })
    }

    catch (error){

        console.log(error)

        process.exit(1)  
    }
}


connectDB()


