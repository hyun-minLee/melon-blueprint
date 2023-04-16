import express from "express";
import { playlist } from "../controllers/songController";
// import { mylist } from "../controllers/songController";

const playlistRouter = express.Router();

playlistRouter.get("/", playlist);
// playlistRouter.get("/", mylist);

export default playlistRouter;
