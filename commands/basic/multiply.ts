const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

module.exports = {
  data: new SlashCommandBuilder()
  .setName('multiply')
  .setDescription('Multiply Two Numbers')
  .addIntegerOption(option => option.setName('num_1').setDescription('The first number to multiply').setRequired(true))
  .addIntegerOption(option => option.setName('num_2').setDescription('The second number to multiply').setRequired(true)),
  async execute(interaction) {
    const fn = interaction.options.getInteger('num_1');
    const sn = interaction.options.getInteger('num_2')

    const result = fn * sn;
    const embed = new EmbedBuilder()
    .setTitle('✖️ Result of Multiplication')
    .setDescription(`${fn} x ${sn} = ${result}`)
    .setTimestamp()
    .setFooter( { text : "Hope you are satisfied with the answer 👍"})
    .setColor('Red')

    
    await interaction.reply( { embeds : [ embed ] } )
  }
}