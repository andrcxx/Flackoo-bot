const Discord = require('discord.js');

exports.run = async (client, message, args) => {

let user = message.mentions.users.first() || client.users.cache.get(args[0])

if (!user) {
return message.reply('usuário não encontrado.').then(msg => msg.delete({timeout: 2000}));
}

  const embed = new Discord.MessageEmbed()
        .setDescription(`**Registrador: ${message.author}
        Registrado: ${user}**`)
        .addFields(

  { name: '**Qual seu gênero?**', value: `
  <a::> <@&739969814214475889>
  <a::> <@&739969815023845566>
  <a::> <@&741338663450968070>`},)
        .setColor('#F0F0F0')
        .setFooter('Caso a mensagem não apareça refaça o comando.')
        await message.channel.send(embed).then(embedMessage => {
embedMessage.react(`<a::>`)
embedMessage.react(`<a::>`)
embedMessage.react(`<a::>`)
embedMessage.react(`<a::>`)
embedMessage.react(`<a::>`)
embedMessage.react(`<a::>`)
embedMessage.react(`<a::>`)
embedMessage.react(`<a::>`)
embedMessage.react(`<a::>`)
embedMessage.react(`<a::>`)})

};