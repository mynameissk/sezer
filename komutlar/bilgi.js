const Discord = require('discord.js');
exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Bot Bilgi')
.setTimestamp()
.addField('Kuruluş Yılı', '2019')
.addField('Bot Sahibi', '<Sezer>')
.addField('Neden Biz?', 'Gelişmiş Özellikli Botumuz Var ')
.addField('Davet Linklerini Nasıl Görebilirim?', '?davet')
.addField('Hedefimiz Nedir?', '150 Sunucu Büyük Hedefim')
.setFooter('BİRADERİZM- Bot - Bilgi Komutu', client.user.avatarURL)
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};
exports.help = {
  name: 'bilgi',
  description: '.',
  usage: 'bilgi'
};