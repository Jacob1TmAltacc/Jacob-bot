const SlashCommandBuilder = require('@discordjs/builders').SlashCommandBuilder;
const MessageEmbed = require('discord.js').MessageEmbed;
module.exports = {
    data: new SlashCommandBuilder()
    .setName('avatar')
    .setDescription('Wysyła avatar użytkownika.')
    .addUserOption(option => option.setName('user').setDescription('Użytkownik, którego avatar chcesz zobaczyć.')),
    async execute(interaction, client) {
        const embed = new MessageEmbed()
        .setTitle('Bot jest online od:')
        .setDescription(`${prettyMilliseconds(client.uptime)}`);
        interaction.reply({embeds: [embed]});
    },
};
