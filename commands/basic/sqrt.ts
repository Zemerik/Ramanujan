const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('sqrt')
    .setDescription('Get square-root of a number')
    .addIntegerOption(option => option.setName('number').setDescription('Number to find the square-root of').setRequired(true)),
    async execute(interaction) {
        const num = interaction.options.getInteger('number');

        const result = Math.sqrt(num);

        const embed = new EmbedBuilder()
        .setTitle('➗ Result of Square-Root')
        .setDescription(`Square-root of ${num} = ${result}`)
        .setTimestamp()
        .setFooter( { text : "Hope you are satisfied with the answer 👍"})
        .setColor('Red')

        await interaction.reply( { embeds : [ embed] } )
    }
}