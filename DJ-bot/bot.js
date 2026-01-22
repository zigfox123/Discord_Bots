//Bot token 
//DJ Bot - Multi-User Version
require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const BOT_TOKEN = process.env.BOT_TOKEN;
const OUTPUT_1 = process.env.OUTPUT_1;
const OUTPUT_2 = process.env.OUTPUT_2;
const OUTPUT_3 = process.env.OUTPUT_3;
const OUTPUT_4 = process.env.OUTPUT_4;
const OUTPUT_5 = process.env.OUTPUT_5;
const OUTPUT_6 = process.env.OUTPUT_6;
const OUTPUT_7 = process.env.OUTPUT_7;
const OUTPUT_8 = process.env.OUTPUT_8;
const OUTPUT_9 = process.env.OUTPUT_9;
const OUTPUT_10 = process.env.OUTPUT_10;
const OUTPUT_11 = process.env.OUTPUT_11;
const OUTPUT_12 = process.env.OUTPUT_12;
const OUTPUT_13 = process.env.OUTPUT_13;
const OUTPUT_14 = process.env.OUTPUT_14;
const OUTPUT_15 = process.env.OUTPUT_15;
const OUTPUT_16 = process.env.OUTPUT_16;
const OUTPUT_17 = process.env.OUTPUT_17;
const OUTPUT_18 = process.env.OUTPUT_18;
const OUTPUT_19 = process.env.OUTPUT_19;
const OUTPUT_20 = process.env.OUTPUT_20;


// Create a new Discord client
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// Configuration
const CONFIG = {
  // Array of user IDs to respond to
  // Add USER_TOKEN and any additional user IDs from environment variables
  targetUserIds: [
    process.env.USER_TOKEN,
    process.env.USER_TOKEN2,
    process.env.USER_TOKEN3,
    process.env.USER_TOKEN4,
  ].filter(Boolean), // Remove undefined values
  
  // Custom responses (bot will pick one randomly)
  responses: [
    OUTPUT_1,
    OUTPUT_2,
    OUTPUT_3,
    OUTPUT_4,
    OUTPUT_5,
    OUTPUT_6,
    OUTPUT_7,
    OUTPUT_8,
    OUTPUT_9,
    OUTPUT_10,
    OUTPUT_11,
    OUTPUT_12,
    OUTPUT_13,
    OUTPUT_14,
    OUTPUT_15,
    OUTPUT_16,
    OUTPUT_17,
    OUTPUT_18,
    OUTPUT_19,
    OUTPUT_20
  ].filter(Boolean), // Remove undefined values
  
  // Cooldown in milliseconds (prevents spam)
  cooldownMs: 5, // Changed to 5 seconds (was just 5ms before)
};

// Track last response time per user to prevent spam
const userCooldowns = {};
client.on('ready', () => {
    client.user.setStatus('invisible');
});
// Bot ready event
client.once('ready', () => {
  console.log(`✅ Bot is online as ${client.user.tag}`);
  console.log(`📋 Monitoring ${CONFIG.targetUserIds.length} user(s)`);
  console.log(`💬 ${CONFIG.responses.length} responses loaded`);
});

// Message event handler
client.on('messageCreate', async (message) => {
  // Ignore bot messages
  if (message.author.bot) return;
  
  // Check if message is from any target user
  if (CONFIG.targetUserIds.includes(message.author.id)) {
    // Check cooldown for this specific user
    const now = Date.now();
    const lastResponse = userCooldowns[message.author.id] || 0;
    
    if (now - lastResponse < CONFIG.cooldownMs) {
      return; // Still on cooldown for this user
    }
    
    // Pick a random response
    const response = CONFIG.responses[
      Math.floor(Math.random() * CONFIG.responses.length)
    ];
    
    // Send the response
    try {
      await message.reply(response);
      userCooldowns[message.author.id] = now;
      console.log(`Responded to ${message.author.tag}: ${response}`);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  }
});

// Login with your bot token
// IMPORTANT: Never share your token publicly!
client.login(BOT_TOKEN);