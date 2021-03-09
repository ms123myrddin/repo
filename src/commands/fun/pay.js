const Discord = require('discord.js');
const money = require('discord-money');

// Define client for Discord
const client = new Discord.Client();

// This runs when a message is recieved...
module.exports = {
    config: {
        name: "pay",
        usage: "pay",
        aliases: ["pey", "pya"],
        description: "Get balance",
        permissions: "none"
    },
    run: async (bot, message, args) => {       
        money.updateBal(message.author.id, -500).then((i) => { // Since the 'value' is -500, it will 'add' -500, making the bal $500 lower.
            message.channel.send(`**You paid your fine of $500!**\n**New Balance:** ${i.money}`);
        })
}
};  