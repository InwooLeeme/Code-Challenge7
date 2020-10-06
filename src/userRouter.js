import express from "express";
import { getHome, postHome } from "./controller";
import multer from "multer";

const userRouter = express.Router();
const upload = multer({ dest: "upload/" });

userRouter.get("/", getHome);

userRouter.post("/read", upload.single("userText"), postHome);

export default userRouter;
