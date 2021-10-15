# impro_bot
A Chat Bot for Twitch.com/Impro_TV -- Or any improv twitch channel
![Travis Build Status](https://api.travis-ci.com/Tech-Alliance-of-Distributed-Artists/impro_bot.svg?branch=master)


### Dependencies
- JavaScript
- Node 8.x
- Express
- [tmi.js](https://github.com/tmijs/tmi.js) Javascript library for the Twitch Messaging Interface. [docs](https://github.com/tmijs/docs/tree/gh-pages/_posts)

#### Get your twitch account particulars
- __Who are you?__ -
  The bot will need a twitch account to run, it can be your human account, or its own
  - Username -
    a common pattern is to use your account name + `_bot` like `benstein_bot`
  - Oauth Token -
    The token to [authenticate](https://dev.twitch.tv/docs/authentication) your chatbot with Twitch's servers. Generate this with https://twitchapps.com/tmi/
    (a Twitch community-driven wrapper around the Twitch API), while logged in to your chatbot account.
    The token will be an alphanumeric string. This is super-secret, so DO NOT COMMIT IT TO GIT!
    We'll make a `.env` file, added to `.gitignore` to _keep it secret; keep it safe._.
- __What do you want?__ -
  The Bot needs to know what channel to log onto and do stuff on. You'll need to specify that channel.
  A good beginning is your own twitch account.
  
#### Fork and Clone the repo
- Fork this repo on github
- In the terminal navigate to where you want the project installed 
  (Don't know what that means? [Open up an issue](https://github.com/IanDCarroll/impro_bot/issues) and request a better readme)
- `$ git clone git@github.com:<MY_GITHUB_USERNAME>/impro_bot.git`
- `$ cd impro_bot`

#### Add your environment variables
- This app uses [dotenv](https://www.npmjs.com/package/dotenv) to store environment variables.
- `$ touch .env`
- ```
  BOT_USERNAME=<A_TWITCH_ACCOUNT_USERNAME>
  OAUTH_TOKEN=<THAT_ACCOUNT'S_SECRET_HASH>

  CHANNEL_NAME=<THE_CHANNEL_THE_BOT_WILL_RUN_ON>
  ```
- Don't wrap values in quotes, type or paste them straight.
- Find or generate an ouath token here: with https://twitchapps.com/tmi/ 
- The token line should look like this: `OAUTH_TOKEN=oauth:1awesomerandompassofthislength`
  
#### Install the dependencies
- This projsect uses [npm](https://www.npmjs.com/get-npm) for installing dependencies. 
  The project won't run without them. 
  Thankfully, once you have npm installed, you can run a simple command in your terminal to take care of that.
- `$ npm install`

### Run Tests
- `$ npm test`

### Start the Bot In Prod
- Twitch has no sandbox. You'll need to test it live.
- Luckily you can easily create a test twitch account that very few will stumble upon.
- `$ npm start`

### Troubleshooting the Mysterious ###

If you run `npm start` and you get this mysterious message:
 
```
* Connected to irc-ws.chat.twitch.tv:80
[19:25] error: No response from Twitch.
```

It may be because the OAuth token has expired.
- [Try generating a new ouath token here.](https://twitchapps.com/tmi/)
- Paste the new token from the site into your `.env` file so that it replaces your old token.
- In the terminal where the bot is running: `<CTRL> c`
- `$ npm start`

#### =VVV= TWITCH DOCS =VVV=
https://dev.twitch.tv/docs/irc

