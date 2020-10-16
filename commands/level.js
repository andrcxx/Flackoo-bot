const Discord = require("discord.js");
// cuidado nessa parte, tem que colocar de acordo com o que tá na sua index, se a ordem tá (client, message, args, database) é pra ficar nessa ordem ou vai dar conflito e consequentemente vai dar erro.
exports.run = (client, message, args, database) => {
// Aqui é caso você mencione alguém e queira ver o level da pessoa.
    let membro = message.mentions.users.first() || client.users.cache.get(args[0]);
// Se não mencionar ninguém, mostra o seu level.
    if (!membro) membro = client.users.cache.get(message.author.id);
    // Referência de onde fica localizado.
    let dbref = database.ref(`Servidores/Levels/${message.guild.id}/${membro.id}`);
    
    dbref.once('value').then(async function(db) {
// Caso a pessoa nunca tenha mandado uma mensagem ela não vai estar armazenada no banco de dados, logo não vai aparecer aí.
        if (db.val() == null) return message.reply("esse usuários não se encontra no meu banco de dados.");

// embed gostosinho
        let embed = new Discord.MessageEmbed()
        .setAuthor(`Informações do nível, ${membro.tag}`, membro.avatarURL())
        .setDescription(`Você está no level ${db.val().level}!\nExperiência pro próximo nível: (${db.val().xp}/${db.val().level*100}).`)
        .setColor('#d92e2e');
        message.channel.send(embed);
    })
};