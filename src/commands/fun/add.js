const Discord = require('discord.js');
const money = require('discord-money');

// Define client for Discord
const client = new Discord.Client();

// This runs when a message is recieved...
module.exports = {
    config: {
        name: "add",
        usage: "add",
        description: "Get balance",
        permissions: "MANAGE_ROLES"
    },
    run: async (bot, message, args) => {       
        money.updateBal(message.author.id, 500).then((i) => { // money.updateBal grabs the (userID, value) value being how much you want to add, and puts it into 'i'.
            message.channel.send(`**You got $500!**\n**New Balance:** ${i.money}`);
        })
}
};