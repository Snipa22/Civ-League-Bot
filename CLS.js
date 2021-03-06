"use strict";

/*Author: © • Song Adieu | Created: March, 2017*/
const Discord = require("discord.js");
const Config = require("./config.json");
const Players = require("./players.json");

const CivLeagueStats = new Discord.Client();

CivLeagueStats.on("ready", () => {
    console.log("*CivLeagueStats Activated*");
})

CivLeagueStats.on("message", message => {
    if (message.author.CivLeagueStats) return;
    if (!message.content.startsWith(Config.ast)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(Config.ast.length);
    let args = message.content.split(" ").splice(1);

/*  --  Player List  --  */
//Admin
//@© • 𝖘𝖔𝖓𝖌 𝖆𝖉𝖎𝖊𝖚#6276 `Wins: 305 | Losses: 139 | Games Played: 107 | League EXP: 474/485 | Level: 11`
    if(command === 'songadieu') {
        let p = new Discord.RichEmbed()            
            .addField('Wins', '305', true)
            .addField('Losses', '139', true)
            .addField('Games Played', '107', true)
            .addField('League Experience', '474/485', true)
            .addField('Level', '11', true)
            .addField('Last Game Played', '955', true)
            .addField('Current Win Streak', '3', true)
            .addField('Longest Win Streak', '25', true)
            .addField('Win Percentage', '*68.69%*', true)

            .addField('Admin', '<:admin:319920680349204483>', true)
            .addField('Chieftain', '<:chieftain:320176909927579648>', true)
            .addField('Solid Host', '⍟', true)

            .setFooter('•|• © • 𝖘𝖔𝖓𝖌 𝖆𝖉𝖎𝖊𝖚 - "Keeping it Classy." •|•')
            .setColor(0xB16EFE)
        message.channel.sendEmbed(p);
    };//@Justifier#7095 `Wins: 261 | Losses: 46 | Games Played: 65 | League EXP: 457/485 | Level: 11`
    if(command === 'Justifier') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '261', true)
            .addField('Losses', '45', true)
            .addField('Games Played', '65', true)
            .addField('Level', '11', true)
            .addField('League Experience', '457/485', true)
            .addField('Last Game Played', '953', true)
            .addField('Current Win Streak', '10', true)
            .addField('Longest Win Streak', '33', true)
            .addField('Win Percentage', '*85.29%*', true)
            
            .addField('Admin', '<:admin:319920680349204483>', true)
            .addField('Chieftain', '<:chieftain:320176909927579648>', true)
            .addField('Solid Host', '⍟', true)

            .setFooter('•|• 𝔍𝔲𝔰𝔱𝔦𝔣𝔦𝔢𝔯 - "𝔍𝔲𝔰𝔱𝔦𝔠𝔢 𝔠𝔬𝔪𝔢𝔰 𝔬𝔫 𝔰𝔴𝔦𝔣𝔱 𝔴𝔦𝔫𝔤𝔰." •|•')
            .setColor(0xB16EFE)
        message.channel.sendEmbed(p);
    };//@JackoV#4908 `Wins: 109 | Losses: 67 | Games Played: 37 | EXP: 116/170 | Level: 8`
    if(command === 'JackoV') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '109', true)
            .addField('Losses', '67', true)
            .addField('Games Played', '37', true)
            .addField('League Experience', '116/170', true)
            .addField('Level', '8', true)
            .addField('Last Game Played', '724', true)
            .addField('Current Win Streak', '2', true)
            .addField('Longest Win Streak', '14', true)
            .addField('Win Percentage', '*61.93%*', true)

            .addField('Admin', '<:admin:319920680349204483>', true)
            .addField('Chieftain', '<:chieftain:320176909927579648>', true)
            .addField('Solid Host', '⍟', true)

            .setFooter('•|• JackoV™ •|•')
            .setColor(0xB16EFE)
        message.channel.sendEmbed(p);
    };//@aslevuli#6629 `Wins: 62 | Losses: 54 | Games Played: 26 | League EXP: 66/105 | Level: 7`
    if(command === 'hannah') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '62', true)
            .addField('Losses', '54', true)
            .addField('Games Played', '26', true)
            .addField('League Experience', '66/105', true)
            .addField('Level', '7', true)
            .addField('Last Game Played', '842', true)
            .addField('Current Win Streak', '3', true)
            .addField('Longest Win Streak', '6', true)
            .addField('Win Percentage', '*53.44%*', true)

            .addField('Admin', '<:admin:319920680349204483>', true)
            .addField('Chieftain', '<:chieftain:320176909927579648>', true)
            .addField('Solid Host', '⍟', true)

            .setFooter('•|• hannah - "covfefe" •|•')
            .setColor(0xB16EFE)
        message.channel.sendEmbed(p);
    };//@Bubbles#6428 `Wins: 78 | Losses: 57 | Games Played: 27 | League EXP: 101/105 | Level: 7`
    if(command === 'Bubbles') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '78', true)
            .addField('Losses', '57', true)
            .addField('Games Played', '27', true)
            .addField('League Experience', '101/105', true)
            .addField('Level', '7', true)
            .addField('Last Game Played', '932', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '8', true)
            .addField('Win Percentage', '*58.64%*', true)

            .addField('Admin', '<:admin:319920680349204483>', true)
            .addField('Chieftain', '<:chieftain:320176909927579648>', true)
            .addField('Solid Host', '⍟', true)

            .setFooter('•|• Bubbles •|•')
            .setColor(0xB16EFE)
        message.channel.sendEmbed(p);
    };

//Moderator
//@allfalldown#3126 `Wins: 103 | Losses: 181 | Games Played: 57 | League EXP: 103/105 | Level: 7`
    if(command === 'allfalldown') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '103', true)
            .addField('Losses', '181', true)
            .addField('Games Played', '57', true)
            .addField('League Experience', '103/105', true)
            .addField('Level', '7', true)
            .addField('Last Game Played', '929', true)
            .addField('Current Win Streak', '2', true)
            .addField('Longest Win Streak', '4', true)
            .addField('Win Percentage', '*36.26%*', true)

            .addField('Moderator', '<:moderator:319920680546205698>', true)
            .addField('Chieftain', '<:chieftain:320176909927579648>', true)
            .addField('Solid Host', '⍟', true)

            .setFooter('•|• allfalldown •|•')
            .setColor(0xC665C1)
        message.channel.sendEmbed(p);
    };//@Cakeprophet2427 EU#4629 `Wins: 54 | Losses: 59 | Games Played: 24 | League EXP: 64/65 | Level: 6`
    if(command === 'Nils') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '54', true)
            .addField('Losses', '59', true)
            .addField('Games Played', '24', true)
            .addField('League Experience', '64/65', true)
            .addField('Level', '6', true)
            .addField('Last Game Played', '956', true)
            .addField('Current Win Streak', '2', true)
            .addField('Longest Win Streak', '8', true)
            .addField('Win Percentage', '*47.78%*', true)

            .addField('Moderator', '<:moderator:319920680546205698>', true)
            .addField('Chieftain', '<:chieftain:320176909927579648>', true)
            .addField('Solid Host', '⍟', true)

            .setFooter('•|• Nils ヅ - "A win is a win, no matter how bad it was executed." •|•')
            .setColor(0xC665C1)
        message.channel.sendEmbed(p);
    };//@𝘾𝙖𝙥𝙩𝙖𝙞𝙣 𝙁𝙞𝙣𝙣𝙞𝙨𝙝#1737 `Wins: 160 | Losses: 77 | Games Played: 46 | League EXP: 196/275 | Level: 9`
    if(command === 'CaptainFinnish') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '160', true)
            .addField('Losses', '77', true)
            .addField('Games Played', '46', true)
            .addField('League Experience', '196/275', true)
            .addField('Level', '9', true)
            .addField('Last Game Played', '926', true)
            .addField('Current Win Streak', '5', true)
            .addField('Longest Win Streak', '10', true)
            .addField('Win Percentage', '*67.51%*', true)

            .addField('Moderator', '<:moderator:319920680546205698>', true)
            .addField('Chieftain', '<:chieftain:320176909927579648>', true)

            .setFooter('•|• 𝘾𝙖𝙥𝙩𝙖𝙞𝙣 𝙁𝙞𝙣𝙣𝙞𝙨𝙝 - “I have never seen a thin person drinking Diet Coke.” •|•')
            .setColor(0xC665C1)
        message.channel.sendEmbed(p);
    };//@Gaelic#2034 `Wins: 91 | Losses: 15 | Games Played: 21 | League EXP: 141/170 | Level: 8`
    if(command === 'Gaelic') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '91', true)
            .addField('Losses', '15', true)
            .addField('Games Played', '21', true)
            .addField('League Experience', '141/170', true)
            .addField('Level', '7', true)
            .addField('Last Game Played', '954', true)
            .addField('Current Win Streak', '27', true)
            .addField('Longest Win Streak', '27', true)
            .addField('Win Percentage', '*85.84%*', true)

            .addField('Moderator', '<:moderator:319920680546205698>', true)
            .addField('Chieftain', '<:chieftain:320176909927579648>', true)
            .addField('Solid Host', '⍟', true)

            .setFooter('•|• Gaelic •|•')
            .setColor(0xC665C1)
        message.channel.sendEmbed(p);
    };//@𝙂𝙧𝙚𝙖𝙩 𝙇𝙚𝙖𝙙𝙚𝙧#1337 `Wins: 144 | Losses: 54 | Games Played: 38 | League EXP: 214/275 | Level: 9`
    if(command === 'GreatLeader') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '144', true)
            .addField('Losses', '54', true)
            .addField('Games Played', '38', true)
            .addField('Level', '9', true)
            .addField('League Experience', '214/275', true)
            .addField('Last Game Played', '926', true)
            .addField('Current Win Streak', '11', true)
            .addField('Longest Win Streak', '14', true)
            .addField('Win Percentage', '*72.72%*', true)

            .addField('Moderator', '<:moderator:319920680546205698>', true)
            .addField('Chieftain', '<:chieftain:320176909927579648>', true)

            .setFooter('•|• 𝙂𝙧𝙚𝙖𝙩 𝙇𝙚𝙖𝙙𝙚𝙧 •|•')
            .setColor(0xC665C1)
        message.channel.sendEmbed(p);
    };//@InfernoArcine#1189 `Wins: 46 | Losses: 52 | Games Played: 26 | EXP: 59 | Level: 6`
    if(command === 'InfernoArcine') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '46', true)
            .addField('Losses', '52', true)
            .addField('Games Played', '26', true)
            .addField('League Experience', '59/65', true)
            .addField('Level', '6', true)
            .addField('Last Game Played', '557', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '6', true)
            .addField('Win Percentage', '*46.93%*', true)

            .addField('Moderator', '<:moderator:319920680546205698>', true)
            .addField('Chieftain', '<:chieftain:320176909927579648>', true)

            .setFooter('•|• InfernoArcine •|•')
            .setColor(0xC665C1)
        message.channel.sendEmbed(p);
    };//@NotMason#8215 `Wins: 13 | Losses: 35 | Games Played: 12 | EXP: 9/16 | Level: 3`
    if(command === 'NotMason') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '13', true)
            .addField('Losses', '35', true)
            .addField('Games Played', '12', true)
            .addField('League Experience', '9/16', true)
            .addField('Level', '3', true)
            .addField('Last Game Played', '695', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '4', true)
            .addField('Win Percentage', '*27.08%*', true)

            .addField('Moderator', '<:moderator:319920680546205698>', true)
            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• NotMason •|•')
            .setColor(0xC665C1)
        message.channel.sendEmbed(p);
    };//@onfire369#1882 `Wins: 81 | Losses: 94 | Games Played: 35 | EXP: 96/105 | Level: 7`
    if(command === 'onfire369') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '81', true)
            .addField('Losses', '94', true)
            .addField('Games Played', '35', true)
            .addField('League Experience', '96/105', true)
            .addField('Level', '7', true)
            .addField('Last Game Played', '852', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '7', true)
            .addField('Win Percentage', '*46.28%*', true)

            .addField('Moderator', '<:moderator:319920680546205698>', true)
            .addField('Chieftain', '<:chieftain:320176909927579648>', true)

            .setFooter('•|• onfire369 •|•')
            .setColor(0xC665C1)
        message.channel.sendEmbed(p);
    };

//Valued Member
//@Arki#6925 `Wins: 118 | Losses: 205 | Games Played: 61 | League EXP: 134/170 | Level: 8`
    if(command === 'Arki') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '118', true)
            .addField('Losses', '205', true)
            .addField('Games Played', '61', true)
            .addField('League Experience', '134/170', true)
            .addField('Level', '8', true)
            .addField('Last Game Played', '958', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '14', true)
            .addField('Win Percentage', '*36.53%*', true)

            .addField('Chieftain', '<:chieftain:320176909927579648>', true)
            .addField('Valued Player', '⭐', true)

            .setFooter('•|• Arki •|•')
            .setColor(0x42FF00)
        message.channel.sendEmbed(p);
    };
//CIVegas#9938 `Wins: 5 | Losses: 0 | Games Played: 1 | EXP: 10 | Level: 3`
    if(command === 'CIVegas') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '5', true)
            .addField('Losses', '0', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '10/16', true)
            .addField('Level', '3', true)
            .addField('Last Game Played', '256', true)
            .addField('Current Win Streak', '5', true)
            .addField('Longest Win Streak', '5', true)
            .addField('Win Percentage', '*100.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)
            .addField('Valued Player', '⭐', true)

            .setFooter('•|• CIVegas •|•')
            .setColor(0x42FF00)
        message.channel.sendEmbed(p);
    };
//@General (Desert Fox)#0453 `Wins: 224 | Losses: 191 | Games Played: 97 | League EXP: 311/380 | Level: 10`
    if(command === 'GeneralDesertFox') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '224', true)
            .addField('Losses', '191', true)
            .addField('Games Played', '97', true)
            .addField('League Experience', '311/380', true)
            .addField('Level', '10', true)
            .addField('Last Game Played', '947', true)
            .addField('Current Win Streak', '4', true)
            .addField('Longest Win Streak', '15', true)
            .addField('Win Percentage', '*53.97%*', true)

            .addField('Chieftain', '<:chieftain:320176909927579648>', true)
            .addField('Valued Player', '⭐', true)

            .setFooter('•|• General (Desert Fox) •|•')
            .setColor(0x42FF00)
        message.channel.sendEmbed(p);
    };
//@groove#8337 `Wins: 150 | Losses: 244 | Games Played: 84 | League EXP: 170/275 | Level: 9`
    if(command === 'groovedrift') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '150', true)
            .addField('Losses', '244', true)
            .addField('Games Played', '84', true)
            .addField('League Experience', '170/275', true)
            .addField('Level', '9', true)
            .addField('Last Game Played', '940', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '6', true)
            .addField('Win Percentage', '*38.07%*', true)

            .addField('Chieftain', '<:chieftain:320176909927579648>', true)
            .addField('Valued Player', '⭐', true)

            .setFooter('•|• groovedrift •|•')
            .setColor(0x42FF00)
        message.channel.sendEmbed(p);
    };//@LITCH#1727 `Wins: 6 | Losses: 22 | Games Played: 5 | EXP: 6 | Level: 2`
    if(command === 'LITCH') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '6', true)
            .addField('Losses', '22', true)
            .addField('Games Played', '5', true)
            .addField('League Experience', '6/9', true)
            .addField('Level', '2', true)
            .addField('Last Game Played', '274', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '3', true)
            .addField('Win Percentage', '*21.42%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)
            .addField('Valued Player', '⭐', true)

            .setFooter('•|• LITCH •|•')
            .setColor(0x42FF00)
        message.channel.sendEmbed(p);
    };
//@maidy#3412 `Wins: 18 | Losses: 57 | Games Played: 15 | League EXP: 21/25 | Level: 4`
    if(command === 'maidy') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '18', true)
            .addField('Losses', '57', true)
            .addField('Games Played', '15', true)
            .addField('League Experience', '21/25', true)
            .addField('Level', '4', true)
            .addField('Last Game Played', '953', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '5', true)
            .addField('Win Percentage', '*24.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)
            .addField('Valued Player', '⭐', true)

            .setFooter('•|• maidy •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@mike#3166 `Wins: 182 | Losses: 112 | Games Played: 64 | League EXP: 276/380 | Level: 10`
    if(command === 'lmikel1337') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '182', true)
            .addField('Losses', '112', true)
            .addField('Games Played', '64', true)
            .addField('League Experience', '276/275', true)
            .addField('Level', '9', true)
            .addField('Last Game Played', '946', true)
            .addField('Current Win Streak', '2', true)
            .addField('Longest Win Streak', '18', true)
            .addField('Win Percentage', '*61.90*', true)

            .addField('Chieftain', '<:chieftain:320176909927579648>', true)
            .addField('Valued Player', '⭐', true)

            .setFooter('•|• lmikel1337 •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };

//Barbarian
//@白甲#0681 `Wins: 239 | Losses: 115 | Games Played: 74 | League EXP: 369/380 | Level: 10`
    if(command === '114') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '239', true)
            .addField('Losses', '115', true)
            .addField('Games Played', '74', true)
            .addField('League Experience', '369/375', true)
            .addField('Level', '10', true)
            .addField('Last Game Played', '945', true)
            .addField('Current Win Streak', '3', true)
            .addField('Longest Win Streak', '34', true)
            .addField('Win Percentage', '*67.51%*', true)

            .addField('Chieftain', '<:chieftain:320176909927579648>', true)

            .setFooter('•|• 114 •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@ɖǟɮʟʊ#3085 `Wins: 1 | Losses: 2 | Games Played: 1 | League EXP: 1/4 | Level: 1`
    if(command === 'odddoodle') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '1', true)
            .addField('Losses', '2', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '1/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '918', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '1', true)
            .addField('Win Percentage', '*33.33%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• odd doodle •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@[BOBAS] Peter Jenko#7281 `Wins: 96 | Losses: 40 | Games Played: 27 | League EXP: 144/170 | Level: 8`
    if(command === 'cvoky24') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '94', true)
            .addField('Losses', '40', true)
            .addField('Games Played', '27', true)
            .addField('League Experience', '144/170', true)
            .addField('Level', '8', true)
            .addField('Last Game Played', '943', true)
            .addField('Current Win Streak', '8', true)
            .addField('Longest Win Streak', '12', true)
            .addField('Win Percentage', '*70.14%*', true)

            .addField('Chieftain', '<:chieftain:320176909927579648>', true)

            .setFooter('•|• cvoky24 •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Aaron#3166 `Wins: 128 | Losses: 187 | Games Played: 72 | League EXP: 153/170 | Level: 8`
    if(command === 'ryan7') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '128', true)
            .addField('Losses', '187', true)
            .addField('Games Played', '72', true)
            .addField('League Experience', '153/170', true)
            .addField('Level', '8', true)
            .addField('Last Game Played', '949', true)
            .addField('Current Win Streak', '2', true)
            .addField('Longest Win Streak', '9', true)
            .addField('Win Percentage', '*40.63%*', true)

            .addField('Chieftain', '<:chieftain:320176909927579648>', true)

            .setFooter('•|• ryan7 •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@ABuATOP#5737 `Wins: 10 | Losses: 29 | Games Played: 8 | EXP: 10/16 | Level: 3`
    if(command === 'ABuATOP') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '10', true)
            .addField('Losses', '29', true)
            .addField('Games Played', '8', true)
            .addField('League Experience', '10/16', true)
            .addField('Level', '3', true)
            .addField('Last Game Played', '857', true)
            .addField('Current Win Streak', '2', true)
            .addField('Longest Win Streak', '3', true)
            .addField('Win Percentage', '*25.64%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• ABuATOP •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Agemendon#1979 `Wins: 13 | Losses: 12 | Games Played: 4 | EXP: 13/16 | Level: 3`
    if(command === 'Agemendon') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '13', true)
            .addField('Losses', '12', true)
            .addField('Games Played', '4', true)
            .addField('League Experience', '13/16', true)
            .addField('Level', '3', true)
            .addField('Win Percentage', '*52.00%*', true)
            .addField('Last Game Played', '688')

            .setFooter('•|• Agemendon •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Ahmer#5827 `Wins: 100 | Losses: 72 | Games Played: 37 | EXP: 130/170 | Level: 8`
    if(command === 'Ahmer') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '100', true)
            .addField('Losses', '72', true)
            .addField('Games Played', '37', true)
            .addField('League Experience', '130/170', true)
            .addField('Level', '8', true)
            .addField('Last Game Played', '783', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '16', true)
            .addField('Win Percentage', '*58.13%*', true)

            .setFooter('•|• Ahmer - "Meet people in life who like to think. What better place than a Civ Community?" •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@alimora#2131 `Wins: 9 | Losses: 1 | Games Played: 2 | League EXP: 14/16 | Level: 3`
    if(command === 'Deavill') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '9', true)
            .addField('Losses', '1', true)
            .addField('Games Played', '2', true)
            .addField('League Experience', '14/16', true)
            .addField('Level', '3', true)
            .addField('Last Game Played', '954', true)
            .addField('Current Win Streak', '4', true)
            .addField('Longest Win Streak', '5', true)
            .addField('Win Percentage', '*90.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Deavill •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Amadeus#3194 `Wins: 58 | Losses: 29 | Level: 7 | EXP: 79 | Games Played: 18 | League EXP: 27`
    if(command === 'Amadeus') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '58', true)
            .addField('Losses', '29', true)
            .addField('Games Played', '18', true)
            .addField('League Experience', '79/105', true)
            .addField('Level', '7', true)
            .addField('Win Percentage', '*66.66%*', true)
            .addField('Last Game Played', '600')

            .setFooter('•|• Amadeus •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@AN1B4L#0370 `Wins: 98 | Losses: 57 | Games Played: 35 | League EXP: 139/170 | Level: 8`
    if(command === 'AN1B4L') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '98', true)
            .addField('Losses', '57', true)
            .addField('Games Played', '35', true)
            .addField('League Experience', '139/170', true)
            .addField('Level', '8', true)
            .addField('Last Game Played', '903', true)
            .addField('Current Win Streak', '6', true)
            .addField('Longest Win Streak', '16', true)
            .addField('Win Percentage', '*63.22%*', true)

            .addField('Chieftain', '<:chieftain:320176909927579648>', true)
            .addField('Solid Host', '⍟', true)

            .setFooter('•|• AN1B4L •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Anachy#9254 `Wins: 26 | Losses: 15 | Games Played: 8 | League EXP: 28/40 | Level: 5`
    if(command === 'Anachy') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '26', true)
            .addField('Losses', '15', true)
            .addField('Games Played', '8', true)
            .addField('League Experience', '28/40', true)
            .addField('Level', '5', true)
            .addField('Last Game Played', '883', true)
            .addField('Current Win Streak', '8', true)
            .addField('Longest Win Streak', '8', true)
            .addField('Win Percentage', '*63.41%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Anachy •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Angry Scientist#6597 `Wins: 193 | Losses: 82 | Games Played: 55 | League EXP: 306/380 | Level: 10`
    if(command === 'AngryScientist') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '193', true)
            .addField('Losses', '82', true)
            .addField('Games Played', '55', true)
            .addField('League Experience', '306/275', true)
            .addField('Level', '9', true)
            .addField('Last Game Played', '921', true, true)
            .addField('Current Win Streak', '6', true)
            .addField('Longest Win Streak', '30', true)
            .addField('Win Percentage', '*70.18*', true)

            .addField('Chieftain', '<:chieftain:320176909927579648>', true)
            .addField('Solid Host', '⍟', true)

            .setFooter('•|• Angry Scientist •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Anikulapo#7642 `Wins: 8 | Losses: 12 | Games Played: 4 | League EXP: 8/9 | Level: 2`
    if(command === 'Anikulapo') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '8', true)
            .addField('Losses', '12', true)
            .addField('Games Played', '4', true)
            .addField('League Experience', '8/9', true)
            .addField('Level', '2', true)
            .addField('Last Game Played', '910', true)
            .addField('Current Win Streak', '3', true)
            .addField('Longest Win Streak', '3', true)
            .addField('Win Percentage', '*40.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Anikulapo •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Annorin#8502 `Wins: 6 | Losses: 6 | Games Played: 2 | EXP: 6/9 | Level: 2`
    if(command === 'Sayaforever') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '6', true)
            .addField('Losses', '6', true)
            .addField('Games Played', '2', true)
            .addField('League Experience', '6/9', true)
            .addField('Level', '2', true)
            .addField('Last Game Played', '785', true)
            .addField('Current Win Streak', '3', true)
            .addField('Longest Win Streak', '3', true)
            .addField('Win Percentage', '*50.00%*', true)

            .setFooter('•|• Sayaforever •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@ApolloStriker#2198 `Wins: 7 | Losses: 3 | Games Played: 2 | EXP: 12/16 | Level: 3`
    if(command === 'ApolloStriker') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '7', true)
            .addField('Losses', '3', true)
            .addField('Games Played', '2', true)
            .addField('League Experience', '12/16', true)
            .addField('Level', '3', true)
            .addField('Win Percentage', '*70.00%*', true)
            .addField('Last Game Played', '676')

            .setFooter('•|• ApolloStriker •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@ArcticSteelUK#4948 `Wins: 12 | Losses: 5 | Games Played: 3 | League EXP: 17/25 | Level: 4`
    if(command === 'ArcticSteelUK') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '12', true)
            .addField('Losses', '5', true)
            .addField('Games Played', '3', true)
            .addField('League Experience', '17/25', true)
            .addField('Level', '4', true)
            .addField('Last Game Played', '924', true)
            .addField('Current Win Streak', '3', true)
            .addField('Longest Win Streak', '5', true)
            .addField('Win Percentage', '*70.58%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• ArcticSteelUK •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//Artemis#2597 `Wins: 0 | Losses: 5 | Games Played: 1 | League EXP: 0/4 | Level: 0`
    if(command === 'Artemis') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '0', true)
            .addField('Losses', '5', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '0/4', true)
            .addField('Level', '0', true)
            .addField('Last Game Played', '896', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '0', true)
            .addField('Win Percentage', '*0.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Artemis •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@ArtVandelay#3426 `Wins: 2 | Losses: 8 | Games Played: 2 | EXP: 2/4 | Level: 1`
    if(command === 'ArtVandelay') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '2', true)
            .addField('Losses', '8', true)
            .addField('Games Played', '2', true)
            .addField('League Experience', '2/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '763', true)
            .addField('Current Win Streak', '2', true)
            .addField('Longest Win Streak', '2', true)
            .addField('Win Percentage', '*20.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• ArtVandelay •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@astroknutz#7178 `Wins: 9 | Losses: 10 | Games Played: 4 | League EXP: 9/16 | Level: 3`
    if(command === 'astroknutz') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '9', true)
            .addField('Losses', '10', true)
            .addField('Games Played', '4', true)
            .addField('League Experience', '9/16', true)
            .addField('Level', '3', true)
            .addField('Last Game Played', '894', true)
            .addField('Current Win Streak', '3', true)
            .addField('Longest Win Streak', '3', true)
            .addField('Win Percentage', '*47.36%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• astroknutz •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Asura#3152 `Wins: 208 | Losses: 71 | Games Played: 64 | EXP: 313/380 | Level: 10`
    if(command === 'Asura') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '208', true)
            .addField('Losses', '71', true)
            .addField('Games Played', '64', true)
            .addField('Level', '10', true)
            .addField('League Experience', '313/380', true)
            .addField('Last Game Played', '759', true)
            .addField('Current Win Streak', '2', true)
            .addField('Longest Win Streak', '22', true)
            .addField('Win Percentage', '*74.55%*', true)

            .addField('Solid Host', '⍟', true)

            .setFooter('•|• Asura •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Auriko#5386 `Wins: 4 | Losses: 1 | Games Played: 1 | EXP: 4/9 | Level: 2`
    if(command === 'Auriko') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '4', true)
            .addField('Losses', '1', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '4/9', true)
            .addField('Level', '2', true)
            .addField('Last Game Played', '794', true)
            .addField('Current Win Streak', '4', true)
            .addField('Longest Win Streak', '4', true)
            .addField('Win Percentage', '*80.00%*', true)

            .setFooter('•|• Auriko •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Austinisftw#4539 `Wins: 0 | Losses: 5 | Games Played: 1 | EXP: 0/4 | Level: 0`
    if(command === 'Austinisftw') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '0', true)
            .addField('Losses', '5', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '0/4', true)
            .addField('Level', '0', true)
            .addField('Last Game Played', '798', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '0', true)
            .addField('Win Percentage', '*0.00%*', true)

            .setFooter('•|• Austinisftw •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Azlo#7202 `Wins: 9 | Losses: 53 | Games Played: 12 | EXP: 9/16 | Level: 3`
    if(command === 'Azlo') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '9', true)
            .addField('Losses', '53', true)
            .addField('Games Played', '12', true)
            .addField('League Experience', '9/16', true)
            .addField('Level', '3', true)
            .addField('Last Game Played', '792', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '3', true)
            .addField('Win Percentage', '*14.51%*', true)

            .setFooter('•|• Azlo •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@B0nd#0892 `Wins: 11 | Losses: 29 | Games Played: 8 | EXP: 16/25 | Level: 4`
    if(command === '$n0w') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '11', true)
            .addField('Losses', '29', true)
            .addField('Games Played', '8', true)
            .addField('League Experience', '16/25', true)
            .addField('Level', '4', true)
            .addField('Win Percentage', '*27.50%*', true)
            .addField('Last Game Played', '720')

            .setFooter('•|• $n0w •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@backupboogie#5920 `Wins: 4 | Losses: 1 | Games Played: 1 | EXP: 4/9 | Level: 2`
    if(command === 'backupboogie') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '4', true)
            .addField('Losses', '1', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '4/9', true)
            .addField('Level', '2', true)
            .addField('Win Percentage', '*80.00%*', true)
            .addField('Last Game Played', '756', true)
            .addField('Current Win Streak', '4', true)
            .addField('Longest Win Streak', '4', true)

            .setFooter('•|• backupboogie •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@barsuk1024#1874 `Wins: 11 | Losses: 23 | Games Played: 7 | EXP: 14/16 | Level: 3`
    if(command === 'barsuk1024') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '11', true)
            .addField('Losses', '23', true)
            .addField('Games Played', '7', true)
            .addField('League Experience', '14/16', true)
            .addField('Level', '3', true)
            .addField('Last Game Played', '803', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '5', true)
            .addField('Win Percentage', '*32.35%*', true)

            .setFooter('•|• barsuk1024 •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@BBScotian#5454 `Wins: 11 | Losses: 24 | Games Played: 8 | League EXP: 11/16 | Level: 3`
    if(command === 'BBScotian') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '11', true)
            .addField('Losses', '24', true)
            .addField('Games Played', '8', true)
            .addField('League Experience', '11/16', true)
            .addField('Level', '3', true)
            .addField('Last Game Played', '899', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '4', true)
            .addField('Win Percentage', '*31.42%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• BBScotian •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@bclemas03#2604 `Wins: 15 | Losses: 42 Games Played: 12 | EXP: 20/25 | Level: 4`
    if(command === 'PocketRocket') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '15', true)
            .addField('Losses', '42', true)
            .addField('Games Played', '12', true)
            .addField('League Experience', '20/25', true)
            .addField('Level', '4', true)
            .addField('Win Percentage', '*26.31%*', true)
            .addField('Last Game Played', '681')

            .setFooter('•|• Pocket Rocket •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@bigalsaidso#3930 `Wins: 2 | Losses: 10 | Games Played: 3 | League EXP: 2/4 | Level: 1`
    if(command === 'bigalsaidso') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '2', true)
            .addField('Losses', '10', true)
            .addField('Games Played', '3', true)
            .addField('League Experience', '2/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '958', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '1', true)
            .addField('Win Percentage', '*16.66%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• bigalsaidso •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@BiGo#1998 `Wins: 3 | Losses: 2 | Games Played: 1 | EXP: 3/4 | Level: 1`
    if(command === 'BiGo') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '3', true)
            .addField('Losses', '2', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '3/4', true)
            .addField('Level', '1', true)
            .addField('Win Percentage', '*60.00%*', true)
            .addField('Last Game Played', '679')

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• BiGo •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@BlairIsMyMind?#0429 `Wins: 183 | Losses: 97 | Games Played: 56 | League EXP: 255/275 | Level: 9`
    if(command === 'ManBlairPig') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '183', true)
            .addField('Losses', '97', true)
            .addField('Games Played', '56', true)
            .addField('League Experience', '255/275', true)
            .addField('Level', '9', true)
            .addField('Last Game Played', '947', true)
            .addField('Current Win Streak', '14', true)
            .addField('Longest Win Streak', '18', true)
            .addField('Win Percentage', '*65.35%*', true)

            .addField('Chieftain', '<:chieftain:320176909927579648>', true)

            .setFooter('•|• ManBlairPig - "Keeping it Classy." •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Blanzole#6592 `Wins: 6 | Losses: 12 | Games Played: 4 | EXP: 6/9 | Level: 2`
    if(command === 'Blanzole') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '6', true)
            .addField('Losses', '12', true)
            .addField('Games Played', '4', true)
            .addField('League Experience', '6/9', true)
            .addField('Level', '2', true)
            .addField('Last Game Played', '796', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '2', true)
            .addField('Win Percentage', '*33.33%*', true)

            .setFooter('•|• Blanzole •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Blossom#4897 `Wins: 16 | Losses: 20 | Games Played: 8 | EXP: 18/25 | Level: 4`
    if(command === 'Blossom') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '16', true)
            .addField('Losses', '20', true)
            .addField('Games Played', '8', true)
            .addField('League Experience', '18/25', true)
            .addField('Level', '4', true)
            .addField('Last Game Played', '845', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '7', true)
            .addField('Win Percentage', '*44.44%*', true)

            .setFooter('•|• Blossom •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@BlueCalm#6860 `Wins: 15 | Losses: 6 | Games Played: 4 | EXP: 22/25 | Level: 4`
    if(command === 'BlueCalm') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '15', true)
            .addField('Losses', '6', true)
            .addField('Games Played', '4', true)
            .addField('League Experience', '22/25', true)
            .addField('Level', '4', true)
            .addField('Win Percentage', '*71.42%*', true)
            .addField('Last Game Played', '693')

            .setFooter('•|• BlueCalm •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Brand_it#6958 `Wins: 14 | Losses: 34 | Games Played: 9 | League EXP: 15/16 | Level: 3`
    if(command === 'brandt_it') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '14', true)
            .addField('Losses', '34', true)
            .addField('Games Played', '9', true)
            .addField('League Experience', '15/16', true)
            .addField('Level', '3', true)
            .addField('Last Game Played', '887', true)
            .addField('Current Win Streak', '2', true)
            .addField('Longest Win Streak', '2', true)
            .addField('Win Percentage', '*29.16%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• brandt_it •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Briskback#6693 `Wins: 7 | Losses: 0 | Games Played: 1 | League EXP: 14/16 | Level: 3`
    if(command === 'Briskback') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '7', true)
            .addField('Losses', '0', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '14/16', true)
            .addField('Level', '3', true)
            .addField('Last Game Played', '908', true)
            .addField('Current Win Streak', '7', true)
            .addField('Longest Win Streak', '7', true)
            .addField('Win Percentage', '*100.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Briskback •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Buttercup#0358 `Wins: 23 | Losses: 25 | Games Played: 10 | EXP: 34/40 | Level: 5`
    if(command === 'Buttercup') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '23', true)
            .addField('Losses', '25', true)
            .addField('Games Played', '10', true)
            .addField('League Experience', '34/40', true)
            .addField('Level', '5', true)
            .addField('Win Percentage', '*47.91%*', true)
            .addField('Last Game Played', '748', true)
            .addField('Current Win Streak', '3', true)
            .addField('Longest Win Streak', '12', true)

            .setFooter('•|• Buttercup •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@carsitou#3204 `Wins: 6 | Losses: 4 | Games Played: 2 | EXP: 6/9 | Level: 2`
    if(command === 'carsitou') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '6', true)
            .addField('Losses', '4', true)
            .addField('Games Played', '2', true)
            .addField('League Experience', '6/9', true)
            .addField('Level', '2', true)
            .addField('Win Percentage', '*60.00%*', true)
            .addField('Last Game Played', '667')

            .setFooter('•|• carsitou •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Carson#2172 `Wins: 110 | Losses: 57 | Games Played: 33 | League EXP: 143/170 | Level: 8`
    if(command === 'Carson') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '110', true)
            .addField('Losses', '57', true)
            .addField('Games Played', '33', true)
            .addField('League Experience', '143/170', true)
            .addField('Level', '8', true)
            .addField('Last Game Played', '943', true)
            .addField('Current Win Streak', '2', true)
            .addField('Longest Win Streak', '13', true)
            .addField('Win Percentage', '*65.86%*', true)

            .addField('Chieftain', '<:chieftain:320176909927579648>', true)

            .setFooter('•|• Carson •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@cary#4485 `Wins: 4 | Losses: 0 | Games Played: 1 | EXP: 6/9 | Level: 2`
    if(command === 'cary') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '4', true)
            .addField('Losses', '0', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '6/9', true)
            .addField('Level', '2', true)
            .addField('Last Game Played', '744')
            .addField('Win Percentage', '*100.00%*', true)

            .setFooter('•|• cary •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//Catbitt#8953 `Wins: 2 | Losses: 3 | Games Played: 1 | League EXP: 2/4 | Level: 1`
    if(command === 'Catbitt') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '2', true)
            .addField('Losses', '3', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '2/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '892', true)
            .addField('Current Win Streak', '2', true)
            .addField('Longest Win Streak', '2', true)
            .addField('Win Percentage', '*40.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Catbitt •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@catstronaut420#7516 `Wins: 10 | Losses: 13 | Games Played: 5 | League EXP: 10/16 | Level: 3`
    if(command === 'catstronaut420') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '10', true)
            .addField('Losses', '13', true)
            .addField('Games Played', '5', true)
            .addField('League Experience', '10/16', true)
            .addField('Level', '3', true)
            .addField('Last Game Played', '948', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '3', true)
            .addField('Win Percentage', '*43.47%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• catstronaut420 •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Cawnner#0826 `Wins: 3 | Losses: 17 | Games Played: 4 | League EXP: 6/9 | Level: 2`
    if(command === 'robbie') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '3', true)
            .addField('Losses', '17', true)
            .addField('Games Played', '4', true)
            .addField('League Experience', '6/9', true)
            .addField('Level', '2', true)
            .addField('Last Game Played', '927', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '2', true)
            .addField('Win Percentage', '*15.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• robbie •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@chadhiggins6#5177 `Wins: 24 | Losses: 4 | Level: 5 | EXP: 38 | Games Played: 6 | League EXP: 7`
    if(command === 'chadhiggins6') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '24', true)
            .addField('Losses', '4', true)
            .addField('Games Played', '6', true)
            .addField('League Experience', '38/40', true)
            .addField('Level', '5', true)
            .addField('Win Percentage', '*85.71%*', true)
            .addField('Last Game Played', '604')

            .setFooter('•|• chadhiggins6 - "Why is Japan so good; because 100% adj. policy cards" •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Chamalee#8419 `Wins: 2 | Losses: 4 | Games Played: 1 | EXP: 2/4 | Level: 1`
    if(command === 'Chamalee') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '2', true)
            .addField('Losses', '4', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '2/4', true)
            .addField('Level', '1', true)
            .addField('Win Percentage', '*33.33%*', true)
            .addField('Last Game Played', '683')

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Chamalee •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@chemchem#5189 `Wins: 0 | Losses: 3 | Games Played: 1 | League EXP: 0/4 | Level: 0`
    if(command === 'chemchem') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '0', true)
            .addField('Losses', '5', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '0/4', true)
            .addField('Level', '0', true)
            .addField('Last Game Played', '945', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '0', true)
            .addField('Win Percentage', '*0.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• chemchem •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Chris#7814 `Wins: 4 | Losses: 1 | Games Played: 1 | EXP: 4/9 | Level: 2`
    if(command === 'Chris') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '4', true)
            .addField('Losses', '1', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '4/9', true)
            .addField('Level', '2', true)
            .addField('Win Percentage', '*80.00%*', true)
            .addField('Last Game Played', '737')

            .setFooter('•|• Chris •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Civ 6#3601 `Wins: 1 | Losses: 11 | Games Played: 3 | League EXP: 1/4 | Level: 1`
    if(command === 'Civ6') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '1', true)
            .addField('Losses', '11', true)
            .addField('Games Played', '3', true)
            .addField('League Experience', '1/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '899', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '1', true)
            .addField('Win Percentage', '*8.33%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Civ 6 •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@ClickMe#1107 `Wins: 2 | Losses: 3 | Games Played: 1 | EXP: 2/4 | Level: 1`
    if(command === 'Chubby') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '2', true)
            .addField('Losses', '3', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '2/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '828', true)
            .addField('Current Win Streak', '2', true)
            .addField('Longest Win Streak', '2', true)
            .addField('Win Percentage', '*40.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Chubby •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@crim#9195 `Wins: 0 | Losses: 5 | Games Played: 1 | League EXP: 0/4 | Level: 0`
    if(command === 'crim') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '0', true)
            .addField('Losses', '5', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '0/4', true)
            .addField('Level', '0', true)
            .addField('Last Game Played', '954', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '0', true)
            .addField('Win Percentage', '*0.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• crim •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Cronzo#8922 `Wins: 1 | Losses: 4 | Games Played: 1 | EXP: 1/4 | Level: 1`
    if(command === 'Snarfy') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '1', true)
            .addField('Losses', '4', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '1/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '761', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '1', true)
            .addField('Win Percentage', '*20.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Snarfy •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//cσrtєz#5432 `Wins: 0 | Losses: 5 | Games Played: 1 | EXP: 0/4 | Level: 0`
    if(command === 'cortez') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '0', true)
            .addField('Losses', '5', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '0/4', true)
            .addField('Level', '0', true)
            .addField('Last Game Played', '795', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '0', true)
            .addField('Win Percentage', '*0.00%*', true)

            .setFooter('•|• cσrtєz •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@codenaugh#5884 `Wins: 5 | Losses: 15 | Games Played: 4 | League EXP: 5/9 | Level: 2`
    if(command === 'codenaugh') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '5', true)
            .addField('Losses', '15', true)
            .addField('Games Played', '4', true)
            .addField('League Experience', '5/9', true)
            .addField('Level', '2', true)
            .addField('Last Game Played', '892', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '3', true)
            .addField('Win Percentage', '*25.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• codenaugh •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@COLEMAN#0514 `Wins: 26 | Losses: 66 | Games Played: 19 | League EXP: 28/40 | Level: 5`
    if(command === 'coleman420') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '29', true)
            .addField('Losses', '66', true)
            .addField('Games Played', '19', true)
            .addField('League Experience', '28/40', true)
            .addField('Level', '5', true)
            .addField('Last Game Played', '950', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '6', true)
            .addField('Win Percentage', '*30.52%*', true)
            
            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• coleman420 •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@COLONEL_KAL#9803 `Wins: 7 | Losses: 13 | Games Played: 4 | EXP: 7/9 | Level: 2`
    if(command === 'COLONEL_KAL') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '7', true)
            .addField('Losses', '13', true)
            .addField('Games Played', '4', true)
            .addField('League Experience', '7/9', true)
            .addField('Level', '2', true)
            .addField('Win Percentage', '*35.00%*', true)
            .addField('Last Game Played', '697')

            .setFooter('•|• COLONEL_KAL •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@coloo#6676 `Wins: 4 | Losses: 0 | Games Played: 1 | EXP: 6/9 | Level: 2`
    if(command === 'coloo') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '4', true)
            .addField('Losses', '0', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '6/9', true)
            .addField('Level', '2', true)
            .addField('Win Percentage', '*100.00%*', true)
            .addField('Last Game Played', '751', true)
            .addField('Current Win Streak', '4', true)
            .addField('Longest Win Streak', '4', true)

            .setFooter('•|• coloo •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@CoonCon09#3548 `Wins: 26 | Losses: 33 | Games Played: 11 | EXP: 26/40 | Level: 5`
    if(command === 'CoonCon09') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '26', true)
            .addField('Losses', '33', true)
            .addField('Games Played', '11', true)
            .addField('League Experience', '26/40', true)
            .addField('Level', '5', true)
            .addField('Last Game Played', '775', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '5', true)
            .addField('Win Percentage', '*44.06%*', true)

            .setFooter('•|• CoonCon09 •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Compello#5533 `Wins: 49 | Losses: 40 | Games Played: 19 | EXP: 56/65 | Level: 6`
    if(command === 'Compello') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '49', true)
            .addField('Losses', '40', true)
            .addField('Games Played', '19', true)
            .addField('League Experience', '56/65', true)
            .addField('Level', '6', true)
            .addField('Last Game Played', '840', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '9', true)
            .addField('Win Percentage', '*55.05%*', true)

            .setFooter('•|• Compello •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@CommanderConspiracy#6912 `Wins: 1 | Losses: 4 | Games Played: 1 | EXP: 1/4 | Level: 1`
    if(command === 'CommanderConspiracy') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '1', true)
            .addField('Losses', '4', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '1/4', true)
            .addField('Level', '1', true)
            .addField('Win Percentage', '*20.00%*', true)
            .addField('Last Game Played', '679')

            .setFooter('•|• CommanderConspiracy •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Ctx#6008 `Wins: 1 | Losses: 14 | Games Played: 3 | EXP: 1/4 | Level: 1`
    if(command === 'ctx') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '1', true)
            .addField('Losses', '14', true)
            .addField('Games Played', '3', true)
            .addField('League Experience', '1/4', true)
            .addField('Level', '1', true)
            .addField('Win Percentage', '*6.66%*', true)
            .addField('Last Game Played', '751', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '1', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• ctx •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Cypher#6328 `Wins: 16 | Losses: 45 | Games Played: 14 | EXP: 16/25 | Level: 4`
    if(command === 'Cypherazul') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '16', true)
            .addField('Losses', '45', true)
            .addField('Games Played', '12', true)
            .addField('League Experience', '16/25', true)
            .addField('Level', '4', true)
            .addField('Last Game Played', '802', true)
            .addField('Current Win Streak', '3', true)
            .addField('Longest Win Streak', '4', true)
            .addField('Win Percentage', '*26.22%*', true)

            .setFooter('•|• Cypherazul •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Cz.MM#0024 `Wins: 2 | Losses: 3 | Games Played: 1 | EXP: 2/4 | Level: 1`
    if(command === 'FeedYourHead') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '2', true)
            .addField('Losses', '3', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '2/4', true)
            .addField('Level', '1', true)
            .addField('Win Percentage', '*40.00%*', true)
            .addField('Last Game Played', '737')

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• FeedYourHead •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@czozp#8908 `Wins: 311 | Losses: 27 | Games Played: 70 | League EXP: 557/590 | Level: 12`
    if(command === 'czozp') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '311', true)
            .addField('Losses', '27', true)
            .addField('Games Played', '70', true)
            .addField('League Experience', '557/590', true)
            .addField('Level', '12', true)
            .addField('Last Game Played', '943', true)
            .addField('Current Win Streak', '4', true)
            .addField('Longest Win Streak', '59', true)
            .addField('Win Percentage', '*92.01%*', true)
            
            .addField('Warlord', '<:warlord:319931261894524928>', true)
            .addField('Solid Host', '⍟', true)

            .setFooter('•|• czozp •|•')
            .setColor(0x77FF82)
        message.channel.sendEmbed(p);
    };
//@da ElCid#6007 `Wins: 5 | Losses: 0 | Games Played: 1 | EXP: 8/9 | Level: 2`
    if(command === 'daElCid') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '5', true)
            .addField('Losses', '0', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '8/9', true)
            .addField('Level', '2', true)
            .addField('Last Game Played', '827', true)
            .addField('Current Win Streak', '5', true)
            .addField('Longest Win Streak', '5', true)
            .addField('Win Percentage', '*100.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• da ElCid •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@DATUKBEAR#6219 `Wins: 18 | Losses: 28 | Games Played: 9 | EXP: 18/25 | Level: 4`
    if(command === 'DaTCiVGuYDI') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '18', true)
            .addField('Losses', '28', true)
            .addField('Games Played', '9', true)
            .addField('League Experience', '18/25', true)
            .addField('Level', '4', true)
            .addField('Win Percentage', '*39.13%*', true)
            .addField('Last Game Played', '736')

            .setFooter('•|• DaTCiVGuY -DI- •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@darthban3#4249 `Wins: 44 | Losses: 32 | Games Played: 15 | EXP: 54/65 | Level: 6`
    if(command === 'Bropocalypse') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '44', true)
            .addField('Losses', '32', true)
            .addField('Games Played', '15', true)
            .addField('League Experience', '54/65', true)
            .addField('Level', '6', true)
            .addField('Win Percentage', '*57.89%*', true)
            .addField('Last Game Played', '718')

            .setFooter('•|• Bropocalypse •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Delirium319#5231 `Wins: 68 | Losses: 72 | Games Played: 33 | League EXP: 91/105 | Level: 7`
    if(command === 'delirium319') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '68', true)
            .addField('Losses', '72', true)
            .addField('Games Played', '33', true)
            .addField('League Experience', '91/105', true)
            .addField('Level', '7', true)
            .addField('Last Game Played', '884', true)
            .addField('Current Win Streak', '5', true)
            .addField('Longest Win Streak', '15', true)
            .addField('Win Percentage', '*48.57%*', true)

            .addField('Chieftain', '<:chieftain:320176909927579648>', true)

            .setFooter('•|• delirium319 •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@DeLusion#4178 `Wins: 53 | Losses: 31 | Games Played: 18 | League EXP: 75/105 | Level: 7`
    if(command === 'DeLusion') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '53', true)
            .addField('Losses', '31', true)
            .addField('Games Played', '18', true)
            .addField('League Experience', '75/105', true)
            .addField('Level', '7', true)
            .addField('Last Game Played', '929', true)
            .addField('Current Win Streak', '5', true)
            .addField('Longest Win Streak', '9', true)
            .addField('Win Percentage', '*63.09%*', true)

            .addField('Chieftain', '<:chieftain:320176909927579648>', true)

            .setFooter('•|• DeLusion •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@demobin#4000 `Wins: 2 | Losses: 3 | Games Played: 1 | League EXP: 2/4 | Level: 1`
    if(command === 'demobin') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '2', true)
            .addField('Losses', '3', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '2/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '865', true)
            .addField('Current Win Streak', '2', true)
            .addField('Longest Win Streak', '2', true)
            .addField('Win Percentage', '*40.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• demobin •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@DESTROYER#9361 `Wins: 38 | Losses: 71 | Games Played: 22 | League EXP: 43/65 | Level: 6`
    if(command === 'Destroyer') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '38', true)
            .addField('Losses', '71', true)
            .addField('Games Played', '22', true)
            .addField('League Experience', '43/65', true)
            .addField('Level', '6', true)
            .addField('Last Game Played', '929', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '6', true)
            .addField('Win Percentage', '*34.86%*', true)

            .addField('Chieftain', '<:chieftain:320176909927579648>', true)
            .addField('Solid Host', '⍟', true)

            .setFooter('•|• Destroyer •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//**7.** @Dixon37#0359 `Wins: 0 | Losses: 12 | Games Played: 2 | EXP: 0/4 | Level: 0`
    if(command === 'Dixon37') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '0', true)
            .addField('Losses', '12', true)
            .addField('Games Played', '2', true)
            .addField('League Experience', '0/4', true)
            .addField('Level', '2', true)
            .addField('Win Percentage', '*0.00%*', true)
            .addField('Last Game Played', '752', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '0', true)

            .setFooter('•|• Dixon37 •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Dolla Bill#4821 `Wins: 103 | Losses: 89 | Games Played: 37 | League EXP: 144/170 | Level: 8`
    if(command === 'DollaBill') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '103', true)
            .addField('Losses', '89', true)
            .addField('Games Played', '37', true)
            .addField('League Experience', '144/170', true)
            .addField('Level', '8', true)
            .addField('Last Game Played', '954', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '15', true)
            .addField('Win Percentage', '*53.64%*', true)

            .setFooter('•|• Dolla Bill •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Don DiZZy#3971 `Wins: 119 | Losses: 104 | Games Played: 46 | League EXP: 151/170 | Level: 8`
    if(command === 'DonDiZZy') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '119', true)
            .addField('Losses', '104', true)
            .addField('Games Played', '46', true)
            .addField('League Experience', '151/170', true)
            .addField('Level', '8', true)
            .addField('Last Game Played', '957', true)
            .addField('Current Win Streak', '3', true)
            .addField('Longest Win Streak', '9', true)
            .addField('Win Percentage', '*53.36%*', true)

            .addField('Chieftain', '<:chieftain:320176909927579648>', true)
            .addField('Solid Host', '⍟', true)

            .setFooter('•|• Don DiZZy •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Dream#3617 `Wins: 0 | Losses: 3 | Games Played: 1 | League EXP: 0/4 | Level: 0`
    if(command === 'Dream') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '0', true)
            .addField('Losses', '5', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '0/4', true)
            .addField('Level', '0', true)
            .addField('Last Game Played', '945', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '0', true)
            .addField('Win Percentage', '*0.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Dream •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Drexion#4017 `Wins: 3 | Losses: 7 | Games Played: 2 | EXP: 3/4 | Level: 1`
    if(command === 'Vortex') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '3', true)
            .addField('Losses', '7', true)
            .addField('Games Played', '2', true)
            .addField('League Experience', '3/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '776', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '3', true)
            .addField('Win Percentage', '*30.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Vortex •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Drundle#3316 `Wins: 6 | Losses: 13 | Games Played: 4 | League EXP: 8/9 | Level: 2`
    if(command === 'Drundle') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '6', true)
            .addField('Losses', '13', true)
            .addField('Games Played', '4', true)
            .addField('League Experience', '8/9', true)
            .addField('Level', '2', true)
            .addField('Last Game Played', '885', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '4', true)
            .addField('Win Percentage', '*31.57%*', true)

            .setFooter('•|• Drundle •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Dun#7205 `Wins: 43 | Losses: 4 | Games Played: 9 | EXP: 76 | Level: 7`
    if(command === 'Dun') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '43', true)
            .addField('Losses', '4', true)
            .addField('Games Played', '9', true)
            .addField('League Experience', '76/105', true)
            .addField('Level', '7', true)
            .addField('Win Percentage', '*91.48%*', true)
            .addField('Last Game Played', '650')

            .setFooter('•|• Dun •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@DurinsBane#8728 `Wins: 7 | Losses: 12 | Games Played: 4 | EXP: 7/9 | Level: 2`
    if(command === 'DurinsBane') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '7', true)
            .addField('Losses', '12', true)
            .addField('Games Played', '4', true)
            .addField('League Experience', '7/9', true)
            .addField('Level', '2', true)
            .addField('Last Game Played', '696')
            .addField('Win Percentage', '*58.33%*', true)
            

            .setFooter("•|• Durin's Bane •|•")
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@ed2001#9873 `Wins: 38 | Losses: 89 | Games Played: 24 | EXP: 43/65 | Level: 6`
    if(command === 'ed2001') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '38', true)
            .addField('Losses', '89', true)
            .addField('Games Played', '24', true)
            .addField('League Experience', '43/65', true)
            .addField('Level', '6', true)
            .addField('Last Game Played', '841', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '7', true)
            .addField('Win Percentage', '*29.92%*', true)

            .setFooter('•|• ed2001 •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@El Doctor#6532 `Wins: 30 | Losses: 23 | Games Played: 10 | EXP: 30/40 | Level: 5`
    if(command === 'elDoctor') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '30', true)
            .addField('Losses', '23', true)
            .addField('Games Played', '10', true)
            .addField('League Experience', '30/40', true)
            .addField('Level', '5', true)
            .addField('Win Percentage', '*56.60%*', true)
            .addField('Last Game Played', '696')

            .setFooter('•|• elDoctor •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@El Polako[icon_culture]#6013 `Wins: 3 | Losses: 7 | Games Played: 2 | EXP: 3/4 | Level: 0`
    if(command === 'ElPolako') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '3', true)
            .addField('Losses', '7', true)
            .addField('Games Played', '2', true)
            .addField('League Experience', '3/4', true)
            .addField('Level', '1', true)
            .addField('Win Percentage', '*30.00%*', true)
            .addField('Last Game Played', '676')

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• El Polako [icon_culture] •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Elevated#8090 `Wins: 18 | Losses: 34 | Games Played: 11 | League EXP: 28/40 | Level: 5`
    if(command === 'Karlos4') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '18', true)
            .addField('Losses', '34', true)
            .addField('Games Played', '11', true)
            .addField('League Experience', '28/40', true)
            .addField('Level', '5', true)
            .addField('Last Game Played', '950', true)
            .addField('Current Win Streak', '2', true)
            .addField('Longest Win Streak', '7', true)
            .addField('Win Percentage', '*34.61%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Karlos4 •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@EliteCrew#9038 `Wins: 24 | Losses: 3 | Games Played: 6 | League EXP: 38/40 | Level: 5`
    if(command === 'EliteCrew') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '24', true)
            .addField('Losses', '3', true)
            .addField('Games Played', '6', true)
            .addField('League Experience', '38/40', true)
            .addField('Level', '5', true)
            .addField('Last Game Played', '885', true)
            .addField('Current Win Streak', '21', true)
            .addField('Longest Win Streak', '21', true)
            .addField('Win Percentage', '*88.88%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• EliteCrew •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@ElStrecho#0984 `Wins: 3 | Losses: 2 | Games Played: 1 | League EXP: 3/4 | Level: 1`
    if(command === 'ElStrecho') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '3', true)
            .addField('Losses', '2', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '3/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '882', true)
            .addField('Current Win Streak', '3', true)
            .addField('Longest Win Streak', '3', true)
            .addField('Win Percentage', '*60.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• ElStrecho •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@eluukkanen#9125 `Wins: 23 | Losses: 23 | Games Played: 9 | League EXP: 25/40 | Level: 5`
    if(command === 'Barrett') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '23', true)
            .addField('Losses', '23', true)
            .addField('Games Played', '9', true)
            .addField('League Experience', '25/40', true)
            .addField('Level', '5', true)
            .addField('Last Game Played', '887', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '6', true)
            .addField('Win Percentage', '*50.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)
            
            .setFooter('•|• Barrett •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@EndYourLyfe#7785 `Wins: 33 | Losses: 73 | Games Played: 20 | League EXP: 38/40 | Level: 5`
    if(command === 'EndYourLyfe') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '33', true)
            .addField('Losses', '73', true)
            .addField('Games Played', '20', true)
            .addField('League Experience', '38/40', true)
            .addField('Level', '5', true)
            .addField('Last Game Played', '948', true)
            .addField('Current Win Streak', '3', true)
            .addField('Longest Win Streak', '5', true)
            .addField('Win Percentage', '*31.13%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• EndYourLyfe •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Entlord#7912 `Wins: 11 | Losses: 44 | Games Played: 11 | League EXP: 12/16 | Level: 3`
    if(command === 'RBThor') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '11', true)
            .addField('Losses', '44', true)
            .addField('Games Played', '11', true)
            .addField('League Experience', '12/16', true)
            .addField('Level', '3', true)
            .addField('Last Game Played', '902', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '4', true)
            .addField('Win Percentage', '*20.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• | RB | Thor | •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Esdeath[CPL]#7519 `Wins: 67 | Losses: 6 | Games Played: 14 | League EXP: 122/170 | Level: 8`
    if(command === 'Esdeath') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '67', true)
            .addField('Losses', '6', true)
            .addField('Games Played', '14', true)
            .addField('League Experience', '122/170', true)
            .addField('Level', '7', true)
            .addField('Last Game Played', '949', true)
            .addField('Current Win Streak', '30', true)
            .addField('Longest Win Streak', '30', true)
            .addField('Win Percentage', '*91.78%*', true)

            .addField('Chieftain', '<:chieftain:320176909927579648>', true)

            .setFooter("•|• Esdeath - 'Pray you don't spawn next to me' •|•")
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Falabello#3346 `Wins: 1 | Losses: 4 | Games Played: 1 | League EXP: 1/4 | Level: 1`
    if(command === 'Falabello') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '1', true)
            .addField('Losses', '4', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '1/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '905', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '1', true)
            .addField('Win Percentage', '*20.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Falabello •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@FatherTime#4458 `Wins: 2 | Losses: 8 | Games Played: 2 | League EXP: 2/4 | Level: 1`
    if(command === 'FatherTime') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '2', true)
            .addField('Losses', '8', true)
            .addField('Games Played', '2', true)
            .addField('League Experience', '2/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '953', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '1', true)
            .addField('Win Percentage', '*20.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• FatherTime •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Feddy#8945 `Wins: 6 | Losses: 9 | Games Played: 3 | EXP: 6/9 | Level: 2`
    if(command === 'Feddy') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '6', true)
            .addField('Losses', '9', true)
            .addField('Games Played', '3', true)
            .addField('League Experience', '6/9', true)
            .addField('Level', '2', true)
            .addField('Last Game Played', '790', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '5', true)
            .addField('Win Percentage', '*40.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Feddy •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Firework#5702 `Wins: 19 | Losses: 53 | Games Played: 14 | League EXP: 19/25 | Level: 4`
    if(command === 'Firework') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '19', true)
            .addField('Losses', '53', true)
            .addField('Games Played', '14', true)
            .addField('League Experience', '19/25', true)
            .addField('Level', '4', true)
            .addField('Last Game Played', '931', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '4', true)
            .addField('Win Percentage', '*26.38%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Firework •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Flaming_Knight053#5155 `Wins: 2 | Losses: 3 | Games Played: 1 | EXP: 2/4 | Level: 1`
    if(command === 'Flaming_Knight053') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '2', true)
            .addField('Losses', '3', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '2/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '785', true)
            .addField('Current Win Streak', '2', true)
            .addField('Longest Win Streak', '2', true)
            .addField('Win Percentage', '*40.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Flaming_Knight053 •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@FleurNyaa#3093 `Wins: 2 | Losses: 13 | Games Played: 3 | EXP: 2/4 | Level: 1`
    if(command === 'FleurNyaa') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '2', true)
            .addField('Losses', '13', true)
            .addField('Games Played', '3', true)
            .addField('League Experience', '2/4', true)
            .addField('Level', '1', true)
            .addField('Win Percentage', '*13.33%*', true)
            .addField('Last Game Played', '677')

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• FleurNyaa •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@fluffykobs#4863 `Wins: 15 | Losses: 25 | Games Played: 9 | League EXP: 16/25 | Level: 4`
    if(command === 'fluffykobs') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '15', true)
            .addField('Losses', '25', true)
            .addField('Games Played', '9', true)
            .addField('League Experience', '16/25', true)
            .addField('Level', '4', true)
            .addField('Last Game Played', '893', true)
            .addField('Current Win Streak', '2', true)
            .addField('Longest Win Streak', '4', true)
            .addField('Win Percentage', '*37.50%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• fluffykobs •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Fofão#4143 `Wins: 0 | Losses: 5 | Games Played: 1 | EXP: 0/4 | Level: 0`
    if(command === 'Fofao') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '0', true)
            .addField('Losses', '5', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '0/4', true)
            .addField('Level', '0', true)
            .addField('Last Game Played', '778', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '0', true)
            .addField('Win Percentage', '*0.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Fofão •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Forcespell1#9877 `Wins: 3 | Losses: 7 | Games Played: 2 | EXP: 3/4 | Level: 1`
    if(command === 'Forcespell1') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '3', true)
            .addField('Losses', '7', true)
            .addField('Games Played', '2', true)
            .addField('League Experience', '3/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '813', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '2', true)
            .addField('Win Percentage', '*30.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Forcespell1 •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Fough Fighter13#8794 `Wins: 0 | Losses: 10 | Games Played: 2 | League EXP: 0/4 | Level: 0`
    if(command === 'xxfoughxx') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '0', true)
            .addField('Losses', '10', true)
            .addField('Games Played', '2', true)
            .addField('League Experience', '0/4', true)
            .addField('Level', '0', true)
            .addField('Last Game Played', '900', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '0', true)
            .addField('Win Percentage', '*0.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• xxfoughxx •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@FPS_Rambo#4181 `Wins: 93 | Losses: 87 | Games Played: 37 | League EXP: 134/170 | Level: 8`
    if(command === 'FPS_Rambo') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '93', true)
            .addField('Losses', '87', true)
            .addField('Games Played', '37', true)
            .addField('League Experience', '134/170', true)
            .addField('Level', '8', true)
            .addField('Last Game Played', '905', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '15', true)
            .addField('Win Percentage', '*51.66%*', true)

            .addField('Chieftain', '<:chieftain:320176909927579648>', true)

            .setFooter('•|• FPS_Rambo •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@fuk boi#0579 `Wins: 2 | Losses: 3 | Games Played: 1 | EXP: 2/4 | Level: 1`
    if(command === 'Hcksey') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '2', true)
            .addField('Losses', '3', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '2/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '776', true)
            .addField('Current Win Streak', '2', true)
            .addField('Longest Win Streak', '2', true)
            .addField('Win Percentage', '*40.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Hcksey •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Fury Golem#1976 `Wins: 147 | Losses: 11 | Games Played: 38 | League EXP: 304/380 | Level: 9`
    if(command === 'FuryGolem') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '147', true)
            .addField('Losses', '11', true)
            .addField('Games Played', '38', true)
            .addField('League Experience', '304/380', true)
            .addField('Level', '9', true)
            .addField('Last Game Played', '957', true)
            .addField('Current Win Streak', '43', true)
            .addField('Longest Win Streak', '43', true)
            .addField('Win Percentage', '*93.03%*', true)

            .addField('Chieftain', '<:chieftain:320176909927579648>', true)
            .addField('Solid Host', '⍟', true)

            .setFooter('•|• Fury Golem •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@FuzzyBlankyz#6585 `Wins: 0 | Losses: 6 | Games Played: 2 | League EXP: 0/4 | Level: 0`
    if(command === 'LumpySteve') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '0', true)
            .addField('Losses', '6', true)
            .addField('Games Played', '2', true)
            .addField('League Experience', '0/4', true)
            .addField('Level', '0', true)
            .addField('Last Game Played', '922', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '0', true)
            .addField('Win Percentage', '*0.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Lumpy Steve •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Galaté#8596 `Wins: 15 | Losses: 15 | Games Played: 7 | EXP: 15/16 | Level: 3`
    if(command === 'Galate') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '15', true)
            .addField('Losses', '15', true)
            .addField('Games Played', '7', true)
            .addField('League Experience', '15/16', true)
            .addField('Level', '3', true)
            .addField('Last Game Played', '794', true)
            .addField('Current Win Streak', '2', true)
            .addField('Longest Win Streak', '3', true)
            .addField('Win Percentage', '*50.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Galaté •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@ganksta#3356 `Wins: 53 | Losses: 19 | Games Played: 15 | League EXP: 88/105 | Level: 7`
    if(command === 'GaNkStA') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '53', true)
            .addField('Losses', '19', true)
            .addField('Games Played', '15', true)
            .addField('League Experience', '88/105', true)
            .addField('Level', '7', true)
            .addField('Last Game Played', '938', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '22', true)
            .addField('Win Percentage', '*73.61%*', true)

            .addField('Chieftain', '<:chieftain:320176909927579648>', true)
            .addField('Solid Host', '⍟', true)

            .setFooter('•|• GaNkStA •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@gar1288#8317 `Wins: 10 | Losses: 29 | Games Played: 8 | League EXP: 10/16 | Level: 3`
    if(command === 'SolarFlare12') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '10', true)
            .addField('Losses', '29', true)
            .addField('Games Played', '8', true)
            .addField('League Experience', '10/16', true)
            .addField('Level', '3', true)
            .addField('Last Game Played', '941', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '3', true)
            .addField('Win Percentage', '*25.64%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)
            .addField('Solid Host', '⍟', true)

            .setFooter('•|• SolarFlare12 •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Garjunkel#1396 `Wins: 7 | Losses: 8 | Games Played: 3 | League EXP: 7/9 | Level: 3`
    if(command === 'Garjunkel') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '7', true)
            .addField('Losses', '8', true)
            .addField('Games Played', '3', true)
            .addField('League Experience', '7/9', true)
            .addField('Level', '3', true)
            .addField('Last Game Played', '948', true)
            .addField('Current Win Streak', '2', true)
            .addField('Longest Win Streak', '3', true)
            .addField('Win Percentage', '*46.66%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Garjunkel •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@gauchosion#5905 `Wins: 2 | Losses: 4 | Games Played: 1 | EXP: 2/4 | Level: 1`
    if(command === 'gauchosion') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '2', true)
            .addField('Losses', '4', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '2/4', true)
            .addField('Level', '1', true)
            .addField('Win Percentage', '*33.33%*', true)
            .addField('Last Game Played', '682')

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• gauchosion •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Geekob#1112 `Wins: 59 | Losses: 43 | Games Played: 21 | League EXP: 88/105 | Level: 7`
    if(command === 'Geekob') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '59', true)
            .addField('Losses', '43', true)
            .addField('Games Played', '21', true)
            .addField('League Experience', '88/105', true)
            .addField('Level', '7', true)
            .addField('Last Game Played', '952', true)
            .addField('Current Win Streak', '9', true)
            .addField('Longest Win Streak', '11', true)
            .addField('Win Percentage', '*57.84%*', true)

            .addField('Chieftain', '<:chieftain:320176909927579648>', true)

            .setFooter('•|• Geekob •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@GekonS#8906 `Wins: 35 | Losses: 32 | Games Played: 18 | EXP: 43/65 | Level: 6`
    if(command === 'GekonS') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '35', true)
            .addField('Losses', '32', true)
            .addField('Games Played', '18', true)
            .addField('League Experience', '43/65', true)
            .addField('Level', '6', true)
            .addField('Last Game Played', '733', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '9', true)
            .addField('Win Percentage', '*52.23%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• GekonS •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@GeoExMachina#8630 `Wins: 2 | Losses: 10 | Games Played: 2 | EXP: 2/4 | Level: 1`
    if(command === 'GeoExMachina') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '2', true)
            .addField('Losses', '10', true)
            .addField('Games Played', '2', true)
            .addField('League Experience', '2/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '793', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '1', true)
            .addField('Win Percentage', '*16.66%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• GeoExMachina •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@George_Washington_CinC#2633 `Wins: 3 | Losses: 2 | Games Played: 1 | EXP: 3/4 | Level: 1`
    if(command === 'George_Washington_CinC') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '3', true)
            .addField('Losses', '2', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '3/4', true)
            .addField('Level', '1', true)
            .addField('Win Percentage', '*60.00%*', true)
            .addField('Last Game Played', '752', true)
            .addField('Current Win Streak', '3', true)
            .addField('Longest Win Streak', '3', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• George_Washington_CinC •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@goldenrpgs#0494 `Wins: 3 | Losses: 9 | Games Played: 2 | EXP: 3/4 | Level: 1`
    if(command === 'goldenrpgs') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '3', true)
            .addField('Losses', '9', true)
            .addField('Games Played', '2', true)
            .addField('League Experience', '3/4', true)
            .addField('Level', '1', true)
            .addField('Win Percentage', '*25.00%*', true)
            .addField('Last Game Played', '693')

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• goldenrpgs •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Gopnik McBlyat#9562 `Wins: 4 | Losses: 14 | Games Played: 2 | EXP: 4/9 | Level: 2`
    if(command === 'GopnikMcBlyat') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '4', true)
            .addField('Losses', '14', true)
            .addField('Games Played', '2', true)
            .addField('League Experience', '4/9', true)
            .addField('Level', '2', true)
            .addField('Win Percentage', '*22.22%*', true)
            .addField('Last Game Played', '729')

            .setFooter('•|• Gopnik McBlyat •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@GRITHER#6274 `Wins: 10 | Losses: 20 | Games Played: 6 | League EXP: 10/16 | Level: 3`
    if(command === 'grither') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '10', true)
            .addField('Losses', '20', true)
            .addField('Games Played', '6', true)
            .addField('League Experience', '10/16', true)
            .addField('Level', '3', true)
            .addField('Last Game Played', '944', true)
            .addField('Current Win Streak', '3', true)
            .addField('Longest Win Streak', '4', true)
            .addField('Win Percentage', '*33.33%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• grither •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@h0lybyte#9754 `Wins: 0 | Losses: 5 | Games Played: 1 | EXP: 0/4 | Level: 0`
    if(command === 'h0lybyte') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '0', true)
            .addField('Losses', '5', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '0/4', true)
            .addField('Level', '0', true)
            .addField('Last Game Played', '822', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '0', true)
            .addField('Win Percentage', '*0.00%*', true)

            .setFooter('•|• h0lybyte •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Hallec#1002 `Wins: 42 | Losses: 59 | Games Played: 19 | EXP: 52/65 | Level: 7`
    if(command === 'Hallec') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '42', true)
            .addField('Losses', '59', true)
            .addField('Games Played', '19', true)
            .addField('League Experience', '52/65', true)
            .addField('Level', '7', true)
            .addField('Last Game Played', '839', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '9', true)
            .addField('Win Percentage', '*41.58%*', true)

            .setFooter('•|• Hallec •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@halobeavs#8844 `Wins: 1 | Losses: 4 | Games Played: 1 | League EXP: 1/4 | Level: 1`
    if(command === 'halobeavs') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '1', true)
            .addField('Losses', '4', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '1/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '936', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '1', true)
            .addField('Win Percentage', '*20.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• halobeavs •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@HarambeV2#7259 `Wins: 50 | Losses: 2 | Games Played: 12 | League EXP: 80/105 | Level: 7`
    if(command === 'HarambeV2') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '50', true)
            .addField('Losses', '2', true)
            .addField('Games Played', '21', true)
            .addField('League Experience', '80/105', true)
            .addField('Level', '6', true)
            .addField('Last Game Played', '942', true)
            .addField('Current Win Streak', '7', true)
            .addField('Longest Win Streak', '24', true)
            .addField('Win Percentage', '*99.15%*', true)
            
            .addField('Chieftain', '<:chieftain:320176909927579648>', true)

            .setFooter('•|• HarambeV2 •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Havoc#0821 `Wins: 2 | Losses: 3 | Games Played: 1 | League EXP: 2/4 | Level: 1`
    if(command === 'Havoc') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '2', true)
            .addField('Losses', '3', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '2/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '954', true)
            .addField('Current Win Streak', '2', true)
            .addField('Longest Win Streak', '2', true)
            .addField('Win Percentage', '*40.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Havoc •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Heracles#7150 `Wins: 0 | Losses: 5 | Games Played: 1 | EXP: 0/4 | Level: 0`
    if(command === 'Heracles') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '0', true)
            .addField('Losses', '5', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '0/4', true)
            .addField('Level', '1', true)
            .addField('Win Percentage', '*0.00%*', true)
            .addField('Last Game Played', '679')

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Heracles •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Horses4Lyfe#9169 `Wins: 4 | Losses: 12 | Games Played: 3 | League EXP: 4/9 | Level: 2`
    if(command === 'ricemarsh') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '4', true)
            .addField('Losses', '12', true)
            .addField('Games Played', '2', true)
            .addField('League Experience', '4/9', true)
            .addField('Level', '2', true)
            .addField('Last Game Played', '682', true)
            .addField('Current Win Streak', '3', true)
            .addField('Longest Win Streak', '3', true)
            .addField('Win Percentage', '*25.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• rice marsh •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Humair#2094 `Wins: 85 | Losses: 65 | Games Played: 33 | EXP: 104/105 | Level: 7`
    if(command === 'Humair') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '85', true)
            .addField('Losses', '65', true)
            .addField('Games Played', '33', true)
            .addField('League Experience', '104/105', true)
            .addField('Level', '7', true)
            .addField('Last Game Played', '783', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '9', true)
            .addField('Win Percentage', '*56.66%*', true)

            .setFooter('•|• Humair •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Huracanizado#1868 `Wins: 69 | Losses: 123 | Games Played: 41 | League EXP: 73/105 | Level: 7`
    if(command === 'Huracanizado') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '69', true)
            .addField('Losses', '123', true)
            .addField('Games Played', '41', true)
            .addField('League Experience', '73/105', true)
            .addField('Level', '7', true)
            .addField('Last Game Played', '958', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '5', true)
            .addField('Win Percentage', '*35.93%*', true)

            .addField('Chieftain', '<:chieftain:320176909927579648>', true)

            .setFooter('•|• Huracanizado •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@hyogodan#1069 `Wins: 25 | Losses: 32 | Games Played: 12 | EXP: 25/40 | Level: 5`
    if(command === 'hydogodan') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '25', true)
            .addField('Losses', '32', true)
            .addField('Games Played', '12', true)
            .addField('League Experience', '25/40', true)
            .addField('Level', '5', true)
            .addField('Last Game Played', '760', true)
            .addField('Current Win Streak', '2', true)
            .addField('Longest Win Streak', '4', true)
            .addField('Win Percentage', '*43.85%*', true)

            .setFooter('•|• hydogodan •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@hypersphere#7483 `Wins: 4 | Losses: 15 | Games Played: 4 | EXP: 8/9 | Level: 2`
    if(command === 'hypersphere') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '4', true)
            .addField('Losses', '15', true)
            .addField('Games Played', '3', true)
            .addField('League Experience', '8/9', true)
            .addField('Level', '2', true)
            .addField('Last Game Played', '789', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '4', true)
            .addField('Win Percentage', '*21.05%*', true)

            .setFooter('•|• hypersphere •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@iartur#8087 `Wins: 78 | Losses: 114 | Games Played: 40 | League EXP: 85/105 | Level: 7`
    if(command === 'iartur') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '78', true)
            .addField('Losses', '114', true)
            .addField('Games Played', '40', true)
            .addField('League Experience', '85/105', true)
            .addField('Level', '7', true)
            .addField('Last Game Played', '909', true)
            .addField('Current Win Streak', '3', true)
            .addField('Longest Win Streak', '9', true)
            .addField('Win Percentage', '*40.62%*', true)

            .addField('Chieftain', '<:chieftain:320176909927579648>', true)

            .setFooter('•|• iartur •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@iceman#0579 `Wins: 40 | Losses: 53 | Games Played: 19 | EXP: 47/65 | Level: 6`
    if(command === 'iceman') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '40', true)
            .addField('Losses', '53', true)
            .addField('Games Played', '19', true)
            .addField('League Experience', '47/65', true)
            .addField('Level', '6', true)
            .addField('Win Percentage', '*43.01%*', true)
            .addField('Last Game Played', '722')

            .setFooter('•|• iceman •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@IgnasC#5187 `Wins: 38 | Losses: 32 | Games Played: 14 | League EXP: 53/65 | Level: 6`
    if(command === 'IgnasC') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '38', true)
            .addField('Losses', '32', true)
            .addField('Games Played', '14', true)
            .addField('League Experience', '53/65', true)
            .addField('Level', '6', true)
            .addField('Last Game Played', '953', true)
            .addField('Current Win Streak', '3', true)
            .addField('Longest Win Streak', '14', true)
            .addField('Win Percentage', '*54.28%*', true)

            .addField('Chieftain', '<:chieftain:320176909927579648>', true)

            .setFooter('•|• IgnasC •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@iHas#1005 `Wins: 18 | Losses: 38 | Games Played: 11 | League EXP: 18/25 | Level: 4`
    if(command === 'SpAFire') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '18', true)
            .addField('Losses', '38', true)
            .addField('Games Played', '11', true)
            .addField('League Experience', '18/25', true)
            .addField('Level', '4', true)
            .addField('Last Game Played', '952', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '4', true)
            .addField('Win Percentage', '*32.14%*', true)

            .setFooter('•|• [SpA] Fire •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Imperator#9422 `Wins: 4 | Losses: 13 | Games Played: 3 | League EXP: 4/9 | Level: 2`
    if(command === 'Imperator') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '4', true)
            .addField('Losses', '13', true)
            .addField('Games Played', '3', true)
            .addField('League Experience', '4/9', true)
            .addField('Level', '2', true)
            .addField('Last Game Played', '895', true)
            .addField('Current Win Streak', '3', true)
            .addField('Longest Win Streak', '3', true)
            .addField('Win Percentage', '*23.52%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Imperator •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@InfectedYoU#7530 `Wins: 15 | Losses: 24 | Games Played: 8 | League EXP: 17/25 | Level: 4`
    if(command === 'InfectedYoU') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '15', true)
            .addField('Losses', '24', true)
            .addField('Games Played', '8', true)
            .addField('League Experience', '17/25', true)
            .addField('Level', '4', true)
            .addField('Last Game Played', '944', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '6', true)
            .addField('Win Percentage', '*38.46%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• InfectedYoU •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@ivan#1670 `Wins: 10 | Losses: 14 | Games Played: 5 | League EXP: 10/16 | Level: 3`
    if(command === 'yeremenko.ivan') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '10', true)
            .addField('Losses', '14', true)
            .addField('Games Played', '5', true)
            .addField('League Experience', '10/16', true)
            .addField('Level', '3', true)
            .addField('Last Game Played', '879', true)
            .addField('Current Win Streak', '3', true)
            .addField('Longest Win Streak', '3', true)
            .addField('Win Percentage', '*44.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• yeremenko.ivan •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Jareedw#0421 `Wins: 7 | Losses: 9 | Games Played: 5 | League EXP: 7/9 | Level: 2`
    if(command === 'LumpyBurt') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '7', true)
            .addField('Losses', '9', true)
            .addField('Games Played', '5', true)
            .addField('League Experience', '7/9', true)
            .addField('Level', '2', true)
            .addField('Last Game Played', '922', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '4', true)
            .addField('Win Percentage', '*43.75%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Lumpy Burt •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@jaqenhahaghar#2806 `Wins: 19 | Losses: 12 | Games Played: 7 | EXP: 30/40 | Level: 5`
    if(command === 'jaqenhahaghar') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '19', true)
            .addField('Losses', '12', true)
            .addField('Games Played', '7', true)
            .addField('League Experience', '30/40', true)
            .addField('Level', '5', true)
            .addField('Win Percentage', '*61.29%*', true)
            .addField('Last Game Played', '657')

            .setFooter('•|• jaqenhahaghar •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@jaximus#1438 `Wins: 81 | Losses: 40 | Games Played: 24 | League EXP: 140/170 | Level: 8`
    if(command === 'jaximus') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '81', true)
            .addField('Losses', '40', true)
            .addField('Games Played', '24', true)
            .addField('League Experience', '140/170', true)
            .addField('Level', '8', true)
            .addField('Last Game Played', '956', true)
            .addField('Current Win Streak', '4', true)
            .addField('Longest Win Streak', '14', true)
            .addField('Win Percentage', '*66.94%*', true)

            .addField('Chieftain', '<:chieftain:320176909927579648>', true)

            .setFooter('•|• jaximus •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Jebać UFO#6187 `Wins: 0 | Losses: 16 | Games Played: 3 | EXP: 0/4 | Level: 0`
    if(command === 'JebacUFO') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '0', true)
            .addField('Losses', '16', true)
            .addField('Games Played', '3', true)
            .addField('League Experience', '0/4', true)
            .addField('Level', '0', true)
            .addField('Last Game Played', '784', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '0', true)
            .addField('Win Percentage', '*0.00%*', true)

            .setFooter('•|• Jebać UFO - BANNED •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Jeff (Ciricus)#5697 `Wins: 3 | Losses: 8 | Games Played: 2 | League EXP: 3/4 | Level: 1`
    if(command === 'PugNonFat') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '3', true)
            .addField('Losses', '8', true)
            .addField('Games Played', '2', true)
            .addField('League Experience', '3/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '869', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '1', true)
            .addField('Win Percentage', '*27.27%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Pug NonFat Mocha Latte •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Jeniside#7431 `Wins: 6 | Losses: 15 | Games Played: 4 | League EXP: 6/9 | Level: 2`
    if(command === 'Jeniside') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '6', true)
            .addField('Losses', '15', true)
            .addField('Games Played', '4', true)
            .addField('League Experience', '6/9', true)
            .addField('Level', '2', true)
            .addField('Last Game Played', '859', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '3', true)
            .addField('Win Percentage', '*28.57%*', true)

            .setFooter('•|• Jeniside •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@JIMMY V#3224 `Wins: 3 | Losses: 7 | Games Played: 2 | League EXP: 3/4 | Level: 1`
    if(command === 'JIMMYV') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '3', true)
            .addField('Losses', '7', true)
            .addField('Games Played', '2', true)
            .addField('League Experience', '3/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '911', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '3', true)
            .addField('Win Percentage', '*30.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• JIMMY V •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@JJ#8864 `Wins: 31 | Losses: 39 | Games Played: 14 | EXP: 31/40 | Level: 5`
    if(command === 'Jere') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '31', true)
            .addField('Losses', '39', true)
            .addField('Games Played', '14', true)
            .addField('League Experience', '31/40', true)
            .addField('Level', '5', true)
            .addField('Last Game Played', '856', true)
            .addField('Current Win Streak', '3', true)
            .addField('Longest Win Streak', '4', true)
            .addField('Win Percentage', '*44.28%*', true)

            .setFooter('•|• Jere •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@JohhnyPro#4540 `Wins: 38 | Losses: 41 | Games Played: 16 | League EXP: 48/65 | Level: 6`
    if(command === 'Johnny') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '38', true)
            .addField('Losses', '41', true)
            .addField('Games Played', '16', true)
            .addField('League Experience', '48/65', true)
            .addField('Level', '6', true)
            .addField('Last Game Played', '890', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '11', true)
            .addField('Win Percentage', '*48.10%*', true)

            .addField('Chieftain', '<:chieftain:320176909927579648>', true)

            .setFooter('•|• Johnny •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@johnrocket.la#1409 `Wins: 1 | Losses: 4 | Games Played: 1 | EXP: 1/4 | Level: 1`
    if(command === 'johnrocketla') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '1', true)
            .addField('Losses', '4', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '1/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '773', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '1', true)
            .addField('Win Percentage', '*20.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• johnrocket.la •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@jokazc#5899 `Wins: 10 | Losses: 9 | Games Played: 4 | EXP: 10/16 | Level: 3`
    if(command === 'jokazc') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '10', true)
            .addField('Losses', '9', true)
            .addField('Games Played', '4', true)
            .addField('League Experience', '10/16', true)
            .addField('Level', '3', true)
            .addField('Last Game Played', '774', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '4', true)
            .addField('Win Percentage', '*52.63%*', true)

            .setFooter('•|• jokazc •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Jonas Kure#7744 `Wins: 4 | Losses: 2 | Games Played: 1 | EXP: 4/9 | Level: 2`
    if(command === 'Utelys') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '4', true)
            .addField('Losses', '2', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '4/9', true)
            .addField('Level', '2', true)
            .addField('Win Percentage', '*66.66%*', true)
            .addField('Last Game Played', '752', true)
            .addField('Current Win Streak', '4', true)
            .addField('Longest Win Streak', '4', true)

            .setFooter('•|• Utelys •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@joonas#9970 `Wins: 6 | Losses: 4 | Games Played: 2 | EXP: 6/9 | Level: 2`
    if(command === 'tkcbLalli') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '6', true)
            .addField('Losses', '4', true)
            .addField('Games Played', '2', true)
            .addField('League Experience', '6/9', true)
            .addField('Level', '2', true)
            .addField('Last Game Played', '762', true)
            .addField('Current Win Streak', '4', true)
            .addField('Longest Win Streak', '4', true)
            .addField('Win Percentage', '*60.00%*', true)

            .setFooter('•|• [tk-cb] Lalli •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Kammy'ra#7943 `Wins: 2 | Losses: 3 | Games Played: 1 | EXP: 2/4 | Level: 1`
    if(command === 'Kammyra') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '2', true)
            .addField('Losses', '3', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '2/4', true)
            .addField('Level', '1', true)
            .addField('Win Percentage', '*40.00%*', true)
            .addField('Last Game Played', '1', true)
            .addField('Current Win Streak', '2', true)
            .addField('Longest Win Streak', '2', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter("•|• Kammy'ra •|•")
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Karnag3#6111 `Wins: 3 | Losses: 2 | Games Played: 1 | EXP: 3/4 | Level: 1`
    if(command === 'Karnag3') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '3', true)
            .addField('Losses', '2', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '3/4', true)
            .addField('Level', '1', true)
            .addField('Win Percentage', '*60.00%*', true)
            .addField('Last Game Played', '664')

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Karnag3 •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Kekistani#5484 `Wins: 12 | Losses: 15 | Games Played: 5 | League EXP: 12/16 | Level: 3`
    if(command === 'Kekistani') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '12', true)
            .addField('Losses', '15', true)
            .addField('Games Played', '5', true)
            .addField('League Experience', '12/16', true)
            .addField('Level', '3', true)
            .addField('Last Game Played', '951', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '4', true)
            .addField('Win Percentage', '*44.44%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Kekistani •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Kelbron#1021 `Wins: 10 | Losses: 25 | Games Played: 7 | EXP: 15/16 | Level: 3`
    if(command === 'Kelbron') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '10', true)
            .addField('Losses', '25', true)
            .addField('Games Played', '7', true)
            .addField('League Experience', '15/16', true)
            .addField('Level', '3', true)
            .addField('Win Percentage', '*28.57%*', true)
            .addField('Last Game Played', '730')

            .setFooter('•|• Kelbron •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Kidna#1753 `Wins: 15 | Losses: 6 | Games Played: 4 | EXP: 18/25 | Level: 4`
    if(command === 'Kidna') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '15', true)
            .addField('Losses', '6', true)
            .addField('Games Played', '4', true)
            .addField('League Experience', '18/25', true)
            .addField('Level', '4', true)
            .addField('Win Percentage', '*71.42%*', true)
            .addField('Last Game Played', '708')

            .setFooter('•|• Kidna •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@KillerFTW99#6119 `Wins: 8 | Losses: 9 | Games Played: 4 | League EXP: 15/16 | Level: 3`
    if(command === 'KillerFTW99') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '8', true)
            .addField('Losses', '9', true)
            .addField('Games Played', '4', true)
            .addField('League Experience', '15/16', true)
            .addField('Level', '3', true)
            .addField('Last Game Played', '944', true)
            .addField('Current Win Streak', '4', true)
            .addField('Longest Win Streak', '4', true)
            .addField('Win Percentage', '*47.05%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• KillerFTW99 •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Kobo#6201 `Wins: 2 | Losses: 5 | Games Played: 1 | League EXP: 2/4 | Level: 1`
    if(command === 'Kobo') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '2', true)
            .addField('Losses', '5', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '2/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '921', true)
            .addField('Current Win Streak', '2', true)
            .addField('Longest Win Streak', '2', true)
            .addField('Win Percentage', '*28.57%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Kobo •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Krupa#1788 `Wins: 33 | Losses: 52 | Games Played: 17 | League EXP: 33/40 | Level: 5`
    if(command === 'Krupa') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '33', true)
            .addField('Losses', '52', true)
            .addField('Games Played', '17', true)
            .addField('League Experience', '33/40', true)
            .addField('Level', '5', true)
            .addField('Last Game Played', '955', true)
            .addField('Current Win Streak', '2', true)
            .addField('Longest Win Streak', '4', true)
            .addField('Win Percentage', '*38.82%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• krupa aka Zika Baby •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Laberik#8811 `Wins: 0 | Losses: 5 | Games Played: 1 | EXP: 0/4 | Level: 0`
    if(command === 'Laberik') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '0', true)
            .addField('Losses', '5', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '0/4', true)
            .addField('Level', '0', true)
            .addField('Win Percentage', '*0.00%*', true)
            .addField('Last Game Played', '684')

            .setFooter('•|• Laberik •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@lolohcrap#8475 `Wins: 244 | Losses: 135 | Games Played: 77 | League EXP: 347/380 | Level: 10`
    if(command === 'lolohcrap') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '244', true)
            .addField('Losses', '135', true)
            .addField('Games Played', '77', true)
            .addField('League Experience', '347/380', true)
            .addField('Level', '10', true)
            .addField('Last Game Played', '950', true)
            .addField('Current Win Streak', '4', true)
            .addField('Longest Win Streak', '14', true)
            .addField('Win Percentage', '*64.37%*', true)

            .addField('Warlord', '<:warlord:319931261894524928>', true)

            .setFooter('•|• lolohcrap •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Lauro#5943 `Wins: 48 | Losses: 79 | Games Played: 25 | League EXP: 53/65 | Level: 6`
    if(command === 'Lauro') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '48', true)
            .addField('Losses', '79', true)
            .addField('Games Played', '25', true)
            .addField('League Experience', '53/65', true)
            .addField('Level', '6', true)
            .addField('Last Game Played', '883', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '6', true)
            .addField('Win Percentage', '*37.79%*', true)

            .addField('Warlord', '<:warlord:319931261894524928>', true)

            .setFooter('•|• Lauro •|•')
            .setColor(0x77FF82)
        message.channel.sendEmbed(p);
    };
//@Lowkie#9524 `Wins: 2 | Losses: 7 | Games Played: 2 | EXP: 2/4 | Level: 1`
    if(command === 'Lowkie') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '2', true)
            .addField('Losses', '7', true)
            .addField('Games Played', '2', true)
            .addField('League Experience', '2/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '784', true)
            .addField('Current Win Streak', '2', true)
            .addField('Longest Win Streak', '2', true)
            .addField('Win Percentage', '*22.22%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Lowkie •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Lynx#6521 `Wins: 3 | Losses: 7 | Games Played: 2 | EXP: 3/4 | Level: 1`
    if(command === 'Lynx') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '3', true)
            .addField('Losses', '7', true)
            .addField('Games Played', '2', true)
            .addField('League Experience', '3/4', true)
            .addField('Level', '1', true)
            .addField('Win Percentage', '*30.00%*', true)
            .addField('Last Game Played', '730')

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Lynx •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@𝓜𝓻𝓑𝓸𝓼𝓽𝓲𝓬𝓚#8466 `Wins: 11 | Losses: 16 | Games Played: 6 | EXP: 16 | Level: 4`
    if(command === 'MrBostick') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '11', true)
            .addField('Losses', '16', true)
            .addField('Games Played', '6', true)
            .addField('League Experience', '16/25', true)
            .addField('Level', '4', true)
            .addField('Win Percentage', '*40.74%*', true)
            .addField('Last Game Played', '414')

            .setFooter('•|• 𝓜𝓻𝓑𝓸𝓼𝓽𝓲𝓬𝓚 •|•')
            .setColor(0xC665C1)
        message.channel.sendEmbed(p);
    };
//@MΛΧ#8232 `Wins: 22 | Losses: 40 | Games Played: 13 | League EXP: 22/25 | Level: 4`
    if(command === 'MAX') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '22', true)
            .addField('Losses', '40', true)
            .addField('Games Played', '13', true)
            .addField('League Experience', '22/25', true)
            .addField('Level', '4', true)
            .addField('Last Game Played', '921', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '3', true)
            .addField('Win Percentage', '*35.48%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• MΛΧ •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Machete#6311 `Wins: 75 | Losses: 98 | Games Played: 36 | League EXP: 88/105 | Level: 7`
    if(command === 'Machete') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '75', true)
            .addField('Losses', '98', true)
            .addField('Games Played', '36', true)
            .addField('League Experience', '88/105', true)
            .addField('Level', '7', true)
            .addField('Last Game Played', '879', true)
            .addField('Current Win Streak', '7', true)
            .addField('Longest Win Streak', '7', true)
            .addField('Win Percentage', '*43.35%*', true)
            
            .addField('Chieftain', '<:chieftain:320176909927579648>', true)

            .setFooter('•|• Machete •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@macau#0040 `Wins: 3 | Losses: 3 | Games Played: 1 | EXP: 3/4 | Level: 1`
    if(command === 'macau') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '3', true)
            .addField('Losses', '3', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '3/4', true)
            .addField('Level', '1', true)
            .addField('Win Percentage', '*50.00%*', true)
            .addField('Last Game Played', '682')

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• macau •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Mad King#2854 `Wins: 42 | Losses: 16 | Games Played: 13 | League EXP: 68/105 | Level: 7`
    if(command === 'MadKing') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '42', true)
            .addField('Losses', '16', true)
            .addField('Games Played', '13', true)
            .addField('League Experience', '68/105', true)
            .addField('Level', '7', true)
            .addField('Last Game Played', '889', true)
            .addField('Current Win Streak', '9', true)
            .addField('Longest Win Streak', '20', true)
            .addField('Win Percentage', '*72.41%*', true)

            .addField('Chieftain', '<:chieftain:320176909927579648>', true)

            .setFooter('•|• Mad King •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@maedivah#1944 `Wins: 8 | Losses: 4 | Games Played: 2 | EXP: 8/9 | Level: 2`
    if(command === 'GameMaster') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '8', true)
            .addField('Losses', '4', true)
            .addField('Games Played', '2', true)
            .addField('League Experience', '8/9', true)
            .addField('Level', '2', true)
            .addField('Win Percentage', '*66.66%*', true)
            .addField('Last Game Played', '714')

            .setFooter('•|• Game Master •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@magicznawyspa#5256 `Wins: 3 | Losses: 3 | Games Played: 1 | EXP: 3/4 | Level: 1`
    if(command === 'magicznawyspa') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '3', true)
            .addField('Losses', '3', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '3/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '780', true)
            .addField('Current Win Streak', '3', true)
            .addField('Longest Win Streak', '3', true)
            .addField('Win Percentage', '*50.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• magicznawyspa •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@masfasix#4186 `Wins: 44 | Losses: 30 | Games Played: 16 | EXP: 61/65 | Level: 6`
    if(command === 'masfasix') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '44', true)
            .addField('Losses', '30', true)
            .addField('Games Played', '16', true)
            .addField('League Experience', '61/65', true)
            .addField('Level', '6', true)
            .addField('Last Game Played', '775', true)
            .addField('Current Win Streak', '4', true)
            .addField('Longest Win Streak', '18', true)
            .addField('Win Percentage', '*59.45%*', true)

            .setFooter('•|• masfasix •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@maus73#3565 `Wins: 2 | Losses: 3 | Games Played: 1 | League EXP: 2/4 | Level: 1`
    if(command === 'maus73') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '2', true)
            .addField('Losses', '3', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '2/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '886', true)
            .addField('Current Win Streak', '2', true)
            .addField('Longest Win Streak', '2', true)
            .addField('Win Percentage', '*40.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• maus73 •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@max139#4361 `Wins: 1 | Losses: 4 | Games Played: 1 | EXP: 1/4 | Level: 1`
    if(command === 'karoljackubczyk') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '1', true)
            .addField('Losses', '4', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '1/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '819', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '1', true)
            .addField('Win Percentage', '*20.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• karol.jackubczyk •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Maho974#2701 `Wins: 35 | Losses: 39 | Games Played: 17 | League EXP: 35/40 | Level: 5`
    if(command === 'Maho974') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '35', true)
            .addField('Losses', '39', true)
            .addField('Games Played', '17', true)
            .addField('League Experience', '35/40', true)
            .addField('Level', '5', true)
            .addField('Last Game Played', '923', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '4', true)
            .addField('Win Percentage', '*47.29%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Maho974 •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Marek#9536 `Wins: 2 | Losses: 11 | Games Played: 3 | League EXP: 2/4 | Level: 1`
    if(command === 'Marek') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '2', true)
            .addField('Losses', '11', true)
            .addField('Games Played', '3', true)
            .addField('League Experience', '2/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '906', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '2', true)
            .addField('Win Percentage', '*15.38%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Marek •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Markku.92#3069 `Wins: 3 | Losses: 2 | Games Played: 1 | EXP: 3/4 | Level: 1`
    if(command === 'Markku.92') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '3', true)
            .addField('Losses', '2', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '3/4', true)
            .addField('Level', '1', true)
            .addField('Win Percentage', '*60.00%*', true)
            .addField('Last Game Played', '747', true)
            .addField('Current Win Streak', '3', true)
            .addField('Longest Win Streak', '3', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Markku.92 •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Marloe#1403 `Wins: 4 | Losses: 0 | Games Played: 1 | EXP: 4/9 | Level: 2`
    if(command === 'Marloe') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '4', true)
            .addField('Losses', '0', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '4/9', true)
            .addField('Level', '2', true)
            .addField('Win Percentage', '*100.00%*', true)
            .addField('Last Game Played', '665')

            .setFooter('•|• Marloe •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@MDMAzing#6146 `Wins: 6 | Losses: 21 | Games Played: 6 | EXP: 6/9 | Level: 2`
    if(command === 'MDMAzing') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '6', true)
            .addField('Losses', '21', true)
            .addField('Games Played', '6', true)
            .addField('League Experience', '6/9', true)
            .addField('Level', '2', true)
            .addField('Win Percentage', '*22.22%*', true)
            .addField('Last Game Played', '652')

            .setFooter('•|• MDMAzing •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Me Gusta#7050 `Wins: 3 | Losses: 7 | Games Played: 2 | EXP: 3/4 | Level: 1`
    if(command === 'MeGusta') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '3', true)
            .addField('Losses', '7', true)
            .addField('Games Played', '2', true)
            .addField('League Experience', '3/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '828', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '3', true)
            .addField('Win Percentage', '*30.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Me Gusta •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Menard#0360 `Wins: 24 | Losses: 32 Games Played: 12 | EXP: 29/40 | Level: 5`
    if(command === 'Menard') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '24', true)
            .addField('Losses', '32', true)
            .addField('Games Played', '12', true)
            .addField('League Experience', '29/40', true)
            .addField('Level', '5', true)
            .addField('Win Percentage', '*42.85%*', true)
            .addField('Last Game Played', '713')

            .setFooter('•|• Menard •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@MetaXVelta#1115 `Wins: 22 | Losses: 33 | Games Played: 10 | EXP: 22/25 | Level: 4`
    if(command === 'MetaXVelta') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '22', true)
            .addField('Losses', '33', true)
            .addField('Games Played', '10', true)
            .addField('League Experience', '22/25', true)
            .addField('Level', '4', true)
            .addField('Win Percentage', '*40.00%*', true)
            .addField('Last Game Played', '683')

            .setFooter('•|• MetaXVelta •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@methtical#0379 `Wins: 8 | Losses: 2 | Games Played: 2 | EXP: 13/16 | Level: 3`
    if(command === 'blue') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '8', true)
            .addField('Losses', '2', true)
            .addField('Games Played', '2', true)
            .addField('League Experience', '13/16', true)
            .addField('Level', '3', true)
            .addField('Last Game Played', '838', true)
            .addField('Current Win Streak', '3', true)
            .addField('Longest Win Streak', '5', true)
            .addField('Win Percentage', '*80.00%*', true)

            .setFooter('•|• blue. •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Mikaaah#3120 `Wins: 12 | Losses: 24 | Games Played: 7 | League EXP: 16/25 | Level: 4`
    if(command === 'Mikaah') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '12', true)
            .addField('Losses', '24', true)
            .addField('Games Played', '7', true)
            .addField('League Experience', '16/25', true)
            .addField('Level', '4', true)
            .addField('Last Game Played', '881', true)
            .addField('Current Win Streak', '7', true)
            .addField('Longest Win Streak', '7', true)
            .addField('Win Percentage', '*33.33%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Mikaah •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Mikes_ProGaming#5851 `Wins: 2 | Losses: 21 | Games Played: 4 | League EXP: 2/4 | Level: 1`
    if(command === 'Mikes') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '2', true)
            .addField('Losses', '21', true)
            .addField('Games Played', '4', true)
            .addField('League Experience', '2/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '883', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '2', true)
            .addField('Win Percentage', '*8.69%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Mikes •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@MisterLund#1563 `Wins: 0 | Losses: 5 | Games Played: 1 | EXP: 0/4 | Level: 0`
    if(command === 'MisterLund') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '0', true)
            .addField('Losses', '5', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '0/4', true)
            .addField('Level', '0', true)
            .addField('Win Percentage', '*0.00%*', true)
            .addField('Last Game Played', '676')

            .setFooter('•|• MisterLund •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@MisterT800#9106 `Wins: 80 | Losses: 78 | Games Played: 30 | League EXP: 103/105 | Level: 7`
    if(command === 'MisterT800') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '80', true)
            .addField('Losses', '78', true)
            .addField('Games Played', '30', true)
            .addField('League Experience', '103/105', true)
            .addField('Level', '7', true)
            .addField('Last Game Played', '942', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '14', true)
            .addField('Win Percentage', '*50.63%*', true)

            .addField('Chieftain', '<:chieftain:320176909927579648>', true)

            .setFooter('•|• MisterT800 •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Mnenomic#1538 `Wins: 17 | Losses: 39 | Games Played: 11 | League EXP: 22/25 | Level: 4`
    if(command === 'Mnenomic') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '17', true)
            .addField('Losses', '39', true)
            .addField('Games Played', '11', true)
            .addField('League Experience', '22/25', true)
            .addField('Level', '4', true)
            .addField('Last Game Played', '944', true)
            .addField('Current Win Streak', '5', true)
            .addField('Longest Win Streak', '5', true)
            .addField('Win Percentage', '*30.35%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Mnenomic •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@molle0317#4516 `Wins: 29 | Losses: 29 | Games Played: 13 | League EXP: 34/40 | Level: 5`
    if(command === 'Molle') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '29', true)
            .addField('Losses', '29', true)
            .addField('Games Played', '13', true)
            .addField('League Experience', '34/40', true)
            .addField('Level', '5', true)
            .addField('Last Game Played', '953', true)
            .addField('Current Win Streak', '4', true)
            .addField('Longest Win Streak', '9', true)
            .addField('Win Percentage', '*50.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Mölle the Supream skogshuggare •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Morgoth#4793 `Wins: 100 | Losses: 70 | Games Played: 35 | EXP: 132/170 | Level: 8`
    if(command === 'Morgoth') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '100', true)
            .addField('Losses', '70', true)
            .addField('Games Played', '33', true)
            .addField('League Experience', '132/170', true)
            .addField('Level', '7', true)
            .addField('Last Game Played', '841', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '8', true)
            .addField('Win Percentage', '*58.82%*', true)

            .addField('Solid Host', '⍟', true)

            .setFooter('•|• Morgoth •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Mr.B#3021 `Wins: 4 | Losses: 6 | Games Played: 2 | EXP: 4/9 | Level: 2`
    if(command === 'BiscuitsSanders') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '4', true)
            .addField('Losses', '6', true)
            .addField('Games Played', '2', true)
            .addField('League Experience', '4/9', true)
            .addField('Level', '2', true)
            .addField('Win Percentage', '*40.00%*', true)
            .addField('Last Game Played', '674')

            .setFooter('•|• Biscuits Sanders •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Mr, Krigan#2451 `Wins: 41 | Losses: 87 | Games Played: 26 | League EXP: 46/65 | Level: 6`
    if(command === 'Krigan') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '41', true)
            .addField('Losses', '87', true)
            .addField('Games Played', '26', true)
            .addField('League Experience', '46/65', true)
            .addField('Level', '6', true)
            .addField('Last Game Played', '942', true)
            .addField('Current Win Streak', '2', true)
            .addField('Longest Win Streak', '5', true)
            .addField('Win Percentage', '*47.12%*', true)

            .addField('Chieftain', '<:chieftain:320176909927579648>', true)

            .setFooter('•|• Krigan •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@MrGarlic#1591 `Wins: 173 | Losses: 94 | Games Played: 58 | League EXP: 253/275 | Level: 9`
    if(command === 'yippee7942') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '173', true)
            .addField('Losses', '94', true)
            .addField('Games Played', '58', true)
            .addField('League Experience', '253/275', true)
            .addField('Level', '9', true)
            .addField('Last Game Played', '879', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '14', true)
            .addField('Win Percentage', '*64.79%*', true)

            .addField('Chieftain', '<:chieftain:320176909927579648>', true)

            .setFooter('•|• yippee7942 •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Mufasa#5350 `Wins: 3 | Losses: 7 | Games Played: 2 | League EXP: 3/4 | Level: 1`
    if(command === 'MUFASAtheglorious') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '3', true)
            .addField('Losses', '7', true)
            .addField('Games Played', '2', true)
            .addField('League Experience', '3/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '941', true)
            .addField('Current Win Streak', '3', true)
            .addField('Longest Win Streak', '3', true)
            .addField('Win Percentage', '*30.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• MUFASA the glorious •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Murcielaghost#1159 `Wins: 78 | Losses: 72 | Games Played: 29 | League EXP: 99/105 | Level: 7`
    if(command === 'Murcielaghost') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '78', true)
            .addField('Losses', '72', true)
            .addField('Games Played', '29', true)
            .addField('League Experience', '99/105', true)
            .addField('Level', '7', true)
            .addField('Last Game Played', '952', true)
            .addField('Current Win Streak', '3', true)
            .addField('Longest Win Streak', '8', true)
            .addField('Win Percentage', '*52.00%*', true)

            .addField('Chieftain', '<:chieftain:320176909927579648>', true)

            .setFooter('•|• Murcielaghost •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Murphy Law#2229 `Wins: 81 | Losses: 88 | Games Played: 33 | EXP: 82/105 | Level: 7`
    if(command === 'SarverSauce') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '81', true)
            .addField('Losses', '88', true)
            .addField('Games Played', '32', true)
            .addField('League Experience', '82/105', true)
            .addField('Level', '7', true)
            .addField('Last Game Played', '835', true)
            .addField('Current Win Streak', '3', true)
            .addField('Longest Win Streak', '5', true)
            .addField('Win Percentage', '*47.92%*', true)

            .setFooter('•|• SarverSauce •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@natanxd#8248 `Wins: 0 | Losses: 6 | Games Played: 1 | EXP: 0/4 | Level: 0`
    if(command === 'natanxd') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '0', true)
            .addField('Losses', '6', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '0/4', true)
            .addField('Level', '0', true)
            .addField('Last Game Played', '846', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '0', true)
            .addField('Win Percentage', '*0.00%*', true)

            .setFooter('•|• natanxd •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Nayenor (Niënor)#2252 `Wins: 7 | Losses: 4 | Games Played: 2 | EXP: 7/9 | Level: 2`
    if(command === 'NayenorNienor') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '7', true)
            .addField('Losses', '4', true)
            .addField('Games Played', '2', true)
            .addField('League Experience', '7/9', true)
            .addField('Level', '2', true)
            .addField('Win Percentage', '*63.63%*', true)
            .addField('Last Game Played', '717')

            .setFooter('•|• Nayenor (Niënor) •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@neb#8743 `Wins: 56 | Losses: 65 | Games Played: 24 | League EXP: 71/105 | Level: 7`
    if(command === 'Nikee') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '56', true)
            .addField('Losses', '65', true)
            .addField('Games Played', '24', true)
            .addField('League Experience', '71/105', true)
            .addField('Level', '7', true)
            .addField('Last Game Played', '901', true)
            .addField('Current Win Streak', '2', true)
            .addField('Longest Win Streak', '9', true)
            .addField('Win Percentage', '*46.28%*', true)

            .addField('Chieftain', '<:chieftain:320176909927579648>', true)

            .setFooter('•|• Nikee •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Negi#1116 `Wins: 292 | Losses: 22 | Games Played: 66 | League EXP: 564/590 | Level: 12`
    if(command === 'Negi') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '292', true)
            .addField('Losses', '22', true)
            .addField('Games Played', '66', true)
            .addField('League Experience', '564/590', true)
            .addField('Level', '12', true)
            .addField('Last Game Played', '951', true)
            .addField('Current Win Streak', '35', true)
            .addField('Longest Win Streak', '135', true)
            .addField('Win Percentage', '*92.99%*', true)

            .addField('Warlord', '<:warlord:319931261894524928>', true)
            .addField('•HoF• Longest Win Streak', '135', true)

            .setFooter('•|• Negi •|•')
            .setColor(0x77FF82)
        message.channel.sendEmbed(p);
    };
//@NeinKapwnd#8622 `Wins: 4 | Losses: 6 | Games Played: 2 | EXP: 4/9 | Level: 2`
    if(command === 'NeinKapwnd') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '4', true)
            .addField('Losses', '6', true)
            .addField('Games Played', '2', true)
            .addField('League Experience', '4/9', true)
            .addField('Level', '2', true)
            .addField('Win Percentage', '*40.00%*', true)
            .addField('Last Game Played', '709')

            .setFooter('•|• NeinKapwnd •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Neshi#8561 `Wins: 0 | Losses: 5 | Games Played: 1 | League EXP: 0/4 | Level: 0`
    if(command === 'Neshi') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '0', true)
            .addField('Losses', '5', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '0/4', true)
            .addField('Level', '0', true)
            .addField('Last Game Played', '882', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '0', true)
            .addField('Win Percentage', '*0.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Neshi •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@neurotoxintj#0523 `Wins: 10 | Losses: 15 | Games Played: 5 | EXP: 11/16 | Level: 3`
    if(command === 'neurotoxintj') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '10', true)
            .addField('Losses', '15', true)
            .addField('Games Played', '5', true)
            .addField('League Experience', '11/16', true)
            .addField('Level', '3', true)
            .addField('Win Percentage', '*40.00%*', true)
            .addField('Last Game Played', '725')

            .setFooter('•|• neurotoxintj •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@NewbieOne#7348 `Wins: 138 | Losses: 103 | Games Played: 48 | League EXP: 175/275 | Level: 9`
    if(command === 'NewbieOne') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '138', true)
            .addField('Losses', '103', true)
            .addField('Games Played', '48', true)
            .addField('League Experience', '175/275', true)
            .addField('Level', '8', true)
            .addField('Last Game Played', '946', true)
            .addField('Current Win Streak', '2', true)
            .addField('Longest Win Streak', '9', true)
            .addField('Win Percentage', '*57.26%*', true)

            .addField('Chieftain', '<:chieftain:320176909927579648>', true)

            .setFooter('•|• Newbie One •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@NewWorldOrder#2791 `Wins: 4 | Losses: 2 | Games Played: 2 | League EXP: 6/9 | Level: 2`
    if(command === 'NewWorldOrder') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '4', true)
            .addField('Losses', '2', true)
            .addField('Games Played', '2', true)
            .addField('League Experience', '6/9', true)
            .addField('Level', '2', true)
            .addField('Last Game Played', '868', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '3', true)
            .addField('Win Percentage', '*66.66%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• NewWorldOrder •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Normax#9149 `Wins: 8 | Losses: 2 | Games Played: 2 | EXP: 13/16 | Level: 3`
    if(command === 'Normax') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '8', true)
            .addField('Losses', '2', true)
            .addField('Games Played', '2', true)
            .addField('League Experience', '13/16', true)
            .addField('Level', '3', true)
            .addField('Last Game Played', '794', true)
            .addField('Current Win Streak', '8', true)
            .addField('Longest Win Streak', '8', true)
            .addField('Win Percentage', '*80.00%*', true)

            .setFooter('•|• Normax •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Nugz#5395 `Wins: 5 | Losses: 4 | Games Played: 2 | League EXP: 8/9 | Level: 2`
    if(command === 'Nugz') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '5', true)
            .addField('Losses', '4', true)
            .addField('Games Played', '2', true)
            .addField('League Experience', '8/9', true)
            .addField('Level', '2', true)
            .addField('Last Game Played', '935', true)
            .addField('Current Win Streak', '3', true)
            .addField('Longest Win Streak', '3', true)
            .addField('Win Percentage', '*55.55*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Nugz •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@nutella67#5615 `Wins: 54 | Losses: 46 | Games Played: 19 | League EXP: 74/105 | Level: 7`
    if(command === 'nutella67') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '54', true)
            .addField('Losses', '46', true)
            .addField('Games Played', '19', true)
            .addField('League Experience', '74/105', true)
            .addField('Level', '7', true)
            .addField('Last Game Played', '931', true)
            .addField('Current Win Streak', '3', true)
            .addField('Longest Win Streak', '13', true)
            .addField('Win Percentage', '*54.00%*', true)

            .addField('Chieftain', '<:chieftain:320176909927579648>', true)

            .setFooter('•|• nutella67 •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Nuwine#9982 `Wins: 9 | Losses: 5 | Games Played: 3 | EXP: 9/16 | Level: 3`
    if(command === 'Nuwine') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '9', true)
            .addField('Losses', '5', true)
            .addField('Games Played', '3', true)
            .addField('League Experience', '9/16', true)
            .addField('Level', '3', true)
            .addField('Win Percentage', '*64.28%*', true)
            .addField('Last Game Played', '698')

            .setFooter('•|• Nuwine •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@owlelg6#5745 `Wins: 45 | Losses: 54 | Games Played: 20 | League EXP: 61/65 | Level: 6`
    if(command === '724') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '45', true)
            .addField('Losses', '54', true)
            .addField('Games Played', '20', true)
            .addField('League Experience', '61/65', true)
            .addField('Level', '6', true)
            .addField('Last Game Played', '952', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '9', true)
            .addField('Win Percentage', '*45.45%*', true)

            .setFooter('•|• 724 •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Oz#3789 `Wins: 0 | Losses: 5 | Games Played: 1 | EXP: 0/4 | Level: 1`
    if(command === 'Oz') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '0', true)
            .addField('Losses', '5', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '0/4', true)
            .addField('Level', '0', true)
            .addField('Win Percentage', '*0.00%*', true)
            .addField('Last Game Played', '746', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '0', true)

            .setFooter('•|• Oz •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Packpok#0087 `Wins: 20 | Losses: 23 | Games Played: 9 | League EXP: 48/65 | Level: 6`
    if(command === 'Packpok') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '20', true)
            .addField('Losses', '23', true)
            .addField('Games Played', '9', true)
            .addField('League Experience', '48/65', true)
            .addField('Level', '6', true)
            .addField('Last Game Played', '957', true)
            .addField('Current Win Streak', '3', true)
            .addField('Longest Win Streak', '6', true)
            .addField('Win Percentage', '*46.51%*', true)

            .addField('Chieftain', '<:chieftain:320176909927579648>', true)

            .setFooter('•|• Packpok •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@PancakePuppy#6121 `Wins: 4 | Losses: 8 | Games Played: 3 | EXP: 5/9 | Level: 2`
    if(command === 'PancakePuppy') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '4', true)
            .addField('Losses', '8', true)
            .addField('Games Played', '3', true)
            .addField('League Experience', '5/9', true)
            .addField('Level', '2', true)
            .addField('Win Percentage', '*33.33%*', true)
            .addField('Last Game Played', '685')

            .setFooter('•|• PancakePuppy •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Pat102ko#8010 `Wins: 3 | Losses: 17 | Games Played: 4 | EXP: 3/4 | Level: 1`
     if(command === 'Pat102ko') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '3', true)
            .addField('Losses', '17', true)
            .addField('Games Played', '4', true)
            .addField('League Experience', '3/4', true)
            .addField('Level', '1', true)
            .addField('Win Percentage', '*15.00%*', true)
            .addField('Last Game Played', '692')

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Pat102ko •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Paul#7055 `Wins: 1 | Losses: 4 | Games Played: 1 | EXP: 1/4 | Level: 1`
    if(command === 'pwoozy920') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '1', true)
            .addField('Losses', '4', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '1/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '792', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '1', true)
            .addField('Win Percentage', '*20.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• pwoozy920 •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Paul (Daddy Kukui)#6519 `Wins: 15 | Losses: 11 | Games Played: 5 | EXP: 23/25 | Level: 4`
    if(command === 'DaddyKukui') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '15', true)
            .addField('Losses', '11', true)
            .addField('Games Played', '5', true)
            .addField('League Experience', '23/25', true)
            .addField('Level', '4', true)
            .addField('Last Game Played', '814', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '6', true)
            .addField('Win Percentage', '*57.69%*', true)

            .setFooter('•|• Daddy Kukui •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Pavlo#8873 `Wins: 4 | Losses: 6 | Games Played: 2 | League EXP: 4/9 | Level: 2`
    if(command === 'Pavlo') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '4', true)
            .addField('Losses', '6', true)
            .addField('Games Played', '2', true)
            .addField('League Experience', '4/9', true)
            .addField('Level', '2', true)
            .addField('Last Game Played', '894', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '4', true)
            .addField('Win Percentage', '*40.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Pavlo •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@PedoBear#4798 `Wins: 43 | Losses: 26 | Games Played: 14 | EXP: 73/105 | Level: 7`
    if(command === 'PedoBear') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '43', true)
            .addField('Losses', '26', true)
            .addField('Games Played', '13', true)
            .addField('League Experience', '73/105', true)
            .addField('Level', '7', true)
            .addField('Last Game Played', '837', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '14', true)
            .addField('Win Percentage', '*62.31%*', true)

            .setFooter('•|• PedoBear •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@phillyboy7987#1428 `Wins: 11 | Losses: 1 | Games Played: 2 | EXP: 14/16 | Level: 3`
    if(command === 'phillyboy7987') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '11', true)
            .addField('Losses', '1', true)
            .addField('Games Played', '2', true)
            .addField('League Experience', '14/16', true)
            .addField('Level', '3', true)
            .addField('Last Game Played', '821', true)
            .addField('Current Win Streak', '5', true)
            .addField('Longest Win Streak', '6', true)
            .addField('Win Percentage', '*91.66%*', true)

            .setFooter('•|• phillyboy7987 •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Pickbox#0461 `Wins: 4 | Losses: 6 | Games Played: 2 | EXP: 4/9 | Level: 2`
    if(command === 'Pickbox') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '4', true)
            .addField('Losses', '6', true)
            .addField('Games Played', '2', true)
            .addField('League Experience', '4/9', true)
            .addField('Level', '2', true)
            .addField('Win Percentage', '*40.00%*', true)
            .addField('Last Game Played', '722')

            .setFooter('•|• Pickbox •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//Pirnetran#1235 `Wins: 36 | Losses: 18 | Games Played: 11 | League EXP: 58/65 | Level: 6`
    if(command === 'wilder991') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '36', true)
            .addField('Losses', '18', true)
            .addField('Games Played', '11', true)
            .addField('League Experience', '58/65', true)
            .addField('Level', '6', true)
            .addField('Last Game Played', '940', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '15', true)
            .addField('Win Percentage', '*66.66%*', true)

            .addField('Chieftain', '<:chieftain:320176909927579648>', true)

            .setFooter('•|• wilder991 •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@QDOGG#4681 `Wins: 2 | Losses: 3 | Games Played: 1 | EXP: 2/4 | Level: 1`
    if(command === 'Qbert') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '2', true)
            .addField('Losses', '3', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '2/4', true)
            .addField('Level', '1', true)
            .addField('Win Percentage', '*40.00%*', true)
            .addField('Last Game Played', '727')

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Qbert •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Raksomagno#3018 `Wins: 23 | Losses: 57 | Games Played: 18 | League EXP: 26/40 | Level: 5`
    if(command === 'Raksomagno') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '23', true)
            .addField('Losses', '57', true)
            .addField('Games Played', '18', true)
            .addField('League Experience', '26/40', true)
            .addField('Level', '5', true)
            .addField('Last Game Played', '956', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '4', true)
            .addField('Win Percentage', '*28.75%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Raksomagno •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Raid3n#5186 `Wins: 49 | Losses: 67 | Games Played: 22 | EXP: 49/65 | Level: 6`
    if(command === 'Raid3n') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '49', true)
            .addField('Losses', '67', true)
            .addField('Games Played', '22', true)
            .addField('League Experience', '49/65', true)
            .addField('Level', '6', true)
            .addField('Last Game Played', '779', true)
            .addField('Current Win Streak', '2', true)
            .addField('Longest Win Streak', '4', true)
            .addField('Win Percentage', '*42.22%*', true)

            .setFooter('•|• Raid3n •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@raph#9365 `Wins: 16 | Losses: 22 | Games Played: 7 | EXP: 16/25 | Level: 4`
    if(command === 'LeMajestueux') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '16', true)
            .addField('Losses', '22', true)
            .addField('Games Played', '7', true)
            .addField('League Experience', '16/25', true)
            .addField('Level', '4', true)
            .addField('Last Game Played', '798', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '5', true)
            .addField('Win Percentage', '*42.10%*', true)

            .setFooter('•|• Le Majestueux •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Rayo.15#0189 `Wins: 0 | Losses: 6 | Games Played: 1 | EXP: 0/4 | Level: 0`
    if(command === 'raulsanmir') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '0', true)
            .addField('Losses', '5', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '0/4', true)
            .addField('Level', '0', true)
            .addField('Last Game Played', '827', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '0', true)
            .addField('Win Percentage', '*0.00%*', true)

            .setFooter('•|• raul.sanmir •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Reaper23#3804 `Wins: 11 | Losses: 4 | Games Played: 3 | EXP: 16/25 | Level: 4`
    if(command === 'Reaper23') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '11', true)
            .addField('Losses', '4', true)
            .addField('Games Played', '3', true)
            .addField('League Experience', '16/25', true)
            .addField('Level', '4', true)
            .addField('Last Game Played', '771', true)
            .addField('Current Win Streak', '8', true)
            .addField('Longest Win Streak', '8', true)
            .addField('Win Percentage', '*73.33%*', true)

            .setFooter('•|• Reaper23 •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@rick#0798 `Wins: 41 | Losses: 40 | Games Played: 16 | League EXP: 61/65 | Level: 6`
    if(command === 'rickgraims') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '41', true)
            .addField('Losses', '40', true)
            .addField('Games Played', '16', true)
            .addField('League Experience', '61/65', true)
            .addField('Level', '6', true)
            .addField('Last Game Played', '936', true)
            .addField('Current Win Streak', '2', true)
            .addField('Longest Win Streak', '9', true)
            .addField('Win Percentage', '*50.61%*', true)

            .addField('Chieftain', '<:chieftain:320176909927579648>', true)

            .setFooter('•|• rickgraims •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Robert#4137 `Wins: 23 | Losses: 22 | Games Played: 9 | EXP: 24/25 | Level: 4`
    if(command === 'robert_puhlfuerst') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '23', true)
            .addField('Losses', '22', true)
            .addField('Games Played', '9', true)
            .addField('League Experience', '24/25', true)
            .addField('Level', '4', true)
            .addField('Last Game Played', '808', true)
            .addField('Current Win Streak', '5', true)
            .addField('Longest Win Streak', '5', true)
            .addField('Win Percentage', '*51.11%*', true)

            .setFooter('•|• robert_puhlfuerst •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@rolfejason#5840 `Wins: 6 | Losses: 9 | Games Played: 3 | League EXP: 11/16 | Level: 3`
    if(command === 'rolfejason') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '6', true)
            .addField('Losses', '9', true)
            .addField('Games Played', '3', true)
            .addField('League Experience', '11/16', true)
            .addField('Level', '3', true)
            .addField('Last Game Played', '888', true)
            .addField('Current Win Streak', '6', true)
            .addField('Longest Win Streak', '61', true)
            .addField('Win Percentage', '*40.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• rolfejason •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Rozovici#5220 `Wins: 66 | Losses: 89 | Games Played: 30 | League EXP: 75/105 | Level: 7`
    if(command === 'Rozovici') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '66', true)
            .addField('Losses', '89', true)
            .addField('Games Played', '30', true)
            .addField('League Experience', '75/105', true)
            .addField('Level', '7', true)
            .addField('Last Game Played', '930', true)
            .addField('Current Win Streak', '2', true)
            .addField('Longest Win Streak', '8', true)
            .addField('Win Percentage', '*42.58%*', true)

            .addField('Chieftain', '<:chieftain:320176909927579648>', true)

            .setFooter('•|• Rozovici •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Rush Fast#1594 `Wins: 1 | Losses: 9 | Games Played: 2 | EXP: 1/4 | Level: 1`
    if(command === 'RushFast') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '1', true)
            .addField('Losses', '9', true)
            .addField('Games Played', '2', true)
            .addField('League Experience', '1/4', true)
            .addField('Level', '1', true)
            .addField('Win Percentage', '*10.00%*', true)
            .addField('Last Game Played', '739')

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Rush Fast •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@sberg72#3498 `Wins: 1 | Losses: 19 | Games Played: 4 | EXP: 1/4 | Level: 1`
    if(command === 'mbergoe') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '1', true)
            .addField('Losses', '19', true)
            .addField('Games Played', '4', true)
            .addField('League Experience', '1/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '772', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '1', true)
            .addField('Win Percentage', '*5.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• mbergoe •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@ScrewTSW#0429 `Wins: 5 | Losses: 14 | Games Played: 4 | League EXP: 5/9 | Level: 2`
    if(command === 'ScrewTSW') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '5', true)
            .addField('Losses', '14', true)
            .addField('Games Played', '4', true)
            .addField('League Experience', '4/9', true)
            .addField('Level', '2', true)
            .addField('Last Game Played', '912', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '3', true)
            .addField('Win Percentage', '*26.31%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• ScrewTSW •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@seinzumtode#5354 `Wins: 85 | Losses: 35 | Games Played: 26 | League EXP: 127/170 | Level: 8`
    if(command === 'seinzumtode') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '85', true)
            .addField('Losses', '35', true)
            .addField('Games Played', '26', true)
            .addField('League Experience', '127/170', true)
            .addField('Level', '8', true)
            .addField('Last Game Played', '941', true)
            .addField('Current Win Streak', '8', true)
            .addField('Longest Win Streak', '16', true)
            .addField('Win Percentage', '*70.83%*', true)

            .addField('Chieftain', '<:chieftain:320176909927579648>', true)

            .setFooter('•|• sein zun tode •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Sephirawk#7517 `Wins: 22 | Losses: 47 | Games Played: 14 | League EXP: 27/40 | Level: 5`
    if(command === 'Sephirawk') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '22', true)
            .addField('Losses', '47', true)
            .addField('Games Played', '14', true)
            .addField('League Experience', '27/40', true)
            .addField('Level', '5', true)
            .addField('Last Game Played', '915', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '7', true)
            .addField('Win Percentage', '*31.88%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Sephirawk •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@SerialKisser#3309 `Wins: 0 | Losses: 5 | Games Played: 1 | EXP: 0/4 | Level: 0`
    if(command === 'GILF Hunter') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '0', true)
            .addField('Losses', '5', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '0/4', true)
            .addField('Level', '0', true)
            .addField('Last Game Played', '796', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '0', true)
            .addField('Win Percentage', '*0.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• GILF Hunter •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Seth#5468 `Wins: 24 | Losses: 19 | Games Played: 12 | League EXP: 29/40 | Level: 5`
    if(command === 'StevenBuscemi') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '24', true)
            .addField('Losses', '19', true)
            .addField('Games Played', '12', true)
            .addField('League Experience', '29/40', true)
            .addField('Level', '5', true)
            .addField('Last Game Played', '895', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '7', true)
            .addField('Win Percentage', '*55.81%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• StevenBuscemi •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Sewn2getherWrong#4568 `Wins: 4 | Losses: 6 | Games Played: 2 | EXP: 4/9 | Level: 2`
    if(command === 'Sewn2getherWrong') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '4', true)
            .addField('Losses', '6', true)
            .addField('Games Played', '2', true)
            .addField('League Experience', '4/9', true)
            .addField('Level', '2', true)
            .addField('Win Percentage', '*40.00%*', true)
            .addField('Last Game Played', '656')

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Sewn2getherWrong •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Shade#0572 `Wins: 8 | Losses: 8 | Games Played: 3 | League EXP: 8/9 | Level: 2`
    if(command === 'Shade') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '8', true)
            .addField('Losses', '8', true)
            .addField('Games Played', '3', true)
            .addField('League Experience', '8/9', true)
            .addField('Level', '2', true)
            .addField('Last Game Played', '954', true)
            .addField('Current Win Streak', '3', true)
            .addField('Longest Win Streak', '3', true)
            .addField('Win Percentage', '*50.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Shade •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@SheepyIsHere#1558 `Wins: 31 | Losses: 105 | Games Played: 23 | EXP: 32/40 | Level: 5`
    if(command === 'SheepyIsHere') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '31', true)
            .addField('Losses', '105', true)
            .addField('Games Played', '23', true)
            .addField('League Experience', '32/40', true)
            .addField('Level', '5', true)
            .addField('Last Game Played', '778', true)
            .addField('Current Win Streak', '2', true)
            .addField('Longest Win Streak', '4', true)
            .addField('Win Percentage', '*22.79%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• SheepyIsHere •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@SheikYerbouti#5849 `Wins: 34 | Losses: 40 | Games Played: 16 | EXP: 36/42 | Level: 5`
    if(command === 'SheikYerbouti') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '34', true)
            .addField('Losses', '40', true)
            .addField('Games Played', '16', true)
            .addField('League Experience', '36/40', true)
            .addField('Level', '5', true)
            .addField('Last Game Played', '806', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '4', true)
            .addField('Win Percentage', '*45.94%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• SheikYerbouti •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Shibi4you#8817 `Wins: 3 | Losses: 3 | Games Played: 1 | EXP: 3/4 | Level: 1`
    if(command === 'Shibi4you') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '3', true)
            .addField('Losses', '3', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '3/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '846', true)
            .addField('Current Win Streak', '3', true)
            .addField('Longest Win Streak', '3', true)
            .addField('Win Percentage', '*50.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Shibi4you •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@shout#5321 `Wins: 4 | Losses: 1 | Games Played: 1 | League EXP: 4/9 | Level: 2`
    if(command === 'shout') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '4', true)
            .addField('Losses', '1', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '4/9', true)
            .addField('Level', '2', true)
            .addField('Last Game Played', '949', true)
            .addField('Current Win Streak', '4', true)
            .addField('Longest Win Streak', '4', true)
            .addField('Win Percentage', '*80.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• shout •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@slick_salamander#9407 `Wins: 16 | Losses: 21 | Games Played: 8 | League EXP: 24/25 | Level: 4`
    if(command === 'slick_salamander') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '16', true)
            .addField('Losses', '21', true)
            .addField('Games Played', '8', true)
            .addField('League Experience', '24/25', true)
            .addField('Level', '4', true)
            .addField('Last Game Played', '943', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '4', true)
            .addField('Win Percentage', '*43.24%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• slick_salamander •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@slprywhnwet#9191 `Wins: 22 | Losses: 40 | Games Played: 13 | League EXP: 26/40 | Level: 5`
    if(command === 'running4life7') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '22', true)
            .addField('Losses', '40', true)
            .addField('Games Played', '13', true)
            .addField('League Experience', '26/40', true)
            .addField('Level', '5', true)
            .addField('Last Game Played', '931', true)
            .addField('Current Win Streak', '3', true)
            .addField('Longest Win Streak', '6', true)
            .addField('Win Percentage', '*35.48%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• running4life7 •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@sorodngann#7183 `Wins: 3 | Losses: 12 | Games Played: 3 | League EXP: 3/4 | Level: 1`
    if(command === 'sorodngann') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '3', true)
            .addField('Losses', '12', true)
            .addField('Games Played', '3', true)
            .addField('League Experience', '3/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '958', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '3', true)
            .addField('Win Percentage', '*20.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• sorodngann •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@SourceGear#0062 `Wins: 35 | Losses: 16 | Games Played: 11 | League EXP: 51/65 | Level: 6`
    if(command === 'SourceGear') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '35', true)
            .addField('Losses', '16', true)
            .addField('Games Played', '11', true)
            .addField('League Experience', '51/65', true)
            .addField('Level', '6', true)
            .addField('Last Game Played', '948', true)
            .addField('Current Win Streak', '5', true)
            .addField('Longest Win Streak', '11', true)
            .addField('Win Percentage', '*68.62%*', true)

            .addField('Chieftain', '<:chieftain:320176909927579648>', true)

            .setFooter('•|• SourceGear •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Splinter#1968 `Wins: 111 | Losses: 119 | Games Played: 47 | League EXP: 128/170 | Level: 8`
    if(command === 'emt409') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '111', true)
            .addField('Losses', '119', true)
            .addField('Games Played', '47', true)
            .addField('League Experience', '128/170', true)
            .addField('Level', '8', true)
            .addField('Last Game Played', '934', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '10', true)
            .addField('Win Percentage', '*48.26%*', true)

            .addField('Chieftain', '<:chieftain:320176909927579648>', true)
            .addField('Solid Host', '⍟', true)

            .setFooter('•|• emt409 •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Spyros90#4074 `Wins: 3 | Losses: 1 | Games Played: 1 | League EXP: 3/4 | Level: 1`
    if(command === 'Spiros90') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '3', true)
            .addField('Losses', '1', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '3/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '866', true)
            .addField('Current Win Streak', '3', true)
            .addField('Longest Win Streak', '3', true)
            .addField('Win Percentage', '*75.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Spiros90 •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Squish#0658 `Wins: 76 | Losses: 84 | Games Played: 35 | League EXP: 92/105 | Level: 7`
    if(command === 'Squish') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '76', true)
            .addField('Losses', '84', true)
            .addField('Games Played', '35', true)
            .addField('League Experience', '92/105', true)
            .addField('Level', '7', true)
            .addField('Last Game Played', '929', true)
            .addField('Current Win Streak', '3', true)
            .addField('Longest Win Streak', '8', true)
            .addField('Win Percentage', '*47.50%*', true)

            .addField('Chieftain', '<:chieftain:320176909927579648>', true)

            .setFooter('•|• Squish •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Stasich#5460 `Wins: 2 | Losses: 4 | Games Played: 1 | EXP: 2/4 | Level: 1`
    if(command === 'Stasich') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '2', true)
            .addField('Losses', '4', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '2/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '823', true)
            .addField('Current Win Streak', '2', true)
            .addField('Longest Win Streak', '2', true)
            .addField('Win Percentage', '*33.33%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Stasich •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@stbio#0178 `Wins: 51 | Losses: 34 | Games Played: 17 | EXP: 80/105 | Level: 7`
    if(command === 'SaintBio') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '51', true)
            .addField('Losses', '34', true)
            .addField('Games Played', '17', true)
            .addField('League Experience', '80/105', true)
            .addField('Level', '7', true)
            .addField('Win Percentage', '*60.71%*', true)
            .addField('Last Game Played', '751', true)
            .addField('Current Win Streak', '4', true)
            .addField('Longest Win Streak', '7', true)

            .setFooter('•|• SaintBio •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@SuchaR#4890 `Wins: 5 | Losses: 9 | Games Played: 3 | EXP: 5/9 | Level: 2`
    if(command === 'SuChi') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '5', true)
            .addField('Losses', '9', true)
            .addField('Games Played', '3', true)
            .addField('League Experience', '5/9', true)
            .addField('Level', '2', true)
            .addField('Last Game Played', '775', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '3', true)
            .addField('Win Percentage', '*35.71%*', true)

            .setFooter('•|• SuChi •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Swirlix#6895 `Wins: 92 | Losses: 61 | Games Played: 33 | League EXP: 115/170 | Level: 8`
    if(command === 'Swirlix') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '92', true)
            .addField('Losses', '61', true)
            .addField('Games Played', '33', true)
            .addField('League Experience', '115/170', true)
            .addField('Level', '8', true)
            .addField('Last Game Played', '921', true)
            .addField('Current Win Streak', '5', true)
            .addField('Longest Win Streak', '7', true)
            .addField('Win Percentage', '*60.13%*', true)

            .addField('Chieftain', '<:chieftain:320176909927579648>', true)

            .setFooter('•|• Swirlix •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Syberia2official#0376 `Wins: 0 | Losses: 10 | Games Played: 2 | EXP: 0/4 | Level: 0`
    if(command === 'Syberia2official') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '0', true)
            .addField('Losses', '10', true)
            .addField('Games Played', '2', true)
            .addField('League Experience', '0/4', true)
            .addField('Level', '0', true)
            .addField('Win Percentage', '*0.00%*', true)
            .addField('Last Game Played', '696')

            .setFooter('•|• Syberia2official •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@T-Rekt#0928 `Wins: 7 | Losses: 3 | Games Played: 2 | EXP: 7/9 | Level: 2`
    if(command === 'TRekt') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '7', true)
            .addField('Losses', '3', true)
            .addField('Games Played', '2', true)
            .addField('League Experience', '7/9', true)
            .addField('Level', '2', true)
            .addField('Last Game Played', '774', true)
            .addField('Current Win Streak', '3', true)
            .addField('Longest Win Streak', '4', true)
            .addField('Win Percentage', '*70.00%*', true)

            .setFooter('•|• T-Rekt •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@TaskForceFish#7213 `Wins: 153 | Losses: 11 | Games Played: 32 | League EXP: 277/380 | Level: 10`
    if(command === 'TaskForceFish') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '153', true)
            .addField('Losses', '11', true)
            .addField('Games Played', '32', true)
            .addField('League Experience', '277/380', true)
            .addField('Level', '10', true)
            .addField('Last Game Played', '845', true)
            .addField('Current Win Streak', '37', true)
            .addField('Longest Win Streak', '37', true)
            .addField('Win Percentage', '*93.29%*', true)

            .addField('Solid Host', '⍟', true)

            .setFooter('•|• TaskForceFish - "Peacekeeping Force on the Way" •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };

//@tDw#4953 `Wins: 1 | Losses: 19 | Games Played: 4 | League EXP: 1/4 | Level: 1`
    if(command === 'tDw') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '1', true)
            .addField('Losses', '19', true)
            .addField('Games Played', '4', true)
            .addField('League Experience', '1/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '950', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '1', true)
            .addField('Win Percentage', '*5.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• tDw •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@The 40th Pagan#7865 `Wins: 18 | Losses: 18 | Games Played: 7 | League EXP: 28/40 | Level: 5`
    if(command === 'The40thPagan') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '18', true)
            .addField('Losses', '18', true)
            .addField('Games Played', '7', true)
            .addField('League Experience', '28/40', true)
            .addField('Level', '5', true)
            .addField('Last Game Played', '957', true)
            .addField('Current Win Streak', '2', true)
            .addField('Longest Win Streak', '7', true)
            .addField('Win Percentage', '*50.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• The 40th Pagan •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@The green pickle#3423 `Wins: 2 | Losses: 18 | Level: 2 | EXP: 4 | League EXP: 18`
    if(command === 'LimitedMelon') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '2', true)
            .addField('Losses', '18', true)
            .addField('Games Played', '5', true)
            .addField('League Experience', '4/9', true)
            .addField('Level', '2', true)
            .addField('Win Percentage', '*10.00%*', true)
            .addField('Last Game Played', '364')

            .setFooter('•|• LimitedMelon •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@TheDonKillum#8936 `Wins: 14 | Losses: 14 | Games Played: 6 | League EXP: 14/16 | Level: 3`
    if(command === 'TheDonKillum') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '14', true)
            .addField('Losses', '14', true)
            .addField('Games Played', '6', true)
            .addField('League Experience', '14/16', true)
            .addField('Level', '3', true)
            .addField('Last Game Played', '918', true)
            .addField('Current Win Streak', '2', true)
            .addField('Longest Win Streak', '3', true)
            .addField('Win Percentage', '*50.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• TheDonKillum •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@TheGerbilPimp#9998 `Wins: 8 | Losses: 36 | Games Played: 9 | EXP: 8/9 | Level: 2`
    if(command === 'TheGerbilPimp') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '8', true)
            .addField('Losses', '36', true)
            .addField('Games Played', '9', true)
            .addField('League Experience', '8/9', true)
            .addField('Level', '2', true)
            .addField('Last Game Played', '761', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '4', true)
            .addField('Win Percentage', '*18.18%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• TheGerbilPimp •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@thekingpin#0976 `Wins: 20 | Losses: 53 | Games Played: 15 | League EXP: 21/25 | Level: 4`
    if(command === 'thekingpin') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '20', true)
            .addField('Losses', '53', true)
            .addField('Games Played', '15', true)
            .addField('League Experience', '21/25', true)
            .addField('Level', '4', true)
            .addField('Last Game Played', '945', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '4', true)
            .addField('Win Percentage', '*27.39%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• thekingpin •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@TheIceBaron#5920 `Wins: 44 | Losses: 52 | Games Played: 17 | League EXP: 44/65 | Level: 6`
    if(command === 'TheIceBaron') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '44', true)
            .addField('Losses', '52', true)
            .addField('Games Played', '17', true)
            .addField('League Experience', '44/65', true)
            .addField('Level', '6', true)
            .addField('Last Game Played', '902', true)
            .addField('Current Win Streak', '3', true)
            .addField('Longest Win Streak', '7', true)
            .addField('Win Percentage', '*45.83%*', true)

            .addField('Chieftain', '<:chieftain:320176909927579648>', true)

            .setFooter('•|• TheIceBaron •|•')
            .setColor(0x0C5B80 )
        message.channel.sendEmbed(p);
    };
//@thenuggetlover#3954 `Wins: 9 | Losses: 31 | Games Played: 8 | EXP: 9/16 | Level: 3`
    if(command === 'thenuggetlover') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '9', true)
            .addField('Losses', '31', true)
            .addField('Games Played', '8', true)
            .addField('League Experience', '9/16', true)
            .addField('Level', '3', true)
            .addField('Win Percentage', '*22.50%*', true)
            .addField('Last Game Played', '716')

            .setFooter('•|• thenuggetlover •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@TheSeiBigdog#3806 `Wins: 1 | Losses: 20 | Games Played: 4 | EXP: 1/4 | Level: 1`
    if(command === 'TheseiBigdog') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '1', true)
            .addField('Losses', '20', true)
            .addField('Games Played', '4', true)
            .addField('League Experience', '1/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '800', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '1', true)
            .addField('Win Percentage', '*4.76%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Thesei Bigdog •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@theShyForest#1311 `Wins: 22 | Losses: 36 | Games Played: 12 | League EXP: 22/25 | Level: 4`
    if(command === 'theShyForest') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '22', true)
            .addField('Losses', '36', true)
            .addField('Games Played', '12', true)
            .addField('League Experience', '22/25', true)
            .addField('Level', '4', true)
            .addField('Last Game Played', '934', true)
            .addField('Current Win Streak', '2', true)
            .addField('Longest Win Streak', '4', true)
            .addField('Win Percentage', '*37.93%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• theShyForest •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Tiri#8430 `Wins: 175 | Losses: 68 | Games Played: 53 | League EXP: 244/275 | Level: 9`
    if(command === 'Tiri') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '175', true)
            .addField('Losses', '68', true)
            .addField('Games Played', '53', true)
            .addField('League Experience', '244/275', true)
            .addField('Level', '9', true)
            .addField('Last Game Played', '955', true)
            .addField('Current Win Streak', '3', true)
            .addField('Longest Win Streak', '22', true)
            .addField('Win Percentage', '*72.01%*', true)

            .addField('Chieftain', '<:chieftain:320176909927579648>', true)

            .setFooter('•|• Tiri •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@titillater#1287 `Wins: 18 | Losses: 34 | Games Played: 10 | League EXP: 18/25 | Level: 4`
    if(command === 'titillater') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '18', true)
            .addField('Losses', '34', true)
            .addField('Games Played', '10', true)
            .addField('League Experience', '18/25', true)
            .addField('Level', '4', true)
            .addField('Last Game Played', '898', true)
            .addField('Current Win Streak', '3', true)
            .addField('Longest Win Streak', '4', true)
            .addField('Win Percentage', '*34.61%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• titillater •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@TKswag#2630 `Wins: 100 | Losses: 70 | Games Played: 39 | League EXP: 149/170 | Level: 8`
    if(command === 'TKswag') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '100', true)
            .addField('Losses', '70', true)
            .addField('Games Played', '39', true)
            .addField('League Experience', '149/170', true)
            .addField('Level', '7', true)
            .addField('Last Game Played', '958', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '15', true)
            .addField('Win Percentage', '*58.82%*', true)

            .addField('Chieftain', '<:chieftain:320176909927579648>', true)

            .setFooter('•|• TKswag •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@ToMbraider#6882 `Wins: 272 | Losses: 212 | Games Played: 103 | League EXP: 375/380 | Level: 10`
    if(command === 'TomBraider') {
        let p = new Discord.RichEmbed()
            .setAuthor('TomBraider')
            .addField('Wins', '272', true)
            .addField('Losses', '212', true)
            .addField('Games Played', '103', true)
            .addField('League Experience', '375/380', true)
            .addField('Level', '10', true)
            .addField('Last Game Played', '941', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '12', true)
            .addField('Win Percentage', '*56.19%*', true)

            .addField('Chieftain', '<:chieftain:320176909927579648>', true)

            .setFooter('•|• TomBraider •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Tommyknocker#9461 `Wins: 28 | Losses: 23 | Games Played: 11 | EXP: 42/65 | Level: 6`
    if(command === 'Tommyknocker') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '28', true)
            .addField('Losses', '23', true)
            .addField('Games Played', '11', true)
            .addField('League Experience', '42/65', true)
            .addField('Level', '6', true)
            .addField('Last Game Played', '808', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '9', true)
            .addField('Win Percentage', '*54.90%*', true)

            .setFooter('•|• Tommyknocker •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Tr4nsc3nd3nc3#5280 `Wins: 2 | Losses: 4 | Games Played: 1 | EXP: 2/4 | Level: 1`
    if(command === 'Tr4nsc3nd3nc3') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '2', true)
            .addField('Losses', '4', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '2/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '780', true)
            .addField('Current Win Streak', '2', true)
            .addField('Longest Win Streak', '2', true)
            .addField('Win Percentage', '*33.33%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Tr4nsc3nd3nc3 •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@TraneBoy#3344 `Wins: 11 | Losses: 31 | Games Played: 8 | EXP:11/16 | Level: 3`
    if(command === 'TraneBoy') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '11', true)
            .addField('Losses', '31', true)
            .addField('Games Played', '8', true)
            .addField('League Experience', '11/16', true)
            .addField('Level', '3', true)
            .addField('Win Percentage', '*26.19%*', true)
            .addField('Last Game Played', '684')

            .setFooter('•|• TraneBoy •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@treflan#1832 `Wins: 22 | Losses: 26 | Games Played: 9 | League EXP: 32/40 | Level: 5`
    if(command === 'treflan') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '22', true)
            .addField('Losses', '26', true)
            .addField('Games Played', '9', true)
            .addField('League Experience', '32/40', true)
            .addField('Level', '5', true)
            .addField('Last Game Played', '926', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '6', true)
            .addField('Win Percentage', '*45.83%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• treflan •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@TROTSKYWHITE#4543 `Wins: 11 | Losses: 4 | Games Played: 3 | League EXP: 16/25 | Level: 4`
    if(command === 'trotskywhite') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '11', true)
            .addField('Losses', '4', true)
            .addField('Games Played', '3', true)
            .addField('League Experience', '16/25', true)
            .addField('Level', '4', true)
            .addField('Last Game Played', '930', true)
            .addField('Current Win Streak', '3', true)
            .addField('Longest Win Streak', '5', true)
            .addField('Win Percentage', '*73.33%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• trotskywhite •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Triton13#9628 `Wins: 10 | Losses: 16 | Games Played: 4 | EXP: 10/16 | Level: 3`
    if(command === 'triton') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '10', true)
            .addField('Losses', '16', true)
            .addField('Games Played', '4', true)
            .addField('League Experience', '10/16', true)
            .addField('Level', '3', true)
            .addField('Win Percentage', '*38.46%*', true)
            .addField('Last Game Played', '720')

            .setFooter('•|• triton •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Trudel#8896 `Wins: 4 | Losses: 1 | Games Played: 1 | League EXP: 4/9 | Level: 2`
    if(command === 'Trudel') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '4', true)
            .addField('Losses', '1', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '4/9', true)
            .addField('Level', '2', true)
            .addField('Last Game Played', '945', true)
            .addField('Current Win Streak', '4', true)
            .addField('Longest Win Streak', '4', true)
            .addField('Win Percentage', '*80.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Trudel •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@TrueStoryNoLie#4242 `Wins: 16 | Losses: 20 | Games Played: 7 | League EXP: 14/16 | Level: 3`
    if(command === 'TrueStoryNoLie') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '16', true)
            .addField('Losses', '20', true)
            .addField('Games Played', '7', true)
            .addField('League Experience', '14/16', true)
            .addField('Level', '3', true)
            .addField('Last Game Played', '877', true)
            .addField('Current Win Streak', '4', true)
            .addField('Longest Win Streak', '4', true)
            .addField('Win Percentage', '*44.44%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• TrueStoryNoLie •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Tyfar#4570 `Wins: 18 | Losses: 21 | Games Played: 8 | League EXP: 18/25 | Level: 4`
    if(command === 'Tyfar') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '18', true)
            .addField('Losses', '21', true)
            .addField('Games Played', '8', true)
            .addField('League Experience', '18/25', true)
            .addField('Level', '4', true)
            .addField('Last Game Played', '913', true)
            .addField('Current Win Streak', '2', true)
            .addField('Longest Win Streak', '3', true)
            .addField('Win Percentage', '*46.15%*', true)

            .setFooter('•|• Tyfar •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@TylerDurden#5994 `Wins: 2 | Losses: 13 | Games Played: 3 | League EXP: 2/4 | Level: 1`
    if(command === 'TylerDurden') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '2', true)
            .addField('Losses', '13', true)
            .addField('Games Played', '3', true)
            .addField('League Experience', '2/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '890', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '1', true)
            .addField('Win Percentage', '*13.33%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• TylerDurden •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@UlrichTheMighty#3872 `Wins: 0 | Losses: 5 | Games Played: 1 | EXP: 0/4 | Level: 0`
    if(command === 'UlrichTheMighty') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '0', true)
            .addField('Losses', '5', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '0/4', true)
            .addField('Level', '0', true)
            .addField('Win Percentage', '*0.00%*', true)
            .addField('Last Game Played', '687')

            .setFooter('•|• UlrichTheMighty •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Under#8770 `Wins: 77 | Losses: 100 | Games Played: 37 | League EXP: 102/105 | Level: 7`
    if(command === 'Under') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '77', true)
            .addField('Losses', '100', true)
            .addField('Games Played', '37', true)
            .addField('League Experience', '102/105', true)
            .addField('Level', '7', true)
            .addField('Last Game Played', '958', true)
            .addField('Current Win Streak', '7', true)
            .addField('Longest Win Streak', '7', true)
            .addField('Win Percentage', '*43.50%*', true)

            .addField('Chieftain', '<:chieftain:320176909927579648>', true)

            .setFooter('•|• Under - "Game in 30 Minutes?!" •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@UNI#6538 `Wins: 9 | Losses: 5 | Games Played: 3 | League EXP: 16/25 | Level: 4`
    if(command === 'UNI') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '9', true)
            .addField('Losses', '5', true)
            .addField('Games Played', '3', true)
            .addField('League Experience', '16/25', true)
            .addField('Level', '4', true)
            .addField('Last Game Played', '955', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '9', true)
            .addField('Win Percentage', '*64.28%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• UNI •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@urlik#3458 `Wins: 34 | Losses: 36 | Games Played: 14 | League EXP: 39/40 | Level: 5`
    if(command === 'urlik') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '34', true)
            .addField('Losses', '36', true)
            .addField('Games Played', '14', true)
            .addField('League Experience', '39/40', true)
            .addField('Level', '5', true)
            .addField('Last Game Played', '934', true)
            .addField('Current Win Streak', '2', true)
            .addField('Longest Win Streak', '5', true)
            .addField('Win Percentage', '*48.57%*', true)

            .setFooter('•|• urlik •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@ustmip[CPL]#8911 `Wins: 26 | Losses: 13 | Games Played: 8 | League EXP: 30/40 | Level: 5`
    if(command === 'ustmip') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '26', true)
            .addField('Losses', '13', true)
            .addField('Games Played', '8', true)
            .addField('League Experience', '30/40', true)
            .addField('Level', '5', true)
            .addField('Last Game Played', '928', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '8', true)
            .addField('Win Percentage', '*66.66%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• ustmip •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Valdes#2466 `Wins: 2 | Losses: 8 | Games Played: 2 | EXP: 2 | Level: 1`
    if(command === 'Valdes') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '2', true)
            .addField('Losses', '8', true)
            .addField('Games Played', '2', true)
            .addField('League Experience', '2/4', true)
            .addField('Level', '1', true)
            .addField('Win Percentage', '*20.00%*', true)
            .addField('Last Game Played', '648')

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Valdes •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@VALKYRIE#4369 `Wins: 5 | Losses: 15 | Games Played: 4 | League EXP: 5/9 | Level: 2`
    if(command === 'SheepHorror') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '5', true)
            .addField('Losses', '15', true)
            .addField('Games Played', '4', true)
            .addField('League Experience', '5/9', true)
            .addField('Level', '2', true)
            .addField('Last Game Played', '904', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '3', true)
            .addField('Win Percentage', '*25.00*', true)

            .setFooter('•|• SheepHorror •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@vaporclasp#8324 `Wins: 2 | Losses: 3 | Games Played: 1 | EXP: 2/4 | Level: 1`
    if(command === 'vaporclasp') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '2', true)
            .addField('Losses', '3', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '2/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '798', true)
            .addField('Current Win Streak', '2', true)
            .addField('Longest Win Streak', '2', true)
            .addField('Win Percentage', '*40.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• vaporclasp •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@varade#6128 `Wins: 2 | Losses: 3 | Games Played: 1 | EXP: 2/4 | Level: 1`
    if(command === 'varade') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '2', true)
            .addField('Losses', '3', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '2/4', true)
            .addField('Level', '1', true)
            .addField('Win Percentage', '*40.00%*', true)
            .addField('Last Game Played', '747', true)
            .addField('Current Win Streak', '2', true)
            .addField('Longest Win Streak', '2', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• varade •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Viceroy#2292 `Wins: 11 | Losses: 16 | Games Played: 5 | League EXP: 11/16 | Level: 3`
    if(command === 'ViceroyofTexas') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '11', true)
            .addField('Losses', '16', true)
            .addField('Games Played', '5', true)
            .addField('League Experience', '11/16', true)
            .addField('Level', '3', true)
            .addField('Last Game Played', '897', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '3', true)
            .addField('Win Percentage', '*40.74%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Viceroy of Texas •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@View619#4970 `Wins: 2 | Losses: 3 | Games Played: 1 | EXP: 2/4 | Level: 1`
    if(command === 'ViewThePhenom') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '2', true)
            .addField('Losses', '3', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '2/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '792', true)
            .addField('Current Win Streak', '2', true)
            .addField('Longest Win Streak', '2', true)
            .addField('Win Percentage', '*40.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• ViewThePhenom •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Vindex#3265 `Wins: 61 | Losses: 49 | Games Played: 22 | League EXP: 73/105 | Level: 7`
    if(command === 'Vindex') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '61', true)
            .addField('Losses', '49', true)
            .addField('Games Played', '22', true)
            .addField('League Experience', '73/105', true)
            .addField('Level', '7', true)
            .addField('Last Game Played', '956', true)
            .addField('Current Win Streak', '3', true)
            .addField('Longest Win Streak', '14', true)
            .addField('Win Percentage', '*55.45%*', true)

            .addField('Chieftain', '<:chieftain:320176909927579648>', true)
            .addField('Solid Host', '⍟', true)

            .setFooter('•|• Vindex •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Wallow#9017 `Wins: 19 | Losses: 26 | Games Played: 10 | EXP: 24/25 | Level: 4`
    if(command === 'Wallow') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '19', true)
            .addField('Losses', '26', true)
            .addField('Games Played', '10', true)
            .addField('League Experience', '24/25', true)
            .addField('Level', '4', true)
            .addField('Win Percentage', '*42.22%*', true)
            .addField('Last Game Played', '748', true)
            .addField('Current Win Streak', '2', true)
            .addField('Longest Win Streak', '5', true)

            .setFooter('•|• Wallow •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@War#7212 `Wins: 4 | Losses: 11 | Level: 2 Games Played: 4 | EXP: 4/9`
if(command === 'warsoldier12') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '4', true)
            .addField('Losses', '11', true)
            .addField('Games Played', '4', true)
            .addField('League Experience', '4/9', true)
            .addField('Level', '2', true)
            .addField('Win Percentage', '*26.66%*', true)
            .addField('Last Game Played', '117')

            .setFooter('•|• warsoldier12 •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@wazabaza#9125 `Wins: 8 | Losses: 21 | Games Played: 6 | EXP: 8/9 | Level: 2`
    if(command === 'wazabaza') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '8', true)
            .addField('Losses', '21', true)
            .addField('Games Played', '6', true)
            .addField('League Experience', '8/9', true)
            .addField('Level', '2', true)
            .addField('Last Game Played', '853', true)
            .addField('Current Win Streak', '4', true)
            .addField('Longest Win Streak', '4', true)
            .addField('Win Percentage', '*27.58%*', true)

            .setFooter('•|• wazabaza •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@whateverdude_#0376 `Wins: 0 | Losses: 5 | Games Played: 1 | EXP: 0/4 | Level: 0`
    if(command === 'whateverdude') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '0', true)
            .addField('Losses', '5', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '0/4', true)
            .addField('Level', '0', true)
            .addField('Last Game Played', '856', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '0', true)
            .addField('Win Percentage', '*0.00%*', true)

            .setFooter('•|• whateverdude •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@WildFamiliar#9341 `Wins: 12 | Losses: 40 | Games Played: 10 | EXP: 12/16 | Level: 3`
    if(command === 'ProfessionalWeeaboo') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '12', true)
            .addField('Losses', '40', true)
            .addField('Games Played', '10', true)
            .addField('League Experience', '12/16', true)
            .addField('Level', '3', true)
            .addField('Last Game Played', '773', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '4', true)
            .addField('Win Percentage', '*23.07%*', true)

            .setFooter('•|• Professional Weeaboo •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@WineTime#8812 `Wins: 130 | Losses: 173 | Games Played: 63 | League EXP: 158/170 | Level: 8`
    if(command === 'WineTime') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '130', true)
            .addField('Losses', '173', true)
            .addField('Games Played', '63', true)
            .addField('League Experience', '158/170', true)
            .addField('Level', '8', true)
            .addField('Last Game Played', '915', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '11', true)
            .addField('Win Percentage', '*42.90%*', true)

            .setFooter('•|• WineTime •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@WintersWolf#4145 `Wins:1  | Losses: 4 | Games Played: 1 | League EXP: 1/4 | Level: 1`
    if(command === 'WintersWolf') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '1', true)
            .addField('Losses', '4', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '1/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '955', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '1', true)
            .addField('Win Percentage', '*20.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• WintersWolf •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@WolfWind#7504 `Wins: 4 | Losses: 1 | Games Played: 1 | League EXP: 4/9 | Level: 2`
    if(command === 'ShadowofZero') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '4', true)
            .addField('Losses', '1', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '4/9', true)
            .addField('Level', '2', true)
            .addField('Last Game Played', '888', true)
            .addField('Current Win Streak', '4', true)
            .addField('Longest Win Streak', '4', true)
            .addField('Win Percentage', '*80.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Shadow of Zero •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Wraith795#8745 `Wins: 4 | Losses: 1 | Games Played: 1 | EXP: 4/9 | Level: 2`
    if(command === 'Skylord_Grove') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '4', true)
            .addField('Losses', '1', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '4/9', true)
            .addField('Level', '2', true)
            .addField('Win Percentage', '*80.00%*', true)
            .addField('Last Game Played', '722')

            .setFooter('•|• Skylord_Grove •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@xavier#9632 `Wins: 33 | Losses: 37 Games Played: 14 | EXP: 39/40 | Level: 5`
    if(command === 'RenegadeXavier') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '33', true)
            .addField('Losses', '37', true)
            .addField('Games Played', '14', true)
            .addField('League Experience', '39/40', true)
            .addField('Level', '5', true)
            .addField('Win Percentage', '*47.14%*', true)
            .addField('Last Game Played', '678')

            .setFooter('•|• Renegade Xavier •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Xer#3460 `Wins: 35 | Losses: 50 | Games Played: 18 | EXP: 37/40 | Level: 5`
    if(command === 'Xerxes') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '35', true)
            .addField('Losses', '50', true)
            .addField('Games Played', '18', true)
            .addField('League Experience', '37/40', true)
            .addField('Level', '5', true)
            .addField('Win Percentage', '*41.17%*', true)
            .addField('Last Game Played', '698')

            .setFooter('•|• Xerxes •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@xishnik100#4590 `Wins: 2 | Losses: 3 | Games Played: 1 | EXP: 2/4 | Level: 1`
    if(command === 'BuckVonCrumpleBro') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '2', true)
            .addField('Losses', '3', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '2/4', true)
            .addField('Level', '1', true)
            .addField('Win Percentage', '*40.00%*', true)
            .addField('Last Game Played', '740')

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Buck Von CrumpleBro •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Xortec#6878 `Wins: 2 | Losses: 8 | Games Played: 2 | EXP: 2/4 | Level: 1`
    if(command === 'XortAc') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '2', true)
            .addField('Losses', '8', true)
            .addField('Games Played', '2', true)
            .addField('League Experience', '2/4', true)
            .addField('Level', '1', true)
            .addField('Win Percentage', '*20.00%*', true)
            .addField('Last Game Played', '687')

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• XortÄc •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@XT4L#4362 `Wins: 2 | Losses: 3 | Games Played: 1 | EXP: 2/4 | Level: 1`
    if(command === 'XT4L') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '2', true)
            .addField('Losses', '3', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '2/4', true)
            .addField('Level', '1', true)
            .addField('Win Percentage', '*40.00%*', true)
            .addField('Last Game Played', '711')

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• XT4L •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@XtoFeu#9955 `Wins: 7 | Losses: 38 | Games Played: 9 | EXP: 7/9 | Level: 2`
    if(command === 'XtoFeu') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '7', true)
            .addField('Losses', '38', true)
            .addField('Games Played', '9', true)
            .addField('League Experience', '7/9', true)
            .addField('Level', '2', true)
            .addField('Win Percentage', '*15.55%*', true)
            .addField('Last Game Played', '747', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '2', true)

            .setFooter('•|• XtoFeu •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Yash#6693 `Wins: 4 | Losses: 0 | Games Played: 1 | League EXP: 7/9 | Level: 2`
    if(command === 'Yash') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '4', true)
            .addField('Losses', '0', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '7/9', true)
            .addField('Level', '2', true)
            .addField('Last Game Played', '941', true)
            .addField('Current Win Streak', '4', true)
            .addField('Longest Win Streak', '4', true)
            .addField('Win Percentage', '*100.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Yash •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Yeetinsiderher#8029 `Wins: 22 | Losses: 20 | Games Played: 9 | League EXP: 24/25 | Level: 4`
    if(command === 'lolsoda777') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '22', true)
            .addField('Losses', '20', true)
            .addField('Games Played', '9', true)
            .addField('League Experience', '24/25', true)
            .addField('Level', '4', true)
            .addField('Last Game Played', '920', true)
            .addField('Current Win Streak', '2', true)
            .addField('Longest Win Streak', '4', true)
            .addField('Win Percentage', '*52.38%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• lolsoda777 •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Yoshi#0915 `Wins: 42 | Losses: 9 | Games Played: 13 | EXP: 66/105 | Level: 7`
    if(command === 'Yoshi') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '42', true)
            .addField('Losses', '9', true)
            .addField('Games Played', '13', true)
            .addField('League Experience', '66/105', true)
            .addField('Level', '7', true)
            .addField('Win Percentage', '*82.35%*', true)
            .addField('Last Game Played', '707')

            .setFooter('•|• Yoshi •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@YOYO4230#7170 `Wins: 79 | Losses: 137 | Games Played: 46 | EXP: 91/105 | Level: 7`
    if(command === 'YOYO') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '79', true)
            .addField('Losses', '137', true)
            .addField('Games Played', '46', true)
            .addField('League Experience', '91/105', true)
            .addField('Level', '7', true)
            .addField('Win Percentage', '*36.57%*', true)
            .addField('Last Game Played', '682')

            .setFooter('•|• YOYO •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@ZeMastar#1142 `Wins: 4 | Losses: 11 | Games Played: 3 | EXP: 4/9 | Level: 2`
    if(command === 'Ze_Mastar') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '4', true)
            .addField('Losses', '11', true)
            .addField('Games Played', '3', true)
            .addField('League Experience', '4/9', true)
            .addField('Level', '2', true)
            .addField('Last Game Played', '727', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '3', true)
            .addField('Win Percentage', '*26.66%*', true)

            .setFooter('•|• Ze_Mastar •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@zeskies#5441 `Wins: 19 | Losses: 8 | Games Played: 6 | EXP: 26/40 | Level: 5`
    if(command === 'zeskies') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '19', true)
            .addField('Losses', '8', true)
            .addField('Games Played', '6', true)
            .addField('League Experience', '26/40', true)
            .addField('Level', '4', true)
            .addField('Last Game Played', '805', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '9', true)
            .addField('Win Percentage', '*70.37%*', true)

            .setFooter('•|• zeskies •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@zickbagg#7982 `Wins: 55 | Losses: 68 | Games Played: 24 | League EXP: 55/65 | Level: 6`
    if(command === 'zickbagg') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '55', true)
            .addField('Losses', '68', true)
            .addField('Games Played', '24', true)
            .addField('League Experience', '55/65', true)
            .addField('Level', '6', true)
            .addField('Last Game Played', '964', true)
            .addField('Current Win Streak', '2', true)
            .addField('Longest Win Streak', '5', true)
            .addField('Win Percentage', '*44.71%*', true)

            .addField('Chieftain', '<:chieftain:320176909927579648>', true)

            .setFooter('•|• zickbagg •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };

/*Civilization Leaders*/
    if(command === '-Victoria' || command === '-victoria') {
        let p = new Discord.RichEmbed()
            .addField('•|• Victoria of the English Empire •|•', '<:england:319148263900971008> **The Sunset never Sets!**', true)
            
            .addField('Pax Britannica', '*All settled or conquered cities on a continent other than your home continent receive a free melee unit. Gain the **Redcoat** unit when the Military Science is researched.*')
            .addField('-- • -- • -- • -- • -- • -- • -- • --', '•|• **__Unique Units__** •|•')
            .addField('Red Coat', '*Industrial Era Melee unit that has\n+10 Combat Strength\nwhen fighting on a different\ncontinent foreign to your home.\nNo disembark costs.\n  •**Production:** 340\n  •**Combat Strength:** 65\n  •**Base Movement:** 2*', true)
            .addField('Sea Dog', '*Renaissance Era Naval unit that can\ncapture enemy ships.\nCannot be seen,\nunless adjacent to it.\n(Replaces: Privateer).\n  •**Production:** 280\n  •**Combat Strength:** 40\n  •**Ranged Combat Strength:** 50\n  •**Base Movement:** 4*', true)
            .addField('-- • -- • -- • -- • -- • -- • -- • --', '•|• **__Unique Districts__** •|•')
            .addField('Royal Navy Dockyard', '*Naval activity with no embark\npenalties to land units.\n(Replaces: Harbor).*\n  •**+1 Movement to Ships**\n  •**+2 Gold on Foreign Land**\n  •**+1 Trader Route Capacity**', true)

            .setFooter('•|• Victoria of the English Empire •|•')
            .setColor(0xff0000)
        message.channel.sendEmbed(p);
    };
});
CivLeagueStats.login(Config.tokens.StatsBot);

/*
0x77FF82
            .addField('Warlord', '<:warlord:319931261894524928>', true)
0x0C5B80 
            .addField('Chieftain', '<:chieftain:320176909927579648>', true)

            .addField('Solid Host', '⍟', true)

    if(command === '') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '', true)
            .addField('Losses', '', true)
            .addField('Games Played', '', true)
            .addField('League Experience', '/', true)
            .addField('Level', '', true)
            .addField('Last Game Played', '', true)
            .addField('Current Win Streak', '', true)
            .addField('Longest Win Streak', '', true)
            .addField('Win Percentage', '*%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|•  •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
*/