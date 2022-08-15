const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const token = "your token here";

client.on('messageCreate', (message) => {
  if (message.author.bot || message.system) return;

  const messageContent = message.content;
  if (messageContent.includes(`<@${client.user.id}>`)) {
    return message.react('👍')
  }
});

client.once('ready', () => console.log(`I'm born ready!`));

client.login(token);