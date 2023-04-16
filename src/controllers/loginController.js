import { async } from "regenerator-runtime";
import Song from "../models/Song";
import User from "../models/User";
import db from "../db";


export const login = async (req, res) => {
  console.log("Get Login");
  return res.render("login", { pageTitle: "Home" });
};

// export const login = async (req, res) => {
//   console.log("Get Login");
//   return res.render("login", { pageTitle: "Home" });
// };

export const postlogin = async (req, res) => {

  // console.log("fffffffffffffff");
  // const data = req.body;
  // req.session.data = data;

  // console.log(`세션 데이터 저장 ${req.session.data}`);
  // const parsingdata = JSON.stringify(req.session.data);
  // console.log(`parsingdata: ${parsingdata}`);
    console.log("Post Login");
    const { username, password } =  req.body;
    console.log({username, password});
    if (username === 'admin' && password === 'admin') {
      req.session.isLoggedIn = true;
      req.session.username = username;
      req.session.save((err) => {
        if (err) {
          console.error('세션 저장 중 에러 발생:', err);
          res.json({ result: 'error', message: '세션 저장 중 에러 발생' });
        } else {
          res.redirect('/find'); // 클라이언트로 리다이렉트
        }
      });
    } else {
      res.json({ result: 'fail', message: '로그인 실패' });
    }
  }
