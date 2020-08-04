const fs = require('fs');

module.exports = {
    name: 'coom',
    description: 'Cooms IRL',
    async execute(msg){
        const audio_path = './app/src/audio/coomer.ogg';
        let vc = msg.member.voice.channel;
        if(!vc)
            return msg.reply('Join a voice channel there mate.');

        const connection = await vc.join();

        const dispatcher = connection.play(fs.createReadStream(audio_path), {type: 'ogg/opus', volume: .25});

        dispatcher.on('finish', () => {
            console.log('Audio is finished');
            vc.leave();
        });
    }
}