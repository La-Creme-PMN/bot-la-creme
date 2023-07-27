const { SlashCommandBuilder } = require('discord.js');
const { resumePomodoro } = require('../../pomodoroManager');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('resume')
        .setDescription('Resume a paused Pomodoro session'),

    async execute(interaction) {
        const userId = interaction.userId;
        const timeLeft = resumePomodoro(userId);

        if (timeLeft) {
            const minutesLeft = Math.floor(timeLeft / 60000);
            const secondsLeft = Math.floor((timeLeft % 60000) / 1000);
            await interaction.reply(`Pomodoro session resumed. Time left: ${minutesLeft}m ${secondsLeft}s`);
        } else {
            await interaction.reply('You do not have a paused Pomodoro session to resume.');
        }
    }

}