const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('square')
    .setDescription('Square a number')
    .addIntegerOption(option => option.setName('number').setDescription('Number to square').setRequired(true)),
    async execute(interaction) {
        const num = interaction.options.getInteger('number');

        const result = num * num;

        const embed = new EmbedBuilder()
        .setTitle('✖️ Result of Squared')
        .setDescription(`${num} squared = ${result}`)
        .setTimestamp()
        .setFooter( { text : "Hope you are satisfied with the answer 👍"})
        .setColor('Red')

        await interaction.reply( { embeds : [ embed] } )
    }
}