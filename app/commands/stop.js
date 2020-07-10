module.exports = {
    name: 'stop',
    description: 'Kills the bot',
    execute(msg){
        msg.channel.send('Shutting down...');
        process.exit(0);
    }
}