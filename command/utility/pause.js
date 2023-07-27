const { SlashCommandBuilder } = require('discord.js');
const pomodoroManager = require('../../pomodoroManager');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pause')
        .setDescription('Pause the current Pomodoro session'),

    async execute(interaction) {
        const userId = interaction.user.id;
        const timeLeft = pomodoroManager.pausePomodoro(userId);

        if (!timeLeft) {
            interaction.reply('You do not have an active Pomodoro session.');
        } else {
            const minutesLeft = Math.floor(timeLeft / 60000);
            const secondsLeft = Math.floor((timeLeft % 60000) / 1000);
            interaction.reply(`Pomodoro session paused. Time left: ${minutesLeft}m ${secondsLeft}s`);
        }
    }
};