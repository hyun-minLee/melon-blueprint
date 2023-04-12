import express from "express";
import { login } from "../controllers/loginController";

const loginRouter = express.Router();

loginRouter.get("/", login);

export default loginRouter;