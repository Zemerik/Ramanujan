const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('contribute')
    .setDescription('Contribute to Ramanujan'),
    async execute(interaction) {
        const embed = new EmbedBuilder()
        .setTitle('Contributing to Ramanujan')
        .setDescription('>> In order to contribute to Ramanujan, you will require a [GITHUB](<https://github.com>) Account.\n\nIf you have an account, then simply head over to this [repository](<https://github.com/Zemerik/Ramanujan>).')
        .setFooter( { text: 'You can see the CONTRIBUTING.md file for any assistance'})
        .setColor('Purple')
        .setTimestamp()
        await interaction.reply( { embeds : [ embed ] } )
    }
}