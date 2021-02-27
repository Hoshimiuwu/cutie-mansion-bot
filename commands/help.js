const Discord = require("discord.js")

module.exports.run = async (bot,message, args) => {
    
    //Help center
    let ballembed = new Discord.MessageEmbed()
    .setTitle("Help menu")
    .setAuthor(message.author.username)
    .setColor("#f5b0f0")
    .addField("Moderation:", "tempmute, clear.")
    .addField("Fun:", "crim, pog, uwu, xqc, 8ball, say, microwave.")
    .addField("Interactive (kinda not working):", "hug, cuddle, lick")
    .addField("Not fully working yet:", "tempmute")
    .addField("Contact:", "If you have extra questions, feel free to contact me @Jumpy#0003")
    .setThumbnail('https://cdn.discordapp.com/attachments/624997004094996481/713038757246402650/JPEG_20200505_094831.jpg')
    .setFooter('Your kind server bot c:', 'https://cdn.discordapp.com/attachments/624997004094996481/713038757246402650/JPEG_20200505_094831.jpg')
    .setTimestamp();

    message.channel.send(ballembed);
}

module.exports.help = {
    name: "help"
}