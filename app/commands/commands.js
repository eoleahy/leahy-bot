'use strict';

const commands = require('../app');

module.exports = {
    name: 'commands',
    description: 'Lists all the commands the bot responds to',
    execute(msg){
        let msg_str = 'Command list:\n';
        let list = commands["commands"];
        list.forEach(element => {
            msg_str += `${element['name']} --- ${element['description']}\n`;
            if(element.usage)
                msg_str += `         ${element.usage}\n`;
        });
        msg.channel.send(msg_str);
    }
}