const { EmbedBuilder, SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('circle-circumference')
    .setDescription('Find Circle-Circumference by using radius')
    .addIntegerOption(option => option.setName('radius').setDescription('Add the Radius of the circle').setRequired(true)),
    async execute(interaction) {
        const radius = interaction.options.getInteger('radius');

        const result = 2 * Math.PI * radius;

        const embed = new EmbedBuilder()
        .setTitle('✖️Circle Circumference')
        .setDescription(`The circumference is ${result.toFixed(2)}`)
        .setTimestamp()
        .setFooter( { text : "Hope you are satisfied with the answer 👍"})
        .setColor('Red')

        await interaction.reply( { embeds : [ embed ] } )
    }
}