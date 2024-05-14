const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const userRoute = require('./routes/userRoute')
require('dotenv').config()
const errorMiddleware = require('./middleware/errorMiddleware')

const MONGO_URL =process.env.MONGO_URL
const PORT = process.env.PORT

const app = express()
app.use(cors())
app.use(express.json())

//  Routes
app.use('/api', userRoute)


// app.use(errorMiddleware)


mongoose.connect(MONGO_URL)
.then(()=>{
    console.log("Database connected");
    app.listen(PORT, ()=>{
        console.log(`server started on port ${PORT}...`)
    })
}).catch(err=>{
    console.log(err);
})

