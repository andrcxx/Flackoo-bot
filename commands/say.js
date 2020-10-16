const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

  if (!message.member.permissions.has("MANAGE_MESSAGES"))
    return message.reply(
      "você é fraco, lhe falta permissão de `Gerenciar Mensagens` para usar esse comando!"
    ); else {
  const sayMessage = args.join(" ");
  message.delete().catch(O_o => {});
  message.channel.send(sayMessage);

 }

};