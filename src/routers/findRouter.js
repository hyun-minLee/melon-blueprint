import express from "express";
import { find } from "../controllers/songController";

const findRouter = express.Router();

findRouter.get("/", find);

export default findRouter;
