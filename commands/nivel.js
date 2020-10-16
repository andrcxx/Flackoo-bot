const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  client.channels.get('725509530502299789').send(`${message.author} Seu nível é ${db.val().level}`);