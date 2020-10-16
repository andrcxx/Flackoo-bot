const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://media.giphy.com/media/Gf3AUz3eBNbTW/giphy.gif',
  'https://i.pinimg.com/originals/96/8c/b1/968cb1f9eaa12dde1d6fdf2f6ee296ed.gif',
  'https://media1.tenor.com/images/b6d8a83eb652a30b95e87cf96a21e007/tenor.gif',
  'https://media.giphy.com/media/AlsIdbTgxX0LC/giphy.gif',
  'https://media.giphy.com/media/xUO4t2gkWBxDi/giphy.gif',
  'https://media.giphy.com/media/xUNd9HZq1itMkiK652/giphy.gif',
  'https://media.giphy.com/media/gjh0fUuvH2hTG/giphy.gif',
  'https://media.giphy.com/media/Qv7WFppXtkqkM/giphy.gif'
];

var color = [
  '#f7f7f7',
  '#000000'
];

var color = color[Math.floor(Math.random() * color.length)];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para estapear!');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: "png"});
  const embed = new Discord.MessageEmbed()
        .setTitle('Tapinha')
        .setColor(color)
        .setDescription(`${message.author} deu um tapa em ${user}! :hushed:`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Eita...')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
}