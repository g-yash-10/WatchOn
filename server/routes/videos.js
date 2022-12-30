import express from "express"
import { addVideo, deleteVideo, getVideo } from "../controllers/video.js"
import { verifyToken } from "../verifyToken.js"
const router = express.Router()

//CREATE VIDEO
router.post("/", verifyToken)

router.put("/:id", verifyToken, addVideo)
router.delete("/:id", verifyToken, deleteVideo)
router.get("/find/:id", getVideo)

export default router