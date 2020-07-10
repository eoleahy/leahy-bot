const { Channel } = require("discord.js")

module.exports = {
    name: "putinwalk",
    description: "Putin walk",
    execute(msg){
        msg.channel.send('https://www.youtube.com/watch?v=tMINTOSZhDo');
    }
}