const { SlashCommandBuilder } = require('discord.js');
const pomodoroManager = require('../../pomodoroManager');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('status')
        .setDescription('Check the time left in the current Pomodoro session'),

    async execute(interaction) {
        const userId = interaction.user.id;
        const userStatus = pomodoroManager.getStatus(userId);

        if (!userStatus) {
            interaction.reply('You do not have an active Pomodoro session.');
        } else if (userStatus.interval) {
            const minutesLeft = Math.floor(userStatus.time / 60000);
            const secondsLeft = Math.floor((userStatus.time % 60000) / 1000);
            interaction.reply(`Pomodoro session in progress. Time left: ${minutesLeft}m ${secondsLeft}s`);
        } else {
            const minutesLeft = Math.floor(userStatus.time / 60000);
            const secondsLeft = Math.floor((userStatus.time % 60000) / 1000);
            interaction.reply(`Your Pomodoro session is currently paused. Time left before pause: ${minutesLeft}m ${secondsLeft}s`);
        }
    }
};