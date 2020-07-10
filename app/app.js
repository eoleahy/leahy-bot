'use strict';
require('dotenv').config();
const Discord = require('discord.js');
const fs = require('fs');
const { dirname } = require('path');
const client = new Discord.Client();

const prefix = '!';


client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./app/commands').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Bot is ready!');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    console.log(message.content);
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(!client.commands.has(command))
        return message.reply(`"${command}" command doesn't exist!`)
    try{
        client.commands.get(command).execute(message, args);
    }catch(error){
        console.error(error);
        message.reply('There was an error trying to execute that command');
    }
});

client.login(process.env.token);