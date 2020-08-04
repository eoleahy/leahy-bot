module.exports = {
    name: 'request',
    description: 'Request a command to be added.',
    args: true,
    usage: '!request <command> <description>',
    execute(msg,args){
        if(args.length !== 2){
            return msg.reply(this.usage);
        }
        return msg.reply(`Request for <${args[0]}> has been created.`);
    }
}