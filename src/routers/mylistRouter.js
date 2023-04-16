import express from "express";
import { mylist } from "../controllers/songController";

const mylistRouter = express.Router();

mylistRouter.get("/", mylist);

export default mylistRouter;
