const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('feedback')
    .setDescription('Send any feedback to developers')
    .addStringOption(option => option.setName('feedback').setDescription('Feedback to send').setRequired(true)),
    async execute(interaction) {
        const feedback = interaction.options.getString('feedback')

        const embed = new EmbedBuilder()
        .setTitle(`Thanks for the feedback`)
        .setDescription(`Note that RAMANUJAN is 100% **open-source** on github, for more info, click [here](<https://github.com/Zemerik/Ramanujan>)`)
        .setColor('Purple')
        .setTimestamp()
        .setFooter( { text: `Created by .zemerik`})

        await interaction.reply( { embeds : [ embed ] } )
    }   
}