const Discord = require('discord.js');
const money = require('discord-money');

// Define client for Discord
const client = new Discord.Client();

// This runs when a message is recieved...
module.exports = {
    config: {
        name: "balance",
        usage: "balance",
        aliases: ["bal", "bala"],
        description: "Get balance",
        permissions: "none"
    },
    run: async (bot, message, args) => {       
    money.fetchBal(message.author.id).then((i) => { // money.fetchBal grabs the userID, finds it, and puts it into 'i'.
    message.channel.send(`**Balance:** ${i.money}`);
})
}
};  
/*

    // Example: Getting a daily reward
    if (message.content.toUpperCase() === prefix + `DAILY`) {
            message.delete();
            if (money[message.author.username + message.guild.name] != moment().format('L')) {
                money[message.author.username + message.guild.name] = moment().format('L')
                money.updateBal(message.author.id, 500).then((i) => { // The daily ends of the day, so everyday they can get a daily bonus, if they missed it, they can't get it back again.
                    message.channel.send({embed: {
                        color: 3447003,
                        description: 'Recieved your **$500** \`!daily`\. I think you should check \`!money\`.',
                        author: {
                            name: `${message.author.username}#${message.author.discriminator}`,
                            icon_url: message.author.avatarURL 
                        }
                    }});
                })
            } else {
                message.channel.send({embed: {
                    color: 3447003,
                    description: 'You already recieved your \`!daily`\. Check later **' + moment().endOf('day').fromNow() + '**.', // When you got your daily already, this message will show up.
                    author: {
                        name: `${message.author.username}#${message.author.discriminator}`,
                        icon_url: message.author.avatarURL 
                    }
                }});
            }
        };
*/
