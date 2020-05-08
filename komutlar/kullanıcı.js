const Discord = require("discord.js");
const moment = require("moment");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
    const embed = new Discord.RichEmbed()
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("Kullanıcı Komutları:",`
?admin : ADMİN İNSTAGRAM HESAPLARI
?instagram : BİRADERİZM İNSTAGRAM ADRESİNİ GÖSTERİR
?davet : Botun Davet Linkini Gösterir.  
?avatar : Belirtilen Kişinin veya Komutu Yazan Kişinin Avatarını Atar.
?sunucubilgi : Sunucunun bilgilerini gönderir.
?ping : bot pingini gösterir.
?istatistik : Botun istatistik gösterir.
?bilgi : Bot Bilgi Gösterir.
?havadurumu : hava durumunu gösterir.
?top10 : Botun En İyi Sunucularını Gösterir (Yeni!)


`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kullanıcı'],
  permLevel: 0
};

exports.help = {
  name: 'kullanıcı',
  description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
  usage: 'kullanıcı'
};
