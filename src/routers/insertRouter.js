import express from "express";
import { insert } from "../controllers/songController";

const insertRouter = express.Router();

insertRouter.get("/", insert);

export default insertRouter;
