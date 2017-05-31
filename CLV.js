"use strict";
/*Author: © • Song Adieu | Created: March, 2017*/

const Discord = require("discord.js");
const Config = require("./config.json");

const CivLeagueVote = new Discord.Client();

CivLeagueVote.on("ready", () => {
    console.log("*CivLeagueVote Activated*");
})
//Civilization Ban List
let civListOne = [
    ':australia:319172870074793984',
    ':aztec:319176447531024384',
    ':germany:319191037337665536',
    ':macedon:319191099111505931',
    ':persia:319191114793877504',
    ':rome:319191129230671873',
    ':russia:319191141637685248',
    ':scythia:319191152563847178',
    ':sumeria:319165695721996291'
];
let civListTwo = [
    ':america:319168816644882432',
    ':arabia:319172861715808256',
    ':brazil:319176534373957632',
    ':china:319177163939250178',
    ':greece_gorgo:319191048335130624',
    ':greece_pericles:319191058221236224',
    ':japan_hojo:319191078639108096',
    ':kongo:319191090399936512',
    ':england:319148263900971008',
];
let civListThree = [
    ':egypt:319176482788343808',
    ':france:319191004550922250',
    ':india:319191068488761354',
    ':norway:319191107302850580',
    ':poland:319160313331056651',
    ':spain:319191162462273536'
];
//Finshed Voting
let mainEmoji = [
    ':civIconPurple:291784556489474049'
];
let difficultyEmojiList = [
'🌤',
'☁',
'🌧',
'🌩',
'⛈'
];
let mapSettingsEmojiList = [
':NumbOne:318828396563922955',
':NumbTwo:318828407741743105',
':NumbThree:318828419888578560',
':NumbFour:318828429946519552',
':NumbFive:318828442588020766',
':NumbSix:318828453983944704'
];
let letterEmojiList = [
'🌕',
'🌗',
'🌑'
];
let opEmojiList = [
'🐏',
'⚔',
'🛡',
'☢',
'⚛',
'🎖',
'🌪',
'🏠',
'👿'
];

CivLeagueVote.on("message", message => {
    if (message.author.CivLeagueVote) return;
    if (!message.content.startsWith(Config.dot)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(Config.dot.length);
    let args = message.content.split(" ").splice(1);

    //.voteSettings
   if (command === "voteSettings" || command === "votesettings") {
        message.channel.sendMessage(
`•|• **__Game Settings__** •|•
  ***Majority Votes pick the Game Settings. Host does break Ties.***
•**__Map Choices__**
<:NumbOne:318828396563922955> • 🌏**Pangaea** *(One Massive Landmass with Surrounding Islands)*
<:NumbTwo:318828407741743105> • 🌎**Continents** *(Few Large Land Masses)*
<:NumbThree:318828419888578560> • 🌍**Fractal** *(Unpredictable Map that can result in One or Many Land Masses)*
<:NumbFour:318828429946519552> • <:earth_inland:316937660138520578>**Inland Sea** *(One Large Ocean in the Center of the Map)*
<:NumbFive:318828442588020766> • <:earth_islands:316937669672304651>**Island Plates** *(Islands Ranging in Size from Small to Large)*
<:NumbSix:318828453983944704> • <:earth_shuffle:316937678908293121>**Shuffle** *(What Secrets will this Map Reveal)*`
        ).then(function(internalMessage) {
            mapSettingsEmojiList.forEach(function(emoji) {
                internalMessage.react(emoji);
            });
        });
        message.channel.sendMessage(
`•**__World Age__**
🌑 • **Old** *(Less Hills and Mountains)*
🌗 • **Standard** *(Standard Hills and Mountains)*
🌕 • **New** *(More Hills and Mountains)*`
        ).then(function(internalMessage) {
            letterEmojiList.forEach(function(emoji) {
                internalMessage.react(emoji);
            });
        });
        message.channel.sendMessage(
`•**__Level of Difficulty__**
🌤 • **Prince**
☁ • **King**
🌧 • **Emperor**
🌩 • **Immortal**
⛈ • **Deity**`
        ).then(function(internalMessage) {
            difficultyEmojiList.forEach(function(emoji) {
                internalMessage.react(emoji);
            });
        });
        //Putting a Plus in Chat when Done
        message.channel.sendMessage(
`•|• **Done Voting** •|•
  *Please react to the Purple Coin to announce you have finished voting.
  Keep in mind the bot autovotes 1, so make sure everyone has locked in their votes.*`
        ).then(function(internalMessage) {
            mainEmoji.forEach(function(emoji) {
                internalMessage.react(emoji);
            });
        });
    }
//.voteBans
   if (command === "voteBans" || command === "votebans") {
        message.channel.sendMessage(
`•|• **__Civilizations Ban List__** •|•
  ***Majority Votes ban the Civilizations. Host does break Ties.***`
        );
        message.channel.sendMessage(
            '•**Top Tier Civs**'
        ).then(function(internalMessage) {
            civListOne.forEach(function(emoji) {
                internalMessage.react(emoji);
            });
        });
        message.channel.sendMessage(
            '•**Mid Tier Civs**'
        ).then(function(internalMessage) {
            civListTwo.forEach(function(emoji) {
                internalMessage.react(emoji);
            });
        });
        message.channel.sendMessage(
            '•**Low Tier Civs**'
        ).then(function(internalMessage) {
            civListThree.forEach(function(emoji) {
                internalMessage.react(emoji);
            });
        });
        //In-Game OP Options Ban List
        message.channel.sendMessage(
`•|• **__In-Game OP Options__** •|•
  ***Majority Votes ban these Options during the game. Host does break Ties.***
🐏 • **Ancient/Classical Era Support Units:** *Rams/Siege Towers may not be used with renaissance era units and up.*
🎖 • **God of the Forge:** *Provides Ancient/Classical Era Units 25% Production Bonus.*
⚔ • **Crusade:** *+10 Combat Strength near foreign cities that follow this Religion.*
🛡 • **Defender of the Faith:** *+10 Combat Strength when within the borders of friendly cities that follow this Religion.*
🌪 • **GG/GA Stacking:** *When two GG's/GA's of the same era allow a unit to receive Double Bonus.*
⚛ • **Nuclear Devices (Atomic Era):** *Disallow building of Nuclear Devices.*
☢ • **Thermo Nuclear Devices (Information Era):** *Disallow building of Thermo Nuclear Devices.*
🏠 • **City States:** *Disallow Peace with any City State, that is suzzrain of any player(s) you are at war with.*
👿 • **Barbarians:** *Disallow Barbarians in the Game, as they currently bug turn transitions. So please be aware.*`
        ).then(function(internalMessage) {
            opEmojiList.forEach(function(emoji) {
                internalMessage.react(emoji);
            });
        });
//Putting a Plus in Chat when Done
        message.channel.sendMessage(
`•|• **Done Voting** •|•
  *Please react to the Purple Coin to announce you have finished voting.
  Keep in mind the bot autovotes 1, so make sure everyone has locked in their votes.*`
        ).then(function(internalMessage) {
            mainEmoji.forEach(function(emoji) {
                internalMessage.react(emoji);
            });
        });
   }
});

CivLeagueVote.login(Config.tokens.VoteBot);