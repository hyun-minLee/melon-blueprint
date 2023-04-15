import { async } from "regenerator-runtime";
import Song from "../models/Song";
import User from "../models/User";
import db from "../db";
const http = require('http');
const url = require('url');
var fs = require('fs');
var ejs = require('ejs');

export const playlist = async (req, res) => {

  let datalist= []
  const submitdata = req.query.submitdata;
  const receivedData = JSON.parse(submitdata);
  // const image = receivedData[0][0].image;
  // const title = receivedData[0][1].title;
  // const singer = receivedData[0][2].singer;
  // const like = receivedData[0][3].like;

  receivedData.forEach(([{ image }, { title }, { singer }, { like }]) => {
    // 추출된 데이터를 콘솔에 출력합니다.
    console.log('Data extracted from GET request:');
    console.log('Image URL:', image);
    console.log('Title:', title);
    console.log('Singer:', singer);
    console.log('Like:', like);
    console.log('-----');
    // datalist.push(image);
    // datalist.push(title);
    // datalist.push(singer);
    // datalist.push(like);

    // console.log(`datalist: ${datalist}`);
  });
  // res.writeHead(200, { 'Content-Type': 'text/html' });

  return res.render("playlist", { receivedData : receivedData });
};

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
    image: "가시.jpg",
    url: "https://www.youtube.com/embed/1-Lm2LUR8Ss",
    },
    {
      title: "남자를 몰라",
      singer_name: "버즈",
      playcount: 2000,
      image: "남자를 몰라.jpg",
      url: "https://www.youtube.com/embed/jnYtJ7trhNI",
    },
    {
      title: "겁쟁이",
      singer_name: "버즈",
      playcount: 3000,
      image: "겁쟁이.jpg",
      url: "https://www.youtube.com/embed/msYVj-_xek0",
    },
    {
      title: "My Love",
      singer_name: "버즈",
      playcount: 4000,
      image: "My Love.jpg",
      url: "https://www.youtube.com/embed/F7XN8byHrtM",
    },
    {
      title: "비망록",
      singer_name: "버즈",
      playcount: 5000,
      image: "비망록.jpg",
      url: "https://www.youtube.com/embed/0TMtzYXv6g0",
    },
    {
      title: "나에게로 떠나는 여행",
      singer_name: "버즈",
      playcount: 6000,
      image: "나에게로 떠나는 여행.jpg",
      url: "https://www.youtube.com/embed/VyLE9CIeNbM",
    },
    {
      title: "어쩌면..",
      singer_name: "버즈",
      playcount: 7000,
      image: "어쩌면.jpg",
      url: "https://www.youtube.com/embed/NeG8jsApbSk",
    },
  ]

  try {
    const result = await db.collection("Song").insertMany(songData);
    console.log(result);
  } catch (err) {
    console.log(err);
  } finally {
    try {
      await db.close();
      console.log("Database connection closed");
    } catch (err) {
      console.log(err);
    }
    // res.redirect("/");
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