const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    //hugs them
    message.channel.send(`EEEEEEEH! **${message.author.username}** has licked **${message.mentions.members.first()}**!`)
    let hugembed = new Discord.MessageEmbed()
    .setImage('https://cdn.discordapp.com/attachments/624997004094996481/713409054919098408/04d.gif')
    .setFooter('Your kind server bot c:', 'https://cdn.discordapp.com/attachments/624997004094996481/713038757246402650/JPEG_20200505_094831.jpg')
    .setTimestamp()
    .setColor("#f5b0f0")
    
    message.channel.send(hugembed);

}

module.exports.help = {
    name: "lick"
}