import express from "express";
import morgan from "morgan";
import session from "express-session";
import flash from "express-flash";
import MongoStore from "connect-mongo";
import { localsMiddleware } from "./middlewares";
import rootRouter from "./routers/rootRouter";
import insertRouter from "./routers/insertRouter"
import findRouter from "./routers/findRouter"
import Song from "./models/Song";
import db from "./db";
var fs = require('fs');
var ejs = require('ejs');
// const db = require("./db");


const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
  })
);
app.use(flash());
app.use(localsMiddleware);
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("assets"));

app.use("/", rootRouter);
app.use("/insert", insertRouter);
app.use("/find", findRouter);

// app.get("/song", (req, res) => {
//   console.log("DB");
//   const newSong = new Song({
//     title: "가시", singer_name: "버즈", playcount: 443, url: "http://naver.com"
//   });
//   newSong.save((err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(result);
//     }
//   });
//   res.send("테스트 수행");

// });

// app.get("/insert", async (req, res) => {

//   const songData = [
//     {
//     title: "가시",
//     singer_name: "버즈",
//     playcount: 1000,
//     url: "https://example.com/가시",
//     },
//     {
//       title: "남자를 몰라",
//       singer_name: "버즈",
//       playcount: 2000,
//       url: "https://example.com/남자를 몰라",
//     },
//     {
//       title: "겁쟁이",
//       singer_name: "버즈",
//       playcount: 3000,
//       url: "https://example.com/겁쟁이",
//     },
//     {
//       title: "My Love",
//       singer_name: "버즈",
//       playcount: 4000,
//       url: "https://example.com/My Love",
//     },
//     {
//       title: "비망록",
//       singer_name: "버즈",
//       playcount: 5000,
//       url: "https://example.com/비망록",
//     },
//     {
//       title: "나에게로 떠나는 여행",
//       singer_name: "버즈",
//       playcount: 6000,
//       url: "https://example.com/나에게로 떠나는 여행",
//     },
//     {
//       title: "어쩌면..",
//       singer_name: "버즈",
//       playcount: 7000,
//       url: "https://example.com/어쩌면..",
//     },


// ];
//   try {
//       await db.collection("Song").insertMany(songData, (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(result);
//       db.close((req, res) => {
//         console.log("Database connection closed");
//       });
//     }
//   })
// } catch {
//     res.send("error");
// } finally {
//     res.redirect("/");
// }
// });


// app.get("/find", (req, res) => {
//   var mysort = {playcount : -1};
//   fs.readFile("test.html", "utf8", function(err, data) {
//     db.collection("Song").find({}).sort(mysort).toArray(function(err, cursor) {
      
//       res.writeHead(200, {"Content-type":"text/html;charset=utf-8"});
//       res.end(ejs.render(data, {
//         data:cursor
//       }));
    
//       db.close();
//     });
//   });
// })


// app.get("/pugfind", (req, res) => {
//   var mysort = {playcount : -1};
//   fs.readFile("test.html", "utf8", function(err, data) {
//     db.collection("Song").find({}).sort(mysort).toArray(function(err, cursor) {
      
//       res.writeHead(200, {"Content-type":"text/html;charset=utf-8"});
//       res.end(ejs.render(data, {
//         data:cursor
//       }));
    
//       db.close();
//     });
//   });
// })

/*
Add more routers here!
*/

export default app;
