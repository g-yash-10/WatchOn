import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import userRoutes from "./routes/users.js"
import videoRoutes from "./routes/videos.js"
import commentRoutes from "./routes/comments.js"
import authRoutes from "./routes/auth.js"
import cookieParser from"cookie-parser
const app = express()
dotenv.config()


//Connection to the MongoDb Database using mongoose
const connect = ()=>{
    mongoose.connect(process.env.MONGO).then(()=>{
        console.log("Connected to Database!")
    }).catch((err)=>{
        console.log(err)
    });
}


//ALLOW ANY JSON FILE FROM OUTSIDE FOR TESTING PURPOSE
app.use(express.json())
app.use(cookieParser())
//MIDDLEWARE TO HANDLE ERRORS
app.use((err, req, res, next)=>{
    const status = err.status || 500;
    const message = err.message || "Error thrown!"
    return res.status(status).json({
        success: false,
        status: status,
        message: message
    })
})

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/videos", videoRoutes)
app.use("/api/comments", commentRoutes)

app.listen(8000, ()=>{
    connect()
    console.log("Connected to server!")
})