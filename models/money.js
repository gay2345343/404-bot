const Discord = require('discord.js');
const mongoose = require("mongoose");

const moneySchema = mongoose.Schema({
  userID: String,
  serverID: String,
  money: Number
});

module.exports = mongoose.model("Money", moneySchema)
