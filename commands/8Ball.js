const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    //-8ball bitcheees
    if(!args[2]) return message.reply("Please ask a full question you dummy")
    let replies = ["Yes", "No", "I don't know", "Are you retarded? No", "Are you retarded? of course", "YEP"];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(0).join(" ");

    let ballembed = new Discord.MessageEmbed()
    .setAuthor(message.author.username)
    .setColor("#f5b0f0")
    .addField("Question", question)
    .addField("Answer", replies[result])

    message.channel.send(ballembed);
}

module.exports.help = {
    name: ("8ball")
}