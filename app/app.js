'use strict';
require('dotenv').config();
const Discord = require('discord.js');
const fs = require('fs');
const { dirname } = require('path');
const client = new Discord.Client();

const prefix = '!';

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./app/commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Bot is ready!');
});
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    console.log(`${message.content} - ${message.author.username}`);

    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (!client.commands.has(commandName))
        return message.reply(`"${commandName}" command doesn't exist!`)
    try {

        const command = client.commands.get(commandName);
        if (command.args && args.length == 0) {
            let reply = `You didn't provide any arguments, ${message.author}!`;

            if (command.usage) {
                reply += `\nThe proper usage would be: ${command.usage}`;
            }
            return message.channel.send(reply);
        }
        else
            command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('There was an error trying to execute that command');
    }
});

client.login(process.env.token);

exports.commands = client.commands;
