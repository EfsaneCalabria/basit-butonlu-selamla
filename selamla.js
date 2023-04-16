client.on("guildMemberAdd", async (uye, message) => {
  const server = "SUNUCU ID"
  const user = client.guilds.cache.get(server).members.cache.get(uye.id)
  
  const tırt = new Discord.MessageActionRow()
    .addComponents(
      new Discord.MessageButton()
        .setCustomId("piku")
        .setLabel('Lidere Selam Dur!')
        .setStyle("PRIMARY")
    );

let hosgeldinbre = await client.channels.cache.get("YOLLAYACAĞI KANAL ID").send({ components: [tırt], content: `<@${uye.id}> Aramıza Hoş Geldin! Sunucumuz Seninle Birlikte **${uye.guild.memberCount}** Üye Oldu!`})

const collector = hosgeldinbre.createMessageComponentCollector({ time: 5000 });
collector.on('collect', async (button) => {
if(button.customId === "piku") {
button.reply({ content : `Selam Başarıyla İletildi!`, ephemeral: true})
button.channel.send(`**${uye.user.username}** , <@${button.uye.user.id}> kişisi tarafından selamlandın!`).then((e) => setTimeout(() => { e.delete(); }, 10000));
}
})
collector.on("end", async (collected, reason) => {
if(hosgeldinbre) hosgeldinbre.delete();
});
})
