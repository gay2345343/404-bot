exports.run = (client, message, sides) => {
    if (sides.length < 1) { sides = 6; }
    if (sides === 0) { return message.channel.send("You can't roll from 0!"); }

    if (Number.isInteger(Number(sides))) {
        var y = Math.floor(Math.random() * (Math.floor(sides) - Math.ceil(1) + 1)) + Math.ceil(1);
        return message.channel.send(`🎲 You rolled a ${y}! 🎲`);
    } else {
        return message.channel.send("That's an invalid number. Please try again!");
    }
 };

exports.conf = {
    enabled: true,
    runIn: ["text"],
    aliases: [],
    permLevel: 0,
    botPerms: [],
};

exports.help = {
    name: "roll",
    description: "Roll a dice!",
    usage: "[sides:str]",
    usageDelim: "",
};