const Discord = require("discord.js");
const config = require("./config.json");
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");
bot.commands = new Discord.Collection();

// Requiers all dependecies

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`);
    bot.user.setActivity("Prefix is .. <3", {
        type: "STREAMING",
        url: "https://www.twitch.tv/Jumpyuwu"
      });
})

fs.readdir("./commands/", (err, files) => {
    if (err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log("No commands were found... You pepega")
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`)
        console.log(`${f} Loaded!`)
        bot.commands.set(props.help.name, props);
    })
})

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = config.prefix;
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandfile = bot.commands.get(cmd.slice(prefix.length))
    if(commandfile) commandfile.run(bot, message, args);
})

bot.login(process.env.token)