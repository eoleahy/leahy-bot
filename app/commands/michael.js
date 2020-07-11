const { Channel } = require("discord.js")

module.exports = {
    name: "dirtymichael",
    description: "Michael wins 50 quid",
    execute(msg){
        msg.channel.send('https://www.youtube.com/watch?v=FBSynY3CCek');
    }
}