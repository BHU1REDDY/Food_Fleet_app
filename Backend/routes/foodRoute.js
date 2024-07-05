import express from "express";
import {
  addFood,
  listFood,
  removeFood,
} from "../controllers/foodController.js";
import multer from "multer";

const foodRouter = express.Router();

//Image storage engine

const storage = multer.diskStorage({
  // This allows you to control the destination and filename of the uploaded files.
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

foodRouter.post("/add", upload.single("image"), addFood); //addFood is the controller function that will handle the request once the file has been uploaded.

foodRouter.get("/list", listFood);

foodRouter.post("/remove", removeFood);

export default foodRouter;
