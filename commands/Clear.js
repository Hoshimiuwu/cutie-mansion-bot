const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    //The fucking clear command thing
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Inefficient Permissions to delete messages.");
    if(!args[0]) return message.channel.send("Ooops! something went wrong. Specify the amount of messages you want to be deleted.");
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`Cleared ${args[0]} messages.`).then(message => message.delete({timeout: 5000}));
    });
}

module.exports.help = {
    name: "clear"
}