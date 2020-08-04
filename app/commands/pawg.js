const fs = require('fs');

module.exports = {
    name: 'pawg',
    description: 'Pogs IRL',
    execute(msg){
        const image = fs.readFileSync('./app/src/images/pog.png');
        msg.channel.send({files:[image]});
    }
}