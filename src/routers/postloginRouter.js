import express from "express";
import { postlogin } from "../controllers/loginController";

const postloginRouter = express.Router();

postloginRouter.post("/", postlogin);

export default postloginRouter;