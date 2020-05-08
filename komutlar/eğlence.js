const Discord = require("discord.js");
const moment = require("moment");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

exports.run = (client, msg) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("Eğlence  Komutları:",`
?aşkölç: Aşkınızı Ölçersiniz.
?kafasalla: Kafa sallarsınız.
?kedi: Rastgele kedi gif atar.
?doğumgünü: Arkadasini Bilir.
?yazıtura: Yazı-Tura atar.
?öp: iştediniz kişiyi öpersiniz.
?tekme-at: İstediğiniz Kişiye tekme Atarsınız.
?nahçek: İstediğiniz Kişiye Çekiç Atarsınız.
?düello: İstediğiniz bir kişi ile düello atarsınız.
?sikiş: İstediğiniz bir kişiyi amından götünden sikmenizi sağlar.
?balıktut: Balık tutmanıza yarar.
?kralol: Kral olmanızı sağlar.
?kaçcm: Çükünüz kaç cm olduğunu söyler.
?kendinisik: Kendinizi çatır çutur harcarsınız.
?fakemesaj: Fake mesaj atmanızı sağlar.
?boksmakinesi: Boks yapmanızı sağlar.

`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'eğlence',
  description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
  usage: 'eğlence'
};
