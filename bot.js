const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "#"
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});


client.on('guildMemberAdd', member => {
        let channel = member.guild.channels.find('name', 'welcome');
        let memberavatar = member.user.avatarURL
          if (!channel) return;
        let embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setThumbnail(memberavatar)
            .addField('🎽 | name :  ',`${member}`)
            .addField('📢 | نورت السيرفر يا قلبي' , `Welcome to the server, ${member}`)
            .addField('🆔 | user :', "**[" + `${member.id}` + "]**" )
                    .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)

                      .addField("Name:",`<@` + `${member.id}` + `>`, true)

                                         .addField(' الـسيرفر', `${member.guild.name}`,true)

         .setFooter(`${member.guild.name}`)
            .setTimestamp()

          channel.sendEmbed(embed);
        });

        client.on('guildMemberRemove', member => {
            var embed = new Discord.RichEmbed()
            .setAuthor(member.user.username, member.user.avatarURL)
            .setThumbnail(member.user.avatarURL)
            .setTitle(`الله معاك ✋:skin-tone-1: 😔`)
            .setDescription(`مع السلامه تشرفنا بك ✋:skin-tone-1: 😔 `)
            .addField('👤   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
            .setColor('RED')
            .setFooter(`==== نــتــمــنــآ لــكــم آســتــمـــتــآع ====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')

        var channel =member.guild.channels.find('name', 'اسم الروم الي يقول فيه اذا حد غادر')
        if (!channel) return;
        channel.send({embed : embed});
        })















































































client.login('NDg3NTM3NTI5NDA3NjY4MjI1.DnWqQg.-9YBqaYWBmBn6N03T-SQVD86YTY');
