import { async } from "regenerator-runtime";
import Song from "../models/Song";
import User from "../models/User";
import db from "../db";
var fs = require('fs');
var ejs = require('ejs');

export const home = async (req, res) => {
  console.log("home");
  return res.render("home", { pageTitle: "Home" });
};

export const pug = async (req, res) => {
  console.log("pug");
  return res.render("test", { pageTitle: "Home", message: "pug test"});
};


export const insert = async (req, res) => {
    const songData = [
    {
    title: "가시",
    singer_name: "버즈",
    playcount: 1000,
    url: "https://example.com/가시",
    },
    {
      title: "남자를 몰라",
      singer_name: "버즈",
      playcount: 2000,
      url: "https://example.com/남자를 몰라",
    },
    {
      title: "겁쟁이",
      singer_name: "버즈",
      playcount: 3000,
      url: "https://example.com/겁쟁이",
    },
    {
      title: "My Love",
      singer_name: "버즈",
      playcount: 4000,
      url: "https://example.com/My Love",
    },
    {
      title: "비망록",
      singer_name: "버즈",
      playcount: 5000,
      url: "https://example.com/비망록",
    },
    {
      title: "나에게로 떠나는 여행",
      singer_name: "버즈",
      playcount: 6000,
      url: "https://example.com/나에게로 떠나는 여행",
    },
    {
      title: "어쩌면..",
      singer_name: "버즈",
      playcount: 7000,
      url: "https://example.com/어쩌면..",
    },
  ]
try {
      await db.collection("Song").insertMany(songData, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
    })
  } catch {
   
  } finally {
      db.close((req, res) => {
      console.log("Database connection closed");
      });
      res.redirect("/");
  }

};


export const find = (req, res) => {
  var mysort = {playcount : -1};
    db.collection("Song").find({}).sort(mysort).toArray(function(err, cursor) {
      console.log("cursor 출력: ")
      console.log(cursor);
      return res.render("songlist", {posts: cursor});
    
      db.close();
    })
}

// export const find = (req, res) => {
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
// }