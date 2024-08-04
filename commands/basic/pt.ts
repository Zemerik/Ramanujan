const { EmbedBuilder, SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('pythagoras-theorem')
    .setDescription('Solve a pythagoras theorem question')
    .addIntegerOption(option => option.setName('length_1').setDescription('First Length').setRequired(true))
    .addIntegerOption(option => option.setName('length_2').setDescription('Second Length').setRequired(true)),
    async execute(interaction) {
        const length_a = interaction.options.getInteger('length 1');
        const length_b = interaction.options.getInteger('length 2');

        const result = Math.sqrt(length_a ** 2 + length_b ** 2);

        const embed = new EmbedBuilder()
        .setTitle('✖️Pythagoras theorem')
        .setDescription(`Answer = ${result}`)
        .setTimestamp()
        .setFooter( { text : "Hope you are satisfied with the answer 👍"})
        .setColor('Red')

        await interaction.reply( { embeds : [ embed ] } )
    }
}