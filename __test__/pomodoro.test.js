const { Client, GatewayIntentBits } = require('discord.js');
const { startBot } = require('../index.js'); // Import the function that starts the bot
const { Pomodoro } = require('../Pomodoro.js');

beforeEach(() => {
    // Instantiate the client before each tests
    client = new Client(({ intents: [GatewayIntentBits.Guilds] }));
});

afterEach(() => {
    // Clean up: disconnect the client after the test
    client.destroy();
});

test('One pomodoro equals 25 minutes', {

})

test('A user can start a pomodoro', {

})

test('A user can pause a pomodoro', {

})

test('A user can stop a pomodoro', {

})

test('A user can change pomodoro duration', {

})