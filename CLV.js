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
    ':australia:291788657000710144', //2
    ':germany:291788833794818049', //9
    ':macedon:316955264853213185', //15
    ':persia:296313246279794689', //17
    ':rome:291789096244871169', //20
    ':russia:291789137424416778', //21
    ':scythia:291789172434272256', //22
    ':sumeria:291789223365836813' //23
];
let civListTwo = [
    ':america:291788587329126402', //0
    ':arabia:291788624041607170', //1
    ':aztec:291788693428109322', //3
    ':china:291788737573027840', //5
    ':gorgo:291788859736588290', //10
    ':pericles:291789035289182208', //11
    ':japanx:291788927424266250', //13
    ':kongo:291788970805952513' //14
];
let civListThree = [
    ':brazil:291788717587300353', //4
    ':egypt:291788765847093248', //6
    ':france:291788812068323330', //8
    ':england:291788789079080971', //7
    ':india:291788886513025034', //12
    ':norway:291789000954478592', //16
    ':poland:291789066301603840', //18
    `:spain:291789195691819010` //19
];//Finshed Voting
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
'🌏',
':earth_inland:316937660138520578',
'🌍',
':earth_islands:316937669672304651',
'🌎',
':earth_shuffle:316937678908293121'
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
:earth_americas: • **Continents** *(Few Large Land Masses)*
:earth_africa: • **Fractal** *(Unpredictable Map that can result in One or Many Land Masses)*
<:earth_inland:316937660138520578> • **Inland Sea** *(One Large Ocean in the Center of the Map)*
<:earth_islands:316937669672304651> • **Island Plates** *(Islands Ranging in Size from Small to Large)*
:earth_asia: • **Pangaea** *(One Massive Landmass with Surrounding Islands)*
<:earth_shuffle:316937678908293121> • **Shuffle** *(What Secrets will this Map Reveal)*`
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