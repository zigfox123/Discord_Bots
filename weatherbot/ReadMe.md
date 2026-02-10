# Discord Weather Bot

A Discord bot that provides real-time weather information for any city. Get temperature, humidity, wind speed, and weather conditions instantly in your Discord server.

## Features

- 🌍 **Current Weather**: Fetch current weather conditions for any city worldwide
- 🌡️ **Temperature Conversion**: Display temperatures in both Celsius and Fahrenheit
- 💧 **Humidity & Wind**: View humidity percentage and wind speed
- 🎨 **Formatted Embeds**: Beautiful Discord embeds for easy readability
- ⚡ **Low Latency Check**: Use `!ping` to check bot responsiveness
- 🛡️ **Error Handling**: Graceful error messages for invalid cities or API issues

## Prerequisites

- Python 3.8 or higher
- A Discord bot token
- A WeatherAPI.com API key (free tier available)

## Installation

1. **Clone the repository** (if not already done):
   ```bash
   git clone <repository-url>
   cd weatherbot
   ```

2. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

3. **Set up environment variables**:
   Create a `.env` file in the `weatherbot` directory with:
   ```
   DISCORD_TOKEN=your_discord_bot_token_here
   WEATHER_API_KEY=your_weatherapi_key_here
   ```

## Getting Your Tokens

### Discord Token
1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Create a new application
3. Go to the "Bot" tab and create a bot
4. Copy the token

### Weather API Key
1. Visit [WeatherAPI.com](https://www.weatherapi.com/)
2. Sign up for a free account
3. Get your API key from the dashboard

## Usage

### Commands

#### `!weather <city_name>`
Get the current weather for a specified city.

**Example**:
```
!weather London
!weather New York
!weather Tokyo
```

**Response**:
- 🌡️ Temperature (°C and °F)
- 🤔 Feels Like temperature
- 💧 Humidity percentage
- 💨 Wind speed in km/h
- Weather description (e.g., Sunny, Rainy, Cloudy)

#### `!ping`
Check the bot's latency and responsiveness.

## Dependencies

- **discord.py**: Discord API wrapper
- **requests**: HTTP library for API calls
- **python-dotenv**: Environment variable management

See `requirements.txt` for specific versions.

## Project Structure

```
weatherbot/
├── bot.py          # Main bot logic and commands
├── config.py       # Configuration and environment variables
├── requirements.txt # Python dependencies
└── ReadMe.md       # This file
```

## Error Handling

The bot gracefully handles:
- **Invalid city names**: Returns an error message
- **API connection issues**: Notifies user and logs the error
- **Missing parameters**: Guides user on correct usage
- **Unexpected API responses**: Handles malformed data gracefully

## Troubleshooting

### Bot doesn't respond
- Ensure the bot has permission to send messages in the channel
- Check that your DISCORD_TOKEN is correct in the `.env` file

### "Invalid API key" error
- Verify your WEATHER_API_KEY is correct
- Ensure your WeatherAPI account is active and not rate-limited

### Weather command returns errors
- Double-check the city name spelling
- Some ambiguous city names may require country specification

## License

This project is part of the Discord Bots collection.

## Support

For issues or questions, please check the main repository or create an issue.
