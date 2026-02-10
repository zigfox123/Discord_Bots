import discord
from discord.ext import commands
import requests
from config import DISCORD_TOKEN, WEATHER_API_KEY

# Set up bot with command prefix
intents = discord.Intents.default()
intents.message_content = True
bot = commands.Bot(command_prefix='!', intents=intents)

@bot.event
async def on_ready():
    print(f'{bot.user} has connected to Discord!')
    print(f'Bot is in {len(bot.guilds)} server(s)')

@bot.command(name='weather', help='Get current weather for a city. Usage: !weather [city name]')
async def weather(ctx, *, city: str = None):
    if city is None:
        await ctx.send('Please provide a city name! Usage: `!weather [city name]`')
        return
    
    # WeatherAPI.com endpoint
    base_url = 'http://api.weatherapi.com/v1/current.json'
    params = {
        'key': WEATHER_API_KEY,
        'q': city,
        'aqi': 'no'  # Air quality index (optional)
    }
    
    try:
        response = requests.get(base_url, params=params)
        data = response.json()
        
        if response.status_code == 200:
            # Extract weather data
            temp_c = data['current']['temp_c']
            temp_f = data['current']['temp_f']
            feels_like_c = data['current']['feelslike_c']
            humidity = data['current']['humidity']
            description = data['current']['condition']['text']
            wind_kph = data['current']['wind_kph']
            city_name = data['location']['name']
            country = data['location']['country']
            
            # Create embed
            embed = discord.Embed(
                title=f'Weather in {city_name}, {country}',
                description=description,
                color=discord.Color.blue()
            )
            embed.add_field(name='🌡️ Temperature', value=f'{temp_c}°C ({temp_f}°F)', inline=True)
            embed.add_field(name='🤔 Feels Like', value=f'{feels_like_c}°C', inline=True)
            embed.add_field(name='💧 Humidity', value=f'{humidity}%', inline=True)
            embed.add_field(name='💨 Wind Speed', value=f'{wind_kph} km/h', inline=True)
            embed.set_footer(text='Powered by WeatherAPI.com')
            
            await ctx.send(embed=embed)
        
        else:
            error_msg = data.get('error', {}).get('message', 'Unknown error')
            await ctx.send(f'❌ Error: {error_msg}')
    
    except requests.exceptions.RequestException as e:
        await ctx.send('❌ Failed to connect to weather service. Please try again later.')
        print(f'Error: {e}')
    
    except KeyError as e:
        await ctx.send('❌ Unexpected response format from weather service.')
        print(f'KeyError: {e}')

@bot.command(name='ping', help='Check if the bot is responsive')
async def ping(ctx):
    await ctx.send(f'🏓 Pong! Latency: {round(bot.latency * 1000)}ms')

# Run the bot
if __name__ == '__main__':
    bot.run(DISCORD_TOKEN)