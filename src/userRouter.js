import express from "express";
import { homeController } from "./controller";

const userRouter = express.Router();

userRouter.get("/", homeController);

export default userRouter;
