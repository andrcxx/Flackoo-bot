module.exports.run = async (client, message, args) => {
    if(message.author.id !== '505133862129631233')
    if(message.author.id !== '723704417953513494')
    if(message.author.id !== '528933602914992129') return message.reply("você não é o desenvolvedor ou não está na lista de autorizados.");
    message.channel.send("🕙 | Reinício em progresso...").then(async msg => {
        msg.edit("🕙 | Reinício em progresso..")
        client.destroy();
        await client.login(process.env.TOKEN);
        await msg.edit("🕙 | Reinício em progresso...")
        msg.edit("☑️ | Sucesso ao reiniciar!")
    })
 }

 module.exports.command = {
    name: "restart"
}