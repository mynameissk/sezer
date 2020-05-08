const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField(' ')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor("Slaj Turco kendini sikerek öldürdün")
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
		.setImage(`https://media.tenor.com/images/b3b699de9db95e362978992aec18c578/tenor.gif`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kendinisik',
  description: 'Kendinizi sikersiniz.',
  usage: 'kendinisik'
};