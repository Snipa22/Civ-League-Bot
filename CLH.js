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
    if (command === "help") {
        message.channel.sendMessage(
`**__Quick Help Guide__**
**.channels**
    *Displays all available text channels.*
**.commands**
    *Displays all commands.*`
        );
    }
    //Channels
    if (command === "channels") {
        message.channel.sendMessage(
`•|• **__List of Channels__** •|•
    <#${Config.channels.channelIntroduction}>
        *Join CivLeague Everywhere (Discord/League/Steam Group).*
    <#${Config.channels.channelGuidelines}>
        *Brief guide to handling certain situations properly.*
    <#${Config.channels.channelForms}>
        *Application to become Moderator/Reporting a Player.. and more.*
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
    <#${Config.channels.channelReport}>
        *Players will need to report their games in this channel to avoid bad reports.*
    <#${Config.channels.channelLeagueHistory}>
        *Shows the history of Games Played, and current Levels.*`
        );
    }//Commands
    if (command === "commands") {
        message.channel.sendMessage(
`•|• **__CivLeague Link Commands__** •|•
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
`•|• **__Game Commands__** •|•
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
    **.shuffle t p**
        *t=Number of Teams (2, 3 or 4) | p=Number of Players on Each Team.*
        **All Teamers must be in** •|• **Staging: Teamers**. *Example:* **.shuffle 3 2** *(3v2*.
    **.ffaReportx**
        *x=Number (2-8) of Players in that Game.* | *Example:* **.ffaReport6**
    **.tReport**
        *t=Number of Teams (2v2, 2v2v2, 2v2v2v2, 3v3, 4v4).* | *Example:* **.2v2v2Report**
    **.setMods**
        *Shows how to enable the mods in Game Settings.*
    **.gameTypes**
        *Shows the different game types: **Diplo** and **No Diplo**.*

•|• **__Alternative Screenshot Program__** •|•
    **.lightshot**
        *Shows how to take a screenshot.*`
        );
    }/*.joinSteam*/
    else if (command === "joinSteam") {
        //Message to Send
        message.channel.sendMessage(
`**__Steam Group Chat Room__**
*Click this link to always join the Steam Group Chat Room.*
${Config.links.civLeagueSteamGroup}`
        );
    }/*.discord*/
    else if (command === "discord" || command === "Discord") {
        message.channel.sendMessage(
`**__Discord Links (Share with Everyone!)__**
**Use with Discord App:**
${Config.links.discordLink}
**Use with Website:**
${Config.links.discordMeLink}`
        );
    }/*.reddit*/
    else if (command === "reddit" || command === "Reddit") {
        message.channel.sendMessage(
`**__Reddit Links__**
*Still learning and have questions?! We have guides here to help:
    •<https://redd.it/623w5f>
    •<https://redd.it/623oza>
    •<https://redd.it/623mgp>`
        );
    }/*.joinFacebook*/
    else if(command === "facebook" || command === "Facebook") {
        message.channel.sendMessage(
`**__CivLeague Facebook__**
  <https://www.facebook.com/groups/civleague/>`
        );
    }
    /*.setSteam*/
    else if (command === "setSteam") {
        message.channel.sendMessage(
`•|• **__Adding Steam to Discord__** •|•
*Once you have added Steam to your Discord, please notify admin, so we can give you a Solid Barbarian Role.
*This is to help with players joining our Discord, and helps hosts connect players who have issues joining Steam.*
  •**User Settings**
  •**Connections**
  •**Steam Icon**
    *Follow the Guide to get you Logged and Connected.*
  •**Display on Profile**
  
***Now remember, whoever does this, get's the Solid Barbarian Role, and is a trusted member in this community!***`
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
        message.channel.sendFile(
            `${Config.images.imageSetMods}`
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
🔔 • *Nubia (**Amanitore**)* -- Temporary Icon
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
  •**No Diplo:** Nothing *(only peace)* is granted.`
        );
        message.channel.sendFile(
            `${Config.images.imageGameTypes}`
        );
    }/*.setOverlay*/
    else if (command === "setOverlay" || command === "setoverlay") {
        message.channel.sendMessage(
`${Players.roleAdmin} | ${Players.roleModerator}
•|• **__Setup Discord Overlay__** •|•
*Setting up Discord Overlay, which allows the user to see who is talking, while in Game.*
    •**User Settings**
      *Click the User Settings bottom left of Discord (Right of Avatar|Username).*
    •**Overlay**
      *Click the Overlay Tab on the left side of Discord in User Settings.*
    •**Enable Overlay**
      *Check the box: Enable In-Game Overlay.*
    •**Games**
      *Click the Games tab on the left side of Discord in User Settings.*
    •**Enabled Civilization VI**
      *Finally under the **Added Games** section, just enable **Sid Meier's Civilization VI** by checking box.*`
        );
        message.channel.sendFile(
            `${Config.images.imageSetOverlay}`
        );
    }/*.deleteFiles*/
    else if (command === "deleteFiles" || command === "deletefiles" || command === "df" || command === "DF") {
        message.channel.sendMessage(
`${Players.roleAdmin} | ${Players.roleModerator}
'•|•**__Receiving Errors while Connecting__** •|•
  *If this seems to happen often, it's best to clear some files. Just copy path, and paste in folder Address Bar*

**Documents/My Games/Sid Meier's Civilization VI**
                       *^ copy/paste that ^*
***This will not Delete your Game Options if you select the right files in the below photo!***

•|• **__CivilizationVIDeleteFiles.bat File__** •|•
***Creation credit to: MisterT800***
  •*Download the Dx11 or 12 file you run Civ with, and run it from your Desktop next to your Civilization VI Game Icon.*
    *This will **Restart Civilization VI** > **Delete the necessary Files** > **Restart Civilization VI** for you.*
      ***Notes:***
        •*May need to change path for Steam at the beginning of the file if you have Steam installed elsewhere.*
        •*Using the .bat file, you will no longer need to follow this guide.*
    **CivLeague <:civIconPurple:291784556489474049> Approved!**`
        );
        message.channel.sendFile(
            `${Config.images.imageDeleteFiles}`
        );
        message.channel.sendFile(
            `${Config.files.fileDeleteFilesx11}`
        );
    }/*.setPTT*/
    else if (command === "setPTT") {
        message.channel.sendMessage(
`${Players.roleAdmin} | ${Players.roleModerator}
•|• **__Setup Push to Talk__** •|•
*Setting up Push to Talk is very useful for the players that have a lot of background noise.*
*Using this Discord Feature will help maintain a better playing environment.*
    •**User Settings**
      *Click the User Settings bottom left of Discord (Right of Avatar|Username).*
    •**Click Voice**
      *Click the Voice Tab on the left side of Discord in User Settings.*
    •**Set Push to Talk**
      *Click the Drop Down under Input Mode, and change from Voice Acitivity to Push to Talk.*
    •**Assign a Key**
      *Finally click next to Push to Talk option, and assign a key, or multiple.*
      *You can assign whatever you like, I just like to use a double key.*`
        );
        message.channel.sendFile(
            `${Config.images.imageSetPTT}`
        );
     }/*.lightshot*/
    else if (command === "lightshot") {
        message.channel.sendMessage(
`${Players.roleAdmin} | ${Players.roleModerator}
•|• **__Windows Screenshot Function:__** •|•
Hold **[Alt]** + Tap **[Prnt Scrn]** (Selected Program Window)
Hold **[Ctrl]** + Tap **[Prnt Scrn]** (Complete Display)
*Come to Discord and **click** in the text field*
Hold **[Ctrl]** and Tap **[V]** to paste image.

•|• **__Lightshot (Alternative Program):__** •|•
<http://app.prntscr.com/en/index.html>`
        );
    }/*.1v1Report*/
    else if (command === "1v1report" || command === "1v1Report") {
        message.channel.sendMessage(
`**__2 Player Duel Winner Report Guide__**
*Paste Results to: <#${Config.channels.channelReport}>*
Game Type: 
1: @
2: @`
        );
    }/*.ffaReport3*/
    else if (command === "ffareport3" || command === "ffaReport3" || command === "FFAReport3" || command === "FFAREPORT3") {
        message.channel.sendMessage(
`**__3 Player FFA Winner Report Guide__**
*Paste Results to: <#${Config.channels.channelReport}>*
Game Type: 
1: @
2: @
3: @`
        );
    }/*.ffaReport4*/
    else if (command === "ffareport4" || command === "ffaReport4" || command === "FFAReport4" || command === "FFAREPORT4") {
        message.channel.sendMessage(
`**__4 Player FFA Winner Report Guide__**
*Paste Results to: <#${Config.channels.channelReport}>*
Game Type: 
1: @
2: @
3: @
4: @`
        );
    }/*.ffaReport5*/
    else if (command === "ffareport5" || command === "ffaReport5" || command === "FFAReport5" || command === "FFAREPORT5") {
        message.channel.sendMessage(
`**__5 Player FFA Winner Report Guide__**
*Paste Results to: <#${Config.channels.channelReport}>*
Game Type: 
1: @
2: @
3: @
4: @
5: @`
        );
    }/*.ffaReport6*/
    else if (command === "ffareport6" || command === "ffaReport6" || command === "FFAReport6" || command === "FFAREPORT6") {
        message.channel.sendMessage(
`**__6 Player FFA Winner Report Guide__**
*Paste Results to: <#${Config.channels.channelReport}>*
Game Type: 
1: @
2: @
3: @
4: @
5: @
6: @`
        );
    }/*.ffaReport7*/
    else if (command === "ffareport7" || command === "ffaReport7" || command === "FFAReport7" || command === "FFAREPORT7") {
        message.channel.sendMessage(
`**__7 Player FFA Winner Report Guide__**
*Paste Results to: <#${Config.channels.channelReport}>*
Game Type: 
1: @
2: @
3: @
4: @
5: @
6: @
7: @`
        );
    }/*.ffaReport8*/
    else if (command === "ffareport8" || command === "ffaReport8" || command === "FFAReport8" || command === "FFAREPORT8") {
        message.channel.sendMessage(
`**__8 Player FFA Winner Report Guide__**
*Paste Results to: <#${Config.channels.channelReport}>*
Game Type: 
1: @
2: @
3: @
4: @
5: @
6: @
7: @
8: @`
        );
    }/*.2v2Report*/
    else if (command === "2v2report" || command === "2v2Report" || command === "2v2REPORT") {
        message.channel.sendMessage(
`**__2v2 Teamer Winner Report Guide__**
*Paste Results to: <#${Config.channels.channelReport}>*
1st Team:
    @
    @
2nd Team:
    @
    @`
        );
    }/*.2v2v2Report*/
    else if (command === "2v2v2report" || command === "2v2v2Report" || command === "2v2v2REPORT") {
        message.channel.sendMessage(
`**__2v2v2 Teamer Winner Report Guide__**
*Paste Results to: <#${Config.channels.channelReport}>*
1st Team:
    @
    @
2nd Team:
    @
    @
3rd Team:
    @
    @`
        );
    }/*.2v2v2v2Report*/
    else if (command === "2v2v2v2report" || command === "2v2v2v2Report" || command === "2v2v2v2REPORT") {
        message.channel.sendMessage(
`**__2v2v2v2 Teamer Winner Report Guide__**
*Paste Results to: <#${Config.channels.channelReport}>*
1st Team:
    @
    @
2nd Team:
    @
    @
3rd Team:
    @
    @
4th Team:
    @
    @`
        );
    }/*.3v3Report*/
    else if (command === "3v3report" || command === "3v3Report" || command === "3v3REPORT") {
        message.channel.sendMessage(
`**__3v3 Teamer Winner Report Guide__**
*Paste Results to: <#${Config.channels.channelReport}>*
1st Team:
    @
    @
    @
2nd Team:
    @
    @
    @`
        );
    }/*.4v4Report*/
    else if (command === "4v4report" || command === "4v4Report" || command === "4v4REPORT") {
        message.channel.sendMessage(
`**__4v4 Teamer Winner Report Guide__**
*Paste Results to: <#${Config.channels.channelReport}>*
1st Team:
    @
    @
    @
    @
2nd Team:
    @
    @
    @
    @`
        );
    }
});
CivLeagueHelp.login(Config.tokens.HelpBot);
