require('dotenv').config();

// node native utilities
const fs = require('node:fs');
const path = require('node:path');

// Import classes from discord.js
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');

// Retrieve the token from the environment file
const { token } = process.env.DISCORD_TOKEN;

// discord.js client instantiation
const client = new Client(({ intents: [GatewayIntentBits.Guilds] }))

client.commands = new Collection();

const commandsFolderPath = path.join(__dirname, 'command');
const commandFolders = fs.readdir(commandsFolderPath);

// Browse the command directory subfolders
for (const folder of commandFolders) {
    const commandsPath = path.join(commandsFolderPath, folder);
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js')); /* retrieve every Javascript file */

    // Browse the of each directories files
    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        const command = require(filePath) /* import the module from each file */

        // Set a new item in the Collection with the key as the command name and the value as the exported module
        if ('data' in command && 'execute' in command) { /* the command exists */
            client.commands.set(command.data.name, command);
        } else {
            console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
        }
    }
}