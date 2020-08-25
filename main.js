const {token, prefix} = require("./config.json");const Discord = require("discord.js");const client = new Discord.Client();
client.on("ready", () => {console.log(`Bot ${client.user.tag}! logged in`);});
client.on("message", msg => {if (msg.author.bot) {return;} else if (msg.content === `${prefix}ping`) {msg.reply('Sherry is Alive! Set the command prefix with ".pre !" Use command "commands" to view the current capabilities of Sherry!');}else {return;}});client.login(token);
