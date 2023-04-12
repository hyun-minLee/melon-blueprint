import { async } from "regenerator-runtime";
import Song from "../models/Song";
import User from "../models/User";
import db from "../db";


export const login = async (req, res) => {
  return res.render("login", { pageTitle: "Home" });
};


