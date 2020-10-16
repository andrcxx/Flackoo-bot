const Discord = require('discord.js');

exports.run = async (client, message, args) => {

let server = message.guild.name || client.users.cache.get(args[0]) || console.log(servericon);

let servericon = message.guild.iconURL({ dynamic: true, format: 'png', size: 2048 });
  const embed = new Discord.MessageEmbed()
        .setTitle(`${server}`) /// https://cdn.discordapp.com/emojis/314003252830011395 = emoji discord
        .setDescription(`**Clique [aqui](${servericon}) para abrir a foto.**`)
        .setColor('#d74375')
        .setTimestamp()
        .setImage(servericon);
        await message.channel.send(`${message.author}`, embed)
}