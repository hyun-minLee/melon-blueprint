import Song from "../models/Song";
import User from "../models/User";


export const home = async (req, res) => {
  console.log("home");
  return res.render("home", { pageTitle: "Home" });
};

export const insert = async (req, res) => {
  console.log("insert");
  const newSong = new Song({
    title: "route",
    singer_name: "route",
    playcount: 443,
    url: "http://naver.com",
  });
  try {
    const result = await newSong.save();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};