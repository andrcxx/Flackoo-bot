const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://imgur.com/iclUiUN.gif',
  'https://imgur.com/lYQt9rx.gif',
  'https://imgur.com/w1TU5mR.gif',
  'https://thumbs.gfycat.com/NiftyNeglectedAstarte-max-1mb.gif',
  'https://media0.giphy.com/media/G3va31oEEnIkM/giphy.gif',
  'https://media2.giphy.com/media/bGm9FuBCGg4SY/giphy.gif',
  'https://media0.giphy.com/media/hnNyVPIXgLdle/giphy.gif',
  'https://media.giphy.com/media/jR22gdcPiOLaE/giphy.gif',
  'https://media.giphy.com/media/11rWoZNpAKw8w/giphy.gif',
  'https://cdn.weeb.sh/images/rJeB2aOP-.gif',
  'https://cdn.zerotwo.dev/KISS/79a69988-60a5-443e-ac37-f80cfade643b.gif',
  'https://cdn.zerotwo.dev/KISS/c769d606-869d-48c7-8fc7-a531010bcb27.gif',
  ''
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
var text = [
  `**💏 ${message.author} amassou nos beijos com ${user}!**`,
  `**💋 ${user} recebeu um beijo de lingua de ${message.author}.**`,
  `**😘 ${user} foi beijado por ${message.author}.**`
];
var rand2 = text[Math.floor(Math.random() * text.length)];

if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para beijar!');
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