import express from "express"
import { signup } from "../controllers/auth.js"
const router = express.Router()

//SIGN UP 
router.post("/signup", signup)

//SIGN IN
router.post("/signin",)

//GOOGLE AUTHENTICATION
router.post("/google",)




export default router