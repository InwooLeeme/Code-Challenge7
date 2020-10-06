import fs from "fs";
import multer from "multer";

let dataPath;

export const getHome = (req, res) => res.render("home");
export const postHome = async (req, res) => {
  const {
    file: { path },
  } = await req;
  dataPath = path;
  try {
    fs.readFile(dataPath, "utf-8", function (err, data) {
      //console.log(data);
      res.render("read", { data });
    });
  } catch (error) {
    console.log(error);
  }
};
