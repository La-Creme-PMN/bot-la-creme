// Interaction du bot avec l'api de Discord
const Discord = require("discord.js");
const bot = new Discord.Client({ intents: 3276799 });
// (3276799 = intents calculator de Discord)

// Récupérer le token du bot situé dans config.js
const config = require("./config");
bot.login(config.token);
