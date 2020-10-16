const Discord = require('discord.js');

exports.run = async (client, message, args) => {

let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

let avatar = user.avatarURL({ dynamic: true, format: 'png', size: 2048 });
  const embed = new Discord.MessageEmbed()
        .setTitle(`🎨 ${user.username}`) 
        .setDescription(`**Clique [aqui](${avatar}) para abrir a foto.**`)
        .setColor('#F0F0F0')
        .setTimestamp()
        .setImage(avatar);
        await message.channel.send(`${message.author}`, embed)
}