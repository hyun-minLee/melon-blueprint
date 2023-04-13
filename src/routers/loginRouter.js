import express from "express";
import { login } from "../controllers/loginController";
import { postlogin } from "../controllers/loginController";
const loginRouter = express.Router();

loginRouter.get("/", login);

loginRouter.post("/", postlogin);




// loginRouter.post("/", (req, res) => {
//     console.log("1234");
//     const { username, password } =  req.body;
//     console.log({username, password});
//     if(username == 'admin' && password == 'admin') {
//       req.session.isLoggedIn = true;
//       req.session.username = username;
//       res.redirect('/find');
//     } else {
//         console.log("여기를 탐");
//       res.redirect('/login');
//       // res.send('Invalid username or password');
      
//     }
//   });

export default loginRouter;