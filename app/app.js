'use strict';

const { prefix, token } = require('./config.json');
const Discord = require('discord.js');

const client = new Discord.Client();


client.once('ready', () => {
    console.log('Bot is ready!');
});

client.on('message', message => {
    if(message.author != client.user){
        console.log(message.content);

        if(message.content === `${prefix}server`){
            message.channel.send(`Server name: ${message.guild.name}\nRegion: ${message.guild.region}`);
        }
    }
});

client.login(token);