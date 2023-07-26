const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("test")
    .setDescription("Replies with Test!"),
  async execute(interaction) {
    await interaction.reply("Test!");
  },
};
