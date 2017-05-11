"use strict";
/*Author: © • Song Adieu | Created: March, 2017*/
//const commando = require('discord.js-commando');
//const path = require('path');
const Discord = require("discord.js");
const Config = require("./config.json");
const Players = require("./players.json");

const CivLeagueStats = new Discord.Client();

CivLeagueStats.on("ready", () => {
    console.log("*CivLeagueStats Activated*");
})

CivLeagueStats.on("message", message => {
    if (message.author.CivLeagueStats) return;
    if (!message.content.startsWith(Config.dot)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(Config.dot.length);
    let args = message.content.split(" ").splice(1);

/*  --  Player List  --
    if(command === 'SongAdieu') {
        let player0 = new Discord.RichEmbed()
            .setThumbnail(message.author.avatarURL)

            .addField("Wins:", "262", true)
            .addField("Losses:", "117", true)
            .addField("Games Played:", "92", true)
            .setFooter("•|• 𝔉𝔬𝔯𝔴𝔞𝔯𝔡 𝔖𝔢𝔱𝔱𝔩𝔢, 𝔶𝔬𝔲 𝔇𝔦𝔢 •|•")
            .setColor(0xB16EFE)
        message.channel.sendEmbed(player0);
    };*/

/*  --  Player List  --  */


});

CivLeagueStats.login(Config.tokens.StatsBot);
