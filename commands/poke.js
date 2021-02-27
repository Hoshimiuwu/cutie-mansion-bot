const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    //hugs them
    message.channel.send(`<a:cm1_ummm:720084369867407362> | **${message.author.username}** has poked **${message.mentions.members.first()}**!`)
    let hugembed = new Discord.MessageEmbed()
    .setImage('https://cdn.discordapp.com/attachments/657580630573580288/815187029003993098/tenor_1.gif')
    .setFooter('Your kind server bot c:', 'https://cdn.discordapp.com/attachments/624997004094996481/713038757246402650/JPEG_20200505_094831.jpg')
    .setTimestamp()
    .setColor("#f5b0f0")
    
    message.channel.send(hugembed);

}

module.exports.help = {
    name: "poke"
}