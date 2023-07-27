const { SlashCommandBuilder } = require('discord.js');
const pomodoroManager = require('../../pomodoroManager');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('stop')
        .setDescription('Stop the current Pomodoro session'),

    async execute(interaction) {
        const userId = interaction.user.id;
        const userStatus = pomodoroManager.getStatus(userId);

        if (!userStatus) {
            interaction.reply('You do not have an active Pomodoro session.');
        } else {
            pomodoroManager.stopPomodoro(userId);
            interaction.reply('Pomodoro session stopped. You can start another one with /start.');
        }
    }
};