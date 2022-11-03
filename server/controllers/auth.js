import mongoose from "mongoose"
import User from "../models/User.js"
import bcrypt from "bcrypt"

export const signup = async (req, res)=>{
    console.log(req.body)
    // try{
    //     //HASHING THE PASSWORD
    //     const saltRounds = 10;
    //     const hash = bcrypt.hash(req.body.password, saltRounds)

    //     const newUser = new User({...req.body, password:hash})
    //     await newUser.save()
    //     res.status(200).send("User has been successfully saved in db!!")
    // }catch(err){

    // }
}