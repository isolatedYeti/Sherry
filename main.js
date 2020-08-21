const {token, prefix} = require("./config.json");const Discord = require("discord.js");const client = new Discord.Client();
client.on("ready", () => {
    console.log(`Bot ${client.user.tag}! logged in`);
});client.on("message", msg => {if (msg.content === `${prefix}ping`) {msg.reply("Sherry is Alive!");}});
client.login(token);