import express from "express";
import path from "path";
import bodyParser from "body-parser";
import multer from "multer";
import fs from "fs";
import userRouter from "./userRouter";
import { getHome, postRead } from "./controller";

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", userRouter);
app.post("/read", userRouter);

// Codesanbox does not need PORT :)
app.listen(4000, () => console.log(`Listening!`));
