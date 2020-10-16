const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://media.giphy.com/media/L2z7dnOduqEow/giphy.gif',
  'https://media.giphy.com/media/ye7OTQgwmVuVy/giphy.gif',
  'https://media.giphy.com/media/l1LbUHrJb7GpuOHK0/giphy.gif',
  'https://media.giphy.com/media/pwSXi7YrxXLkk/giphy.gif',
  'https://media.giphy.com/media/5tmRHwTlHAA9WkVxTU/giphy.gif',
  'https://media.giphy.com/media/109ltuoSQT212w/giphy.gif',
  'https://media0.giphy.com/media/ARSp9T7wwxNcs/giphy.gif',
  'https://media0.giphy.com/media/ARSp9T7wwxNcs/giphy.gif',
  'https://i.pinimg.com/originals/2e/27/d5/2e27d5d124bc2a62ddeb5dc9e7a73dd8.gif',
  'https://media1.tenor.com/images/9bd2eb038544102aa4bb36fb8b0d01f9/tenor.gif',
  'https://thumbs.gfycat.com/GiantAngryChevrotain-max-1mb.gif',
  'https://i.pinimg.com/originals/90/c5/6f/90c56fd0c24ef9152bba28f01946bee1.gif',
  'https://media.giphy.com/media/4HP0ddZnNVvKU/200_d.gif',
  'https://loritta.website/assets/img/actions/headpat/generic/gif_5.gif', 'https://loritta.website/assets/img/actions/headpat/generic/gif_10.gif',
  'https://cdn.weeb.sh/images/B1PnJJYP-.gif',
  'https://cdn.weeb.sh/images/SJva1kFv-.gif',
  'https://cdn.weeb.sh/images/rybs1yFDb.gif',
  'https://cdn.weeb.sh/images/ByGaUq_db.jpeg',
  'https://cdn.weeb.sh/images/HJzQwcuub.jpeg'
  ];
var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
var text = [
  `😳 ${message.author} **fez carinho em** ${user}**!**`,
  `🥰 ${user} **recebeu um carinho gostoso de** ${message.author}**.**`,
  `😍 ${user} **foi acariciado por** ${message.author}**.**`
];
var rand2 = text[Math.floor(Math.random() * text.length)];

if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para fazer carinho!');
}

let avatar = message.author.displayAvatarURL({format: "png"});
  const embed = new Discord.MessageEmbed()
        .setColor('#F0F0F0')
        .setDescription(rand2)
        .setImage(rand)
        .setTimestamp();      
  await message.channel.send(`${message.author}`, embed)
}