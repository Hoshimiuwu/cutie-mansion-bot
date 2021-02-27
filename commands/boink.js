const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    //hugs them
    message.channel.send(`<a:BOINK:681222825364815874> | **${message.author.username}** has boinked **${message.mentions.members.first()}**!`)
    let hugembed = new Discord.MessageEmbed()
    .setImage('https://cdn.discordapp.com/attachments/624997004094996481/713452342078472323/tenor_1.gif')
    .setFooter('Your kind server bot c:', 'https://cdn.discordapp.com/attachments/624997004094996481/713038757246402650/JPEG_20200505_094831.jpg')
    .setTimestamp()
    .setColor("#f5b0f0")
    
    message.channel.send(hugembed);

}

module.exports.help = {
    name: "boink"
}