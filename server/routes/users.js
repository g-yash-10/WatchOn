import express from "express"
import { test } from "../controllers/user.js"
const router = express.Router()

console.log("here");
router.get("/test", test)
console.log("hereguck");

export default router