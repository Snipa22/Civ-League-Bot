"use strict";
/*Author: © • Song Adieu | Created: March, 2017*/

const Discord = require("discord.js");
const Config = require("./config.json");

const CivLeagueVote = new Discord.Client();

CivLeagueVote.on("ready", () => {
    console.log("*CivLeagueVote Activated*");
})
//Civilization Ban List
let civEmojiList = [
    ':australia:291788657000710144', //2
    `:macedon:296313184841891840`, //15
    `:persia:296313246279794689`, //17
    ':rome:291789096244871169', //19
    ':scythia:291789172434272256', //21
    ':sumeria:291789223365836813' //23
];//Agree/Disagree
let adEmojiList = [
    `:agree:292900880519397376`,
    `:disagree:292900895094603776`
];
let opEmojiList = [
`:AC:299426431489015810`,
`:Cr:299426443161632778`,
`:DF:299426454012428290`,
`:TN:299426500552294400`,
`:Nu:299426487143104523`,
`:GF:299426477756252161`,
`:GA:299426468109221888`,
`:CS:300057379905470464`
];
let settingsEmojiList = [
    ``
]


CivLeagueVote.on("message", message => {
    if (message.author.CivLeagueVote) return;
    if (!message.content.startsWith(Config.dot)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(Config.dot.length);
    let args = message.content.split(" ").splice(1);

    //.voteBans
   if (command === "voteBans") {
       //OP Civilizations
        message.channel.sendMessage(
            `•|• **__OP Civilizations (Vote to Ban)__** •|•` +
            `\n  *Choose which OP Civs to Ban just by Upvoting!*`
        ).then(function(internalMessage) {
            civEmojiList.forEach(function(emoji) {
                internalMessage.react(emoji);
            });
        });
        //In-Game OP Options Ban List
        message.channel.sendMessage(
            `\n\n•|• **__In-Game OP Options__** •|•` +
            `\n  *These are options during the game, that should be followed and respected.*` +
            `\n  *If a player has selected any of these, please cooperate on a decision. Accidents happen.*` +
            `\n  *You may reload, scrap, or call the game. Depending on turns based in the game.*` +
            `\n  *Requires equal to number of players, or more for each to be banned.*` +
            //Early Era Siege Units
            `\n<:AC:299426431489015810> • **__Ancient/Classical Era Support Units__**` +
            `\n             *Battering Rams/Siege Towers may not be used with units after Renaissance Era.*` +
            //God of the Forge
            `\n<:GF:299426477756252161> • **__God of the Forge__**` +
            `\n             ***Banned** in teamers, as it provides all players on that team the bonus.*` +
            `\n             *This is a Pantheon that allows Ancient/Classical Era Units bonus of 25% Production.*` +
            //Crusade
            `\n<:Cr:299426443161632778> • **__Crusade__**` +
            `\n            *+10 Combat Strength near foreign cities that follow this Religion.*` +
            //Defender of the Faith
            `\n<:DF:299426454012428290> • **__Defender of the Faith__**` +
            `\n            *+10 Combat Strength when within the borders of friendly cities that follow this Religion.*` +
            //General Stacking
            `\n<:GA:299426468109221888> • **__Great General|Admiral Stacking__**` +
            `\n            *When two GG's|GA's of the same era are within proximity; allowing a Unit to gain Double Bonus.*` +
            //Nukes
            `\n<:Nu:299426487143104523> • **__Nuclear Devices (Atomic Era)__**` +
            `\n            *Disallow building of Nuclear Devices.*` +
            //Thermo Nukes
            `\n<:TN:299426500552294400> • **__Thermo Nuclear Devices (Information Era)__**` +
            `\n            *Disallow building of Thermo Nuclear Devices.*` +
            //City States
            `\n<:CS:300057379905470464> • **__City States Peace/War__**` +
            `\n            *Disallow Peace with any City States, that are Suzzrain of the player you are at war with.*`
        ).then(function(internalMessage) {
            opEmojiList.forEach(function(emoji) {
                internalMessage.react(emoji);
            });
        });
    }//.voteSettings
    else if (command === "voteSettings") {
        message.channel.sendMessage(
            `•|• **__Game Settings (Vote to Change)__** •|•` +
            `\n  *In-Game Setup that can be requested and Voted.*`
        ).then(function(internalMessage) {
            singleEmoji.forEach(function(emoji) {
                internalMessage.react(emoji);
            });
        });
    }
});

CivLeagueVote.login(Config.tokens.VoteBot);