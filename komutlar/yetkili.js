const Discord = require("discord.js");
const moment = require("moment");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("Yetkili Komutları:",`
?Duyuru-kanal-ayarla: Duyuru kanalı ayarlamanızı sağlar.
?Ban: İstediğiniz kişiyi banlar.
?Kick: İstediğiniz kişiyi kickler.
?Duyuru: Duyuru sistemi 
?Link-engelle: Link engelleme sistemini açıp kapatmanızı sağlar
?Sunucu-kur: Bulunan sunucu için gerekli kanalları ayarlamaları yapar
??Reklam-taraması: Kullanıcıların oynuyor mesajındaki Ve kullanıcı adlarında reklam tarar
?küfür-engel: Küfür Engeli Açarsınız. (yeni!)
?mute ve ?unmute: süreli veya süresiz mute atabilirsiniz 
`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yetkili','yetkilis'],
  permLevel: 0
};

exports.help = {
  name: 'yetkili',
  description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
  usage: 'yetkili'
};
