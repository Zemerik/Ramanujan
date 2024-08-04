const express = require("express");
const app = express();
const Discord = require("discord.js");
const Discord2 = require("discord.js-selfbot-v13")

const { Client, Collection, Events, GatewayIntentBits, ActivityType } = require('discord.js');
const client = new Discord.Client({ intents: [GatewayIntentBits.Guilds,
GatewayIntentBits.GuildMessages,
GatewayIntentBits.MessageContent,
]});

const { MessageActionRow, MessageButton, ButtonStyle } = require('discord.js')


client.on('ready', async () => {
  client.user.setActivity('Calculus', { type: ActivityType.Solving });
  console.log(`Logged in as ${client.user}`)
})

const PREFIX = '!';

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (message.content.includes('<@1152912870019973172>')) {
    const help_menu = new Discord.EmbedBuilder()
        .setTitle('Hey I am Ramanujan, a **MATHS** bot!')
        .setDescription(`Commands:`)
        .addFields(
          { name: 'subtract', value: 'Subtract Numbers'},
          { name: 'multiply', value: 'Mulitply Multiple Numbers Together'},
          { name: 'divide', value: 'Divide Numbers'},
          { name: 'square', value: 'Get the square of a number'},
          { name: 'sqrt', value: 'Get the square root of a number'},
          { name: 'circle-circumference', value: 'Find Circle Circumference by entering Radius'},
          { name: 'pt', value: 'Pythagorus Theorum'},
          { name: 'circle-area', value: 'Find the Circle Area by entering Radius'}
        )
        .setFooter( { text: 'Created by .zemerik' } )
        .setColor('Random')
        .setTimestamp()
        const github_button = new Discord.ButtonBuilder()
        .setLabel('Github')
        .setStyle(ButtonStyle.Link)
        .setURL('https://github.com/Zemerik/Ramanujan')
        const dash_button = new Discord.ButtonBuilder()
        .setLabel('Dashboard')
        .setStyle(ButtonStyle.Link)
        .setURL('https://zemerik.is-a.dev/Ramanujan')
        const support_button = new Discord.ButtonBuilder()
        .setLabel('Support Server')
        .setStyle(ButtonStyle.Link)
        .setURL(`https://zemerik.is-a.dev`)
        const row = new Discord.ActionRowBuilder().addComponents(github_button, dash_button, support_button)
        message.channel.send( { embeds : [ help_menu ], components: [ row ] } )
  }

  if (message.content.startsWith(PREFIX)) {
    const args = message.content.slice(PREFIX.length).trim().split(' ');
    const command = args.shift().toLowerCase();

    switch (command) {
      case 'add':
        if (args.length < 2) {
            message.channel.send('Usage: !add <number1> <number2> [number3] [number4] ...');
            return;
        }
    
        // Extract the first two numbers
        const add1 = parseFloat(args[0]);
        const add2 = parseFloat(args[1]);
    
        // Check if the provided arguments are valid numbers
        if (isNaN(add1) || isNaN(add2)) {
            message.channel.send('Please provide valid numbers for addition.');
            return;
        }
    
        // Perform the initial subtraction
        let addresult = add1 + add2;
    
        // Iterate through additional numbers and subtract them
        for (let i = 2; i < args.length; i++) {
            const num = parseFloat(args[i]);
    
            // Check if the provided argument is a valid number
            if (isNaN(num)) {
                message.channel.send(`"${args[i]}" is not a valid number. Addition aborted.`);
                return;
            }
    
            addresult += num;
        }
    
        message.channel.send(`Result of addition: ${addresult}`);
        break;

        case 'subtract':
          if (args.length < 2) {
              message.channel.send('Usage: !subtract <number1> <number2> [number3] [number4] ...');
              return;
          }
      
          // Extract the first two numbers
          const num1 = parseFloat(args[0]);
          const num2 = parseFloat(args[1]);
      
          // Check if the provided arguments are valid numbers
          if (isNaN(num1) || isNaN(num2)) {
              message.channel.send('Please provide valid numbers for subtraction.');
              return;
          }
      
          // Perform the initial subtraction
          let result = num1 - num2;
      
          // Iterate through additional numbers and subtract them
          for (let i = 2; i < args.length; i++) {
              const num = parseFloat(args[i]);
      
              // Check if the provided argument is a valid number
              if (isNaN(num)) {
                  message.channel.send(`"${args[i]}" is not a valid number. Subtraction aborted.`);
                  return;
              }
      
              result -= num;
          }
      
          message.channel.send(`Result of subtraction: ${result}`);
          break;

          case 'multiply':
            if (args.length < 2) {
                message.channel.send('Usage: !multiply <number1> <number2> [number3] [number4] ...');
                return;
            }
        
            // Extract the first two numbers
            const num1multiply = parseFloat(args[0]);
            const num2multiply = parseFloat(args[1]);
        
            // Check if the provided arguments are valid numbers
            if (isNaN(num1multiply) || isNaN(num2multiply)) {
                message.channel.send('Please provide valid numbers for multiplication.');
                return;
            }
        
            // Perform the initial multiplication
            let resultmultiply = num1multiply * num2multiply;
        
            // Iterate through additional numbers and multiply them
            for (let i = 2; i < args.length; i++) {
                const num = parseFloat(args[i]);
        
                // Check if the provided argument is a valid number
                if (isNaN(num)) {
                    message.channel.send(`"${args[i]}" is not a valid number. Multiplication aborted.`);
                    return;
                }
        
                resultmultiply *= num;
            }
        
            message.channel.send(`Result of multiplication: ${resultmultiply}`);
            break;
        

            case 'divide':
              if (args.length < 2) {
                  message.channel.send('Usage: !divide <number1> <number2> [number3] [number4] ...');
                  return;
              }
          
              // Extract the first two numbers
              const num1divide = parseFloat(args[0]);
              const num2divide = parseFloat(args[1]);
          
              // Check if the provided arguments are valid numbers
              if (isNaN(num1divide) || isNaN(num2divide)) {
                  message.channel.send('Please provide valid numbers for division.');
                  return;
              }
          
              // Perform the initial division
              let resultdivide = num1divide / num2divide;
          
              // Iterate through additional numbers and multiply them
              for (let i = 2; i < args.length; i++) {
                  const num = parseFloat(args[i]);
          
                  // Check if the provided argument is a valid number
                  if (isNaN(num)) {
                      message.channel.send(`"${args[i]}" is not a valid number. Subtraction aborted.`);
                      return;
                  }
          
                  result /= num;
              }
          
              message.channel.send(`Result of division: ${result}`);
              break;
          

      case 'square':
        if (args.length !== 1) {
          message.channel.send('Usage: !square <number>');
          return;
        }
        const squared = parseFloat(args[0]) ** 2;
        message.channel.send(`Square: ${squared}`);
        break;

      case 'sqrt':
        if (args.length !== 1) {
          message.channel.send('Usage: !sqrt <number>');
          return;
        }
        const squareRoot = Math.sqrt(parseFloat(args[0]));
        message.channel.send(`Square Root: ${squareRoot}`);
        break;

       case 'circle-circumference':
        if (args.length !== 1) {
          message.channel.send('Usage: !circle-circumference <radius>');
          return;
        }
        const radius = parseFloat(args[0]);
        if (isNaN(radius)) {
          message.channel.send('Invalid radius. Please provide a number.');
          return;
        }
        const circumference = 2 * Math.PI * radius;
        message.channel.send(`Circle Circumference: ${circumference.toFixed(2)}`);
        break;

      case 'pt':
        if (args.length !== 2) {
          message.channel.send('Usage: !pt <number 1> <number 2>');
          return;
        }

        const sideA = parseFloat(args[0]);
        const sideB = parseFloat(args[1]);

        if (isNaN(sideA) || isNaN(sideB)) {
          message.channel.send(`Invalid Lengths`);
          return;
        }

        const solve = Math.sqrt(sideB ** 2 + sideB ** 2);
        message.channel.send(`${solve}`);
        
      case 'circle-area':
        if (args.length !== 1) {
          message.channel.send('Usage: !circle-area <radius>');
          return;
        }
        const circleRadius = parseFloat(args[0]);
        if (isNaN(circleRadius)) {
          message.channel.send('Invalid radius. Please provide a number.');
          return;
        }
        const area = Math.PI * circleRadius ** 2;
        message.channel.send(`Circle Area: ${area.toFixed(2)}`);
        break;

      default:
        const help_menu = new Discord.EmbedBuilder()
        .setTitle('Hey I am Ramanujan, a **MATHS** bot!')
        .setDescription(`Commands:`)
        .addFields(
          { name: 'subtract', value: 'Subtract Numbers'},
          { name: 'multiply', value: 'Mulitply Multiple Numbers Together'},
          { name: 'divide', value: 'Divide Numbers'},
          { name: 'square', value: 'Get the square of a number'},
          { name: 'sqrt', value: 'Get the square root of a number'},
          { name: 'circle-circumference', value: 'Find Circle Circumference by entering Radius'},
          { name: 'pt', value: 'Pythagorus Theorum'},
          { name: 'circle-area', value: 'Find the Circle Area by entering Radius'}
        )
        .setFooter( { text: 'Created by .zemerik' } )
        .setColor('Random')
        .setTimestamp()
        const github_button = new Discord.ButtonBuilder()
        .setLabel('Github')
        .setStyle(ButtonStyle.Link)
        .setURL('https://github.com/Zemerik/Ramanujan')
        const dash_button = new Discord.ButtonBuilder()
        .setLabel('Dashboard')
        .setStyle(ButtonStyle.Link)
        .setURL('https://zemerik.is-a.dev/Ramanujan')
        const support_button = new Discord.ButtonBuilder()
        .setLabel('Support Server')
        .setStyle(ButtonStyle.Link)
        .setURL(`https://zemerik.is-a.dev/support`)
        const row = new Discord.ActionRowBuilder().addComponents(github_button, dash_button, support_button)
        message.channel.send( { embeds : [ help_menu ], components: [ row ] } )
        break;
    }
  }
});

//Slash Commands
const fs = require('node:fs');
const path = require('node:path');
const token = require('./config.json')

client.commands = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	// Set a new item in the Collection with the key as the command name and the value as the exported module
	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command);
	} else {
		console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
	}
}

client.on(Events.InteractionCreate, async (interaction) => {
	if (!interaction.isChatInputCommand()) return;

	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		await interaction.reply(`${interaction.commandName} is currently being upgraded!!`)
		return;
	}

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		if (interaction.replied || interaction.deferred) {
			await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
		} else {
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	}
});

client.commands = new Collection();
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		// Set a new item in the Collection with the key as the command name and the value as the exported module
		if ('data' in command && 'execute' in command) {
			client.commands.set(command.data.name, command);
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}

client.login('TOKEN HERE');

