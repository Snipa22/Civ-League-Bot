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
    ':macedon:296313184841891840', //15
    ':persia:296313246279794689', //17
    ':rome:291789096244871169', //19
    ':russia:291789137424416778', //20
    ':scythia:291789172434272256', //21
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
    ':poland:291789066301603840',
    `:spain:291789195691819010` //18
];//Finshed Voting
let mainEmoji = [
    ':civIconPurple:291784556489474049'
];
let opEmojiList = [
':AC:299426431489015810',
':Cc:299426443161632778',
':DF:299426454012428290',
':TN:299426500552294400',
':Nn:299426487143104523',
':GF:299426477756252161',
':GA:299426468109221888',
':CS:300057379905470464',
':Bb:304326160169435137'
];
let mapSettingsEmojiList = [
':Ff:309941196447416320',
':IsP:309941867536056321',
':Pp:309941899341463553',
':InS:309941877941993473',
':Cc:299426443161632778',
':Ss:309943167875285002'
];
let letterEmojiList = [
':Oo:311212190071783425',
':Ss:309943167875285002',
':Nn:299426487143104523'
];


CivLeagueVote.on("message", message => {
    if (message.author.CivLeagueVote) return;
    if (!message.content.startsWith(Config.dot)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(Config.dot.length);
    let args = message.content.split(" ").splice(1);

    //.voteBans
   if (command === "vote") {
       //Settings Vote
        message.channel.sendMessage(
            `•|• **__Game Settings (Vote to Change)__** •|•` +
            `\n  **__Map__**` +
            `\n    *May Click more than one Option! Choose your Favorites!*` +
            `\n<:Ff:309941196447416320> • **Fractal**` +
            `\n      *Unpredictable Map that can result in One or Many Land Masses*` +
            `\n<:InS:309941877941993473> • **Inland Sea**` +
            `\n      *One Large Ocean in the Center of the Map*` +
            `\n<:IsP:309941867536056321> • **Island Plates**` +
            `\n      *Islands Ranging in Size from Small to Large*` +
            `\n<:Pp:309941899341463553> • **Pangaea**` +
            `\n      *One Massive Landmass with Surrounding Islands*` +
            `\n<:Ss:309943167875285002> • **Shuffle**` +
            `\n      *What Secrets will this Map Reveal*`
        ).then(function(internalMessage) {
            mapSettingsEmojiList.forEach(function(emoji) {
                internalMessage.react(emoji);
            });
        });
        message.channel.sendMessage(
            `  **__World Age__**
                *May Click more than one Option! Choose your Favorites!*
            <:Oo:311212190071783425> • **Old**
                  *Less Hills and Mountains*
            <:Ss:309943167875285002> • **Standard**
                  *Standard Hills and Mountains*
            <:Nn:299426487143104523> • **New**
                  *More Hills and Mountains*`
        ).then(function(internalMessage) {
            letterEmojiList.forEach(function(emoji) {
                internalMessage.react(emoji);
            });
        });
       //OP Civilizations
        message.channel.sendMessage(
            `•|• **__Civilizations Ban List__** •|•
            \n  *Majority Votes ban the Civilizations. Host has value, and can break Ties.*`
        );
        message.channel.sendMessage(
            '  •|• **Top Tier Civs** •|•'
        ).then(function(internalMessage) {
            civListOne.forEach(function(emoji) {
                internalMessage.react(emoji);
            });
        });
        message.channel.sendMessage(
            '  •|• **Mid Tier Civs** •|•'
        ).then(function(internalMessage) {
            civListTwo.forEach(function(emoji) {
                internalMessage.react(emoji);
            });
        });
        message.channel.sendMessage(
            '  •|• **Low Tier Civs** •|•'
        ).then(function(internalMessage) {
            civListThree.forEach(function(emoji) {
                internalMessage.react(emoji);
            });
        });
        //In-Game OP Options Ban List
        message.channel.sendMessage(
            `\n\n•|• **__In-Game OP Options__** •|•` +
            `\n      *Majority Votes ban these Options during the game. Host has value, and can break Ties.*` +
            //Early Era Siege Units
            `\n<:AC:299426431489015810> • **__Ancient/Classical Era Support Units__**` +
            `\n             *Battering Rams/Siege Towers may not be used with Renaissance Era Units or Higher.*` +
            //God of the Forge
            `\n<:GF:299426477756252161> • **__God of the Forge__**` +
            `\n             ***Banned** in teamers, as it provides all players on that team the bonus.*` +
            `\n             *This is a Pantheon that allows Ancient/Classical Era Units bonus of 25% Production.*` +
            //Crusade
            `\n<:Cc:299426443161632778> • **__Crusade__**` +
            `\n            *+10 Combat Strength near foreign cities that follow this Religion.*` +
            //Defender of the Faith
            `\n<:DF:299426454012428290> • **__Defender of the Faith__**` +
            `\n            *+10 Combat Strength when within the borders of friendly cities that follow this Religion.*` +
            //General Stacking
            `\n<:GA:299426468109221888> • **__Great General|Admiral Stacking__**` +
            `\n            *When two GG's|GA's of the same era are within proximity; allowing a Unit to gain Double Bonus.*` +
            //Nukes
            `\n<:Nn:299426487143104523> • **__Nuclear Devices (Atomic Era)__**` +
            `\n            *Disallow building of Nuclear Devices.*` +
            //Thermo Nukes
            `\n<:TN:299426500552294400> • **__Thermo Nuclear Devices (Information Era)__**` +
            `\n            *Disallow building of Thermo Nuclear Devices.*` +
            //City States
            `\n<:CS:300057379905470464> • **__City States Peace/War__**` +
            `\n            *Disallow Peace with any City States, that are Suzzrain of the player you are at war with.*` +
            //Barbarians
            `\n<:Bb:304326160169435137> • **__Barbarians Off__**` +
            `\n            *Current Risk with Barbarians as they are causing the Turn Transition to Extend past an Unplayable Point.*`
        ).then(function(internalMessage) {
            opEmojiList.forEach(function(emoji) {
                internalMessage.react(emoji);
            });
        });
        //Putting a Plus in Chat when Done
        message.channel.sendMessage(
            `•|• **Done Voting** •|•` +
            `\n  *Put a + in chat, so everyone knows who has completed the Vote Process.*`
        );
    }
});

CivLeagueVote.login(Config.tokens.VoteBot);