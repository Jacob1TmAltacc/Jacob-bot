const {MessageEmbed} = require("discord.js");
const userModel = require("../../modele/userSchema");
module.exports = {
    name: 'skip',
    description: 'Pomija aktualną piosenkę.',
    cooldown: 5,
    category: 'mus',
    aliases: ['wypierdalajztym','pomin'],
    userPermissions: ["MANAGE_MESSAGES"],
    async execute(message, args, client) {
        //kodzior od sprawdzania czy user może
        if (global.databaseonline === true) {
            const userModel = require("../../modele/userSchema");
            const {MessageEmbed} = require("discord.js");
            const embed = new MessageEmbed()
            embed.setColor("#ff0000")
            embed.setDescription(':x: Ta komenda jest tylko dla osób z nadanym dostępem do muzyki.')
            embed.setFooter(`Komenda wykonana przez ${message.author.tag}`, message.author.displayAvatarURL());
            let id = message.author.id
            let user = await userModel.findOne({userID: `${id}`})
            if (!user) return message.channel.send({embeds: [embed]})
        }
        //reszta od komendy
        const guildID = message.guild.id;
        let guildQueue = client.player.getQueue(guildID)
        if (!guildQueue) return message.channel.send({content:'Nie jest odtwarzana żadna piosenka'})
        if (!message.member.voice.channel) return message.channel.send({content: `Musisz być na kanale głosowym aby użyć tej komendy`})
        guildQueue.skip()
        message.channel.send({content:'Pomyślnie pominięto piosenkę'})
    },}