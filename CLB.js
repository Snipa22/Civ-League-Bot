"use strict";
/*Author: © • Song Adieu | Created: February 16th, 2017 | Snipa Revision*/
const Discord = require("discord.js");
const Config = require("./config.json");
const Player = require("./players.json");

const CivLeagueBot = new Discord.Client();

CivLeagueBot.on("ready", () => {
    console.log("*CivLeagueBot Activated*");
});

/*Gives new player a Member Role*/
CivLeagueBot.on("guildMemberAdd", function(member) {
    member.addRole(member.guild.roles.find("name", "Barbarian"));
});

//Welcomes Player to the Server
CivLeagueBot.on("guildMemberAdd", member => {
    let guild = member.guild;
    guild.defaultChannel.sendMessage(
`${Player.roleAdmin} | ${Player.roleModerator}
**__Welcome to the 'CivLeague' Civilization__** •<:civIcon:291784556489474049>• **__Community!__**
:hugging: ${member.user} :hugging: *You have just been hugged!*

**__Quick Guidelines__**:
    •*No Rage Quitting!*
    •*To join on our players, you'll need to join our **Steam Group Chat Room**.*
        <${Config.links.civLeagueSteamGroup}>
***If you have any questions! Please feel free to start asking.***`
    );

//Direct Messages a Player upon Joining the Server
    member.send(
`:purple_heart: •|• **__Welcome to CivLeague Community!__** •|• :purple_heart:
*Hey! Welcome to the most active, greatest CivLeague Community around.
We value respecting our players, and giving them a great place to enjoy playing some Civilization.
Using Discord/Bots to organize games, and playing them with players all around the world.
There have been some Servers that have risen but they peak, and fall! This is a trajedy.
Which is why we have an always growing changing administration team in this community to ensure constant growth.
Many of us devote our time, in turn always implementing great ways to innovate this community.
    **__Admin | Moderators__**
    **What this means to you:**
      •**If you have any questions, please never hesitate to ask.**
        *We are here to support your growth with us!*
      •**We have a 100% transparency system, that keeps you involved in what matters most.**
        *This means our future is based on critical logic, and open debate to grow this community in the right direction.*
      •**We cannot dictate, and will not dictate your choices.**
        *There is a simple **#guidelines** text channel that we would hope you can appreciate to help keep this place awesome!*
      •**When you are in games, we do expect you guys to cooperate amongst one another.**
        *However, if there is no consensus on cooperation, you may pause the game, and Mention an Admin | Moderator.*
        *As we are here to only mediate any situation and make you guys feel like this is a place to play great games!*`
    );//Direct Message with Links to join our other Resources
    member.send(
`:purple_heart: •|• **__Civilization VI League Community Links__** •|• :purple_heart:
  *Joining our Discord Server is only one of our great resources to use!*
  *As it offers an organized way to be connected outside the game and creates a community of greatness.*
  *You are not required to use a mic, and you are not required to listen to people talk. There are options available to mute/deafen.*

    •**__Steam Group (Enter Chat Room)__**
      ${Config.links.civLeagueSteamGroup}
        *Entering the Steam Group is for players who rejoin our community and play on a social basis.*
        *Joining the Steam Group helps connect us outside the game, and Join Private Games hosted here.*
          •**Click the URL**
          •**Enter Chat Room (Blue Button)**
            *Check the Taskbar, Chat Window does not Open to the Front.*

    •**__Reddit Posts__**
      *Reddit is another great resource to help Promote our Civilization VI League Community.*
      *It's in the interest of growing our Community to create an account, and upvote the Posts.*
      *Leaving a comment also helps encourage the growth of our Posts when seeking players who stop by.*
        <https://redd.it/623w5f>
        <https://redd.it/623oza>
        <https://redd.it/623mgp>

    •**__Discord Link (Share with Anyone!)__**
      *In case you ever Log out of our Server, you are always welcome back through this Direct Message!.*
      *You may also send this link to friends and get them invited!*
      *You will also recieve League EXP, which shows how committed you are into making this Community Great!*
      ${Config.links.discordLink}
:beers: **Cheers!** :beers:`
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
