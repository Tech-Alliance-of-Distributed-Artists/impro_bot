# impro_bot
A Chat Bot for Twitch.com/Impro_TV
![Travis Build Status](https://api.travis-ci.com/IanDCarroll/impro_bot.svg?branch=master)

### Dependencies
- JavaScript
- Node 8.x
- Express
- [tmi.js](https://github.com/tmijs/tmi.js) Javascript library for the Twitch Messaging Interface. [docs](https://github.com/tmijs/docs/tree/gh-pages/_posts)

### Run Locally
??? We'll have to try what's in the twitch dev docs and see what happens
As I'm doing it:

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

#### =VVV= TWITCH DOCS =VVV=
https://dev.twitch.tv/docs/irc

# Twitch Getting Started with Chatbots & IRC
=================

## Chatbot Overview

Twitch offers an Internet Relay Chat (IRC) interface for chat functionality. Chatbots allow you to programmatically interact with a Twitch chat feed using IRC standards; the bot connects to the Twitch IRC network as a client to perform these actions.This guide presents an easy bot example to get you started.

### Building the Bot

We’ll build a simple chatbot that responds in chat when someone types `!dice`. (This is known as a chatbot command.) When triggered, it randomly generates a number between 1-6. We run the fully-functioning chatbot on this Glitch,  as well as show you how to run locally on our [Developer Docs](https://dev.twitch.tv/docs/irc/).

![example-screenshot](https://cdn.glitch.com/1e2f7667-2601-49f0-af69-ba4f114185fe%2Fchatbots-1.png?1545680331607)



### Get Environment Variables

To start, you’ll need three environment variables:
 
| *Variable*  | *Description*   |
|---|---|---|---|---|
| `BOT_USERNAME`  |  The account (username) that the chatbot uses to send chat messages. This can be your Twitch account. Alternately, many developers choose to create a second Twitch account for their bot, so it's clear from whom the messages originate. |  
|`CHANNEL_NAME`   |  The Twitch channel name where you want to run the bot. Usually this is your main Twitch account.
|`OAUTH_TOKEN`   |The token to authenticate your chatbot with Twitch's servers. Generate this with [https://twitchapps.com/tmi/](https://twitchapps.com/tmi/) (a Twitch community-driven wrapper around the Twitch API), while logged in to your chatbot account. The token will be an alphanumeric string.|  

### Running the bot


1. To start with this template, click the Remix button in the upper right. 

2. Glitch automatically installs Node and Tmi.js for us.

3. Add the three environmental vars in our [`.env`](https://glitch.com/edit/#!/twitch-chatbot?path=.env:1:0) file.

4. View the code in `bot.js`. 

5. Your chatbot is ready to run! Glitch automatically deploys & runs each version. View the status button to ensure there are no errors. 

6. Try the chatbot! Interact with your channel (twitch.tv/<CHANNEL_NAME>) by trying  the `!dice` command. 

**Note**: This bot connects to the IRC network as a client and isn't designed to respond over HTTP. If you click "Show Live" you will see a simple "Hello World"


## Next Steps

* For a thorough understanding of Twitch chatbots and IRC, read the [Chatbots & IRC Guide](https://dev.twitch.tv/docs/irc/guide/) and the rest of the Twitch IRC documentation. 
* To authenticate your chatbot in a production setting, we recommend you [register your app](https://dev.twitch.tv/docs/authentication/#registration) (chatbot) and use the OAuth Authorization code flow. This enables you to authenticate programmatically. To learn more, read the [Apps & Authentication Guide](https://dev.twitch.tv/docs/authentication/).
Read [Chatbots & IRC documentation](https://dev.twitch.tv/docs/irc/guide/).
* Reach out to [@twitchdev](https://twitter.com/twitchdev) or the [Twitch chatbot forum](https://discuss.dev.twitch.tv/c/chat) for help!

