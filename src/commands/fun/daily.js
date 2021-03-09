const Discord = require('discord.js');
const money = require('discord-money');
var moment = require('moment'); // require
// Define client for Discord
const client = new Discord.Client();

// This runs when a message is recieved...
module.exports = {
    config: {
        name: "daily",
        usage: "daily",
        aliases: ["dail", "day", "daily"],
        description: "Get balance",
        permissions: "none"
    },
    run: async (bot, message, args) => {       
        console.log("daily try")
        if (money[message.author.username + message.guild.name] != moment().format('L')) {
            money[message.author.username + message.guild.name] = moment().format('L')
            money.updateBal(message.author.id, 500).then((i) => { // The daily ends of the day, so everyday they can get a daily bonus, if they missed it, they can't get it back again.
                message.channel.send({embed: {
                    color: 3447003,
                    description: 'Recieved your **$500** \`daily`\. I think you should check w.bal.',
                    author: {
                        name: `${message.author.username}#${message.author.discriminator}`,
                        icon_url: message.author.avatarURL 
                    }
                }});
            })
        } else {
            message.channel.send({embed: {
                color: 3447003,
                description: 'You already recieved your \`daily`\. Check later **' + moment().endOf('day').fromNow() + '**.', // When you got your daily already, this message will show up.
                author: {
                    name: `${message.author.username}#${message.author.discriminator}`,
                    icon_url: message.author.avatarURL 
                }
            }});
        }

}
};  