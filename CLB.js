"use strict";
/*Author: © • Song Adieu | Created: February 16th, 2017*/

const Discord = require("discord.js");
const Config = require("./config.json");
const Player = require("./players.json");

const CivLeagueBot = new Discord.Client();

CivLeagueBot.on("ready", () => {
    console.log("*CivLeagueBot Activated*");
});

//Welcomes Player to the Server
CivLeagueBot.on("guildMemberAdd", member => {
    let guild = member.guild;
    guild.defaultChannel.sendMessage(
        `${Player.roleAdmin} | ${Player.roleModerator}` +
        `\n**__Just Joined the Civilization__** •<:civIcon:291784556489474049>• **__Community!__**` +
        `\n  :hugging: ${member.user} *You have just been hugged!` +
        `\n  Welcome to the **CivLeague Community**.*` +
        `\n\n**__Introduction__**` +
        `\n  <#${Config.channels.channelIntroduction}>` +
        `\n  *If you have any questions! Please mention an Admin or a Moderator Please.*`
    );//Direct Messages a Player upon Joining the Server
    member.send(
        `:blue_heart: •|• **__Welcome to CivLeague Community!__** •|• :heart:` +
        `\n  *Hey! Welcome! We are potentially going to be the largest, and greatest Civilization VI League!*` +
        `\n  *You are always valued here in this Community. We care about our players, and have great ideas planned!*` +
        `\n  *We have a great system and an awesome Atmosphere of players here who just Love playing the game!*` +
        `\n  *There have been some Servers that have risen but they peak, and fall! This is a trajedy.*` +
        `\n  *We can guarantee a long time system, and a constant growing factor, as the facts are right here for you to read!` +
        `\n  *Many of us devote time, always implementing great ways to express our devotion in the growth of this Community!*` +
        `\n    | **__Admin | Moderators__** |` +
        `\n      *We have a great team of Admin | Moderators who, when available, dedicate their time to **Assist Everyone***.` +
        `\n      **What this means to you:**` +
        `\n        •**If you have any questions, please never hesitate to ask.**` +
        `\n          *We are here to support your growth with us!*` +
        `\n        •**We have a 100% transparency system, that keeps you involved in what matters most.**` +
        `\n          *This means our future is based on critical logic, and open debate to grow this community in the right Direction.*` +
        `\n        •**We cannot dictate, and will not dictate your choices.**` +
        `\n          *There is a simple **Guidelines** text channel that we would hope you can appreciate to help keep this place awesome!*` +
        `\n        •**When you are in games, we do expect you guys to cooperate amongst one another.**` +
        `\n          *However, if there is no consensus on cooperation, you may pause the game, and Mention an Admin | Moderator.*` +
        `\n          *As we are here to only mediate any situation and make you guys feel like this is a place to play great games!*`
    );//Direct Message with Links to join our other Resources
    member.send(
        `:blue_heart: •|• **__Civilization VI League Community Links__** •|• :heart:` +
        `\n  *Joining our Discord Server is only one of our great resources to use!*` +
        `\n  *As it offers an organized way to be connected outside the game and creates a community of greatness.*` +
        `\n  *You are not required to use a mic, and you are not required to listen to people talk. There are options available to mute/deafen.*` +
        `\n\n    •**__Steam Group (Enter Chat Room)__**` +
        `\n      ${Config.links.civLeagueSteamGroup}` +
        `\n        *Entering the Steam Group is for players who rejoin our community and play on a social basis.*` +
        `\n        *Joining the Steam Group helps connect us outside the game, and Join Private Games hosted here.*` +
        `\n          •**Click the URL**` +
        `\n          •**Enter Chat Room (Blue Button)**` +
        `\n            *Check the Taskbar, Chat Window does not Open to the Front.*` +
        `\n\n    •**__Reddit Posts__**` +
        `\n      *Reddit is another great resource to help Promote our Civilization VI League Community.*` +
        `\n      *It's in the interest of growing our Community to create an account, and upvote the Posts.*` +
        `\n      *Leaving a comment also helps encourage the growth of our Posts when seeking players who stop by.*` +
        `\n        <https://redd.it/623w5f>` +
        `\n        <https://redd.it/623oza>` +
        `\n        <https://redd.it/623mgp>` +
        `\n\n    •**__Discord Link (Share with Anyone!)__**` +
        `\n      *In case you ever Log out of our Server, you are always welcome back through this Direct Message!.*` +
        `\n      *You may also send this link to friends and get them invited!*` +
        `\n      *You will also recieve League EXP, which shows how committed you are into making this Community Great!*` +
        `\n      ${Config.links.discordLink}` +
        `\n:beers: **Cheers!** :beers:`
    );
});
//Discloses the Player from the Server
CivLeagueBot.on("guildMemberRemove", member => {
    let guild = member.guild;
    guild.defaultChannel.sendMessage("**__Just Left our Community__**" + "\n" +
        `  :broken_heart: ${member.user}*.. oh no.. just one more turn!*`
    );
});

CivLeagueBot.login(Config.tokens.CivilizationVILeagueBot);