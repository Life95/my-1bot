const Discord = require('discord.js');

var bot = new Discord.Client();

bot.on('ready', () => {
    bot.user.setPresence({ game: {name: 'help ℒ𝓲𝒇𝒆' , type: 0} });
    console.log("Bot Ready !");
});

bot.login('NDY3NDI3NTE1MDM2ODYwNDE2.DiuwcA.-CUx8puNqqKGNVXEsvY_oYGgTi0');
