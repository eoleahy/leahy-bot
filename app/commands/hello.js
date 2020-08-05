'use strict';

module.exports = {
    name: 'hello',
    description: 'Says hello',
    execute(msg){
        msg.channel.send(`Hello ${msg.author} :)`);
    }
}