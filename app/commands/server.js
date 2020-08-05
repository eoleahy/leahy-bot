'use strict';

module.exports = {
    name: 'server',
    description: 'Displays basic server info',
    execute(msg){
        msg.channel.send(`Server name: ${msg.guild.name}\nRegion: ${msg.guild.region}`);
    }
}