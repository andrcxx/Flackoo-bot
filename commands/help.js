const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const embed = new Discord.MessageEmbed()
  .setTitle(`🔴 **Manual de ajuda do Flackoo**`)
  .setDescription(`Olá ${message.author}, a primeira coisa é saber que o meu prefix é **${config.prefix}"**. A segunda é juntar o prefix com as meus comandos e funções listados em categoria logo abaixo:`)
  .addFields(

  { name: '**Utilidades:**', value: '`avatar`**,** `servericon`**,** `regras`'},

  { name: '**Moderação:**', value: '`clear`**,** `ban`**,** `uptime`**,** `ping`'},
  
  { name: '**Roleplay:**', value: '`kiss`**,** `slap`**,** `hug`**,** `carinho`'},
  
  { name: '**Exemplos:**', value: '`o+kiss:` **Use para beijar seus amigos.**'},)
  .setColor('#F0F0F0');
  await message.channel.send(embed)
  }