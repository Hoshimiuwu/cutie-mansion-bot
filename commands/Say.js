const Discord = require("discord.js")

module.exports.run = async (bot,message, args) => {
    //says to whatever you say
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Innifcient perms");
    let botmessage = args.join(" ");
    message.delete().catch();
    message.channel.send(botmessage);
}

module.exports.help = {
    name: "say"
}