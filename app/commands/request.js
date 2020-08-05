'use strict';

module.exports = {
    name: 'request',
    description: 'Request a command to be added.',
    args: true,
    usage: '!request <command> <description>',
    execute(msg,args){
        return msg.reply(`${this.name} is still under construction`);
        
        if(args.length !== 2){
            return msg.reply(this.usage);
        }
        
    }
}