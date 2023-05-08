import mongoose from "mongoose";

const Schema = mongoose.Schema;

const playerSchema = new Schema({
  name: String,
  placement: Number,
  image: String,
});

const Player = mongoose.model("Player", playerSchema);

export { Player };
