const { SlashCommandBuilder } = require('discord.js');
const pomodoroManager = require('../../pomodoroManager');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('start')
        .setDescription('Start a Pomodoro session'),

    async execute(interaction) {
        const userId = interaction.user.id;

        if (pomodoroManager.getStatus(userId)) {
            interaction.reply('You already have a Pomodoro session running.');
        } else {
            pomodoroManager.startPomodoro(userId);
            interaction.reply('Pomodoro session started. Focus and work hard!');
        }
    }
};