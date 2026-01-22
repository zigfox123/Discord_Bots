# DJ Bot

A Discord bot that monitors specific users and responds to their messages with random predefined responses. This is a multi-user version designed for automated interactions in Discord servers.

## Features

- Monitors messages from specified user IDs
- Responds with random messages from a configurable list
- Includes cooldown mechanism to prevent spam
- Uses environment variables for secure configuration
- Invisible status when online

## Installation

1. Clone or download the project files.
2. Navigate to the `DJ-bot` directory.
3. Install dependencies:
   ```
   npm install
   ```

## Configuration

Create a `.env` file in the root directory of the bot with the following variables:

- `BOT_TOKEN`: Your Discord bot token (required)
- `USER_TOKEN`: User ID to monitor (required)
- `USER_TOKEN2`, `USER_TOKEN3`, `USER_TOKEN4`: Additional user IDs to monitor (optional)
- `OUTPUT_1` to `OUTPUT_20`: Response messages (at least one required)

Example `.env` file:
```
BOT_TOKEN=your_bot_token_here
USER_TOKEN=123456789012345678
USER_TOKEN2=987654321098765432
OUTPUT_1=Hello!
OUTPUT_2=How are you?
OUTPUT_3=Thanks for the message!
```

## Running the Bot

After configuring the `.env` file, run the bot with:
```
node bot.js
```

The bot will log in and start monitoring the specified users.

## Usage

- The bot will automatically respond to messages from the configured user IDs.
- Responses are selected randomly from the list of outputs.
- There's a 5-second cooldown per user to prevent spamming.

## Requirements

- Node.js
- Discord.js v14
- A Discord bot token from the [Discord Developer Portal](https://discord.com/developers/applications)

## License

ISC