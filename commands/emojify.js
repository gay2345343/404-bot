const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let special = {
      "0": ":zero:",
      "1": ":one:",
      "2": ":two:",
      "3": ":three:",
      "4": ":four:",
      "5": ":five:",
      "6": ":six:",
      "7": ":seven:",
      "8": ":eight:",
      "9": ":nine:",
      "<": ":arrow_backward:",
      ">": ":arrow_forward:",
      "!": ":exclamation:",
      "?": ":question:",
      "^": ":arrow_up_small:",
      "+": ":heavy_plus_sign:",
      "-": ":heavy_minus_sign:",
      "÷": ":heavy_division_sign:",
      ".": ":radio_button:"
  }
  var emoji = message.toLowerCase().split("");
    let done = "";

    for (c = 0; c < emoji.length; c++) {
        if (/\s/g.test(emoji[c])) {
            done += "   ";
        } else if (/[abcdefghijklmnopqrstuvwxyz]/g.test(emoji[c])) {
            done += emoji[c].replace(emoji[c], " :regional_indicator_" + emoji[c] + ":");
        } else if (Object.keys(special).indexOf(emoji[c]) > -1) {
            done += emoji[c].replace(emoji[c], " " + special[emoji[c]]);
        } else {
            done += " " + emoji[c] + " "
        }

    }
    message.channel.send(done)
}

module.exports.help = {
  name: "emojify"
}