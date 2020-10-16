const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT); // Recebe solicitações que o deixa online

const Discord = require("discord.js"); //Conexão com a livraria Discord.js
const client = new Discord.Client(); //Criação de um novo Client
const config = require("./config.json"); //Pegando o prefixo do bot para respostas de comandos

client.on("message", message => {
     if (message.author.bot) return;
     if (message.channel.type == "dm") return;
     if (!message.content.toLowerCase().startsWith(config.prefix)) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    console.error("Erro:" + err);
  }
});

client.on("ready", () => {
  let activities = [
      `${client.users.cache.size} tralhas.`
    ],
    i = 0;
  setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "WATCHING"
      }), 10000);  // WATCHING, LISTENING, PLAYING, STREAMING

  client.user
      .setStatus("dnd") // idle, dnd, online, invisible
      .catch(console.error);
console.log("Estou Online!")
});

//Aviso quando entram no Servidor.
client.on("guildMemberAdd", async (member) => {

   let guild = client.guilds.cache.get("747014273938620497"); //ID do Server.
   let channel = client.channels.cache.get("747205396971651304"); //ID do Canal.
   let emoji = member.guild.emojis.cache.find(emoji => emoji.name === 'tralha_diamond');
   let emoji2 = member.guild.emojis.cache.find(emoji => emoji.name === 'tralha_slovenia3');
   let emoji3 = member.guild.emojis.cache.find(emoji => emoji.name === 'tralha_slovenia4');
   let emoji4 = member.guild.emojis.cache.find(emoji => emoji.name === 'tralha_card');
   let emoji5 = member.guild.emojis.cache.find(emoji => emoji.name === 'tralha_1');
   let emoji6 = member.guild.emojis.cache.find(emoji => emoji.name === 'tralha_7');
   let emoji7 = member.guild.emojis.cache.find(emoji => emoji.name === 'tralha_1');
   let emoji8 = member.guild.emojis.cache.find(emoji => emoji.name === 'tralha_uzi');
   let emoji9 = member.guild.emojis.cache.find(emoji => emoji.name === 'tralha_red_arrow');
   const cargo1 = member.guild.roles.cache.find(cargo1 => cargo1.id === "747289980996550768")

   if (guild != member.guild) {
     return console.log('Server diferente do ID')
   } else {
     
   member.roles.add(cargo1.id)
   
   }

   
   await channel.send(`
    > ${emoji} ${member.user} ${emoji}
    > ${emoji2} **Bem vindo(a) ao TRALHA FAMILY** ${emoji2}
    > ${emoji3} Tropa sempre na melhor forma rss
    > ${emoji4} Convide seus amigos! <#747203807389417572>
    > ${emoji8} Quer ser da família? ${emoji9} <#747294449691918390>
    > ━━━━━━━━━━ •${emoji5}${emoji6}${emoji7}• ━━━━━━━━━━ `).then(msg => msg.delete({timeout: 30000}))
     
   
   });


client.login(process.env.TOKEN_DISCORD); //Ligando o Bot caso ele consiga acessar o token
