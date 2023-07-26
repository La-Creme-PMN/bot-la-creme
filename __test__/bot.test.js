const { Client, GatewayIntentBits } = require('discord.js');
const { startBot } = require('../index.js'); // Import the function that starts the bot

test('Bot is online when connected to Discord', async () => {
    client = new Client(({ intents: [GatewayIntentBits.Guilds] }));

    // Start the bot
    startBot(client);

    // Create a promise to wait for the 'ready' event
    const readyPromise = new Promise((resolve) => {
        client.once('ready', () => {
            resolve();
        });
    });

    // Wait for the 'ready' event to be resolved before continuing the test
    await readyPromise;

    // The bot is now ready, check if it's online
    expect(client.user.presence.status).toBe('online');

    // Clean up: disconnect the client after the test
    client.destroy();
}, 20000); // Timeout set to 20s