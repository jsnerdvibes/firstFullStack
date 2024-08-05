// require('dotenv').config('./env')

import dotenv from "dotenv"

import connect_DB from "./db/index.js"

dotenv.config({
    path:'./env'
})



connect_DB()





/*
import express from 'express'

const app = express()

(async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("Error",error)
            throw error
        })
    }catch(error){
        console.log("Error", error)
        throw error
        
    }
})()
*/