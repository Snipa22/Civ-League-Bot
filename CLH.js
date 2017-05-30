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
`${Players.roleAdmin} | ${Players.roleModerator}

•|• **__List of Channels__** •|•
    <#${Config.channels.channelIntroduction}>
        *Join CivLeague Everywhere (Discord/League/Steam Group).*
    <#${Config.channels.channelGuidelines}>
        *Brief guide to handling certain situations properly.*
    <#${Config.channels.channelForms}>
        *Application to become Moderator/Reporting a Player.. and more!*
    <#${Config.channels.channelWorkshop}>
        *List of CivLeague Mods. As well as many other enjoyable mods!
        You will also find all the extra Civilizations Mod Pack here.*
    <#${Config.channels.channelNews}>
        *Updates on our Server based by the **Polls** that are held.*
    <#${Config.channels.channelTournament}>
        *Tournament News and Requirements along with any Mods to Install.*
    <#${Config.channels.channelHallOfFame}>
        *Players who have achieved a great deal of success within the Game!*
    <#${Config.channels.channelProof}>
        *Screenshots provided from the Members of this Community.*
    <#${Config.channels.channelLeagueHistory}>
        *Shows the history of Games Played, and current Levels.*`
        );
    }//Commands
    if (command === "commands" || command === "Commands") {
        message.channel.sendMessage(
`${Players.roleAdmin}
•|• **__CivLeague Link Commands__** •|•
    **.joinSteam**
        *Joining the Steam Group, by entering the Chat Room.*
    **.reddit**
        *Provides the Reddit Links so you can get that Upvoted.*
    **.facebook**
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
        *How to setup Push to Talk.*`
        );
        message.channel.sendMessage(
`${Players.roleModerator}
•|• **__Game Commands__** •|•
    **.allCivs | .allcivs**
        *Shows all available Civilizations.*
    **.voteSettings | .votesettings**
        *Vote the Map Settings First. Then doing the Ban Options.*
    **.voteBans | .votebans | .voteBansJDF | votebansjdf**
        *Helps with Voting on Bans while Setting up the Game.*
        *It is respectful that Players don't Vote if they are not in this Game.
    **.draft**
        *Draft's the Players in that Channel.*
    **.draft2**
        *Draft's the Players in that Channel with too many Bans to access.*
    **.draftTeams t p**
        *t=Number of Teams (2, 3 or 4) | p=Number of Players on Each Team.*
        **All Teamers must be in** •|• **Staging: Teamers**.
    **.ffaReportx**
        *x=Number (2-8) of Players in that Game.* | *Example:* **.ffaReport6**
    **.tReport**
        *t=Number of Teams (2v2, 2v2v2, 2v2v2v2, 3v3, 4v4).* | *Example:* **.2v2v2Report**
    **.setMods**
        *Shows how to enable the mods in Game Settings.*
    **.gameTypes**
        *Shows the different game types: **FFA**, **Diplo**, and **No Diplo**.*

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
`\n**__Steam Group (Enter Chat Room)__**
${Config.links.civLeagueSteamGroup}
  *Entering the Steam Group is for players who rejoin our community and play on a social basis.*
  *Joining the Steam Group helps connect us outside the game, and Join Private Games hosted here.*
    •**Click the URL**
    •**Enter Chat Room (Blue Button)**
      *Check the Taskbar, Chat Window does not Open to the Front.*`
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
    }/*.setMods*/
    else if (command === "setMods") {
        message.channel.sendMessage(
            `\n${Players.roleAdmin} | ${Players.roleModerator}` +
            `\n•|• **__Auto Download Additional Content__** •|•` +
            `\n  *This is how you should set Auto Download of Mods from Workshops.*`
        );
    }/*.allCivs*/
    else if (command === "allcivs" || command === "allCivs") {
        message.channel.sendMessage(
`•|• **__All Available Civilizations__** •|•
--    **Top Tier**    --
<:australia:319172870074793984> • *Australia (**John Curtin**)*
<:aztec:319176447531024384> • *Aztec (**Montezuma**)*
<:germany:319191037337665536> • *Germany (**Frederick Barbarossa**)*
<:macedon:319191099111505931> • *Macedon (**Alexander**)*
<:persia:319191114793877504> • *Persia (**Cyrus**)*
<:rome:319191129230671873> • *Rome (**Trajan**)*
<:russia:319191141637685248> • *Russia (**Peter**)*
<:scythia:319191152563847178> • *Scythia (**Tomyris**)*
<:sumeria:319165695721996291> • *Sumeria (**Gilgamesh**)*
--    **Mid Tier**    --
<:america:319168816644882432> • *America (**Teddy Roosevelt**)*
<:arabia:319172861715808256> • *Arabia (**Saladin**)*
<:brazil:319176534373957632> • *Brazil (**Pedro II**)*
<:china:319177163939250178> • *China (**Qin Shi Huang**)*
<:greece_gorgo:319191048335130624> • *Greece (**Gorgo**)*
<:greece_pericles:319191058221236224> • *Greece (**Pericles**)*
<:japan_hojo:319191078639108096> • *Japan (**Hojo Tokimune**)*
<:kongo:319191090399936512> • *Kongo (**Mvemba A Nzinga**)*
<:england:319148263900971008> • *England (**Victoria**)* | *-Victoria
--    **Low Tier**    --
<:egypt:319176482788343808> • *Egypt (**Cleopatra**)*
<:france:319191004550922250> • *France (**Catherine De Medici**)*
<:india:319191068488761354> • *India (**Gandhi**)*
<:norway:319191107302850580> • *Norway (**Harald Hardrada**)*
<:poland:319160313331056651> • *Poland (**Jadwiga**)*
<:spain:319191162462273536> • *Spain (**Philip II**)*
`
        );
    }/*.gameTypes*/
    else if (command === "gameTypes" || command === "gametypes") {
        message.channel.sendMessage(
`\n${Players.roleAdmin} | ${Players.roleModerator}
•|• **__Game Types__** •|•
*These are the available options!*
  •**Diplo:** Everything is granted.
  •**FFA:** No Declarations of Friendships\Alliances, everything else is granted.
  •**No Diplo:** Nothing is granted.`
        );
        message.channel.sendFile(
            `${Config.images.imageGameTypes}`
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
`${Players.roleAdmin} | ${Players.roleModerator}
'•|•**__Receiving Errors while Connecting__** •|•
  *If this seems to happen often, it's best to clear some files. Just copy path, and paste in folder URL*
**Documents/My Games/Sid Meier's Civilization VI**
    ***Notes:***
      •*This will not Delete your Game Options if you select the right files in the below photo!*

•|• **__Using the CivilizationVIDeleteFiles.bat File__** •|•
***Give Credit to: MisterT800***
  •*All you have to do is download that file, and run it from your Desktop next to your Civilization VI Game Icon.*
    *This will **Restart Civilization VI** > **Clean the Files** > **Restart Civilization VI** for you.*
      ***Notes:***
        •*May need to change path for Steam at the beginning of the file if you have Steam installed elsewhere.*
        •*Using the .bat file, you will no longer need to follow this guide.*
    **CivLeague <:civIconPurple:291784556489474049> Approved!**`
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
            `Paste Results to: ${Players.SongAdieu} by Sending a Direct Message (DM).` + "\n" +
            `1: @` + "\n" +
            `2: @`
        );
    }/*.ffaReport3*/
    else if (command === "ffareport3" || command === "ffaReport3" || command === "FFAReport3" || command === "FFAREPORT3") {
        message.channel.sendMessage(
            `__**3 Player FFA Winner Report Guide**__  ` + "\n" +
            `Paste Results to: ${Players.SongAdieu} by Sending a Direct Message (DM).` + "\n" +
            `1: @` + "\n" +
            `2: @` + "\n" +
            `3: @`
        );
    }/*.ffaReport4*/
    else if (command === "ffareport4" || command === "ffaReport4" || command === "FFAReport4" || command === "FFAREPORT4") {
        message.channel.sendMessage(
            `__**4 Player FFA Winner Report Guide**__  ` + "\n" +
            `Paste Results to: ${Players.SongAdieu} by Sending a Direct Message (DM).` + "\n" +
            `1: @` + "\n" +
            `2: @` + "\n" +
            `3: @` + "\n" +
            `4: @`
        );
    }/*.ffaReport5*/
    else if (command === "ffareport5" || command === "ffaReport5" || command === "FFAReport5" || command === "FFAREPORT5") {
        message.channel.sendMessage(
            `__**5 Player FFA Winner Report Guide**__  ` + "\n" +
            `Paste Results to: ${Players.SongAdieu} by Sending a Direct Message (DM).` + "\n" +
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
            `Paste Results to: ${Players.SongAdieu} by Sending a Direct Message (DM).` + "\n" +
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
            `Paste Results to: ${Players.SongAdieu} by Sending a Direct Message (DM).` + "\n" +
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
            `Paste Results to: ${Players.SongAdieu} by Sending a Direct Message (DM).` + "\n" +
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
            `Paste Results to: ${Players.SongAdieu} by Sending a Direct Message (DM).` + "\n" +

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
            `Paste Results to: ${Players.SongAdieu} by Sending a Direct Message (DM).` + "\n" +

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
            `Paste Results to: ${Players.SongAdieu} by Sending a Direct Message (DM).` + "\n" +

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
            `Paste Results to: ${Players.SongAdieu} by Sending a Direct Message (DM).` + "\n" +

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
            `Paste Results to: <#${Players.SongAdieu}> by Sending a Direct Message (DM).` + "\n" +
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
