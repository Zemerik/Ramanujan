const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

module.exports = {
  data: new SlashCommandBuilder()
  .setName('add')
  .setDescription('Add Two Numbers')
  .addIntegerOption(option => option.setName('num_1').setDescription('The first number to add').setRequired(true))
  .addIntegerOption(option => option.setName('num_2').setDescription('The second number to add').setRequired(true)),
  async execute(interaction) {
    const fn = interaction.options.getInteger('num_1');
    const sn = interaction.options.getInteger('num_2')

    const result = fn + sn;
    const embed = new EmbedBuilder()
    .setTitle(':heavy_plus_sign: Result of Addition')
    .setDescription(`${fn} + ${sn} = ${result}`)
    .setTimestamp()
    .setFooter( { text : "Hope you are satisfied with the answer 👍"})
    .setColor('Red')

    
    await interaction.reply( { embeds : [ embed ] } )
  }
}