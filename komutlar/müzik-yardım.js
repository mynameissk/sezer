const Discord = require("discord.js");
const moment = require("moment");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("Müzik Yardım  Komutları:",`
?Çal: Belirlediğiniz bir müziği dinlemenizi sağlar.
?Durdur: Müzik botunu durdurur.
?Duraklat: Müzik botunu duraklatır.
?Devam: Müzik botunu kaldığı yerden devam ettirir
?Geç: Müzik botu üzerinde bir sonraki şarkıya geçmenizi sağlar.
?Kuyruk: Şarkı kuyruğunu gösterir
?Ses: 1 ve 10 arasında sesi ayarlamanızı sağlar
?Çalan: Çalan şarkıyı gösterir
`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'müzik-yardım',
  description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
  usage: 'müzik-yardım'
};
