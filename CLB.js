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
**__Welcome, this is a Civilization__** •<:civIcon:291784556489474049>• NQ Community__**
:hugging: ${member.user} :hugging: *You have just been hugged!*

**__CivLeague's Guide__**:
    •*Please, follow and respect our #guidelines and our players!*
    •*We do value games where players **do not** quit!*
    •*To join on our players, you'll need to join our **Steam Group Chat Room**.*
        <steam://friends/joinchat/103582791457662088>
***If you have any questions! Please feel free to start asking.***`
    );

//Direct Messages a Player upon Joining the Server
    member.send(
`:purple_heart: •|• **__Welcome to CivLeague Community!__** •|• :purple_heart:
*CivLeague is the most active Community to play Civilization VI with the goal of not quitting.
If there is any questions, please ask our Admin | Moderator Team at any time.*

    **__Admins | Moderators__**
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

    •**__Steam Group Website__**
      ${Config.links.civLeagueSteamGroup}
    
    •**__Entering Steam Group Chat Room__**
    ${Config.links.civLeagueGroupChat}

    •**__Reddit Posts__**
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
    guild.defaultChannel.sendMessage(
`**__Just Left CivLeague__** •<:civIcon:291784556489474049>• **__Community!__**
    :broken_heart: ${member.user} :broken_heart: *.. oh no.. just one more turn!*`
    );
});

CivLeagueBot.login(Config.tokens.CivilizationVILeagueBot);
