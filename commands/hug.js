const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://i.pinimg.com/originals/49/5d/a3/495da3253424973e0658c4ebecc2b1dc.gif',
  'https://media.tenor.com/images/a12113877cf8e37bc03c29a8346b125a/tenor.gif',
  'https://gifdownload.net/wp-content/uploads/2019/05/gif-abra%C3%A7o-anime-5.gif',
  'https://i.pinimg.com/originals/b6/2f/04/b62f047f8ed11b832cb6c0d8ec30687b.gif',
  'https://media.giphy.com/media/BXrwTdoho6hkQ/200.gif',
  'https://i.pinimg.com/originals/b8/7f/8b/b87f8b1e2732c534a00937ffb24baa79.gif',
  'https://gifdownload.net/wp-content/uploads/2019/05/gif-hug-anime-5.gif',
  'https://cutewallpaper.org/21/sad-anime-hug/Cute-anime-hug-Album-on-Imgur.gif',
  'https://cdn140.picsart.com/293996521005201.gif',
  'https://thumbs.gfycat.com/UnluckyYearlyFlea-small.gif',
  'https://i.imgur.com/YoW9dvm.gif',
  'https://media.giphy.com/media/ShAchOHe38Aak/giphy.gif',
  'https://25.media.tumblr.com/668e4508190fb9f62ea9b5eb1d112531/tumblr_mw41ntelfK1s6ghcbo1_500.gif',
  'https://cdn.weeb.sh/images/SywetdQvZ.gif',
  'https://cdn.weeb.sh/images/Sk2gmRZZG.gif',
  'https://cdn.weeb.sh/images/HJTWcTNCZ.gif',
  'https://cdn.weeb.sh/images/HyllFdmwZ.gif',
  'https://cdn.weeb.sh/images/r1R3_d7v-.gif',
  'https://cdn.weeb.sh/images/ryuhhuJdb.gif',
  'https://cdn.weeb.sh/images/BJ0sOOmDZ.gif',
  'https://cdn.weeb.sh/images/S1qX2OJ_Z.gif',
  'https://cdn.weeb.sh/images/Hyv6uOQPZ.gif',
  'https://cdn.weeb.sh/images/Sy65_OQvZ.gif',
  'https://cdn.weeb.sh/images/BJF5_uXvZ.gif',
  'https://cdn.weeb.sh/images/HkRwnuyuW.gif',
  'https://cdn.weeb.sh/images/HJ7lY_QwW.gif',
  'https://cdn.weeb.sh/images/r1v2_uXP-.gif',
  'https://cdn.weeb.sh/images/BkHA_O7v-.gif',
  'https://cdn.weeb.sh/images/Sk-xxs3C-.gif',
  'https://cdn.weeb.sh/images/BysjuO7D-.gif',
  'https://cdn.weeb.sh/images/HytoudXwW.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);

var text = [
  `**🤗 ${message.author} deu um lindo abraço em ${user}!**`,
  `**👨‍❤️‍👨 ${user} foi abraçado por ${message.author}.**`,
  `**🥰 ${user} recebeu um abraço apaixonante de ${message.author}.**`
];
var rand2 = text[Math.floor(Math.random() * text.length)];

if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para abraçar!');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: "png"});
  const embed = new Discord.MessageEmbed()
        .setColor('#F0F0F0')
        .setDescription(rand2)
        .setImage(rand)
        .setTimestamp()
  await message.channel.send(`${message.author}`, embed);
}