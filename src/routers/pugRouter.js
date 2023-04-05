import express from "express";
import { pug } from "../controllers/songController";

const pugRouter = express.Router();

pugRouter.get("/", pug);

export default pugRouter;
