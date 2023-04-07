import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
    title: { type: String, required: true },
    singer_name: { type: String, required: true },
    playcount: { type: Number, required: true },
    url: { type: String, required: true },
    image: { type: String, required: true },
  },
  {
    collection: 'Song'
  });

const Song = mongoose.model("Song", songSchema);

export default Song;
