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
let gameTypeEmoji = [
':Diplo:338652090421477376',
':FFA:338652106586324993',
':NoDiplo:338792445091381248',
':NoWar:338792455518420994'];

let mapOvalEmoji = [':earth_oval:327137636282269706'];
let mapPangaeaEmoji = ['🌏'];
let mapFractalEmoji = ['🌍'];
let mapInlandSeaEmoji = [':earth_inland:316937660138520578'];
let mapContinentsEmoji = ['🌎'];
let mapIslandPlatesEmoji = [':earth_islands:316937669672304651'];
let mapShuffleEmoji = [':earth_shuffle:316937678908293121'];
let mapDoubleHexEmoji = [':earth_doublehex:327142621426352128'];

let civIconEmoji = [':civIconPurple:291784556489474049'];

let difficultyEmojiList = ['🌤', '☁', '🌧', '🌩', '⛈'];

let worldageEmojis = ['🌕', '🌗', '🌑'];

let opEmojiList = ['⚒', '⚔', '🛡', '☢', '⚛', '🐏', '🌪', '🏠', '😈'];
let opNQEmojiList = ['🐎', '⚒', '☔', '🌊', '⚔', '🛡', '☢', '⚛', '🐏', '🌪', '🏠', '😈'];

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
  ***Majority Votes pick the Game Settings. Host breaks tied votes.***

•**__Game Types__**:
<:Diplo:338652090421477376> • **Diplo** *Everything is allowed.*
<:FFA:338652106586324993> • **FFA** *Everything but Friendships/Alliances.*
<:NoDiplo:338792445091381248> • **No Diplo** *Nothing is allowed, except for making Peace.*
<:NoWar:338792455518420994> • **No War** *Everything is allowed, except warring other Civilizations*
  ***For more information, click: <#${Config.channels.channelGuidelines}>***`
        ).then(function(internalMessage) {
            gameTypeEmoji.forEach(function(emoji) {
                internalMessage.react(emoji);
            });
        });
        message.channel.sendMessage(
`🌎 • **Continents** *(Few Large Land Masses)*`
        ).then(function(internalMessage) {
                    mapContinentsEmoji.forEach(function(emoji) {
                        internalMessage.react(emoji);
            });
        });
        message.channel.sendMessage(
`🌏 • **Pangaea** *(One Massive Landmass with Surrounding Islands)*`
        ).then(function(internalMessage) {
                    mapPangaeaEmoji.forEach(function(emoji) {
                        internalMessage.react(emoji);
            });
        });
        message.channel.sendMessage(
`🌍 • **Fractal** *(Unpredictable Map that can result in One or Many Land Masses)*`
        ).then(function(internalMessage) {
                    mapFractalEmoji.forEach(function(emoji) {
                        internalMessage.react(emoji);
            });
        });
        message.channel.sendMessage(
`<:earth_inland:316937660138520578> • **Inland Sea** *(One Large Ocean in the Center of the Map)*`
        ).then(function(internalMessage) {
                    mapInlandSeaEmoji.forEach(function(emoji) {
                        internalMessage.react(emoji);
            });
        });
        message.channel.sendMessage(
`<:earth_islands:316937669672304651> • **Island Plates** *(Islands Ranging in Size from Small to Large)*`
        ).then(function(internalMessage) {
                    mapIslandPlatesEmoji.forEach(function(emoji) {
                        internalMessage.react(emoji);
            });
        });
        message.channel.sendMessage(
`<:earth_shuffle:316937678908293121> • **Shuffle** *(What Secrets will this Map Reveal)*`
        ).then(function(internalMessage) {
            mapShuffleEmoji.forEach(function(emoji) {
                internalMessage.react(emoji);
            });
        });
        message.channel.sendMessage(
`•**__World Age__**:
🌑 • **Old** *(Less Hills and Mountains)*
🌗 • **Standard** *(Standard Hills and Mountains)*
🌕 • **New** *(More Hills and Mountains)*`
        ).then(function(internalMessage) {
            worldageEmojis.forEach(function(emoji) {
                internalMessage.react(emoji);
            });
        });
        message.channel.sendMessage(
`•**__Level of Difficulty__**:
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
  *Please react to the purple CivLeague Icon to announce you have finished voting.
  Keep in mind the bot autovotes 1, so make sure everyone has locked in their votes.*`
        ).then(function(internalMessage) {
            civIconEmoji.forEach(function(emoji) {
                internalMessage.react(emoji);
            });
        });
    }

//.voteBans
   if (command === "voteBans" || command === "votebans") {
        message.channel.sendMessage(
`•|• **__Civilizations Ban List__** •|•
  ***Majority Votes ban the Civilizations. Host breaks tied votes.***`
        );
        message.channel.sendMessage(
            '•**__Top Tier Civs__**:'
        ).then(function(internalMessage) {
            civListOne.forEach(function(emoji) {
                internalMessage.react(emoji);
            });
        });
        message.channel.sendMessage(
            '•**__Mid Tier Civs__**:'
        ).then(function(internalMessage) {
            civListTwo.forEach(function(emoji) {
                internalMessage.react(emoji);
            });
        });
        message.channel.sendMessage(
            '•**__Low Tier Civs__**:'
        ).then(function(internalMessage) {
            civListThree.forEach(function(emoji) {
                internalMessage.react(emoji);
            });
        });
        //In-Game OP Options Ban List
        message.channel.sendMessage(
`•|• **__In-Game OP Options__** •|•
  ***Majority Votes ban these Options during the game. Host breaks tied votes.***
•**__Pantheons__**:
⚒ • **God of the Forge:** *Provides Ancient/Classical Era Units 25% Production Bonus.*
•**__Religion Beliefs__**:
⚔ • **Crusade:** *+10 Combat Strength near foreign cities that follow this Religion.*
🛡 • **Defender of the Faith:** *+10 Combat Strength when within the borders of friendly cities that follow this Religion.*
•**__Game Mechanics__**:
🐏 • **Ancient/Classical Era Support Units:** *Rams/Siege Towers may not be used with renaissance era units and up.*
🌪 • **GG/GA Stacking:** *When two GG's/GA's of the same era allow a unit to receive Double Bonus.*
•**__Nukes__**:
⚛ • **Nuclear Devices (Atomic Era):** *Disallow building of Nuclear Devices.*
☢ • **Thermo Nuclear Devices (Information Era):** *Disallow building of Thermo Nuclear Devices.*
•**__Bugged Mechanics__**:
🏠 • **City States:** *Disallow Peace with any City State, that is suzerain of any player(s) you are at war with.*
😈 • **Barbarians:** *Disallow Barbarians in the Game, as they currently bug turn transitions. So please be aware.*`
        ).then(function(internalMessage) {
            opEmojiList.forEach(function(emoji) {
                internalMessage.react(emoji);
            });
        });
//Finished Voting
        message.channel.sendMessage(
`•|• **Done Voting** •|•
  *Please react to the purple CivLeague Icon to announce you have finished voting.
  Keep in mind the bot autovotes 1, so make sure everyone has locked in their votes.*`
        ).then(function(internalMessage) {
            civIconEmoji.forEach(function(emoji) {
                internalMessage.react(emoji);
            });
        });
   }
//.voteSettingsNQ
    if(command === "voteSettingsNQ" || command === "votesettingsnq") {
        message.channel.sendMessage(
`•|• **__Game Settings__** •|•
  ***Majority Votes pick the Game Settings. Host breaks tied votes.***

•**__Game Types__**:
<:Diplo:338652090421477376> • **Diplo** *Everything is allowed.*
<:FFA:338652106586324993> • **FFA** *Everything but Friendships/Alliances.*
<:NoDiplo:338792445091381248> • **No Diplo** *Nothing is allowed, except for making Peace.*
<:NoWar:338792455518420994> • **No War** *Everything is allowed, except warring other Civilizations*
  ***For more information, click: <#${Config.channels.channelGuidelines}>***`
        ).then(function(internalMessage) {
            gameTypeEmoji.forEach(function(emoji) {
                internalMessage.react(emoji);
            });
        });
        message.channel.sendMessage(
`•**__Map Choices__**:`
        );
        message.channel.sendMessage(
`<:earth_oval:327137636282269706> • **Oval with Small Islands** *(Oval with Random Small Islands)*`
        ).then(function(internalMessage) {
            mapOvalEmoji.forEach(function(emoji) {
                internalMessage.react(emoji);
            });
        });
        message.channel.sendMessage(
`🌏 • **Pangaea** *(One Large Single Landmass)*`
        ).then(function(internalMessage) {
            mapPangaeaEmoji.forEach(function(emoji) {
                internalMessage.react(emoji);
            });
        });
        message.channel.sendMessage(
`<:earth_inland:316937660138520578> • **Inland Sea** *(One Large Ocean in the Center of the Map)*`
        ).then(function(internalMessage) {
            mapInlandSeaEmoji.forEach(function(emoji) {
                internalMessage.react(emoji);
            });
        });
        message.channel.sendMessage(
`🌎 • **Continents** *(Few Large Landmasses)*`
        ).then(function(internalMessage) {
            mapContinentsEmoji.forEach(function(emoji) {
                internalMessage.react(emoji);
            });
        });
        message.channel.sendMessage(
`<:earth_doublehex:327142621426352128> • **Double Hex** *(Map with 2 Large Seperate Rough Hex Shaped Continents)*`
        ).then(function(internalMessage) {
            mapDoubleHexEmoji.forEach(function(emoji) {
                internalMessage.react(emoji);
            });
        });
        message.channel.sendMessage(

        );
        message.channel.sendMessage(
`•**__Level of Difficulty__**:
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
  *Please react to the purple CivLeague Icon to announce you have finished voting.
  Keep in mind the bot autovotes 1, so make sure everyone has locked in their votes.*`
        ).then(function(internalMessage) {
            civIconEmoji.forEach(function(emoji) {
                internalMessage.react(emoji);
            });
        });
    }
//.voteBansNQ
    if(command === "voteBansNQ" || command === "votebansnq") {
        message.channel.sendMessage(
`•|• **__Civilizations Ban List__** •|•
  ***Majority Votes ban the Civilizations. Host breaks tied votes.***`
    );
        message.channel.sendMessage(
            '•**__Top Tier Civs__**:'
        ).then(function(internalMessage) {
            civListOne.forEach(function(emoji) {
                internalMessage.react(emoji);
            });
        });
        message.channel.sendMessage(
            '•**__Mid Tier Civs__**:'
        ).then(function(internalMessage) {
            civListTwo.forEach(function(emoji) {
                internalMessage.react(emoji);
            });
        });
        message.channel.sendMessage(
            '•**__Low Tier Civs__**:'
        ).then(function(internalMessage) {
            civListThree.forEach(function(emoji) {
                internalMessage.react(emoji);
            });
        });
        //In-Game OP Options Ban List
        message.channel.sendMessage(
`•|• **__In-Game OP Options__** •|•
  ***Majority Votes ban these Options during the game. Host breaks tied votes.***
•**__Pantheons__**:
⚒ • **God of the Forge:** *Provides Ancient/Classical Era Units 25% Production Bonus.*
🐎• **God of the Open Sky:** *Provides +1 Culture for Pastures.*
🌊 • **God of the Sea:** *Provides +1 Production to each Fishing Boat.*
☔ • **Ocean's Bounty:** *Provides +1 Culture to each Fishing Boat.*
•**__Religion Beliefs__**:
⚔ • **Crusade:** *+5 Combat Strength near foreign cities that follow this Religion.*
🛡 • **Defender of the Faith:** *+5 Combat Strength when within the borders of friendly cities that follow this Religion.*
•**__Game Mechanics__**:
🐏 • **Ancient/Classical Era Support Units:** *Rams/Siege Towers may not be used with renaissance era units and up.*
🌪 • **GG/GA Stacking:** *When two GG's/GA's of the same era allow a unit to receive Double Bonus.*
•**__Nukes__**:
⚛ • **Nuclear Devices (Atomic Era):** *Disallow building of Nuclear Devices.*
☢ • **Thermo Nuclear Devices (Information Era):** *Disallow building of Thermo Nuclear Devices.*
•**__Bugged Mechanics__**:
🏠 • **City States:** *Disallow Peace with any City State, that is suzerain of any player(s) you are at war with.*
😈 • **Barbarians:** *Disallow Barbarians in the Game, as they currently bug turn transitions. So please be aware.*`
                ).then(function(internalMessage) {
                    opNQEmojiList.forEach(function(emoji) {
                        internalMessage.react(emoji);
            });
        });
        message.channel.sendMessage(
`•|• **Done Voting** •|•
  *Please react to the purple CivLeague Icon to announce you have finished voting.
  Keep in mind the bot autovotes 1, so make sure everyone has locked in their votes.*`
        ).then(function(internalMessage) {
            civIconEmoji.forEach(function(emoji) {
                internalMessage.react(emoji);
            });
        });
    }
});

CivLeagueVote.login(Config.tokens.VoteBot);