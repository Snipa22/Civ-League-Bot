"use strict";

const Discord = require("discord.js");
const Config = require("./config.json");
const Players = require("./players.json");

const CivLeagueHelp = new Discord.Client();

CivLeagueHelp.on("ready", () => {
    console.log("*CivLeagueHelp Activated*");
});

CivLeagueHelp.on("message", message => {
    if (message.author.CivLeagueHelp) {
        return;
    }
    if (!message.content.startsWith(Config.dot)) {
        return;
    }

    let command = message.content.split(" ")[0];
    command = command.slice(Config.dot.length);
    let args = message.content.split(" ").splice(1);

    //Help
    if (command === "help" || command === "Help") {
        message.channel.sendMessage(
            `${Players.roleAdmin} | ${Players.roleModerator}` +
            `\n**__Quick Help Guide__**` +
            `\n  **.Channels** | **.channels**` +
            `\n    *Displays all available text channels.*` +
            `\n  **.Commands** | **.commands**` +
            `\n    *Displays all commands.*`
        );
    }
    //Channels
    if (command === "channels" || command === "Channels") {
        message.channel.sendMessage(
            `${Players.roleAdmin} | ${Players.roleModerator}` +
            `\n\n•|• **__List of Channels__** •|•` +
            `\n  ${Players.roleMember}` +
            `\n    | <#${Config.channels.channelIntroduction}>` +
            `\n      *Join CivLeague Everywhere (Discord/League/Steam Group).*` +
            `\n    | <#${Config.channels.channelGuidelines}>` +
            `\n      *Brief guide to handling certain situations properly.*` +
            `\n    | <#${Config.channels.channelWorkshop}>` +
            `\n      *List of CivLeague Mods. As well as many other enjoyable mods, such as the Hellblazer's Mods.*` +
            `\n    | <#${Config.channels.channelNews}>` +
            `\n      *Updates on our Server based by the **Polls** that are held.*` +
            `\n    | <#${Config.channels.channelQuests}>` +
            `\n      *Daily | Weekly | Lifetime Quests that can be Achieved!*` +
            `\n    | <#${Config.channels.channelHallOfFame}>` +
            `\n      *Players who have achieved a great deal of success within the Game!*` +
            `\n    | <#${Config.channels.channelProof}>` +
            `\n      *Screenshots provided from the Members of this Community.*` +
            `\n    | <#${Config.channels.channelLeagueHistory}>` +
            `\n      *Shows the history of Games Played, and current Levels.*`
        );
    }//Commands
    if (command === "commands" || command === "Commands") {
        message.channel.sendMessage(
`${Players.roleAdmin} | ${Players.roleModerator}
•|• **__CivLeague Link Commands__** •|•
    **.joinSteam**
        *Joining the Steam Group, by entering the Chat Room.*
    **.reddit**
        *Provides the Reddit Links so you can get that Upvoted.*
    **.joinFacebook**
        *Facebooook! Join our Social Group.*

•|• **__Discord Commands__** •|•
    **.deleteFiles**
        *Shows you how to delete files to avoid getting **Error Messages**.*
    **.setSteam**
        *How to attach your Steam Profile to your Discord.*
    **.setOverlay**
        *How to set the discordOverly for people that stream, or just not sure who was talking when they said something.*
        *While in game, it will display who is talking. Depends on how you have it setup.*
    **.setPTT**
        *How to setup Push to Talk.*

•|• **__Game Commands__** •|•
    **.voteSettings**
        *Vote the Map Settings First. Then doing the Ban Options.*
    **.voteBans**
        *Helps with Voting on Bans while Setting up the Game.*
        *It is respectful that Players don't Vote if they are not in this Game.
    **.draftFFA x Civ Bans Here**
        *x=Number of Players (2-8) in the Game. Follow that with names of Civilizations to Ban (Capitalizing the first Letter).*
    **.draft**
        *Draft's the Players in that Channel.*
    **.draftTeams t p**
        *t=Number of Teams (2, 3 or 4) | p=Number of Players on Each Team.*
        **All Teamers must be in** •|• **Staging: Teamers**.
    **.ffaReportx**
        *x=Number (2-8) of Players in that Game.* | *Example:* **.ffaReport6**
    **.tReport**
        *t=Number of Teams (2v2, 2v2v2, 2v2v2v2, 3v3, 4v4).* | *Example:* **.2v2v2Report**
    **.setMods**
        *Shows how to enable the mods in Game Settings.*
    **.setGame**
        *Shows how to setup the Game to avoid Error's.*

•|• **__Alternative Screenshot Program__** •|•
    **.lightshot**
        *Shows how to take a screenshot.*`
        );
    }/*.joinSteam*/
    else if (command === "joinSteam") {
        //Image of Joining
        message.channel.sendFile(
            `${Config.images.imageJoinSteam}`
        );//Message to Send
        message.channel.sendMessage(
            `${Players.roleAdmin} | ${Players.roleModerator}` +
            `\n**__Steam Group (Enter Chat Room)__**` +
            `\n${Config.links.civLeagueSteamGroup}` +
            `\n  *Entering the Steam Group is for players who rejoin our community and play on a social basis.*` +
            `\n  *Joining the Steam Group helps connect us outside the game, and Join Private Games hosted here.*` +
            `\n    •**Click the URL**` +
            `\n    •**Enter Chat Room (Blue Button)**` +
            `\n      *Check the Taskbar, Chat Window does not Open to the Front.*`
        );
    }/*.discord*/
    else if (command === "discord" || command === "Discord") {
        message.channel.sendMessage(
            `${Players.roleAdmin} | ${Players.roleModerator}` +
            `\n**__Discord Link (Share with Everyone!)__**` +
            `\n${Config.links.discordLink}`
        );
    }/*.reddit*/
    else if (command === "reddit" || command === "Reddit") {
        message.channel.sendMessage(
            `${Players.roleAdmin} | ${Players.roleModerator}` +
            `\n**__Reddit Links__**` +
            `\n  *If you still have questions about how this community works..\n  You can read Hannah's Reddit's here!!*` +
            `\n    •<https://redd.it/623w5f>` +
            `\n    •<https://redd.it/623oza>` +
            `\n    •<https://redd.it/623mgp>`
        );
    }/*.joinFacebook*/
    else if(command === "facebook" || command === "Facebook") {
        message.channel.sendMessage(
`${Players.roleAdmin} | ${Players.roleModerator}
**__CivLeague Facebook__**
  *If interested, you may also keep up to date on our Facebook Page!*
  <https://www.facebook.com/groups/civleague/>`
        );
    }
    /*.setSteam*/
    else if (command === "setSteam") {
        message.channel.sendMessage(
            `${Players.roleAdmin} | ${Players.roleModerator}` +
            `\n•|• **__Adding Steam to Discord__** •|•` +
            `\n *Attach your Steam Profile to the Discord Server.*` +
            `\n *For anyone who needs to host, your profile is **required public access**.*` +
            `\n   •**User Settings**` +
            `\n     *Click the User Settings bottom left of Discord (Right of Avatar|Username).*` +
            `\n   •**Connections**` +
            `\n     *Click the Connections tab on the left side of Discord in User Settings.*` +
            `\n   •**Steam Icon**` +
            `\n     *Click that Steam Icon that is displayed under **Connect Your Accounts**.*` +
            `\n     *Follow the Guide to get you Logged and Connected.*` +
            `\n   •**Display on Profile**` +
            `\n     *Finally make sure to check that box **Display on Profile**.*`
        );
        message.channel.sendFile(
            `${Config.images.imageSetSteam}`
        );
    }/*.setGame*/
    else if (command === "setMods") {
        message.channel.sendMessage(
            `\n${Players.roleAdmin} | ${Players.roleModerator}` +
            `\n•|• **__Auto Download Additional Content__** •|•` +
            `\n  *This is how you should set Auto Download of Mods from Workshops.*`
        );
        message.channel.sendFile(
            `${Config.images.imageSetMods}`
        );
    }/*.setGame*/
    else if (command === "setGame") {
        message.channel.sendMessage(
            `\n${Players.roleAdmin} | ${Players.roleModerator}` +
            `\n•|• **__Game Setup__** •|•` +
            `\n  *This is how you should set up your game for less issues!*`
        );
        message.channel.sendFile(
            `${Config.images.imageSetGame}`
        );
    }/*.setOverlay*/
    else if (command === "setOverlay") {
        message.channel.sendMessage(
            `\n${Players.roleAdmin} | ${Players.roleModerator}` +
            `\n•|• **__Setup Discord Overlay__** •|•` +
            `\n  *Setting up Discord Overlay, which allows the user to see who is talking, while in Game.*` +
            `\n    •**User Settings**` +
            `\n      *Click the User Settings bottom left of Discord (Right of Avatar|Username).*` +
            `\n    •**Overlay**` +
            `\n      *Click the Overlay Tab on the left side of Discord in User Settings.*` +
            `\n    •**Enable Overlay**` +
            `\n      *Check the box: Enable In-Game Overlay.*` +
            `\n    •**Games**` +
            `\n      *Click the Games tab on the left side of Discord in User Settings.*` +
            `\n    •**Enabled Civilization VI**` +
            `\n      *Finally under the **Added Games** section, just enable **Sid Meier's Civilization VI** by checking box.*`
        );
        message.channel.sendFile(
            `${Config.images.imageSetOverlay}`
        );
    }/*.deleteFiles*/
    else if (command === "deleteFiles") {
        message.channel.sendMessage(
            `${Players.roleAdmin} | ${Players.roleModerator}` +
            `\n**__Receiving Errors while Connecting__**` +
            `\n  *If this seems to happen often, it's best to clear some files. Just copy path, and paste in folder URL*` +
            `\n    **Documents/My Games/Sid Meier's Civilization VI**` +
            `\n\n**This will not Delete your Game Options if you select the right files in the below photo!**` +
            `\n\n**__Using the CivilizationVIDeleteFiles.bat File__**` +
            `\n    **Credit: Sir Rogers**` +
            `\n  *•All you have to do is download that file, and run it from your Desktop.*` +
            `\n  *•Make sure to close the game before running the .bat file, or your files will not be deleted!*` +
            `\n    *Using the .bat file, you will no longer need to follow this guide.*`
        );
        message.channel.sendFile(
            `${Config.images.imageDeleteFiles}`
        );
        message.channel.sendFile(
            `${Config.files.fileDeleteFiles}`
        );
    }/*.setPTT*/
    else if (command === "setPTT") {
        message.channel.sendMessage(
            `${Players.roleAdmin} | ${Players.roleModerator}` +
            `\n**__Setup Push to Talk__**` +
            `\n  *Setting up Push to Talk is very useful for the players that have a lot of background noise.*` +
            `\n  *Using this Discord Feature will help maintain a better playing environment.*` +
            `\n    | **User Settings** |` +
            `\n      *Click the User Settings bottom left of Discord (Right of Avatar|Username).*` +
            `\n    | **Click Voice** |` +
            `\n      *Click the Voice Tab on the left side of Discord in User Settings.*` +
            `\n    | **Set Push to Talk** |` +
            `\n      *Click the Drop Down under Input Mode, and change from Voice Acitivity to Push to Talk.*` +
            `\n    | **Assign a Key** |` +
            `\n      *Finally click next to Push to Talk option, and assign a key, or multiple.*` +
            `\n      *You can assign whatever you like, I just like to use a double key.*`
        );
        message.channel.sendFile(
            `${Config.images.imageSetPTT}`
        );
     }/*.lightshot*/
    else if (command === "lightshot") {
        message.channel.sendMessage(
            `${Players.roleAdmin} | ${Players.roleModerator}` +
            `\n•|• **__How to Take a Screenshot__** •|•` +
            `\n*Alternative Program: <http://app.prntscr.com/en/index.html>*` +
            `\n **[Alt]** + **[Prnt Scrn]**` +
            `\n   *Come to Discord, and **Click** in the Text Field*` +
            `\n Then **Hold [Ctrl]** and **Tap [V]**`
        );
    }/*.1v1Report*/
    else if (command === "1v1report" || command === "1v1Report" || command === "1v1REPORT") {
        message.channel.sendMessage(
            `__**2 Player Duel Winner Report Guide**__  ` + "\n" +
            `Paste Results to: ${Players.SongAdieu6276} by Sending a Direct Message (DM).` + "\n" +
            `1: @` + "\n" +
            `2: @`
        );
    }/*.ffaReport3*/
    else if (command === "ffareport3" || command === "ffaReport3" || command === "FFAReport3" || command === "FFAREPORT3") {
        message.channel.sendMessage(
            `__**3 Player FFA Winner Report Guide**__  ` + "\n" +
            `Paste Results to: ${Players.SongAdieu6276} by Sending a Direct Message (DM).` + "\n" +
            `1: @` + "\n" +
            `2: @` + "\n" +
            `3: @`
        );
    }/*.ffaReport4*/
    else if (command === "ffareport4" || command === "ffaReport4" || command === "FFAReport4" || command === "FFAREPORT4") {
        message.channel.sendMessage(
            `__**4 Player FFA Winner Report Guide**__  ` + "\n" +
            `Paste Results to: ${Players.SongAdieu6276} by Sending a Direct Message (DM).` + "\n" +
            `1: @` + "\n" +
            `2: @` + "\n" +
            `3: @` + "\n" +
            `4: @`
        );
    }/*.ffaReport5*/
    else if (command === "ffareport5" || command === "ffaReport5" || command === "FFAReport5" || command === "FFAREPORT5") {
        message.channel.sendMessage(
            `__**5 Player FFA Winner Report Guide**__  ` + "\n" +
            `Paste Results to: ${Players.SongAdieu6276} by Sending a Direct Message (DM).` + "\n" +
            `1: @` + "\n" +
            `2: @` + "\n" +
            `3: @` + "\n" +
            `4: @` + "\n" +
            `5: @`
        );
    }/*.ffaReport6*/
    else if (command === "ffareport6" || command === "ffaReport6" || command === "FFAReport6" || command === "FFAREPORT6") {
        message.channel.sendMessage(
            `__**6 Player FFA Winner Report Guide**__  ` + "\n" +
            `Paste Results to: ${Players.SongAdieu6276} by Sending a Direct Message (DM).` + "\n" +
            `1: @` + "\n" +
            `2: @` + "\n" +
            `3: @` + "\n" +
            `4: @` + "\n" +
            `5: @` + "\n" +
            `6: @`
        );
    }/*.ffaReport7*/
    else if (command === "ffareport7" || command === "ffaReport7" || command === "FFAReport7" || command === "FFAREPORT7") {
        message.channel.sendMessage(
            `__**7 Player FFA Winner Report Guide**__  ` + "\n" +
            `Paste Results to: ${Players.SongAdieu6276} by Sending a Direct Message (DM).` + "\n" +
            `1: @` + "\n" +
            `2: @` + "\n" +
            `3: @` + "\n" +
            `4: @` + "\n" +
            `5: @` + "\n" +
            `6: @` + "\n" +
            `7: @`
        );
    }/*.ffaReport8*/
    else if (command === "ffareport8" || command === "ffaReport8" || command === "FFAReport8" || command === "FFAREPORT8") {
        message.channel.sendMessage(
            `__**8 Player FFA Winner Report Guide**__  ` + "\n" +
            `Paste Results to: ${Players.SongAdieu6276} by Sending a Direct Message (DM).` + "\n" +
            `1: @` + "\n" +
            `2: @` + "\n" +
            `3: @` + "\n" +
            `4: @` + "\n" +
            `5: @` + "\n" +
            `6: @` + "\n" +
            `7: @` + "\n" +
            `8: @`
        );
    }/*.2v2Report*/
    else if (command === "2v2report" || command === "2v2Report" || command === "2v2REPORT") {
        message.channel.sendMessage(
            `__**2v2 Teamer Winner Report Guide**__  ` + "\n" +
            `Paste Results to: ${Players.SongAdieu6276} by Sending a Direct Message (DM).` + "\n" +

            `1st Team:` + "\n" +
            `    @` + "\n" +
            `    @` + "\n" +
            `2nd Team:` + "\n" +
            `    @` + "\n" +
            `    @`
        );
    }/*.2v2v2Report*/
    else if (command === "2v2v2report" || command === "2v2v2Report" || command === "2v2v2REPORT") {
        message.channel.sendMessage(
            `__**2v2v2 Teamer Winner Report Guide**__  ` + "\n" +
            `Paste Results to: ${Players.SongAdieu6276} by Sending a Direct Message (DM).` + "\n" +

            `1st Team:` + "\n" +
            `    @` + "\n" +
            `    @` + "\n" +
            `2nd Team:` + "\n" +
            `    @` + "\n" +
            `    @` + "\n" +
            `3rd Team:` + "\n" +
            `    @` + "\n" +
            `    @`
        );
    }/*.2v2v2v2Report*/
    else if (command === "2v2v2v2report" || command === "2v2v2v2Report" || command === "2v2v2v2REPORT") {
        message.channel.sendMessage(
            `__**2v2v2v2 Teamer Winner Report Guide**__  ` + "\n" +
            `Paste Results to: ${Players.SongAdieu6276} by Sending a Direct Message (DM).` + "\n" +

            `1st Team:` + "\n" +
            `    @` + "\n" +
            `    @` + "\n" +
            `2nd Team:` + "\n" +
            `    @` + "\n" +
            `    @` + "\n" +
            `3rd Team:` + "\n" +
            `    @` + "\n" +
            `    @` + "\n" +
            `4th Team:` + "\n" +
            `    @` + "\n" +
            `    @` + "\n"
        );
    }/*.3v3Report*/
    else if (command === "3v3report" || command === "3v3Report" || command === "3v3REPORT") {
        message.channel.sendMessage(
            `__**3v3 Teamer Winner Report Guide**__  ` + "\n" +
            `Paste Results to: ${Players.SongAdieu6276} by Sending a Direct Message (DM).` + "\n" +

            `1st Team:` + "\n" +
            `    @` + "\n" +
            `    @` + "\n" +
            `    @` + "\n" +
            `2nd Team:` + "\n" +
            `    @` + "\n" +
            `    @` + "\n" +
            `    @` + "\n"
        );
    }/*.4v4Report*/
    else if (command === "4v4report" || command === "4v4Report" || command === "4v4REPORT") {
        message.channel.sendMessage(
            `__**4v4 Teamer Winner Report Guide**__  ` + "\n" +
            `Paste Results to: <#${Config.channels.channelWorkshop}> by Sending a Direct Message (DM).` + "\n" +
            `1st Team:` + "\n" +
            `    @` + "\n" +
            `    @` + "\n" +
            `    @` + "\n" +
            `    @` + "\n" +
            `2nd Team:` + "\n" +
            `    @` + "\n" +
            `    @` + "\n" +
            `    @` + "\n" +
            `    @` + "\n"
        );
    }
});
CivLeagueHelp.login(Config.tokens.HelpBot);
