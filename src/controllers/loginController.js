import { async } from "regenerator-runtime";
import Song from "../models/Song";
import User from "../models/User";
import db from "../db";


export const login = async (req, res) => {
  console.log("Get Login");
  return res.render("playlist", { pageTitle: "Home" });
};

// export const login = async (req, res) => {
//   console.log("Get Login");
//   return res.render("login", { pageTitle: "Home" });
// };

export const postlogin = async (req, res) => {
    console.log("Post Login");
    const { username, password } =  req.body;
    console.log({username, password});
    if(username == 'admin' && password == 'admin') {
      req.session.isLoggedIn = true;
      req.session.username = username;
      res.redirect('/find');
    } else {
      res.send('Invalid username or password');
      // res.redirect('/login');
      
      
    }
  }
