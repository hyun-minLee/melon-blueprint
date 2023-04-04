import express from "express";
import morgan from "morgan";
import session from "express-session";
import flash from "express-flash";
import MongoStore from "connect-mongo";
import { localsMiddleware } from "./middlewares";
import rootRouter from "./routers/rootRouter";
import Song from "./models/Song";
import db from "./db";
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

app.get("/song", (req, res) => {
  console.log("DB");
  const newSong = new Song({
    title: "가시", singer_name: "버즈", playcount: 443, url: "http://naver.com"
  });
  newSong.save((err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
  res.send("테스트 수행");

});

app.get("/insert", (req, res) => {

  const songData = {
    title: "Test Song",
    singer_name: "Me",
    playcount: 1000,
    url: "https://example.com/my-song",
  };

  db.collection("Song").insertOne(songData, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      db.close(() => {
        console.log("Database connection closed");
      });
    }
  })
});

/*
Add more routers here!
*/

export default app;
