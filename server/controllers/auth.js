import mongoose from "mongoose"
import User from "../models/User.js"
import bcrypt from "bcrypt"
import { createError } from "../error.js";
import jsonwebtoken from "jsonwebtoken"


//CREATE A NEW USER
export const signup = async (req, res)=>{
    // console.log(req.body)
    try{
        //HASHING THE PASSWORD
        const saltRounds = 10;
        const hash = bcrypt.hash(req.body.password, saltRounds)

        //SAVE USER IN MONGODB
        const newUser = new User({...req.body, password:hash})
        await newUser.save()
        res.status(200).send("User has been successfully saved in db!!")
    }catch(err){
         next(err)
    }
}


//LOGIN A USER
export const signin = async (req, res)=>{
    try{

        //SEARCH IF USER EXIST ALREADY
        const user = await User.findOne({name: req.body.name})
        if(!user)
            return next(createError(404, "User not found!"))

        //CHECK IF PASSWORD IS CORRECT OR NOT
        const isCorrect = await bcrypt.compare(req.body.password, user.password)
        if(!isCorrect)
            return next(createError(400, "Wrong Credentials!"))
           
        const token = jwt.sign({id: user._id}, process.env.JWT)
        const {password, ...others} = user._doc
        res.cookie("access_token", token,{
            httpOnly:true
        }).status(200).json(others)
    }catch(err){
         next(err)
    }
}