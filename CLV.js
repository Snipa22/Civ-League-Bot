"use strict";
/*Author: © • Song Adieu | Created: March, 2017*/

const Discord = require("discord.js");
const Config = require("./config.json");

const CivLeagueVote = new Discord.Client();

CivLeagueVote.on("ready", () => {
    console.log("*CivLeagueVote Activated*");
})
//Civilization Ban List
/*

*/
let civListOne = [
    'johnc:318097446196609024',
    ':montezuma:318129675924668427',
    ':frederickb:317422295113269248',
    ':alexader:317405771631558656',
    ':cyrus:317414457762512896',
    ':trajan:317401277825024021',
    ':russia:291789137424416778',
    ':scythia:291789172434272256',
    ':gilgamesh:317534174904975362'
];
let civListTwo = [
    ':america:291788587329126402',
    ':arabia:291788624041607170',
    ':aztec:291788693428109322',
    ':china:291788737573027840',
    ':gorgo:317699788256837632',
    ':pericles:317700081807654913',
    ':hojot:317736482578366485',
    ':mvemban:318097919146459136',
    ':victoria:318129726504042497'
];
let civListThree = [
    ':brazil:291788717587300353',
    ':cleopatra:317500171355422730',
    ':catherinem:317460679189725185',
    ':gandhi:317452366783971328',
    ':haraldh:317727671830315010',
    ':jadwiga:318129714772443136',
    `:spain:291789195691819010`
];
let civListDLC1 = [
    ':adolfhitler:317183252244987914',
    ':frederickii:317183363603628033',
    ':antoninusp:317198867659751425',
    ':julian:317206472276836353',
    ':nero:317206544179789824',
    ':trajan:317208457499377665'
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
':NumbOne:318269441559232512', 
':NumbTwo:318269455056633856', 
':NumbThree:318269467278704640', 
':NumbFive:318269495003185163', 
':NumbFive:317382827710611458', 
':NumbSix:317382839089758209'
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
<:NumbOne:318269441559232512> • 🌏**Pangaea** *(One Massive Landmass with Surrounding Islands)*
<:NumbTwo:318269455056633856> • 🌎**Continents** *(Few Large Land Masses)*
<:NumbThree:318269467278704640> • 🌍**Fractal** *(Unpredictable Map that can result in One or Many Land Masses)*
<:NumbFour:318269483384832002> • <:earth_inland:316937660138520578>**Inland Sea** *(One Large Ocean in the Center of the Map)*
<:NumbFive:318269495003185163> • <:earth_islands:316937669672304651>**Island Plates** *(Islands Ranging in Size from Small to Large)*
<:NumbSix:318269504532774912> • <:earth_shuffle:316937678908293121>**Shuffle** *(What Secrets will this Map Reveal)*`
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