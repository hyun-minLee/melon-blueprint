import express from "express";
import { playlist } from "../controllers/songController";

const playlistRouter = express.Router();

playlistRouter.get("/", playlist);

export default playlistRouter;
