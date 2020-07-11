const fs = require('fs');
const Discord = require('discord.js')
module.exports = {
    name: 'pawg',
    description: 'pog',
    execute(msg){
        const image = fs.readFileSync('./app/src/images/pog.png');
        msg.channel.send({files:[image]});
    }
}