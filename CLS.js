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

    let command = message.content;
    command = command.slice(Config.ast.length);

/*  --  Player List  --  */
//Admin
//@© • Song Adieu#6276 `Wins: 540 | Losses: 231 | Games Played: 190 | League EXP: 1,267/1,230 | Level: 18`
    if(command === '© • Song Adieu') {
        let p = new Discord.RichEmbed()
.addField('Wins', '540', true)
.addField('Losses', '231', true)
.addField('Games Played', '190', true)
.addField('League Experience', '1,267/1,230', true)
.addField('Level', '18', true)
.addField('Last Game Played', '1,790', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '32', true)
.addField('Win Percentage', '*70.03%*', true)

.addField('Admin', '<:admin:319920680349204483>', true)
.addField('Warlord', '<:warlord:319931261894524928>', true)
.addField('Solid Host', '⍟', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• © • 𝖘𝖔𝖓𝖌 𝖆𝖉𝖎𝖊𝖚 - "Check out the #forms Channel" •|•')
.setColor(0xB16EFE)
        message.channel.sendEmbed(p);
    };
//@alimora#2131 `Wins: 132 | Losses: 70 | Games Played: 43 | League EXP: 324/380 | Level: 10`
    if(command === 'Deavill') {
        let p = new Discord.RichEmbed()
.addField('Wins', '132', true)
.addField('Losses', '70', true)
.addField('Games Played', '43', true)
.addField('League Experience', '324/380', true)
.addField('Level', '10', true)
.addField('Last Game Played', '1,770', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '15', true)
.addField('Win Percentage', '*65.34%*', true)

.addField('Admin', '<:admin:319920680349204483>', true)
.addField('Chieftain', '<:chieftain:320176909927579648>', true)
.addField('Solid Host', '⍟', true)

.addField('Location', ':flag_nl: • Netherlands')

.setFooter('•|• Deavill •|•')
.setColor(0xB16EFE)
        message.channel.sendEmbed(p);
    };
//@allfalldown#3126 `Wins: 155 | Losses: 257 | Games Played: 83 | League EXP: 201/275 | Level: 9`
    if(command === 'allfalldown') {
        let p = new Discord.RichEmbed()
.addField('Wins', '155', true)
.addField('Losses', '257', true)
.addField('Games Played', '83', true)
.addField('League Experience', '201/275', true)
.addField('Level', '9', true)
.addField('Last Game Played', '1,742', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '5', true)
.addField('Win Percentage', '*37.62%*', true)

.addField('Admin', '<:admin:319920680349204483>', true)
.addField('Chieftain', '<:chieftain:320176909927579648>', true)
.addField('Solid Host', '⍟', true)

.addField('Location', ':flag_ca: • Canada')

.setFooter('•|• allfalldown •|•')
.setColor(0xB16EFE)
        message.channel.sendEmbed(p);
    };
//@Bubbles#6428 `Wins: 82 | Losses: 63 | Games Played: 29 | League EXP: 105/170 | Level: 8`
    if(command === 'Bubbles') {
        let p = new Discord.RichEmbed()
.addField('Wins', '82', true)
.addField('Losses', '63', true)
.addField('Games Played', '29', true)
.addField('League Experience', '105/170', true)
.addField('Level', '8', true)
.addField('Last Game Played', '1,731', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '8', true)
.addField('Win Percentage', '*56.55%*', true)

.addField('Admin', '<:admin:319920680349204483>', true)
.addField('Chieftain', '<:chieftain:320176909927579648>', true)
.addField('Solid Host', '⍟', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Bubbles •|•')
.setColor(0xB16EFE)
        message.channel.sendEmbed(p);
    };
//@Justifier#7095 `Wins: 353 | Losses: 63 | Games Played: 88 | League EXP: 891/905 | Level: 15`
    if(command === 'Justifier') {
        let p = new Discord.RichEmbed()
.addField('Wins', '353', true)
.addField('Losses', '63', true)
.addField('Games Played', '88', true)
.addField('Level', '15', true)
.addField('League Experience', '891/905', true)
.addField('Last Game Played', '1,458', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '33', true)
.addField('Win Percentage', '*84.85%*', true)

.addField('Admin', '<:admin:319920680349204483>', true)
.addField('Warlord', '<:warlord:319931261894524928>', true)
.addField('Solid Host', '⍟', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Justifier - "Knowledge is a Weapon. Arm yourselves before going into Battle" - George R.R. Martin •|•')
.setDescription("[Watch my Twitch!](https://www.twitch.tv/justifiert)")
.setColor(0xB16EFE)
        message.channel.sendEmbed(p);
    };
//@JackoV#4908 `Wins: 123 | Losses: 77 | Games Played: 42 | League EXP: 146/170 | Level: 8`
    if(command === 'JackoV') {
        let p = new Discord.RichEmbed()
.addField('Wins', '123', true)
.addField('Losses', '77', true)
.addField('Games Played', '42', true)
.addField('League Experience', '146/170', true)
.addField('Level', '8', true)
.addField('Last Game Played', '1,577', true)
.addField('Current Win Streak', '12', true)
.addField('Longest Win Streak', '14', true)
.addField('Win Percentage', '*61.50%*', true)

.addField('Admin', '<:admin:319920680349204483>', true)
.addField('Chieftain', '<:chieftain:320176909927579648>', true)
.addField('Solid Host', '⍟', true)

.addField('Location', ':flag_hk: • Hong Kong')

.setFooter('•|• JackoV™ •|•')
.setColor(0xB16EFE)
        message.channel.sendEmbed(p);
    };
//@ToMbraider#6882 `Wins: 445 | Losses: 323 | Games Played: 163 | League EXP: 682/695 | Level: 13`
    if(command === 'TomBraider') {
        let p = new Discord.RichEmbed()
.setAuthor('TomBraider')
.addField('Wins', '445', true)
.addField('Losses', '323', true)
.addField('Games Played', '163', true)
.addField('League Experience', '682/695', true)
.addField('Level', '13', true)
.addField('Last Game Played', '1,788', true)
.addField('Current Win Streak', '6', true)
.addField('Longest Win Streak', '31', true)
.addField('Win Percentage', '*57.94%*', true)

.addField('Admin', '<:admin:319920680349204483>', true)
.addField('Warlord', '<:warlord:319931261894524928>', true)

.addField('Location', ':flag_gb: • England')

.setFooter('•|• TomBraider - "Is it Tom or Tomb?" •|•')
.setColor(0xB16EFE)
        message.channel.sendEmbed(p);
    };

//Moderator
//@DESTROYER#9361 `Wins: 143 | Losses: 115 | Games Played: 57 | League EXP: 271/275 | Level: 9`
    if(command === 'Destroyer') {
        let p = new Discord.RichEmbed()
.addField('Wins', '143', true)
.addField('Losses', '115', true)
.addField('Games Played', '57', true)
.addField('League Experience', '271/275', true)
.addField('Level', '9', true)
.addField('Last Game Played', '1,684', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '24', true)
.addField('Win Percentage', '*55.42%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)
.addField('Solid Host', '⍟', true)

.addField('Location', ':flag_ge: • Georgia')
.addField('Languages', '•English\n•Russian')

.setFooter('•|• Destroyer •|•')
.setColor(0xC665C1)
        message.channel.sendEmbed(p);
    };//@InfernoArcine#1189 `Wins: 53 | Losses: 69 | Games Played: 30 | League EXP: 66/105 | Level: 7`
    if(command === 'InfernoArcine') {
        let p = new Discord.RichEmbed()
.addField('Wins', '53', true)
.addField('Losses', '69', true)
.addField('Games Played', '30', true)
.addField('League Experience', '66/105', true)
.addField('Level', '7', true)
.addField('Last Game Played', '1,600', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '6', true)
.addField('Win Percentage', '*43.44%*', true)

.addField('Moderator', '<:moderator:319920680546205698>', true)
.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• InfernoArcine •|•')
.setColor(0xC665C1)
        message.channel.sendEmbed(p);
    };//@Mason  (NotMason)#8215 `Wins: 21 | Losses: 45 | Games Played: 17 | League EXP: 29/40 | Level: 5`
    if(command === 'NotMason') {
        let p = new Discord.RichEmbed()
.addField('Wins', '21', true)
.addField('Losses', '45', true)
.addField('Games Played', '17', true)
.addField('League Experience', '29/40', true)
.addField('Level', '5', true)
.addField('Last Game Played', '1,771', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '7', true)
.addField('Win Percentage', '*31.81%*', true)

.addField('Moderator', '<:moderator:319920680546205698>', true)
.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')
.addField('Languages', '•English\n•Spanish')

.setFooter('•|• NotMason •|•')
.setColor(0xC665C1)
        message.channel.sendEmbed(p);
    };
//@Vindex#3265 `Wins: 72 | Losses: 69 | Games Played: 28 | League EXP: 84/105 | Level: 7`
    if(command === 'Vindex') {
        let p = new Discord.RichEmbed()
.addField('Wins', '72', true)
.addField('Losses', '69', true)
.addField('Games Played', '28', true)
.addField('League Experience', '84/105', true)
.addField('Level', '7', true)
.addField('Last Game Played', '1,529', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '14', true)
.addField('Win Percentage', '*51.06%*', true)

.addField('Moderator', '<:moderator:319920680546205698>', true)
.addField('Chieftain', '<:chieftain:320176909927579648>', true)
.addField('Solid Host', '⍟', true)

.addField('Location', ':flag_es: • Spain')
.addField('Languages', '•English\n•Spanish')

.setFooter('•|• Vindex •|•')
.setColor(0xC665C1)
        message.channel.sendEmbed(p);
    };

//Valued Member
/*@Arki#6925 `Wins: 144 | Losses: 106 | Games Played: 119 | League EXP: 368/380 | Level: 10`
Player Stats Reset: 06.07.17
*/
    if(command === 'Arki') {
        let p = new Discord.RichEmbed()
.addField('Wins', '144', true)
.addField('Losses', '106', true)
.addField('Games Played', '119', true)
.addField('League Experience', '368/380', true)
.addField('Level', '10', true)
.addField('Last Game Played', '1,782', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '19', true)
.addField('Win Percentage', '*57.60%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)
.addField('Valued Player', '⭐', true)

.addField('Location', ':flag_us: • America')

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

.addField('Location', ':flag_us: • America')

.setFooter('•|• CIVegas •|•')
.setColor(0x42FF00)
        message.channel.sendEmbed(p);
    };
//@General (Desert Fox)#0453 `Wins: 369 | Losses: 266 | Games Played: 146 | League EXP: 512/590 | Level: 12`
    if(command === 'GeneralDesertFox') {
        let p = new Discord.RichEmbed()
.addField('Wins', '369', true)
.addField('Losses', '266', true)
.addField('Games Played', '146', true)
.addField('League Experience', '512/590', true)
.addField('Level', '12', true)
.addField('Last Game Played', '1,785', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '19', true)
.addField('Win Percentage', '*58.11%*', true)

.addField('Warlord', '<:warlord:319931261894524928>', true)
.addField('Valued Player', '⭐', true)

.addField('Incidents Reported:', '•**Raging Barbarian:** 1')

.addField('Location', ':flag_us: • America')

.setFooter('•|• General (Desert Fox) •|•')
.setColor(0x42FF00)
        message.channel.sendEmbed(p);
    };
//@groove#8337 `Wins: 398 | Losses: 463 | Games Played: 185 | League EXP: 549/590 | Level: 12`
    if(command === 'groovedrift') {
        let p = new Discord.RichEmbed()
.addField('Wins', '398', true)
.addField('Losses', '463', true)
.addField('Games Played', '185', true)
.addField('League Experience', '549/590', true)
.addField('Level', '12', true)
.addField('Last Game Played', '1,769', true)
.addField('Current Win Streak', '6', true)
.addField('Longest Win Streak', '26', true)
.addField('Win Percentage', '*46.22%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)
.addField('Valued Player', '⭐', true)

.addField('Location', ':flag_no: • Norway')

.setFooter('•|• groovedrift •|•')
.setColor(0x42FF00)
        message.channel.sendEmbed(p);
    };//@LITCH#1727 `Wins: 208 | Losses: 125 | Games Played: 69 | League EXP: 310/380 | Level: 10`
    if(command === 'LITCH') {
        let p = new Discord.RichEmbed()
.addField('Wins', '208', true)
.addField('Losses', '125', true)
.addField('Games Played', '69', true)
.addField('League Experience', '310/380', true)
.addField('Level', '10', true)
.addField('Last Game Played', '1,789', true)
.addField('Current Win Streak', '15', true)
.addField('Longest Win Streak', '18', true)
.addField('Win Percentage', '*62.46%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)
.addField('Valued Player', '⭐', true)

.addField('Location', ':flag_ca:')

.setFooter('•|• LITCH •|•')
.setColor(0x42FF00)
        message.channel.sendEmbed(p);
    };
//@maidy#3412 `Wins: 27 | Losses: 85 | Games Played: 22 | League EXP: 30/40 | Level: 5`
    if(command === 'maidy') {
        let p = new Discord.RichEmbed()
.addField('Wins', '27', true)
.addField('Losses', '85', true)
.addField('Games Played', '22', true)
.addField('League Experience', '30/40', true)
.addField('Level', '4', true)
.addField('Last Game Played', '1,266', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '5', true)
.addField('Win Percentage', '*24.10%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)
.addField('Valued Player', '⭐', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• maidy •|•')
.setColor(0x42FF00)
        message.channel.sendEmbed(p);
    };
//@mike#3166 `Wins: 375 | Losses: 217 | Games Played: 135 | League EXP: 610/695 | Level: 13`
    if(command === 'lmikel1337') {
        let p = new Discord.RichEmbed()
.addField('Wins', '375', true)
.addField('Losses', '217', true)
.addField('Games Played', '133', true)
.addField('League Experience', '610/695', true)
.addField('Level', '13', true)
.addField('Last Game Played', '1,760', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '18', true)
.addField('Win Percentage', '*63.34%*', true)

.addField('Warlord', '<:warlord:319931261894524928>', true)
.addField('Valued Player', '⭐', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• lmikel1337 •|•')
.setColor(0x42FF00)
        message.channel.sendEmbed(p);
    };
//@MisterT800#9106 `Wins: 137 | Losses: 137 | Games Played: 55 | League EXP: 187/275 | Level: 9`
    if(command === 'MisterT800') {
        let p = new Discord.RichEmbed()
.addField('Wins', '137', true)
.addField('Losses', '137', true)
.addField('Games Played', '55', true)
.addField('League Experience', '187/275', true)
.addField('Level', '9', true)
.addField('Last Game Played', '1,702', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '14', true)
.addField('Win Percentage', '*50.00%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)
.addField('Valued Player', '⭐', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• MisterT800 •|•')
.setColor(0x42FF00)
        message.channel.sendEmbed(p);
    };
//@Mnenomic#1538 `Wins: 131 | Losses: 197 | Games Played: 65 | League EXP: 141/170 | Level: 8`
    if(command === 'Mnenomic') {
        let p = new Discord.RichEmbed()
.addField('Wins', '131', true)
.addField('Losses', '197', true)
.addField('Games Played', '65', true)
.addField('League Experience', '141/170', true)
.addField('Level', '8', true)
.addField('Last Game Played', '1,517', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '9', true)
.addField('Win Percentage', '*39.93%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)
.addField('Solid Host', '⍟', true)
.addField('Valued Player', '⭐', true)

.addField('Location', ':flag_ye: • The Netherlands')

.setFooter('•|• Mnenomic •|•')
.setColor(0x42FF00)
        message.channel.sendEmbed(p);
    };
//@MrGtheFox#6511 `Wins: 86 | Losses: 36 | Games Played: 25 | League EXP: 136/170 | Level: 8`
    if(command === 'MrGtheFox') {
        let p = new Discord.RichEmbed()
.addField('Wins', '86', true)
.addField('Losses', '36', true)
.addField('Games Played', '25', true)
.addField('League Experience', '136/170', true)
.addField('Level', '8', true)
.addField('Last Game Played', '1,696', true)
.addField('Current Win Streak', '4', true)
.addField('Longest Win Streak', '19', true)
.addField('Win Percentage', '*70.49%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)
.addField('Solid Host', '⍟', true)
.addField('Valued Player', '⭐', true)

.addField('Location', ':flag_de: • Germany')

.setFooter('•|• MrGtheFox •|•')
.setColor(0x42FF00)
        message.channel.sendEmbed(p);
    };
//@TheDonKillum#8936 `Wins: 133 | Losses: 163 | Games Played: 61 | League EXP: 141/170 | Level: 8`
    if(command === 'TheDonKillum') {
        let p = new Discord.RichEmbed()
.addField('Wins', '133', true)
.addField('Losses', '163', true)
.addField('Games Played', '61', true)
.addField('League Experience', '141/170', true)
.addField('Level', '8', true)
.addField('Last Game Played', '1,785', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '12', true)
.addField('Win Percentage', '*44.93%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)
.addField('Valued Player', '⭐', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• TheDonKillum •|•')
.setColor(0x42FF00)
        message.channel.sendEmbed(p);
    };

//Barbarian
//@忍野·忍#8502 `Wins: 7 | Losses: 15 | Games Played: 4 | League EXP: 7/9 | Level: 2`
    if(command === 'Sayaforever') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '7', true)
            .addField('Losses', '15', true)
            .addField('Games Played', '4', true)
            .addField('League Experience', '7/9', true)
            .addField('Level', '2', true)
            .addField('Last Game Played', '1,159', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '3', true)
            .addField('Win Percentage', '*31.81%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Sayaforever •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@白甲#0681 `Wins: 333 | Losses: 151 | Games Played: 101 | League EXP: 527/590 | Level: 12`
    if(command === '114') {
        let p = new Discord.RichEmbed()
.addField('Wins', '333', true)
.addField('Losses', '151', true)
.addField('Games Played', '101', true)
.addField('League Experience', '527/590', true)
.addField('Level', '12', true)
.addField('Last Game Played', '1,461', true)
.addField('Current Win Streak', '24', true)
.addField('Longest Win Streak', '34', true)
.addField('Win Percentage', '*68.80%*', true)

.addField('Warlord', '<:warlord:319931261894524928>', true)

.addField('Location', ':flag_ch: • China')

.setFooter('•|• 114 •|•')
.setColor(0x77FF82)
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
//@[BOBAS] Peter Jenko#7281 `Wins: 256 | Losses: 84 | Games Played: 73 | League EXP: 473/485 | Level: 11`
    if(command === 'cvoky24') {
        let p = new Discord.RichEmbed()
.addField('Wins', '256', true)
.addField('Losses', '84', true)
.addField('Games Played', '73', true)
.addField('League Experience', '473/485', true)
.addField('Level', '11', true)
.addField('Last Game Played', '1,741', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '21', true)
.addField('Win Percentage', '*75.29%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_hk: • Hong Kong')

.setFooter('•|• cvoky24 •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@[EPIC]CowGoMoo#1228 `Wins: 63 | Losses: 32 | Games Played: 20 | League EXP: 100/105 | Level: 7`
    if(command === '[EPIC]CowGoMoo') {
        let p = new Discord.RichEmbed()
.addField('Wins', '63', true)
.addField('Losses', '32', true)
.addField('Games Played', '20', true)
.addField('League Experience', '100/105', true)
.addField('Level', '7', true)
.addField('Last Game Played', '1,782', true)
.addField('Current Win Streak', '6', true)
.addField('Longest Win Streak', '10', true)
.addField('Win Percentage', '*66.31%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• [EPIC]CowGoMoo •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@[STHMC] Robotronix#2422 `Wins: 7 | Losses: 11 | Games Played: 3 | League EXP: 7/9 | Level: 2`
    if(command === 'Robotronix') {
        let p = new Discord.RichEmbed()
.addField('Wins', '7', true)
.addField('Losses', '11', true)
.addField('Games Played', '3', true)
.addField('League Experience', '7/9', true)
.addField('Level', '2', true)
.addField('Last Game Played', '1,217', true)
.addField('Current Win Streak', '6', true)
.addField('Longest Win Streak', '6', true)
.addField('Win Percentage', '*38.88%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Robotronix •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@1h8u#0954 `Wins: 0 | Losses: 5 | Games Played: 1 | League EXP: 0/4 | Level: 0`
    if(command === '1h8u') {
        let p = new Discord.RichEmbed()
.addField('Wins', '0', true)
.addField('Losses', '5', true)
.addField('Games Played', '1', true)
.addField('League Experience', '0/4', true)
.addField('Level', '0', true)
.addField('Last Game Played', '1,524', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '0', true)
.addField('Win Percentage', '*0.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• 1h8u •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@81Mark#3537 `Wins: 4 | Losses: 1 | Games Played: 1 | League EXP: 4/9 | Level: 2`
    if(command === '81Mark') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '4', true)
            .addField('Losses', '1', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '4/9', true)
            .addField('Level', '2', true)
            .addField('Last Game Played', '970', true)
            .addField('Current Win Streak', '4', true)
            .addField('Longest Win Streak', '4', true)
            .addField('Win Percentage', '*80.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• 81Mark •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//ryan7#1404 `Wins: 219 | Losses: 341 | Games Played: 121 | League EXP: 243/275 | Level: 9`
    if(command === 'ryan7') {
        let p = new Discord.RichEmbed()
.addField('Wins', '219', true)
.addField('Losses', '341', true)
.addField('Games Played', '121', true)
.addField('League Experience', '243/275', true)
.addField('Level', '9', true)
.addField('Last Game Played', '1,784', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '9', true)
.addField('Win Percentage', '*39.10%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_ca: • Canada')

.setFooter('•|• ryan7 •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@ABuATOP#5737 `Wins: 21 | Losses: 60 | Games Played: 16 | League EXP: 21/25 | Level: 4`
    if(command === 'ABuATOP') {
        let p = new Discord.RichEmbed()
.addField('Wins', '21', true)
.addField('Losses', '60', true)
.addField('Games Played', '16', true)
.addField('League Experience', '21/25', true)
.addField('Level', '4', true)
.addField('Last Game Played', '1,580', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '5', true)
.addField('Win Percentage', '*25.92%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_ru: • Russia')

.setFooter('•|• ABuATOP •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@adamas#0476 `Wins: 4 | Losses: 7 | Games Played: 2 | League EXP: 4/9| Level: 2`
    if(command === 'adamas') {
        let p = new Discord.RichEmbed()
.addField('Wins', '4', true)
.addField('Losses', '7', true)
.addField('Games Played', '2', true)
.addField('League Experience', '4/9', true)
.addField('Level', '2', true)
.addField('Last Game Played', '1,698', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '3', true)
.addField('Win Percentage', '*36.36%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_ru: • Russia')

.setFooter('•|• •adamas• •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Aeon#5292 `Wins: 6 | Losses: 9 | Games Played: 3 | League EXP: 18/25 | Level: 4`
    if(command === 'Aeon') {
        let p = new Discord.RichEmbed()
.addField('Wins', '6', true)
.addField('Losses', '9', true)
.addField('Games Played', '3', true)
.addField('League Experience', '18/25', true)
.addField('Level', '4', true)
.addField('Last Game Played', '1,540', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '5', true)
.addField('Win Percentage', '*40.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Aeon •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Agemendon#1979 `Wins: 13 | Losses: 23 | Games Played: 6 | League EXP: 13/16 | Level: 3`
    if(command === 'Agemendon') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '13', true)
            .addField('Losses', '23', true)
            .addField('Games Played', '6', true)
            .addField('League Experience', '13/16', true)
            .addField('Level', '3', true)
            .addField('Last Game Played', '1,085', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '4', true)
            .addField('Win Percentage', '*36.11%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

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
//@Akela#6624 `Wins: 29 | Losses: 18 | Games Played: 10 | League EXP: 36/40 | Level: 5`
    if(command === 'Akela') {
        let p = new Discord.RichEmbed()
.addField('Wins', '29', true)
.addField('Losses', '18', true)
.addField('Games Played', '10', true)
.addField('League Experience', '36/40', true)
.addField('Level', '5', true)
.addField('Last Game Played', '1,790', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '7', true)
.addField('Win Percentage', '*61.70%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Akela •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@al'mog#6286 `Wins: 1 | Losses: 8 | Games Played: 2 | League EXP: 1/4 | Level: 1`
    if(command === "al'mog") {
        let p = new Discord.RichEmbed()
.addField('Wins', '1', true)
.addField('Losses', '8', true)
.addField('Games Played', '2', true)
.addField('League Experience', '1/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,659', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '1', true)
.addField('Win Percentage', '*11.11%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Incidents Reported:', '•**Quitting Barbarian:** 1')

.addField('Location', ':flag_us: • America')

.setFooter("•|• al'mog •|•")
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@aletupapi007#5094 `Wins: 46 | Losses: 73 | Games Played: 25 | League EXP: 54/65 | Level: 6`
    if(command === 'alejandro725050') {
        let p = new Discord.RichEmbed()
.addField('Wins', '46', true)
.addField('Losses', '73', true)
.addField('Games Played', '25', true)
.addField('League Experience', '54/65', true)
.addField('Level', '6', true)
.addField('Last Game Played', '1,782', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '11', true)
.addField('Win Percentage', '*38.65%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• alejandro725050 •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@alex_c_cc_#9497 `Wins: 27 | Losses: 40 | Games Played: 16 | League EXP: 64/65 | Level: 6`
    if(command === 'alex_c_cc_') {
        let p = new Discord.RichEmbed()
.addField('Wins', '27', true)
.addField('Losses', '40', true)
.addField('Games Played', '16', true)
.addField('League Experience', '64/65', true)
.addField('Level', '6', true)
.addField('Last Game Played', '1,790', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '5', true)
.addField('Win Percentage', '*40.29%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• alex_c_cc_ •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@alexanderpaulk - INFP-T#0756 `Wins: 14 | Losses: 21 | Games Played: 7 | League EXP: 14/16 | Level: 3`
    if(command === 'zerkoo77') {
        let p = new Discord.RichEmbed()
.addField('Wins', '14', true)
.addField('Losses', '21', true)
.addField('Games Played', '7', true)
.addField('League Experience', '14/16', true)
.addField('Level', '3', true)
.addField('Last Game Played', '1,568', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '4', true)
.addField('Win Percentage', '*40.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• zerkoo77 •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@AlexKnay#9451 `Wins: 2 | Losses: 13 | Games Played: 3 | League EXP: 2/4 | Level: 1`
    if(command === 'AlexKnay') {
        let p = new Discord.RichEmbed()
.addField('Wins', '2', true)
.addField('Losses', '13', true)
.addField('Games Played', '3', true)
.addField('League Experience', '2/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,672', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '1', true)
.addField('Win Percentage', '*13.33%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_ch: • China')

.setFooter('•|• AlexKnay •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Alien Z#8331 `Wins: 0 | Losses: 5 | Games Played: 1 | League EXP: 0/4 | Level: 0`
    if(command === 'AlienZ') {
        let p = new Discord.RichEmbed()
.addField('Wins', '0', true)
.addField('Losses', '5', true)
.addField('Games Played', '1', true)
.addField('League Experience', '0/4', true)
.addField('Level', '0', true)
.addField('Last Game Played', '1,191', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '0', true)
.addField('Win Percentage', '*0.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Incidents Reported:', '•**Raging Barbarian:** 1')

.addField('Location', ':flag_us: • America')

.setFooter('•|• Alien Z •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@rick#4845 `Wins: 50 | Losses: 62 | Games Played: 24 | League EXP: 70/105 | Level: 7`
    if(command === 'rickgraims') {
        let p = new Discord.RichEmbed()
.addField('Wins', '50', true)
.addField('Losses', '62', true)
.addField('Games Played', '24', true)
.addField('League Experience', '70/105', true)
.addField('Level', '7', true)
.addField('Last Game Played', '1,659', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '9', true)
.addField('Win Percentage', '*44.64%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.setFooter('•|• rickgraims •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Altec#1393 `Wins: 0| Losses: 6 | Games Played: 1 | League EXP: 0/4 | Level: 0`
    if(command === 'Altec') {
        let p = new Discord.RichEmbed()
.addField('Wins', '0', true)
.addField('Losses', '6', true)
.addField('Games Played', '1', true)
.addField('League Experience', '0/4', true)
.addField('Level', '0', true)
.addField('Last Game Played', '1,389', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '0', true)
.addField('Win Percentage', '*0.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Altec •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@alvtillas#0886 `Wins: 39 | Losses: 59 | Games Played: 19 | League EXP: 53/65 | Level: 6`
    if(command === 'alvtillas') {
        let p = new Discord.RichEmbed()
.addField('Wins', '39', true)
.addField('Losses', '59', true)
.addField('Games Played', '19', true)
.addField('League Experience', '59/65', true)
.addField('Level', '6', true)
.addField('Last Game Played', '1,778', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '8', true)
.addField('Win Percentage', '*39.79%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Incidents Reported:', '•**Quitting Barbarian:** 2')

.addField('Location', ':flag_us: • America')

.setFooter('•|• alvtillas •|•')
.setColor(0x0C5B80)
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
//@AmalgamSnow#4351 `Wins: 6 | Losses: 8 | Games Played: 3 | League EXP: 6/9 | Level: 2`
    if(command === 'AmalgamSnow') {
        let p = new Discord.RichEmbed()
.addField('Wins', '6', true)
.addField('Losses', '8', true)
.addField('Games Played', '3', true)
.addField('League Experience', '6/9', true)
.addField('Level', '2', true)
.addField('Last Game Played', '1,768', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '3', true)
.addField('Win Percentage', '*42.85%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• AmalgamSnow •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@AN1B4L#0370 `Wins: 239 | Losses: 167 | Games Played: 87 | League EXP: 361/380 | Level: 10`
    if(command === 'AN1B4L') {
        let p = new Discord.RichEmbed()
.addField('Wins', '239', true)
.addField('Losses', '167', true)
.addField('Games Played', '87', true)
.addField('League Experience', '361/380', true)
.addField('Level', '10', true)
.addField('Last Game Played', '1,777', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '24', true)
.addField('Win Percentage', '*58.86%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)
.addField('Solid Host', '⍟', true)

.addField('Incidents Reported:', '•**Raging Barbarian:** 1\n•**Quitting Barbarian:** 1*')

.addField('Location', ':flag_es: • Spain')

.setFooter('•|• AN1B4L •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Anachy#9254 `Wins: 44 | Losses: 31 | Games Played: 15 | League EXP: 48/65 | Level: 6`
    if(command === 'Anachy') {
        let p = new Discord.RichEmbed()
.addField('Wins', '44', true)
.addField('Losses', '31', true)
.addField('Games Played', '15', true)
.addField('League Experience', '48/65', true)
.addField('Level', '6', true)
.addField('Last Game Played', '1,424', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '8', true)
.addField('Win Percentage', '*58.66%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Anachy •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Anelit#9522 `Wins: 22 | Losses: 29 | Games Played: 10 | League EXP: 27/40 | Level: 5`
    if(command === 'Anelitlol') {
        let p = new Discord.RichEmbed()
.addField('Wins', '22', true)
.addField('Losses', '29', true)
.addField('Games Played', '10', true)
.addField('League Experience', '27/40', true)
.addField('Level', '5', true)
.addField('Last Game Played', '1,279', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '7', true)
.addField('Win Percentage', '*43.13%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Anelitlol •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Angry Scientist#6597 `Wins: 314 | Losses: 133 | Games Played: 91 | League EXP: 494/590 | Level: 12`
    if(command === 'AngryScientist') {
        let p = new Discord.RichEmbed()
.addField('Wins', '314', true)
.addField('Losses', '133', true)
.addField('Games Played', '91', true)
.addField('League Experience', '494/590', true)
.addField('Level', '12', true)
.addField('Last Game Played', '1,716', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '30', true)
.addField('Win Percentage', '*70.24%*', true)

.addField('Warlord', '<:warlord:319931261894524928>', true)
.addField('Solid Host', '⍟', true)

.addField('Incidents Reported:', '•**Abusive Barbarian:** 1\n•**Quitting Barbarian:** 1\n•**Uncivilized Barbarian:** 1')

.addField('Location', ':flag_us: • America')

.setFooter('•|• Angry Scientist •|•')
.setColor(0x77FF82)
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
//@Annie#2025 `Wins: 2 | Losses: 3 | Games Played: 1 | League EXP: 2/4 | Level: 1`
    if(command === 'Annie') {
        let p = new Discord.RichEmbed()
.addField('Wins', '2', true)
.addField('Losses', '3', true)
.addField('Games Played', '1', true)
.addField('League Experience', '2/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,298', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '2', true)
.addField('Win Percentage', '*40.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Annie •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Anooingr#8243 `Wins: 2 | Losses: 15 | Games Played: 3 | League EXP: 2/4 | Level: 1`
    if(command === 'Anooingr') {
        let p = new Discord.RichEmbed()
.addField('Wins', '2', true)
.addField('Losses', '15', true)
.addField('Games Played', '3', true)
.addField('League Experience', '2/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,224', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '1', true)
.addField('Win Percentage', '*11.76%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Incidents Reported:', '•**Quitting Barbarian:** 1')

.addField('Location', ':flag_us: • America')

.setFooter('•|• Anooingr •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Antoine185 - FxYuki#6919 `Wins: 9 | Losses: 1 | Games Played: 2 | League EXP: 32/40 | Level: 5`
    if(command === 'FxYu') {
        let p = new Discord.RichEmbed()
.addField('Wins', '9', true)
.addField('Losses', '1', true)
.addField('Games Played', '2', true)
.addField('League Experience', '32/40', true)
.addField('Level', '5', true)
.addField('Last Game Played', '1,780', true)
.addField('Current Win Streak', '6', true)
.addField('Longest Win Streak', '6', true)
.addField('Win Percentage', '*90.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• FxYu •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Antonescu#0117 `Wins: 10 | Losses: 1 | Games Played: 2 | League EXP: 12/16 | Level: 3`
    if(command === 'Antonescu') {
        let p = new Discord.RichEmbed()
.addField('Wins', '10', true)
.addField('Losses', '1', true)
.addField('Games Played', '2', true)
.addField('League Experience', '12/16', true)
.addField('Level', '3', true)
.addField('Last Game Played', '1,370', true)
.addField('Current Win Streak', '10', true)
.addField('Longest Win Streak', '10', true)
.addField('Win Percentage', '*90.90%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Antonescu •|•')
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
.addField('Last Game Played', '676', true)
.addField('Current Win Streak', '7', true)
.addField('Longest Win Streak', '7', true)
.addField('Win Percentage', '*70.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• ApolloStriker •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@apriolo#9301 `Wins: 22 | Losses: 6 | Games Played: 6 | League EXP: 32/40 | Level: 5`
    if(command === 'apriolo') {
        let p = new Discord.RichEmbed()
.addField('Wins', '22', true)
.addField('Losses', '6', true)
.addField('Games Played', '6', true)
.addField('League Experience', '32/40', true)
.addField('Level', '5', true)
.addField('Last Game Played', '1,636', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '11', true)
.addField('Win Percentage', '*78.57%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• apriolo •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@ArcticSteelUK#4948 `Wins: 15 | Losses: 7 | Games Played: 4 | League EXP: 20/25 | Level: 4`
    if(command === 'ArcticSteelUK') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '15', true)
            .addField('Losses', '7', true)
            .addField('Games Played', '4', true)
            .addField('League Experience', '20/25', true)
            .addField('Level', '4', true)
            .addField('Last Game Played', '1,022', true)
            .addField('Current Win Streak', '3', true)
            .addField('Longest Win Streak', '5', true)
            .addField('Win Percentage', '*68.18%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• ArcticSteelUK •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Argieus#8803 `Wins: 32 | Losses: 24 | Games Played: 13 | League EXP: 45/65 | Level: 6`
    if(command === 'Argieus') {
        let p = new Discord.RichEmbed()
.addField('Wins', '32', true)
.addField('Losses', '24', true)
.addField('Games Played', '14', true)
.addField('League Experience', '45/65', true)
.addField('Level', '6', true)
.addField('Last Game Played', '1,366', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '14', true)
.addField('Win Percentage', '*57.14%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Argieus •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Arstarko#1417 `Wins: 2 | Losses: 3 | Games Played: 1 | League EXP: 2/4 | Level: 1`
    if(command === 'Arstarko') {
        let p = new Discord.RichEmbed()
.addField('Wins', '2', true)
.addField('Losses', '3', true)
.addField('Games Played', '1', true)
.addField('League Experience', '2/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,275', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '2', true)
.addField('Win Percentage', '*40.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Arstarko •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Arteagars77#8490 `Wins: 4 | Losses: 1 | Games Played: 1 | League EXP: 4/9 | Level: 2`
    if(command === 'poliku00') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '4', true)
            .addField('Losses', '1', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '4/9', true)
            .addField('Level', '2', true)
            .addField('Last Game Played', '966', true)
            .addField('Current Win Streak', '4', true)
            .addField('Longest Win Streak', '4', true)
            .addField('Win Percentage', '*80.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• poliku00 •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Artemis#2597 `Wins: 0 | Losses: 5 | Games Played: 1 | League EXP: 0/4 | Level: 0`
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
//@Aserfweg#7682 `Wins: 0 | Losses: 5 | Games Played: 1 | League EXP: 0/4 | Level: 0`
    if(command === 'Aserfweg') {
        let p = new Discord.RichEmbed()
.addField('Wins', '0', true)
.addField('Losses', '5', true)
.addField('Games Played', '1', true)
.addField('League Experience', '0/4', true)
.addField('Level', '0', true)
.addField('Last Game Played', '1,280', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '0', true)
.addField('Win Percentage', '*0.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Incidents Reported:', '•**Quitting Barbarian:** 1')

.addField('Location', ':flag_us: • America')

.setFooter('•|• Aserfweg •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@astroknutz#7178 `Wins: 13 | Losses: 22 | Games Played: 7 | League EXP: 13/16 | Level: 3`
    if(command === 'astroknutz') {
        let p = new Discord.RichEmbed()
.addField('Wins', '13', true)
.addField('Losses', '22', true)
.addField('Games Played', '7', true)
.addField('League Experience', '13/16', true)
.addField('Level', '3', true)
.addField('Last Game Played', '1,321', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '4', true)
.addField('Win Percentage', '*37.14%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• astroknutz •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@aslevuli#6629 `Wins: 99 | Losses: 120 | Games Played: 46 | League EXP: 103/105 | Level: 7`
    if(command === 'hannah') {
        let p = new Discord.RichEmbed()
.addField('Wins', '99', true)
.addField('Losses', '120', true)
.addField('Games Played', '46', true)
.addField('League Experience', '103/105', true)
.addField('Level', '7', true)
.addField('Last Game Played', '1,689', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '6', true)
.addField('Win Percentage', '*45.20%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)
.addField('Solid Host', '⍟', true)

.addField('Location', ':flag_us: • America')

.setFooter(`•|• hannah •|•`)
.setColor(0x0C5B80)
message.channel.sendEmbed(p);
    };
//@Atomation#2284 `Wins: 1 | Losses: 4 | Games Played: 1 | League EXP: 1/4 | Level: 1`
    if(command === 'Atomation') {
        let p = new Discord.RichEmbed()
.addField('Wins', '1', true)
.addField('Losses', '4', true)
.addField('Games Played', '1', true)
.addField('League Experience', '1/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,193', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '1', true)
.addField('Win Percentage', '*20.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Atomation •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@ATp32#7049 `Wins: 1 | Losses: 9 | Games Played: 2 | League EXP: 1/4 | Level: 1`
    if(command === 'ATp32') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '1', true)
            .addField('Losses', '9', true)
            .addField('Games Played', '2', true)
            .addField('League Experience', '1/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '1,019', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '1', true)
            .addField('Win Percentage', '*10.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• ATp32 •|•')
            .setColor(0x04771B)
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
//@Avaria#7474 `Wins: 128 | Losses: 76 | Games Played: 45 | League EXP: 208/275 | Level: 9`
    if(command === 'Avaria') {
        let p = new Discord.RichEmbed()
.addField('Wins', '128', true)
.addField('Losses', '76', true)
.addField('Games Played', '45', true)
.addField('League Experience', '208/275', true)
.addField('Level', '8', true)
.addField('Last Game Played', '1,777', true)
.addField('Current Win Streak', '9', true)
.addField('Longest Win Streak', '19', true)
.addField('Win Percentage', '*62.45%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Incidents Reported:', '•**Raging Barbarian:** 2')

.addField('Location', ':flag_lv: • Latvia')

.setFooter('•|• Avaria☢ •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@AVAVA#6842 `Wins: 0 | Losses: 5 | Games Played: 1 | League EXP: 0/4 | Level: 0`
    if(command === 'AVAVA') {
        let p = new Discord.RichEmbed()
.addField('Wins', '0', true)
.addField('Losses', '5', true)
.addField('Games Played', '1', true)
.addField('League Experience', '0/4', true)
.addField('Level', '0', true)
.addField('Last Game Played', '1,702', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '0', true)
.addField('Win Percentage', '*0.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Incidents Reported:', '•**Quitting Barbarian:** 1')

.addField('Location', ':flag_us: • America')

.setFooter('•|• AVAVA •|•')
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

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

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
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '5', true)
.addField('Last Game Played', '720')

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

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
.addField('Last Game Played', '756', true)
.addField('Current Win Streak', '4', true)
.addField('Longest Win Streak', '4', true)
.addField('Win Percentage', '*80.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• backupboogie •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Basaron#9272 `Wins: 1 | Losses: 11 | Games Played: 3 | League EXP: 1/4 | Level: 1`
    if(command === 'Basaron') {
        let p = new Discord.RichEmbed()
.addField('Wins', '1', true)
.addField('Losses', '11', true)
.addField('Games Played', '3', true)
.addField('League Experience', '1/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,224', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '1', true)
.addField('Win Percentage', '*8.33%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Basaron •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@barmaleushko#8848 `Wins: 12 | Losses: 23 | Games Played: 7 | League EXP: 14/16 | Level: 3`
    if(command === 'barmaleushko') {
        let p = new Discord.RichEmbed()
.addField('Wins', '12', true)
.addField('Losses', '23', true)
.addField('Games Played', '7', true)
.addField('League Experience', '14/16', true)
.addField('Level', '3', true)
.addField('Last Game Played', '1,245', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '6', true)
.addField('Win Percentage', '*34.28%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• barmaleushko •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@barsuk1024#1874 `Wins: 37 | Losses: 43 | Games Played: 16 | League EXP: 55/65 | Level: 6`
    if(command === 'barsuk1024') {
        let p = new Discord.RichEmbed()
.addField('Wins', '37', true)
.addField('Losses', '43', true)
.addField('Games Played', '16', true)
.addField('League Experience', '55/65', true)
.addField('Level', '6', true)
.addField('Last Game Played', '1,663', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '11', true)
.addField('Win Percentage', '*46.25%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• barsuk1024 •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@BattleSnake#1349 `Wins: 4 | Losses: 0 | Games Played: 1 | League EXP: 13/16| Level: 3`
    if(command === 'BattleSneik') {
        let p = new Discord.RichEmbed()
.addField('Wins', '4', true)
.addField('Losses', '0', true)
.addField('Games Played', '1', true)
.addField('League Experience', '13/16', true)
.addField('Level', '3', true)
.addField('Last Game Played', '1,399', true)
.addField('Current Win Streak', '4', true)
.addField('Longest Win Streak', '4', true)
.addField('Win Percentage', '*100.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• BattleSneik •|•')
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
//@BBT#3597 `Wins: 4 | Losses: 11 | Games Played: 3 | League EXP: 4/9 | Level: 2`
    if(command === 'BBT') {
        let p = new Discord.RichEmbed()
.addField('Wins', '4', true)
.addField('Losses', '11', true)
.addField('Games Played', '3', true)
.addField('League Experience', '4/9', true)
.addField('Level', '2', true)
.addField('Last Game Played', '1,277', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '2', true)
.addField('Win Percentage', '*26.66%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• BBT •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@bclemas03#2604 `Wins: 17 | Losses: 45 Games Played: 13 | League EXP: 22/25 | Level: 4`
    if(command === 'PocketRocket') {
        let p = new Discord.RichEmbed()
.addField('Wins', '17', true)
.addField('Losses', '45', true)
.addField('Games Played', '13', true)
.addField('League Experience', '22/25', true)
.addField('Level', '4', true)
.addField('Last Game Played', '1,508', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '9', true)
.addField('Win Percentage', '*27.41%*', true)



.setFooter('•|• Pocket Rocket •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@BDSally#6274 `Wins: 15 | Losses: 3 | Games Played: 6 | League EXP: 81/105 | Level: 7`
    if(command === 'BDSally') {
        let p = new Discord.RichEmbed()
.addField('Wins', '15', true)
.addField('Losses', '3', true)
.addField('Games Played', '6', true)
.addField('League Experience', '81/105', true)
.addField('Level', '7', true)
.addField('Last Game Played', '1,748', true)
.addField('Current Win Streak', '6', true)
.addField('Longest Win Streak', '9', true)
.addField('Win Percentage', '*83.33%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• BDSally •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@beebot#4986 `Wins: 0 | Losses: 5 | Games Played: 1 | League EXP: 0/4 | Level: 0`
    if(command === 'beebot') {
        let p = new Discord.RichEmbed()
.addField('Wins', '0', true)
.addField('Losses', '5', true)
.addField('Games Played', '1', true)
.addField('League Experience', '0/4', true)
.addField('Level', '0', true)
.addField('Last Game Played', '1,710', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '0', true)
.addField('Win Percentage', '*0.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Incidents Reported:', '•**Banned:** 1')

.addField('Location', ':flag_us: • America')

.setFooter('•|• beebot •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@bigalsaidso#3930 `Wins: 28 | Losses: 41 | Games Played: 15 | League EXP: 30/40 | Level: 5`
    if(command === 'bigalsaidso') {
        let p = new Discord.RichEmbed()
.addField('Wins', '28', true)
.addField('Losses', '41', true)
.addField('Games Played', '15', true)
.addField('League Experience', '30/40', true)
.addField('Level', '5', true)
.addField('Last Game Played', '1,678', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '7', true)
.addField('Win Percentage', '*40.57%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

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
.addField('Last Game Played', '679', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '3', true)
.addField('Win Percentage', '*60.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• BiGo •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@billskins#0770 `Wins: 5 | Losses: 15 | Games Played: 4 | League EXP: 5/9 | Level: 2`
    if(command === 'billskins') {
        let p = new Discord.RichEmbed()
.addField('Wins', '5', true)
.addField('Losses', '15', true)
.addField('Games Played', '4', true)
.addField('League Experience', '5/9', true)
.addField('Level', '2', true)
.addField('Last Game Played', '1,635', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '3', true)
.addField('Win Percentage', '*25.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• billskins •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@BILLYTH3GOAT#9435 `Wins: 1 | Losses: 4 | Games Played: 1 | League EXP: 1/4 | Level: 1`
    if(command === 'akabilly') {
        let p = new Discord.RichEmbed()
.addField('Wins', '1', true)
.addField('Losses', '4', true)
.addField('Games Played', '1', true)
.addField('League Experience', '1/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,267', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '1', true)
.addField('Win Percentage', '*20.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• akabilly •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@BladeSe7en#7657 `Wins: 3 | Losses: 4 | Games Played: 4 | League EXP: 36/40 | Level: 5`
    if(command === 'BladeSe7en') {
        let p = new Discord.RichEmbed()
.addField('Wins', '3', true)
.addField('Losses', '4', true)
.addField('Games Played', '4', true)
.addField('League Experience', '36/40', true)
.addField('Level', '5', true)
.addField('Last Game Played', '1,754', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '3', true)
.addField('Win Percentage', '*42.85%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• BladeSe7en •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@BlairIsMyMind?#0429 `Wins: 247 | Losses: 122 | Games Played: 75 | League EXP: 345/380 | Level: 10`
    if(command === 'ManBlairPig') {
        let p = new Discord.RichEmbed()
.addField('Wins', '247', true)
.addField('Losses', '122', true)
.addField('Games Played', '75', true)
.addField('League Experience', '345/380', true)
.addField('Level', '10', true)
.addField('Last Game Played', '1,743', true)
.addField('Current Win Streak', '10', true)
.addField('Longest Win Streak', '21', true)
.addField('Win Percentage', '*66.93%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• ManBlairPig - "Keeping it Classy." •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Blanzole#6592 `Wins: 11 | Losses: 14 | Games Played: 5 | League EXP: 11/16 | Level: 3`
    if(command === 'Blanzole') {
        let p = new Discord.RichEmbed()
.addField('Wins', '11', true)
.addField('Losses', '14', true)
.addField('Games Played', '5', true)
.addField('League Experience', '11/16', true)
.addField('Level', '3', true)
.addField('Last Game Played', '1,384', true)
.addField('Current Win Streak', '5', true)
.addField('Longest Win Streak', '5', true)
.addField('Win Percentage', '*44.44%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Blanzole •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Blaze051806#8591 `Wins: 0 | Losses: 5 | Games Played: 1 | League EXP: 0/4 | Level: 0`
    if(command === 'Blaze051806') {
        let p = new Discord.RichEmbed()
.addField('Wins', '0', true)
.addField('Losses', '5', true)
.addField('Games Played', '1', true)
.addField('League Experience', '0/4', true)
.addField('Level', '0', true)
.addField('Last Game Played', '1,764', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '0', true)
.addField('Win Percentage', '*%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Blaze051806 •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@🅜🅞🅓🅢 Blazed#1055 `Wins: 42 | Losses: 82 | Games Played: 25 | League EXP: 62/65 | Level: 6`
    if(command === 'Blazed') {
        let p = new Discord.RichEmbed()
.addField('Wins', '42', true)
.addField('Losses', '82', true)
.addField('Games Played', '25', true)
.addField('League Experience', '62/65', true)
.addField('Level', '6', true)
.addField('Last Game Played', '1,788', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '4', true)
.addField('Win Percentage', '*33.87%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Blazed •|•')
.setColor(0x0C5B80)
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

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

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
.addField('Last Game Played', '693', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '9', true)
.addField('Win Percentage', '*71.42%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• BlueCalm •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@boardslayer#3946 `Wins: 1 | Losses: 4 | Games Played: 1 | League EXP: 1/4 | Level: 1`
    if(command === 'boardslayer') {
        let p = new Discord.RichEmbed()
.addField('Wins', '1', true)
.addField('Losses', '4', true)
.addField('Games Played', '1', true)
.addField('League Experience', '1/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,161', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '1', true)
.addField('Win Percentage', '*20.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')
.addField('Location', ':flag_kr: • Korea Republic')

.setFooter('•|• boardslayer •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Bodyhacking#7315 `Wins: 0 | Losses: 3 | Games Played: 1 | League EXP: 10/16 | Level: 3`
    if(command === 'wite_rabit') {
        let p = new Discord.RichEmbed()
.addField('Wins', '0', true)
.addField('Losses', '3', true)
.addField('Games Played', '1', true)
.addField('League Experience', '10/16', true)
.addField('Level', '3', true)
.addField('Last Game Played', '1,357', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '0', true)
.addField('Win Percentage', '*0.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• wite_rabit •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Brand_it#6958 `Wins: 17 | Losses: 41 | Games Played: 11 | League EXP: 18/25 | Level: 4`
    if(command === 'brandt_it') {
        let p = new Discord.RichEmbed()
.addField('Wins', '17', true)
.addField('Losses', '41', true)
.addField('Games Played', '11', true)
.addField('League Experience', '18/25', true)
.addField('Level', '3', true)
.addField('Last Game Played', '1,635', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '2', true)
.addField('Win Percentage', '*29.31%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• brandt_it •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Braxbro#5536 `Wins: 10 | Losses: 45 | Games Played: 10 | League EXP: 10/16 | Level: 3`
    if(command === 'Braxbro') {
        let p = new Discord.RichEmbed()
.addField('Wins', '10', true)
.addField('Losses', '45', true)
.addField('Games Played', '10', true)
.addField('League Experience', '10/16', true)
.addField('Level', '2', true)
.addField('Last Game Played', '1,233', true)
.addField('Current Win Streak', '4', true)
.addField('Longest Win Streak', '4', true)
.addField('Win Percentage', '*18.18%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Braxbro •|•')
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
//@Bronx#3961 `Wins: 2 | Losses: 4 | Games Played: 1 | League EXP: 2/4 | Level: 1`
    if(command === 'Bronx') {
        let p = new Discord.RichEmbed()
.addField('Wins', '2', true)
.addField('Losses', '4', true)
.addField('Games Played', '1', true)
.addField('League Experience', '2/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,196', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '2', true)
.addField('Win Percentage', '*33.33%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Incidents Reported:', '•**Quitting Barbarian:** 1')

.addField('Location', ':flag_us: • America')

.setFooter('•|• Bronx •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Bruno#2943 `Wins: 3 | Losses: 3 | Games Played: 2 | League EXP: 3/4 | Level: 1`
    if(command === 'Bruno') {
        let p = new Discord.RichEmbed()
.addField('Wins', '3', true)
.addField('Losses', '3', true)
.addField('Games Played', '2', true)
.addField('League Experience', '3/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,169', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '2', true)
.addField('Win Percentage', '*50.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')
.addField('Location', ':flag_kr: • Korea Republic')

.setFooter('•|• Bruno •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Brynjar#8823 `Wins: 2 | Losses: 4 | Games Played: 1 | League EXP: 2/4 | Level: 1`
    if(command === 'Brynjar') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '2', true)
            .addField('Losses', '4', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '2/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '1,044', true)
            .addField('Current Win Streak', '2', true)
            .addField('Longest Win Streak', '2', true)
            .addField('Win Percentage', '*33.33%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Brynjar •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@BTK#0833 `Wins: 1 | Losses: 4 | Games Played: 1 | League EXP: 1/4 | Level: 1`
    if(command === 'BTK') {
        let p = new Discord.RichEmbed()
.addField('Wins', '1', true)
.addField('Losses', '4', true)
.addField('Games Played', '1', true)
.addField('League Experience', '1/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,6', true)
.addField('Current Win Streak', '', true)
.addField('Longest Win Streak', '', true)
.addField('Win Percentage', '*%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• BTK •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Buttercup#0358 `Wins: 43 | Losses: 40 | Games Played: 17 | League EXP: 54/65 | Level: 6`
    if(command === 'Buttercup') {
        let p = new Discord.RichEmbed()
.addField('Wins', '43', true)
.addField('Losses', '40', true)
.addField('Games Played', '17', true)
.addField('League Experience', '54/65', true)
.addField('Level', '6', true)
.addField('Last Game Played', '1,686', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '12', true)
.addField('Win Percentage', '*51.80%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Buttercup •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Cad Bane#5195 `Wins: 36 | Losses: 46 | Games Played: 17 | League EXP: 43/65 | Level: 6`
    if(command === 'CADBANE') {
        let p = new Discord.RichEmbed()
.addField('Wins', '36', true)
.addField('Losses', '46', true)
.addField('Games Played', '17', true)
.addField('League Experience', '43/65', true)
.addField('Level', '6', true)
.addField('Last Game Played', '1,749', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '7', true)
.addField('Win Percentage', '*43.90%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• C[A]D BANE •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Cakeprophet2427 EU#4629 `Wins: 54 | Losses: 59 | Games Played: 24 | League EXP: 64/65 | Level: 6`
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

.addField('Chieftain', '<:chieftain:320176909927579648>', true)
.addField('Solid Host', '⍟', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Nils ヅ - "A win is a win, no matter how bad it was executed." •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Capo_Di_Tutti_Capi#8144 `Wins: 1 | Losses: 13 | Games Played: 3 | League EXP: 1/4 | Level: 1`
    if(command === 'Capo_Di_Tutti_Capi') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '1', true)
            .addField('Losses', '13', true)
            .addField('Games Played', '3', true)
            .addField('League Experience', '1/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '987', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '1', true)
            .addField('Win Percentage', '*7.14%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Capo_Di_Tutti_Capi •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Captain Finnish#1737 `Wins: 163 | Losses: 78 | Games Played: 47 | League EXP: 199/275 | Level: 9`
    if(command === 'Captain Finnish') {
        let p = new Discord.RichEmbed()
.addField('Wins', '163', true)
.addField('Losses', '78', true)
.addField('Games Played', '47', true)
.addField('League Experience', '199/275', true)
.addField('Level', '9', true)
.addField('Last Game Played', '1,769', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '12', true)
.addField('Win Percentage', '*67.63%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_fi: • Finland')

.setFooter('•|• Captain Finnish •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Carry#5041 `Wins: 1 | Losses: 4 | Games Played: 1 | League EXP: 1/4 | Level: 1`
    if(command === 'Carry') {
        let p = new Discord.RichEmbed()
.addField('Wins', '1', true)
.addField('Losses', '4', true)
.addField('Games Played', '1', true)
.addField('League Experience', '1/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,707', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '1', true)
.addField('Win Percentage', '*20.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Carry •|•')
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
.addField('Last Game Played', '667', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '4', true)
.addField('Win Percentage', '*60.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• carsitou •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Carson#2172 `Wins: 162 | Losses: 115 | Games Played: 55 | League EXP: 205/275 | Level: 9`
    if(command === 'Carson') {
        let p = new Discord.RichEmbed()
.addField('Wins', '166', true)
.addField('Losses', '115', true)
.addField('Games Played', '55', true)
.addField('League Experience', '205/275', true)
.addField('Level', '9', true)
.addField('Last Game Played', '1,729', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '13', true)
.addField('Win Percentage', '*59.07%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)
.addField('Solid Host', '⍟', true)

.addField('Location', ':flag_us: • America')

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
//@catstronaut420#7516 `Wins: 87 | Losses: 98 | Games Played: 37 | League EXP: 102/105 | Level: 7`
    if(command === 'catstronaut420') {
        let p = new Discord.RichEmbed()
.addField('Wins', '87', true)
.addField('Losses', '98', true)
.addField('Games Played', '37', true)
.addField('League Experience', '102/105', true)
.addField('Level', '7', true)
.addField('Last Game Played', '1,761', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '11', true)
.addField('Win Percentage', '*47.02%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• catstronaut420 •|•')
.setColor(0x0C5B80)
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
//@chadhiggins6#5177 `Wins: 58 | Losses: 16 | Games Played: 16 | League EXP: 170/275 | Level: 9`
    if(command === 'chadhiggins6') {
        let p = new Discord.RichEmbed()
.addField('Wins', '58', true)
.addField('Losses', '16', true)
.addField('Games Played', '16', true)
.addField('League Experience', '170/275', true)
.addField('Level', '9', true)
.addField('Last Game Played', '1,661', true)
.addField('Current Win Streak', '17', true)
.addField('Longest Win Streak', '17', true)
.addField('Win Percentage', '*78.37%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• chadhiggins6 - "Why is Japan so good; because 100% adj. policy cards" •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@ChaioticDoom#6170 `Wins: 4 | Losses: 1 | Games Played: 1 | League EXP: 4/9 | Level: 2`
    if(command === 'ChaioticDoom') {
        let p = new Discord.RichEmbed()
.addField('Wins', '4', true)
.addField('Losses', '1', true)
.addField('Games Played', '1', true)
.addField('League Experience', '4/9', true)
.addField('Level', '2', true)
.addField('Last Game Played', '1,534', true)
.addField('Current Win Streak', '4', true)
.addField('Longest Win Streak', '4', true)
.addField('Win Percentage', '*80.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• ChaioticDoom •|•')
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
//@Chinuka#6654 `Wins: 3 | Losses: 9 | Games Played: 2 | League EXP: 3/4 | Level: 1`
    if(command === 'Chinuka') {
        let p = new Discord.RichEmbed()
.addField('Wins', '3', true)
.addField('Losses', '9', true)
.addField('Games Played', '2', true)
.addField('League Experience', '3/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,629', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '3', true)
.addField('Win Percentage', '*25.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Chinuka •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Chipmumk#9186 `Wins: 5 | Losses: 22 | Games Played: 6 | League EXP: 15/16 | Level: 3`
    if(command === 'Chipmumk') {
        let p = new Discord.RichEmbed()
.addField('Wins', '5', true)
.addField('Losses', '22', true)
.addField('Games Played', '6', true)
.addField('League Experience', '15/16', true)
.addField('Level', '3', true)
.addField('Last Game Played', '1,783', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '2', true)
.addField('Win Percentage', '*18.51%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Chipmumk •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@chkjnn#9001 `Wins: 3 | Losses: 15 | Games Played: 6 | League EXP: 66/105 | Level: 7`
    if(command === 'chkjnn') {
        let p = new Discord.RichEmbed()
.addField('Wins', '3', true)
.addField('Losses', '15', true)
.addField('Games Played', '6', true)
.addField('League Experience', '66/105', true)
.addField('Level', '7', true)
.addField('Last Game Played', '1,748', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '3', true)
.addField('Win Percentage', '*16.66%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• chkjnn •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Chorley#5423 `Wins: 1 | Losses: 9 | Games Played: 2 | League EXP: 1/4 | Level: 1`
    if(command === 'mchorley94') {
        let p = new Discord.RichEmbed()
.addField('Wins', '1', true)
.addField('Losses', '9', true)
.addField('Games Played', '2', true)
.addField('League Experience', '1/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,778', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '1', true)
.addField('Win Percentage', '*10.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• mchorley94 •|•')
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
//@Chrizzly Bear#0459 `Wins: 4 | Losses: 1 | Games Played: 1 | League EXP: 4/9 | Level: 2`
    if(command === 'Chrizzly Bear') {
        let p = new Discord.RichEmbed()
.addField('Wins', '4', true)
.addField('Losses', '1', true)
.addField('Games Played', '1', true)
.addField('League Experience', '4/9', true)
.addField('Level', '2', true)
.addField('Last Game Played', '1,752', true)
.addField('Current Win Streak', '4', true)
.addField('Longest Win Streak', '4', true)
.addField('Win Percentage', '*80.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Chrizzly Bear •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Chroma Source#3786 `Wins: 0 | Losses: 5 | Games Played: 1 | League EXP: 0/4 | Level: 0`
    if(command === 'ChromaSource') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '0', true)
            .addField('Losses', '5', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '0/4', true)
            .addField('Level', '0', true)
            .addField('Last Game Played', '1,053', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '0', true)
            .addField('Win Percentage', '*0.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Chroma Source •|•')
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
//@CKMo#7877 `Wins: 3 | Losses: 3 | Games Played: 1 | League EXP: 3/4 | Level: 1`
    if(command === 'CKMo') {
        let p = new Discord.RichEmbed()
.addField('Wins', '3', true)
.addField('Losses', '3', true)
.addField('Games Played', '1', true)
.addField('League Experience', '3/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,387', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '3', true)
.addField('Win Percentage', '*50.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• CKMo •|•')
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
//@Cloudy21#5983 `Wins: 8 | Losses: 17 | Games Played: 5 | League EXP: 8/9 | Level: 2`
    if(command === 'Cloudy21') {
        let p = new Discord.RichEmbed()
.addField('Wins', '8', true)
.addField('Losses', '17', true)
.addField('Games Played', '5', true)
.addField('League Experience', '8/9', true)
.addField('Level', '2', true)
.addField('Last Game Played', '1,698', true)
.addField('Current Win Streak', '4', true)
.addField('Longest Win Streak', '4', true)
.addField('Win Percentage', '*32.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Incidents Reported:', '•**Raging Barbarian:** 1')

.addField('Location', ':flag_us: • America')

.setFooter('•|• Cloudy21 •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@clueck#3819 `Wins: 65 | Losses: 66 | Games Played: 27 | League EXP: 90/105 | Level: 7`
    if(command === 'TheFireman') {
        let p = new Discord.RichEmbed()
.addField('Wins', '65', true)
.addField('Losses', '66', true)
.addField('Games Played', '27', true)
.addField('League Experience', '90/105', true)
.addField('Level', '7', true)
.addField('Last Game Played', '1,693', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '15', true)
.addField('Win Percentage', '*49.61%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• The Fireman •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@cmac__17#4230 `Wins: 0 | Losses: 5 | Games Played: 1 | League EXP: 0/4 | Level: 0`
    if(command === 'cmac__17') {
        let p = new Discord.RichEmbed()
.addField('Wins', '0', true)
.addField('Losses', '5', true)
.addField('Games Played', '1', true)
.addField('League Experience', '0/4', true)
.addField('Level', '0', true)
.addField('Last Game Played', '1,343', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '0', true)
.addField('Win Percentage', '*0.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• cmac__17 •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@cσrtєz#5432 `Wins: 0 | Losses: 5 | Games Played: 1 | EXP: 0/4 | Level: 0`
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
//@Coach Marga#6280 `Wins: 32 | Losses: 33 | Games Played: 13 | League EXP: 44/65 | Level: 6`
    if(command === 'coachalan') {
        let p = new Discord.RichEmbed()
.addField('Wins', '32', true)
.addField('Losses', '33', true)
.addField('Games Played', '13', true)
.addField('League Experience', '44/65', true)
.addField('Level', '6', true)
.addField('Last Game Played', '1,203', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '7', true)
.addField('Win Percentage', '*49.23%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• coachalan •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@codenaugh#5884 `Wins: 9 | Losses: 16 | Games Played: 5 | League EXP: 9/16 | Level: 3`
    if(command === 'codenaugh') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '9', true)
            .addField('Losses', '16', true)
            .addField('Games Played', '5', true)
            .addField('League Experience', '5/9', true)
            .addField('Level', '3', true)
            .addField('Last Game Played', '969', true)
            .addField('Current Win Streak', '4', true)
            .addField('Longest Win Streak', '4', true)
            .addField('Win Percentage', '*36.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• codenaugh •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@COLEMAN#0514 `Wins: 72 | Losses: 157 | Games Played: 42 | League EXP: 74/105 | Level: 7`
    if(command === 'coleman420') {
        let p = new Discord.RichEmbed()
.addField('Wins', '72', true)
.addField('Losses', '157', true)
.addField('Games Played', '42', true)
.addField('League Experience', '74/105', true)
.addField('Level', '7', true)
.addField('Last Game Played', '1,423', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '6', true)
.addField('Win Percentage', '*31.44%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• coleman420 •|•')
.setColor(0x0C5B80)
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
//@Colonel_Lulz#6988 `Wins: 8 | Losses: 6 | Games Played: 3 | League EXP: 13/16 | Level: 3`
    if(command === 'Colonel_Lulz') {
        let p = new Discord.RichEmbed()
.addField('Wins', '8', true)
.addField('Losses', '6', true)
.addField('Games Played', '3', true)
.addField('League Experience', '13/16', true)
.addField('Level', '3', true)
.addField('Last Game Played', '1,695', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '6', true)
.addField('Win Percentage', '*57.14%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_ru: • Russia')

.setFooter('•|• Colonel_Lulz •|•')
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
//@Conops#0598 `Wins: 1 | Losses: 9 | Games Played: 2 | League EXP: 1/4 | Level: 1`
    if(command === 'Conops') {
        let p = new Discord.RichEmbed()
.addField('Wins', '1', true)
.addField('Losses', '9', true)
.addField('Games Played', '2', true)
.addField('League Experience', '1/4', true)
.addField('Level', '0', true)
.addField('Last Game Played', '1,779', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '1', true)
.addField('Win Percentage', '*10.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Conops •|•')
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
//@Compello#5533 `Wins: 55 | Losses: 46 | Games Played: 22 | League EXP: 62/65 | Level: 6`
    if(command === 'Compello') {
        let p = new Discord.RichEmbed()
.addField('Wins', '55', true)
.addField('Losses', '46', true)
.addField('Games Played', '22', true)
.addField('League Experience', '62/65', true)
.addField('Level', '6', true)
.addField('Last Game Played', '1,704', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '9', true)
.addField('Win Percentage', '*54.45%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

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
//@Corbin#0124 `Wins: 14 | Losses: 28 | Games Played: 8 | League EXP: 14/16 | Level: 3`
    if(command === 'CorbinJ675') {
        let p = new Discord.RichEmbed()
.addField('Wins', '14', true)
.addField('Losses', '28', true)
.addField('Games Played', '8', true)
.addField('League Experience', '14/16', true)
.addField('Level', '3', true)
.addField('Last Game Played', '1,162', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '3', true)
.addField('Win Percentage', '*33.33%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• CorbinJ675 •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@CoupIran#3925 `Wins: 9 | Losses: 11 | Games Played: 4 | League EXP: 9/16 | Level: 3`
    if(command === 'CoupIran') {
        let p = new Discord.RichEmbed()
.addField('Wins', '9', true)
.addField('Losses', '11', true)
.addField('Games Played', '4', true)
.addField('League Experience', '9/16', true)
.addField('Level', '3', true)
.addField('Last Game Played', '1,789', true)
.addField('Current Win Streak', '4', true)
.addField('Longest Win Streak', '4', true)
.addField('Win Percentage', '*45.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_kr: • Korea Republic')

.setFooter('•|• CoupIran •|•')
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
//@Crossu88#1597 `Wins: 0 | Losses: 5 | Games Played: 1 | League EXP: 0/4 | Level: 0`
    if(command === 'Crossu88') {
        let p = new Discord.RichEmbed()
.addField('Wins', '0', true)
.addField('Losses', '5', true)
.addField('Games Played', '1', true)
.addField('League Experience', '0/4', true)
.addField('Level', '0', true)
.addField('Last Game Played', '1,198', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '0', true)
.addField('Win Percentage', '*0.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Crossu88 •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Cruise#2399 `Wins: 29 | Losses: 7 | Games Played: 9 | League EXP: 59/65 | Level: 6`
    if(command === 'Cruise') {
        let p = new Discord.RichEmbed()
.addField('Wins', '29', true)
.addField('Losses', '7', true)
.addField('Games Played', '9', true)
.addField('League Experience', '59/65', true)
.addField('Level', '6', true)
.addField('Last Game Played', '1,777', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '20', true)
.addField('Win Percentage', '*80.55%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Cruise •|•')
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
//@currentconvulsive#1175 `Wins: 7 | Losses: 8 | Games Played: 3 | League EXP: 12/16 | Level: 3`
    if(command === 'currentconvulsive') {
        let p = new Discord.RichEmbed()
.addField('Wins', '7', true)
.addField('Losses', '8', true)
.addField('Games Played', '3', true)
.addField('League Experience', '12/16', true)
.addField('Level', '3', true)
.addField('Last Game Played', '1,513', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '7', true)
.addField('Win Percentage', '*46.66%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• currentconvulsive •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@cyntage#5091 `Wins: 4 | Losses: 2 | Games Played: 1 | League EXP: 4/9 | Level: 2`
    if(command === 'cyntage') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '4', true)
            .addField('Losses', '2', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '4/9', true)
            .addField('Level', '2', true)
            .addField('Last Game Played', '1,044', true)
            .addField('Current Win Streak', '4', true)
            .addField('Longest Win Streak', '4', true)
            .addField('Win Percentage', '*66.66%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• cyntage •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Cypher#6328 `Wins: 24 | Losses: 72 | Games Played: 19 | League EXP: 24/25 | Level: 4`
    if(command === 'Cypherazul') {
        let p = new Discord.RichEmbed()
.addField('Wins', '24', true)
.addField('Losses', '72', true)
.addField('Games Played', '19', true)
.addField('League Experience', '24/25', true)
.addField('Level', '4', true)
.addField('Last Game Played', '1,591', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '4', true)
.addField('Win Percentage', '*25.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Incidents Reported:', '•**Quitting Barbarian:** 1')

.addField('Location', ':flag_us: • America')

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
//@czozp#8908 `Wins: 427 | Losses: 38 | Games Played: 95 | League EXP: 877/910 | Level: 15`
    if(command === 'czozp') {
        let p = new Discord.RichEmbed()
.addField('Wins', '427', true)
.addField('Losses', '38', true)
.addField('Games Played', '95', true)
.addField('League Experience', '877/905', true)
.addField('Level', '15', true)
.addField('Last Game Played', '1,775', true)
.addField('Current Win Streak', '27', true)
.addField('Longest Win Streak', '59', true)
.addField('Win Percentage', '*91.82%*', true)

.addField('Warlord', '<:warlord:319931261894524928>', true)
.addField('Solid Host', '⍟', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• czozp •|•')
.setColor(0x77FF82)
        message.channel.sendEmbed(p);
    };
//@Ðreams#7926 `Wins: 38 | Losses: 72 | Games Played: 23 | League EXP: 54/65 | Level: 6`
    if(command === 'Slumlord_') {
        let p = new Discord.RichEmbed()
.addField('Wins', '38', true)
.addField('Losses', '72', true)
.addField('Games Played', '23', true)
.addField('League Experience', '54/65', true)
.addField('Level', '6', true)
.addField('Last Game Played', '1,327', true)
.addField('Current Win Streak', '6', true)
.addField('Longest Win Streak', '6', true)
.addField('Win Percentage', '*34.54%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Slumlord_ •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@D0m#1979 `Wins: 1 | Losses: 9 | Games Played: 2 | League EXP: 1/4 | Level: 1`
    if(command === 'D0m') {
        let p = new Discord.RichEmbed()
.addField('Wins', '1', true)
.addField('Losses', '9', true)
.addField('Games Played', '2', true)
.addField('League Experience', '1/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,475', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '1', true)
.addField('Win Percentage', '*10.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• D0m •|•')
.setColor(0x04771B)
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
//@Dalf#4275 `Wins: 0 | Losses: 2 | Games Played: 1 | League EXP: 0/4 | Level: 0`
    if(command === 'Dalf') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '0', true)
            .addField('Losses', '2', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '0/4', true)
            .addField('Level', '0', true)
            .addField('Last Game Played', '1,037', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '0', true)
            .addField('Win Percentage', '*0.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Dalf •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Dammeul#2835 `Wins: 19 | Losses: 31 | Games Played: 10 | League EXP: 29/40 | Level: 5`
    if(command === 'Dammeul') {
        let p = new Discord.RichEmbed()
.addField('Wins', '19', true)
.addField('Losses', '31', true)
.addField('Games Played', '10', true)
.addField('League Experience', '29/40', true)
.addField('Level', '5', true)
.addField('Last Game Played', '1,750', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '4', true)
.addField('Win Percentage', '*38.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Incidents Reported:', '•**Raging Barbarian:** 1')

.addField('Location', ':flag_us: • America')

.setFooter('•|• Dammeul •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@danhynes#5681 `Wins: 0 | Losses: 10 | Games Played: 2 | League EXP: 0/4 | Level: 0`
    if(command === 'danhynes') {
        let p = new Discord.RichEmbed()
.addField('Wins', '0', true)
.addField('Losses', '10', true)
.addField('Games Played', '2', true)
.addField('League Experience', '0/4', true)
.addField('Level', '0', true)
.addField('Last Game Played', '1,370', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '0', true)
.addField('Win Percentage', '*0.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• danhynes •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Daniel#5199 `Wins: 3 | Losses: 5 | Games Played: 2 | League EXP: 23/25 | Level: 5`
    if(command === 'Daniel') {
        let p = new Discord.RichEmbed()
.addField('Wins', '3', true)
.addField('Losses', '5', true)
.addField('Games Played', '2', true)
.addField('League Experience', '23/25', true)
.addField('Level', '5', true)
.addField('Last Game Played', '1,732', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '3', true)
.addField('Win Percentage', '*37.50%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Daniel •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@danliv216#7425 `Wins: 0 | Losses: 6 | Games Played: 2 | League EXP: 20/25 | Level: 4`
    if(command === 'danliv216') {
        let p = new Discord.RichEmbed()
.addField('Wins', '0', true)
.addField('Losses', '6', true)
.addField('Games Played', '2', true)
.addField('League Experience', '20/25', true)
.addField('Level', '4', true)
.addField('Last Game Played', '1,647', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '0', true)
.addField('Win Percentage', '*0.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• danliv216 •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Dante Vox#3916 `Wins: 4 | Losses: 6 | Games Played: 2 | League EXP: 4/9 | Level: 2`
    if(command === 'Dante Vox') {
        let p = new Discord.RichEmbed()
.addField('Wins', '4', true)
.addField('Losses', '6', true)
.addField('Games Played', '1', true)
.addField('League Experience', '4/9', true)
.addField('Level', '2', true)
.addField('Last Game Played', '1,749', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '2', true)
.addField('Win Percentage', '*40.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Dante Vox •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@DasBoot89#3999 `Wins: 49 | Losses: 75 | Games Played: 24 | League EXP: 52/65 | Level: 6`
    if(command === 'DasBoot89') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '49', true)
            .addField('Losses', '75', true)
            .addField('Games Played', '24', true)
            .addField('League Experience', '52/65', true)
            .addField('Level', '6', true)
            .addField('Last Game Played', '1,123', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '7', true)
            .addField('Win Percentage', '*39.51%*', true)

            .addField('Chieftain', '<:chieftain:320176909927579648>', true)

            .setFooter('•|• DasBoot89 •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@DASGUTENBRAT#2761 `Wins: 15 | Losses: 3 | Games Played: 6 | League EXP: 81/105 | Level: 7`
    if(command === 'DASGUTENBRAT') {
        let p = new Discord.RichEmbed()
.addField('Wins', '15', true)
.addField('Losses', '3', true)
.addField('Games Played', '6', true)
.addField('League Experience', '81/105', true)
.addField('Level', '7', true)
.addField('Last Game Played', '1,748', true)
.addField('Current Win Streak', '6', true)
.addField('Longest Win Streak', '9', true)
.addField('Win Percentage', '*83.33%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• DASGUTENBRAT •|•')
.setColor(0x0C5B80)
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
//@DarkLordChalupa#6734 `Wins: 4 | Losses: 11 | Games Played: 3 | League EXP: 4/9 | Level: 2`
    if(command === 'DarkLordChalupa') {
        let p = new Discord.RichEmbed()
.addField('Wins', '4', true)
.addField('Losses', '11', true)
.addField('Games Played', '3', true)
.addField('League Experience', '4/9', true)
.addField('Level', '2', true)
.addField('Last Game Played', '1,666', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '2', true)
.addField('Win Percentage', '*26.66%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• DarkLordChalupa •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@darkmaster#3467 `Wins: 0 | Losses: 16 | Games Played: 3 | League EXP: 0/4 | Level: 0`
    if(command === 'darkmaster') {
        let p = new Discord.RichEmbed()
.addField('Wins', '0', true)
.addField('Losses', '16', true)
.addField('Games Played', '3', true)
.addField('League Experience', '0/4', true)
.addField('Level', '0', true)
.addField('Last Game Played', '1,395', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '0', true)
.addField('Win Percentage', '*0.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• darkmaster •|•')
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
//@DeathBringer#8348 `Wins: 69 | Losses: 22 | Games Played: 17 | League EXP: 120/170 | Level: 8`
    if(command === 'DeathBringer') {
        let p = new Discord.RichEmbed()
.addField('Wins', '69', true)
.addField('Losses', '22', true)
.addField('Games Played', '17', true)
.addField('League Experience', '120/170', true)
.addField('Level', '8', true)
.addField('Last Game Played', '1,784', true)
.addField('Current Win Streak', '10', true)
.addField('Longest Win Streak', '17', true)
.addField('Win Percentage', '*75.82%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• DeathBringer •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Deathpact#2021 `Wins: 1 | Losses: 4 | Games Played: 2 | League EXP: 1/4 | Level: 1`
    if(command === 'Deathpact') {
        let p = new Discord.RichEmbed()
.addField('Wins', '1', true)
.addField('Losses', '4', true)
.addField('Games Played', '2', true)
.addField('League Experience', '1/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,767', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '1', true)
.addField('Win Percentage', '*20.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Deathpact •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Deckwash900#6054 `Wins: 1 | Losses: 4 | Games Played: 1 | League EXP: 1/4 | Level: 1`
    if(command === 'Deckwash900') {
        let p = new Discord.RichEmbed()
.addField('Wins', '1', true)
.addField('Losses', '4', true)
.addField('Games Played', '1', true)
.addField('League Experience', '1/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,343', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '1', true)
.addField('Win Percentage', '*20.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Deckwash900 •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Delirium319#5231 `Wins: 69 | Losses: 76 | Games Played: 34 | League EXP: 92/105 | Level: 7`
    if(command === 'delirium319') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '69', true)
            .addField('Losses', '76', true)
            .addField('Games Played', '34', true)
            .addField('League Experience', '92/105', true)
            .addField('Level', '7', true)
            .addField('Last Game Played', '1,089', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '15', true)
            .addField('Win Percentage', '*47.58%*', true)

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
//@Delux#5364 `Wins: 72 | Losses: 59 | Games Played: 27 | League EXP: 146/170 | Level: 8`
    if(command === 'Delux') {
        let p = new Discord.RichEmbed()
.addField('Wins', '72', true)
.addField('Losses', '59', true)
.addField('Games Played', '27', true)
.addField('League Experience', '146/170', true)
.addField('Level', '8', true)
.addField('Last Game Played', '1,777', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '9', true)
.addField('Win Percentage', '*54.96%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Delux •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@demobin#4000 `Wins: 12 | Losses: 15 | Games Played: 6 | League EXP: 22/25 | Level: 4`
    if(command === 'demobin') {
        let p = new Discord.RichEmbed()
.addField('Wins', '12', true)
.addField('Losses', '15', true)
.addField('Games Played', '6', true)
.addField('League Experience', '22/25', true)
.addField('Level', '4', true)
.addField('Last Game Played', '1,595', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '4', true)
.addField('Win Percentage', '*44.44%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• demobin •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Denko#8478 `Wins: 4 | Losses: 11 | Games Played: 3 | League EXP: 4/9 | Level: 2`
    if(command === 'Meeseeks') {
        let p = new Discord.RichEmbed()
.addField('Wins', '4', true)
.addField('Losses', '11', true)
.addField('Games Played', '3', true)
.addField('League Experience', '4/9', true)
.addField('Level', '2', true)
.addField('Last Game Played', '1,640', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '3', true)
.addField('Win Percentage', '*26.66%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Meeseeks •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Depper11#7089 `Wins: 0 | Losses: 6 | Games Played: 2 | League EXP: 20/25 | Level: 4`
    if(command === 'Depper11') {
        let p = new Discord.RichEmbed()
.addField('Wins', '0', true)
.addField('Losses', '6', true)
.addField('Games Played', '2', true)
.addField('League Experience', '20/25', true)
.addField('Level', '4', true)
.addField('Last Game Played', '1,647', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '0', true)
.addField('Win Percentage', '*0.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Depper11 •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Deuces#6835 `Wins: 25 | Losses: 46 | Games Played: 13 | League EXP: 26/40 | Level: 5`
    if(command === 'Deuces') {
        let p = new Discord.RichEmbed()
.addField('Wins', '25', true)
.addField('Losses', '46', true)
.addField('Games Played', '13', true)
.addField('League Experience', '26/40', true)
.addField('Level', '5', true)
.addField('Last Game Played', '1,743', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '4', true)
.addField('Win Percentage', '*35.21%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Deuces •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@DiMiX#4545 `Wins: 3 | Losses: 18 | Games Played: 4 | League EXP: 3/4 | Level: 1`
    if(command === 'DiMiX') {
        let p = new Discord.RichEmbed()
.addField('Wins', '3', true)
.addField('Losses', '18', true)
.addField('Games Played', '4', true)
.addField('League Experience', '3/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,725', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '2', true)
.addField('Win Percentage', '*14.28%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• DiMiX •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@DISCORD IS CANCER#1022 `Wins: 12 | Losses: 48 | Games Played: 11 | League EXP: 12/16 | Level: 3`
    if(command === 'Vezku_biceps') {
        let p = new Discord.RichEmbed()
.addField('Wins', '12', true)
.addField('Losses', '48', true)
.addField('Games Played', '11', true)
.addField('League Experience', '12/16', true)
.addField('Level', '3', true)
.addField('Last Game Played', '1,383', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '4', true)
.addField('Win Percentage', '*20.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Incidents Reported:', '•**Raging Barbarian:** 1')

.addField('Location', ':flag_us: • America')

.setFooter('•|• Vezku_biceps •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@DiscoStu#5923 `Wins: 9 | Losses: 5 | Games Played: 3 | League EXP: 19/25 | Level: 4`
    if(command === 'DiscoStuIII') {
        let p = new Discord.RichEmbed()
.addField('Wins', '9', true)
.addField('Losses', '5', true)
.addField('Games Played', '3', true)
.addField('League Experience', '19/25', true)
.addField('Level', '4', true)
.addField('Last Game Played', '1,781', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '5', true)
.addField('Win Percentage', '*64.28%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• DiscoStuIII •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Dixon37#0359 `Wins: 0 | Losses: 12 | Games Played: 2 | EXP: 0/4 | Level: 0`
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
//@dochi0813#3092 `Wins: 36 | Losses: 17 | Games Played: 11 | League EXP: 43/65 | Level: 6`
    if(command === 'dochi0813') {
        let p = new Discord.RichEmbed()
.addField('Wins', '36', true)
.addField('Losses', '17', true)
.addField('Games Played', '11', true)
.addField('League Experience', '43/65', true)
.addField('Level', '6', true)
.addField('Last Game Played', '1,553', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '9', true)
.addField('Win Percentage', '*67.92%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• dochi0813 •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@docki#8849 `Wins: 45 | Losses: 123 | Games Played: 33 | League EXP: 47/65 | Level: 6`
    if(command === 'docki') {
        let p = new Discord.RichEmbed()
.addField('Wins', '45', true)
.addField('Losses', '123', true)
.addField('Games Played', '33', true)
.addField('League Experience', '47/65', true)
.addField('Level', '6', true)
.addField('Last Game Played', '1,768' , true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '5', true)
.addField('Win Percentage', '*26.78%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• docki •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Dobby1923#8795 `Wins: 7 | Losses: 21 | Games Played: 7 | League EXP: 17/25 | Level: 4`
    if(command === 'Dobby1923') {
        let p = new Discord.RichEmbed()
.addField('Wins', '7', true)
.addField('Losses', '21', true)
.addField('Games Played', '7', true)
.addField('League Experience', '17/25', true)
.addField('Level', '3', true)
.addField('Last Game Played', '1,380', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '3', true)
.addField('Win Percentage', '*25.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Dobby1923 •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Dolla Bill#4821 `Wins: 177 | Losses: 140 | Games Played: 61 | League EXP: 280/380 | Level: 10`
    if(command === 'DollaBill') {
        let p = new Discord.RichEmbed()
.addField('Wins', '177', true)
.addField('Losses', '140', true)
.addField('Games Played', '61', true)
.addField('League Experience', '280/380', true)
.addField('Level', '10', true)
.addField('Last Game Played', '1,205', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '16', true)
.addField('Win Percentage', '*55.83%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)
.addField('Solid Host', '⍟', true)

.addField('Location', ':flag_ca: • Canada')

.setFooter('•|• Dolla Bill •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Domass#4978 `Wins: 1 | Losses: 4 | Games Played: 1 | League EXP: 1/4 | Level: 1`
    if(command === 'Domass') {
        let p = new Discord.RichEmbed()
.addField('Wins', '1', true)
.addField('Losses', '4', true)
.addField('Games Played', '1', true)
.addField('League Experience', '1/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,440', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '1', true)
.addField('Win Percentage', '*20.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Domass •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Don DiZZy#3971 `Wins: 133 | Losses: 115 | Games Played: 52 | League EXP: 172/275 | Level: 9`
    if(command === 'DonDiZZy') {
        let p = new Discord.RichEmbed()
.addField('Wins', '133', true)
.addField('Losses', '115', true)
.addField('Games Played', '52', true)
.addField('League Experience', '172/275', true)
.addField('Level', '9', true)
.addField('Last Game Played', '1,737', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '9', true)
.addField('Win Percentage', '*53.62%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)
.addField('Solid Host', '⍟', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Don DiZZy •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@DonKoszal#8513 `Wins: 3 | Losses: 2 | Games Played: 1 | League EXP: 3/4 | Level: 1`
    if(command === 'DonKoszal') {
        let p = new Discord.RichEmbed()
.addField('Wins', '3', true)
.addField('Losses', '2', true)
.addField('Games Played', '1', true)
.addField('League Experience', '3/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,202', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '3', true)
.addField('Win Percentage', '*60.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• DonKoszal •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Donny The Dealer#4830 `Wins: 1 | Losses: 4 | Games Played: 1 | League EXP: 1/4 | Level: 1`
    if(command === 'DonnyTheDealer') {
        let p = new Discord.RichEmbed()
.addField('Wins', '1', true)
.addField('Losses', '4', true)
.addField('Games Played', '1', true)
.addField('League Experience', '1/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,527', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '1', true)
.addField('Win Percentage', '*20.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Donny The Dealer •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@dragoninja12#6172 `Wins: 0 | Losses: 6 | Games Played: 1 | League EXP: 0/4 | Level: 0`
    if(command === 'dragoninja12') {
        let p = new Discord.RichEmbed()
.addField('Wins', '0', true)
.addField('Losses', '6', true)
.addField('Games Played', '1', true)
.addField('League Experience', '0/4', true)
.addField('Level', '0', true)
.addField('Last Game Played', '1,684', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '0', true)
.addField('Win Percentage', '*0.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Incidents Reported:', '•**Raging Barbarian:** 1')

.addField('Location', ':flag_us: • America')

.setFooter('•|• dragoninja12 •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@DreadDragon#0524 `Wins: 6 | Losses: 6 | Games Played: 3 | League EXP: 6/9 | Level: 2`
    if(command === 'mikel') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '6', true)
            .addField('Losses', '6', true)
            .addField('Games Played', '3', true)
            .addField('League Experience', '6/9', true)
            .addField('Level', '2', true)
            .addField('Last Game Played', '1,261', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '4', true)
            .addField('Win Percentage', '*50.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• mikel •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Dream#3617 `Wins: 3 | Losses: 22 | Games Played: 6 | League EXP: 3/4 | Level: 1`
    if(command === 'Dream') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '3', true)
            .addField('Losses', '22', true)
            .addField('Games Played', '6', true)
            .addField('League Experience', '3/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '1,040', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '1', true)
            .addField('Win Percentage', '*12.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Dream •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@dreamsenpai#8448 `Wins: 10 | Losses: 13 | Games Played: 5 | League EXP: 12/16 | Level: 3`
    if(command === 'dreamsenpai') {
        let p = new Discord.RichEmbed()
.addField('Wins', '10', true)
.addField('Losses', '13', true)
.addField('Games Played', '5', true)
.addField('League Experience', '12/16', true)
.addField('Level', '3', true)
.addField('Last Game Played', '1,601', true)
.addField('Current Win Streak', '6', true)
.addField('Longest Win Streak', '6', true)
.addField('Win Percentage', '*43.47%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• dreamsenpai •|•')
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
//@drfinch#0282 `Wins: 3 | Losses: 14 | Games Played: 3 | League EXP: 3/4 | Level: 1`
    if(command === 'drfinch') {
        let p = new Discord.RichEmbed()
.addField('Wins', '3', true)
.addField('Losses', '14', true)
.addField('Games Played', '3', true)
.addField('League Experience', '3/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,574', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '3', true)
.addField('Win Percentage', '*17.64%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• drfinch •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@drizzth#0938 `Wins: 4 | Losses: 11 | Games Played: 3 | League EXP: 4/9 | Level: 2`
    if(command === 'drizzth') {
        let p = new Discord.RichEmbed()
.addField('Wins', '4', true)
.addField('Losses', '11', true)
.addField('Games Played', '3', true)
.addField('League Experience', '4/9', true)
.addField('Level', '2', true)
.addField('Last Game Played', '1,488', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '2', true)
.addField('Win Percentage', '*26.66%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• drizzth •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Drole#1549 `Wins: 3 | Losses: 7 | Games Played: 2 | League EXP: 3/4 | Level: 1`
    if(command === 'Drole') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '3', true)
            .addField('Losses', '7', true)
            .addField('Games Played', '2', true)
            .addField('League Experience', '3/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '1,122', true)
            .addField('Current Win Streak', '3', true)
            .addField('Longest Win Streak', '1', true)
            .addField('Win Percentage', '*30.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Drole •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Drundle#3316 `Wins: 7 | Losses: 20 | Games Played: 5 | League EXP: 9/16 | Level: 3`
    if(command === 'Drundle') {
        let p = new Discord.RichEmbed()
.addField('Wins', '7', true)
.addField('Losses', '20', true)
.addField('Games Played', '5', true)
.addField('League Experience', '9/16', true)
.addField('Level', '3', true)
.addField('Last Game Played', '1,454', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '4', true)
.addField('Win Percentage', '*25.92%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Drundle •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@DrunkCoffee#0974 `Wins: 14 | Losses: 13 | Games Played: 6 | League EXP: 27/40 | Level: 5`
    if(command === 'DrunkCoffee') {
        let p = new Discord.RichEmbed()
.addField('Wins', '14', true)
.addField('Losses', '13', true)
.addField('Games Played', '65', true)
.addField('League Experience', '27/40', true)
.addField('Level', '3', true)
.addField('Last Game Played', '1,787', true)
.addField('Current Win Streak', '5', true)
.addField('Longest Win Streak', '5', true)
.addField('Win Percentage', '*51.85%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• DrunkCoffee •|•')
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
//@Duncasaurus#7392 `Wins: 0 | Losses: 5 | Games Played: 1 | League EXP: 0/4 | Level: 0`
    if(command === 'Duncasaurus') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '0', true)
            .addField('Losses', '5', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '0/4', true)
            .addField('Level', '0', true)
            .addField('Last Game Played', '1,040', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '0', true)
            .addField('Win Percentage', '*0.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Duncasaurus •|•')
            .setColor(0x04771B)
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
//@dutchgamerspot#7885 `Wins: 7 | Losses: 14 | Games Played: 5 | League EXP: 17/25 | Level: 4`
    if(command === 'dutchgamerspot') {
        let p = new Discord.RichEmbed()
.addField('Wins', '7', true)
.addField('Losses', '14', true)
.addField('Games Played', '5', true)
.addField('League Experience', '17/25', true)
.addField('Level', '4', true)
.addField('Last Game Played', '1,553', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '3', true)
.addField('Win Percentage', '*33.33%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• dutchgamerspot •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Ebolaids#1344 `Wins: 14 | Losses: 10 | Games Played: 5 | League EXP: 23/25 | Level: 4`
    if(command === 'Ebolaids') {
        let p = new Discord.RichEmbed()
.addField('Wins', '14', true)
.addField('Losses', '10', true)
.addField('Games Played', '5', true)
.addField('League Experience', '23/25', true)
.addField('Level', '4', true)
.addField('Last Game Played', '1,134', true)
.addField('Current Win Streak', '9', true)
.addField('Longest Win Streak', '9', true)
.addField('Win Percentage', '*58.33%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Ebolaids •|•')
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
//@Elevated#8090 `Wins: 56 | Losses: 48 | Games Played: 22 | League EXP: 88/105 | Level: 7`
    if(command === 'Karlos4') {
        let p = new Discord.RichEmbed()
.addField('Wins', '56', true)
.addField('Losses', '48', true)
.addField('Games Played', '22', true)
.addField('League Experience', '88/105', true)
.addField('Level', '7', true)
.addField('Last Game Played', '1,557', true)
.addField('Current Win Streak', '5', true)
.addField('Longest Win Streak', '13', true)
.addField('Win Percentage', '*53.84%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_de: • Germany')

.setFooter('•|• Karlos4 •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@EliteCrew#9038 `Wins: 24 | Losses: 8 | Games Played: 7 | League EXP: 38/40 | Level: 5`
    if(command === 'EliteCrew') {
        let p = new Discord.RichEmbed()
.addField('Wins', '24', true)
.addField('Losses', '8', true)
.addField('Games Played', '7', true)
.addField('League Experience', '38/40', true)
.addField('Level', '5', true)
.addField('Last Game Played', '1,674', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '21', true)
.addField('Win Percentage', '*75.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• EliteCrew •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@ElStrecho#0984 `Wins: 36 | Losses: 5 | Games Played: 11 | League EXP: 61/65 | Level: 6`
    if(command === 'ElStrecho') {
        let p = new Discord.RichEmbed()
.addField('Wins', '36', true)
.addField('Losses', '5', true)
.addField('Games Played', '11', true)
.addField('League Experience', '61/65', true)
.addField('Level', '6', true)
.addField('Last Game Played', '1,783', true)
.addField('Current Win Streak', '19', true)
.addField('Longest Win Streak', '19', true)
.addField('Win Percentage', '*87.80%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

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
//@EndYourLyfe#7785 `Wins: 123 | Losses: 158 | Games Played: 57 | League EXP: 153/170 | Level: 8`
    if(command === 'EndYourLyfe') {
        let p = new Discord.RichEmbed()
.addField('Wins', '123', true)
.addField('Losses', '158', true)
.addField('Games Played', '57', true)
.addField('League Experience', '153/170', true)
.addField('Level', '8', true)
.addField('Last Game Played', '1,768', true)
.addField('Current Win Streak', '4', true)
.addField('Longest Win Streak', '13', true)
.addField('Win Percentage', '*43.77%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Incidents Reported:', '•**Raging Barbarian:** 1')

.addField('Location', ':flag_us: • America')

.setFooter('•|• EndYourLyfe •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Enter#9786 `Wins: 3 | Losses: 10 | Games Played: 2 | League EXP: 3/4 | Level: 1`
    if(command === 'TT.Enter') {
        let p = new Discord.RichEmbed()
.addField('Wins', '3', true)
.addField('Losses', '10', true)
.addField('Games Played', '2', true)
.addField('League Experience', '3/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,389', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '2', true)
.addField('Win Percentage', '*23.07%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• TT.Enter •|•')
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
//@eroth16#8533 `Wins: 0 | Losses: 12 | Games Played: 2 | League EXP: 0/4 | Level: 0`
    if(command === 'eroth13') {
        let p = new Discord.RichEmbed()
.addField('Wins', '0', true)
.addField('Losses', '12', true)
.addField('Games Played', '2', true)
.addField('League Experience', '0/4', true)
.addField('Level', '0', true)
.addField('Last Game Played', '1,231', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '0', true)
.addField('Win Percentage', '*0.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• eroth13 •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Esdeath#7519 `Wins: 433 | Losses: 23 | Games Played: 87 | League EXP: 928/1,010 | Level: 16`
    if(command === 'Esdeath') {
        let p = new Discord.RichEmbed()
.addField('Wins', '433', true)
.addField('Losses', '23', true)
.addField('Games Played', '87', true)
.addField('League Experience', '928/1,010', true)
.addField('Level', '16', true)
.addField('Last Game Played', '1,741', true)
.addField('Current Win Streak', '54', true)
.addField('Longest Win Streak', '245', true)
.addField('Win Percentage', '*94.95%*', true)

.addField('Warlord', '<:warlord:319931261894524928>', true)
.addField('•HoF• Longest Win Streak', '245', true)

.addField('Location', ':flag_us: • America')

.setFooter("•|• Esdeath - 'Pray you don't spawn next to me' •|•")
.setColor(0x77FF82)
        message.channel.sendEmbed(p);
    };
//@Falabello#3346 `Wins: 3 | Losses: 12 | Games Played: 3 | League EXP: 3/4 | Level: 1`
    if(command === 'Falabello') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '3', true)
            .addField('Losses', '12', true)
            .addField('Games Played', '3', true)
            .addField('League Experience', '3/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '1,103', true)
            .addField('Current Win Streak', '2', true)
            .addField('Longest Win Streak', '2', true)
            .addField('Win Percentage', '*20.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Falabello •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@FatArmenian#3648 `Wins: 10 | Losses: 49 | Games Played: 13 | League EXP: 21/25 | Level: 4`
    if(command === 'FatArmenian') {
        let p = new Discord.RichEmbed()
.addField('Wins', '10', true)
.addField('Losses', '49', true)
.addField('Games Played', '13', true)
.addField('League Experience', '21/25', true)
.addField('Level', '4', true)
.addField('Last Game Played', '1,501', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '2', true)
.addField('Win Percentage', '*16.94%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Incidents Reported:', '•**Quitting Barbarian:** 2')

.addField('Location', ':flag_ca: • Canada')

.setFooter('•|• FatArmenian •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@FatherTime#4458 `Wins: 47 | Losses: 62 | Games Played: 22 | League EXP: 51/65 | Level: 6`
    if(command === 'FatherTime') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '47', true)
            .addField('Losses', '62', true)
            .addField('Games Played', '22', true)
            .addField('League Experience', '51/65', true)
            .addField('Level', '6', true)
            .addField('Last Game Played', '1,135', true)
            .addField('Current Win Streak', '2', true)
            .addField('Longest Win Streak', '8', true)
            .addField('Win Percentage', '*43.11%*', true)

            .addField('Chieftain', '<:chieftain:320176909927579648>', true)

            .setFooter('•|• FatherTime •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Feddy#8945 `Wins: 14 | Losses: 16 | Games Played: 6 | League EXP: 19/25 | Level: 4`
    if(command === 'Feddy') {
        let p = new Discord.RichEmbed()
.addField('Wins', '14', true)
.addField('Losses', '16', true)
.addField('Games Played', '6', true)
.addField('League Experience', '19/25', true)
.addField('Level', '4', true)
.addField('Last Game Played', '1,202', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '8', true)
.addField('Win Percentage', '*46.66%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Feddy •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@fij707#6506 `Wins: 8 | Losses: 19 | Games Played: 5 | League EXP: 8/9 | Level: 2`
    if(command === 'fij707') {
        let p = new Discord.RichEmbed()
.addField('Wins', '8', true)
.addField('Losses', '19', true)
.addField('Games Played', '5', true)
.addField('League Experience', '8/9', true)
.addField('Level', '2', true)
.addField('Last Game Played', '1,615', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '3', true)
.addField('Win Percentage', '*29.62%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• fij707 •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@FinalDefine#9899 `Wins: 1 | Losses: 4 | Games Played: 1 | League EXP: 1/4 | Level: 1`
    if(command === 'FinalDefine') {
        let p = new Discord.RichEmbed()
.addField('Wins', '1', true)
.addField('Losses', '4', true)
.addField('Games Played', '1', true)
.addField('League Experience', '1/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,184', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '1', true)
.addField('Win Percentage', '*20.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• FinalDefine •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Fisch#5101 `Wins: 0 | Losses: 5 | Games Played: 1 | League EXP: 0/4 | Level: 0`
    if(command === 'Fisch') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '0', true)
            .addField('Losses', '5', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '0/4', true)
            .addField('Level', '0', true)
            .addField('Last Game Played', '1,028', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '0', true)
            .addField('Win Percentage', '*0.00%*', true)

            .addField('Left Discord/Game', '<:settler:319889887996411915>', true)

            .setFooter('•|• Fisch •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@firsthegiveth#1662 `Wins: 1 | Losses: 1 | Games Played: 1 | League EXP: 1/4 | Level: 1`
    if(command === 'firsthegiveth') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '1', true)
            .addField('Losses', '1', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '1/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '1,040', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '1', true)
            .addField('Win Percentage', '*50.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• firsthegiveth •|•')
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
//@Fluffy Jr#9009 `Wins: 0 | Losses: 5 | Games Played: 1 | League EXP: 0/4 | Level: 0`
    if(command === 'FluffyJr') {
        let p = new Discord.RichEmbed()
.addField('Wins', '0', true)
.addField('Losses', '5', true)
.addField('Games Played', '1', true)
.addField('League Experience', '0/4', true)
.addField('Level', '0', true)
.addField('Last Game Played', '1,193', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '0', true)
.addField('Win Percentage', '*0.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Incidents Reported:', '•**Raging Barbarian:** 1')

.addField('Location', ':flag_us: • America')

.setFooter('•|• Fluffy Jr •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@fluffykobs#4863 `Wins: 26 | Losses: 32 | Games Played: 13 | League EXP: 27/40 | Level: 5`
    if(command === 'fluffykobs') {
        let p = new Discord.RichEmbed()
.addField('Wins', '26', true)
.addField('Losses', '32', true)
.addField('Games Played', '13', true)
.addField('League Experience', '27/40', true)
.addField('Level', '5', true)
.addField('Last Game Played', '1,271', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '4', true)
.addField('Win Percentage', '*44.82%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_ca: • Canada')

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
//@Formabellus#9026 `Wins: 45 | Losses: 19 | Games Played: 13 | League EXP: 74/105 | Level: 7`
    if(command === 'Formabellus') {
        let p = new Discord.RichEmbed()
.addField('Wins', '45', true)
.addField('Losses', '19', true)
.addField('Games Played', '13', true)
.addField('League Experience', '74/105', true)
.addField('Level', '7', true)
.addField('Last Game Played', '1,764', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '13', true)
.addField('Win Percentage', '*70.31%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Formabellus •|•')
.setColor(0x0C5B80)
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
//@Fowler#4978 `Wins: 37 | Losses: 86 | Games Played: 27 | League EXP: 110/170 | Level: 8`
    if(command === 'Fowler') {
        let p = new Discord.RichEmbed()
.addField('Wins', '37', true)
.addField('Losses', '86', true)
.addField('Games Played', '27', true)
.addField('League Experience', '110/170', true)
.addField('Level', '8', true)
.addField('Last Game Played', '1,787', true)
.addField('Current Win Streak', '8', true)
.addField('Longest Win Streak', '8', true)
.addField('Win Percentage', '*30.08%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Fowler •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@FPS_Rambo#4181 `Wins: 93 | Losses: 92 | Games Played: 38 | League EXP: 134/170 | Level: 8`
    if(command === 'FPS_Rambo') {
        let p = new Discord.RichEmbed()
.addField('Wins', '93', true)
.addField('Losses', '92', true)
.addField('Games Played', '38', true)
.addField('League Experience', '134/170', true)
.addField('Level', '8', true)
.addField('Last Game Played', '1,177', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '15', true)
.addField('Win Percentage', '*50.27%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• FPS_Rambo •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Freud Neiman#3315 `Wins: 2 | Losses: 3 | Games Played: 1 | League EXP: 2/4 | Level: 1`
    if(command === 'FreudNeiman') {
        let p = new Discord.RichEmbed()
.addField('Wins', '2', true)
.addField('Losses', '3', true)
.addField('Games Played', '1', true)
.addField('League Experience', '2/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,204', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '2', true)
.addField('Win Percentage', '*40.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Freud Neiman •|•')
.setColor(0x04771B)
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
//@Fury Golem#1976 `Wins: 262 | Losses: 23 | Games Played: 64 | League EXP: 590/695 | Level: 13`
    if(command === 'FuryGolem') {
        let p = new Discord.RichEmbed()
.addField('Wins', '262', true)
.addField('Losses', '23', true)
.addField('Games Played', '64', true)
.addField('League Experience', '590/695', true)
.addField('Level', '13', true)
.addField('Last Game Played', '1,493', true)
.addField('Current Win Streak', '10', true)
.addField('Longest Win Streak', '121', true)
.addField('Win Percentage', '*91.92%*', true)

.addField('Warlord', '<:warlord:319931261894524928>', true)
.addField('Solid Host', '⍟', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Fury Golem - "Etiquette has no regard for moral qualities." •|•')
.setColor(0x77FF82)
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
//@Ga1actic#8678 `Wins: 0 | Losses: 6 | Games Played: 2 | League EXP: 20/25 | Level: 4`
    if(command === 'Ga1actic') {
        let p = new Discord.RichEmbed()
.addField('Wins', '0', true)
.addField('Losses', '6', true)
.addField('Games Played', '2', true)
.addField('League Experience', '20/25', true)
.addField('Level', '4', true)
.addField('Last Game Played', '1,647', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '0', true)
.addField('Win Percentage', '*0.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Ga1actic •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@GaelicWarrior#2034 `Wins: 209 | Losses: 23 | Games Played: 49 | League EXP: 338/380 | Level: 10`
    if(command === 'Gaelic') {
        let p = new Discord.RichEmbed()
.addField('Wins', '209', true)
.addField('Losses', '23', true)
.addField('Games Played', '49', true)
.addField('League Experience', '338/380', true)
.addField('Level', '10', true)
.addField('Last Game Played', '1,693', true)
.addField('Current Win Streak', '5', true)
.addField('Longest Win Streak', '35', true)
.addField('Win Percentage', '*90.08%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)
.addField('Solid Host', '⍟', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Gaelic •|•')
.setColor(0x0C5B80)
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
//@Galaxinator#5819 `Wins: 2 | Losses: 3 | Games Played: 1 | League EXP: 2/4| Level: 1`
    if(command === 'Galaxinator') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '2', true)
            .addField('Losses', '3', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '2/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '1,031', true)
            .addField('Current Win Streak', '2', true)
            .addField('Longest Win Streak', '2', true)
            .addField('Win Percentage', '*40.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Galaxinator •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Gammaray#7545 `Wins: 15 | Losses: 3 | Games Played: 6 | League EXP: 81/105 | Level: 7`
    if(command === 'Gammaray') {
        let p = new Discord.RichEmbed()
.addField('Wins', '15', true)
.addField('Losses', '3', true)
.addField('Games Played', '6', true)
.addField('League Experience', '81/105', true)
.addField('Level', '7', true)
.addField('Last Game Played', '1,748', true)
.addField('Current Win Streak', '6', true)
.addField('Longest Win Streak', '9', true)
.addField('Win Percentage', '*83.33%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Gammaray •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Gandalf#0928 `Wins: 0 | Losses: 10 | Games Played: 2 | League EXP: 0/4 | Level: 0`
    if(command === 'Gandalf') {
        let p = new Discord.RichEmbed()
.addField('Wins', '0', true)
.addField('Losses', '10', true)
.addField('Games Played', '2', true)
.addField('League Experience', '0/4', true)
.addField('Level', '0', true)
.addField('Last Game Played', '1,523', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '0', true)
.addField('Win Percentage', '*0.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Gandalf •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@ganksta#3356 `Wins: 117 | Losses: 38 | Games Played: 32 | League EXP: 204/275 | Level: 9`
    if(command === 'GaNkStA') {
        let p = new Discord.RichEmbed()
.addField('Wins', '117', true)
.addField('Losses', '38', true)
.addField('Games Played', '32', true)
.addField('League Experience', '204/275', true)
.addField('Level', '9', true)
.addField('Last Game Played', '1,744', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '41', true)
.addField('Win Percentage', '*75.48%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)
.addField('Solid Host', '⍟', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• GaNkStA •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@gar1288#8317 `Wins: 20 | Losses: 66 | Games Played: 18 | League EXP: 30/40 | Level: 5`
    if(command === 'SolarFlare12') {
        let p = new Discord.RichEmbed()
.addField('Wins', '20', true)
.addField('Losses', '66', true)
.addField('Games Played', '18', true)
.addField('League Experience', '30/40', true)
.addField('Level', '5', true)
.addField('Last Game Played', '1,660', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '3', true)
.addField('Win Percentage', '*23.25%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)
.addField('Solid Host', '⍟', true)

.addField('Incidents Reported:', '•**Quitting Barbarian:** 2')

.addField('Location', ':flag_us: • America')

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
//@gatorchet#8938 `Wins: 3 | Losses: 23 | Games Played: 5 | League EXP: 3/4 | Level: 1`
    if(command === 'gatorchet') {
        let p = new Discord.RichEmbed()
.addField('Wins', '3', true)
.addField('Losses', '23', true)
.addField('Games Played', '5', true)
.addField('League Experience', '3/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,782', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '1', true)
.addField('Win Percentage', '*11.53%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• gatorchet •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@GB_fan#3371 `Wins: 1 | Losses: 9 | Games Played: 2 | League EXP: 1/4 | Level: 1`
    if(command === 'GB_fan') {
        let p = new Discord.RichEmbed()
.addField('Wins', '1', true)
.addField('Losses', '9', true)
.addField('Games Played', '2', true)
.addField('League Experience', '1/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,440', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '1', true)
.addField('Win Percentage', '*10.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• GB_fan •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@gauchosion#5905 `Wins: 3 | Losses: 8 | Games Played: 2 | League EXP: 3/4 | Level: 1`
    if(command === 'gauchosion') {
        let p = new Discord.RichEmbed()
.addField('Wins', '3', true)
.addField('Losses', '8', true)
.addField('Games Played', '2', true)
.addField('League Experience', '3/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '682', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '2', true)
.addField('Win Percentage', '*27.27%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• gauchosion •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Geekob#1112 `Wins: 64 | Losses: 43 | Games Played: 22 | League EXP: 108/170 | Level: 8`
    if(command === 'Geekob') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '64', true)
            .addField('Losses', '43', true)
            .addField('Games Played', '22', true)
            .addField('League Experience', '108/170', true)
            .addField('Level', '8', true)
            .addField('Last Game Played', '961', true)
            .addField('Current Win Streak', '14', true)
            .addField('Longest Win Streak', '14', true)
            .addField('Win Percentage', '*59.81%*', true)

            .addField('Chieftain', '<:chieftain:320176909927579648>', true)

            .setFooter('•|• Geekob •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@GekonS#8906 `Wins: 49 | Losses: 105 | Games Played: 35 | League EXP: 57/65 | Level: 6`
    if(command === 'GekonS') {
        let p = new Discord.RichEmbed()
.addField('Wins', '49', true)
.addField('Losses', '105', true)
.addField('Games Played', '35', true)
.addField('League Experience', '57/65', true)
.addField('Level', '6', true)
.addField('Last Game Played', '1,696', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '9', true)
.addField('Win Percentage', '*31.81%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_sk: • Slovakia')

.setFooter('•|• GekonS •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@General Tsuki#1354 `Wins: 7 | Losses: 3 | Games Played: 2 | League EXP: 7/9 | Level: 2`
    if(command === 'GeneralTsuki') {
        let p = new Discord.RichEmbed()
.addField('Wins', '7', true)
.addField('Losses', '3', true)
.addField('Games Played', '2', true)
.addField('League Experience', '7/9', true)
.addField('Level', '2', true)
.addField('Last Game Played', '1,688', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '4', true)
.addField('Win Percentage', '*70.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• General Tsuki •|•')
.setColor(0x04771B)
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
//@Gerald The "Dru"id#2144 `Wins: 2 | Losses: 13 | Games Played 3 | League EXP: 2/4 | Level: 1`
    if(command === 'Aggredion') {
        let p = new Discord.RichEmbed()
.addField('Wins', '2', true)
.addField('Losses', '13', true)
.addField('Games Played', '3', true)
.addField('League Experience', '2/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,263', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '2', true)
.addField('Win Percentage', '*13.33%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Aggredion •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Giasu13#0484`Wins: 0 | Losses: 5 | Games Played: 1 | League EXP: 0/4 | Level: 0`
    if(command === 'Giasu13') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '0', true)
            .addField('Losses', '5', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '0/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '1,032', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '0', true)
            .addField('Win Percentage', '*0.00%*', true)

            .addField('Left Discord/Game', '<:settler:319889887996411915>', true)

            .setFooter('•|• Giasu13 •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@GingerBinger#3629 `Wins: 2 | Losses: 2 | Games Played: 1 | League EXP: 2/4 | Level: 1`
    if(command === 'GingerBinger') {
        let p = new Discord.RichEmbed()
.addField('Wins', '2', true)
.addField('Losses', '2', true)
.addField('Games Played', '1', true)
.addField('League Experience', '2/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,683', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '2', true)
.addField('Win Percentage', '*50.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• GingerBinger •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@GoldenRPGs#5066 `Wins: 20 | Losses: 41 | Games Played: 14 | League EXP: 83/105 | Level: 7`
    if(command === 'goldenrpgs') {
        let p = new Discord.RichEmbed()
.addField('Wins', '20', true)
.addField('Losses', '41', true)
.addField('Games Played', '14', true)
.addField('League Experience', '83/105', true)
.addField('Level', '7', true)
.addField('Last Game Played', '1,748', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '4', true)
.addField('Win Percentage', '*32.78%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• goldenrpgs •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@GOLLUM#3488 `Wins: 1 | Losses: 4 | Games Played: 1 | League EXP: 1/4 | Level: 1`
    if(command === 'GOLLUM') {
        let p = new Discord.RichEmbed()
.addField('Wins', '1', true)
.addField('Losses', '4', true)
.addField('Games Played', '1', true)
.addField('League Experience', '1/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,608', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '1', true)
.addField('Win Percentage', '*20.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Incidents Reported:', '•**Raging Barbarian:** 1')

.addField('Location', ':flag_us: • America')

.setFooter('•|• GOLLUM •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@GoodMyFriend#1393 `Wins: 10 | Losses: 20 | Games Played: 6 | League EXP: 10/16 | Level: 3`
    if(command === 'GoodMyFriend') {
        let p = new Discord.RichEmbed()
.addField('Wins', '10', true)
.addField('Losses', '20', true)
.addField('Games Played', '6', true)
.addField('League Experience', '10/16', true)
.addField('Level', '3', true)
.addField('Last Game Played', '1,614', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '5', true)
.addField('Win Percentage', '*33.33%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Incidents Reported:', '•**Quitting Barbarian:** 1')

.addField('Location', ':flag_us: • America')

.setFooter('•|• GoodMyFriend •|•')
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
//@Gotze S#4099 `Wins: 5 | Losses: 5 | Games Played: 2 | League EXP: 5/9 | Level: 2`
    if(command === 'InGodWeRust') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '5', true)
            .addField('Losses', '5', true)
            .addField('Games Played', '2', true)
            .addField('League Experience', '5/9', true)
            .addField('Level', '2', true)
            .addField('Last Game Played', '970', true)
            .addField('Current Win Streak', '2', true)
            .addField('Longest Win Streak', '3', true)
            .addField('Win Percentage', '*50.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• InGodWeRust playitems.com •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@GrandMoff Manny#8025 `Wins: 1 | Losses: 4 | Games Played: 1 | League EXP: 1/4 | Level: 1`
    if(command === 'GrandMoffManny') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '1', true)
            .addField('Losses', '4', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '1/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '1,011', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '1', true)
            .addField('Win Percentage', '*20.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• GrandMoff Manny •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Great Leader#1337  `Wins: 147 | Losses: 55 | Games Played: 39 | League EXP: 217/275 | Level: 9`
    if(command === 'Great Leader') {
        let p = new Discord.RichEmbed()
.addField('Wins', '147', true)
.addField('Losses', '55', true)
.addField('Games Played', '39', true)
.addField('League Experience', '217/275', true)
.addField('Level', '9', true)
.addField('Last Game Played', '1,769', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '16', true)
.addField('Win Percentage', '*72.77%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_fi: • Finland')

.setFooter('•|• Great Leader •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@GreenTea#0735 `Wins: 2 | Losses: 3 | Games Played: 1 | League EXP: 2/4 | Level: 1`
    if(command === 'lucas.cressler01') {
        let p = new Discord.RichEmbed()
.addField('Wins', '2', true)
.addField('Losses', '3', true)
.addField('Games Played', '1', true)
.addField('League Experience', '2/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,507', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '2', true)
.addField('Win Percentage', '*40.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• lucas.cressler01 •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@GRITHER#6274 `Wins: 138 | Losses: 242 | Games Played: 76 | League EXP: 151/170 | Level: 8`
    if(command === 'grither') {
        let p = new Discord.RichEmbed()
.addField('Wins', '138', true)
.addField('Losses', '242', true)
.addField('Games Played', '76', true)
.addField('League Experience', '151/170', true)
.addField('Level', '8', true)
.addField('Last Game Played', '1,733', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '6', true)
.addField('Win Percentage', '*36.31%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Incidents Reported:', '•**Raging Barbarian:** 1')

.addField('Location', ':flag_us: • America')

.setFooter('•|• grither •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Guilles#3395 `Wins: 2 | Losses: 10 | Games Played: 2 | League EXP: 2/4 | Level: 1`
    if(command === 'Guilles') {
        let p = new Discord.RichEmbed()
.addField('Wins', '2', true)
.addField('Losses', '10', true)
.addField('Games Played', '2', true)
.addField('League Experience', '2/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,739', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '2', true)
.addField('Win Percentage', '*16.66%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Guilles •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Gumprecht#6456 `Wins: 1 | Losses: 4 | Games Played: 1 | League EXP: 1/4 | Level: 1`
    if(command === 'Gumprecht') {
        let p = new Discord.RichEmbed()
.addField('Wins', '1', true)
.addField('Losses', '4', true)
.addField('Games Played', '1', true)
.addField('League Experience', '1/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,765', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '1', true)
.addField('Win Percentage', '*20.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Gumprecht •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Gvozdy#2093 `Wins: 5 | Losses: 1 | Games Played: 2 | League EXP: 18/25 | Level: 4`
    if(command === 'Gvozdy') {
        let p = new Discord.RichEmbed()
.addField('Wins', '5', true)
.addField('Losses', '1', true)
.addField('Games Played', '2', true)
.addField('League Experience', '18/25', true)
.addField('Level', '4', true)
.addField('Last Game Played', '1,728', true)
.addField('Current Win Streak', '5', true)
.addField('Longest Win Streak', '5', true)
.addField('Win Percentage', '*83.33%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Gvozdy •|•')
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
//@Hackbenjmin#4750 `Wins: 9 | Losses: 7 | Games Played: 3 | League EXP: 9/16 | Level: 3`
    if(command === 'Hackbenjmin') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '9', true)
            .addField('Losses', '7', true)
            .addField('Games Played', '3', true)
            .addField('League Experience', '9/16', true)
            .addField('Level', '2', true)
            .addField('Last Game Played', '1,025', true)
            .addField('Current Win Streak', '4', true)
            .addField('Longest Win Streak', '4', true)
            .addField('Win Percentage', '*56.25%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Hackbenjmin •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Hakbeom Henry  Kim#3737 `Wins: 6 | Losses: 16 | Games Played: 4 | League EXP: 4/9 | Level: 2`
    if(command === 'HenrY') {
        let p = new Discord.RichEmbed()
.addField('Wins', '6', true)
.addField('Losses', '16', true)
.addField('Games Played', '4', true)
.addField('League Experience', '4/9', true)
.addField('Level', '2', true)
.addField('Last Game Played', '1,709', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '4', true)
.addField('Win Percentage', '*27.27%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_kr: • Korea Republic')

.setFooter('•|• HenrY •|•')
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
//@Haloman#4786 `Wins: 6 | Losses: 3 | Games Played: 2 | League EXP: 8/9 | Level: 2`
    if(command === 'Haloman') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '6', true)
            .addField('Losses', '3', true)
            .addField('Games Played', '2', true)
            .addField('League Experience', '8/9', true)
            .addField('Level', '2', true)
            .addField('Last Game Played', '1,098', true)
            .addField('Current Win Streak', '2', true)
            .addField('Longest Win Streak', '4', true)
            .addField('Win Percentage', '*66.66%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Haloman •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Hampshire#8959 `Wins: 20 | Losses: 14 | Games Played: 7 | League EXP: 33/40 | Level: 5`
    if(command === 'Hampshire') {
        let p = new Discord.RichEmbed()
.addField('Wins', '20', true)
.addField('Losses', '14', true)
.addField('Games Played', '7', true)
.addField('League Experience', '33/40', true)
.addField('Level', '5', true)
.addField('Last Game Played', '1,394', true)
.addField('Current Win Streak', '6', true)
.addField('Longest Win Streak', '6', true)
.addField('Win Percentage', '*58.82%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Hampshire •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Hand Lover#0433 `Wins: 3 | Losses: 12 | Games Played: 3 | League EXP: 3/4 | Level: 1`
    if(command === 'HandLover') {
        let p = new Discord.RichEmbed()
.addField('Wins', '3', true)
.addField('Losses', '12', true)
.addField('Games Played', '3', true)
.addField('League Experience', '3/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,261', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '2', true)
.addField('Win Percentage', '*20.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Hand Lover •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@HarambeV2#7259 `Wins: 217 | Losses: 17 | Games Played: 51 | League EXP: 565/590 | Level: 12`
    if(command === 'HarambeV2') {
        let p = new Discord.RichEmbed()
.addField('Wins', '217', true)
.addField('Losses', '17', true)
.addField('Games Played', '51', true)
.addField('League Experience', '575/485', true)
.addField('Level', '12', true)
.addField('Last Game Played', '1,764', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '98', true)
.addField('Win Percentage', '*92.73%*', true)

.addField('Warlord', '<:warlord:319931261894524928>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• HarambeV2 •|•')
.setColor(0x77FF82)
        message.channel.sendEmbed(p);
    };
//@Hari-Kari#5702 `Wins: 25 | Losses: 77 | Games Played: 21 | League EXP: 26/40 | Level: 5`
    if(command === 'Hari-Kari') {
        let p = new Discord.RichEmbed()
.addField('Wins', '25', true)
.addField('Losses', '77', true)
.addField('Games Played', '21', true)
.addField('League Experience', '26/40', true)
.addField('Level', '5', true)
.addField('Last Game Played', '1,785', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '4', true)
.addField('Win Percentage', '*24.50%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Incidents Reported:', '•**Quitting Barbarian:** 1\n•**Raging Barbarian:** 1\n•**Uncivilized Barbarian:** 1')

.addField('Location', ':flag_us: • America')

.setFooter('•|• Hari-Kari •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Harricus#2730 `Wins: 60 | Losses: 78 | Games Played: 29 | League EXP: 84/105 | Level: 7`
    if(command === 'Harricus') {
        let p = new Discord.RichEmbed()
.addField('Wins', '60', true)
.addField('Losses', '78', true)
.addField('Games Played', '29', true)
.addField('League Experience', '84/105', true)
.addField('Level', '7', true)
.addField('Last Game Played', '1,546', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '12', true)
.addField('Win Percentage', '*43.47%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Incidents Reported:', '•**Raging Barbarian:** 1')

.addField('Location', ':flag_us: • America')

.setFooter('•|• Harricus •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@hauntedmonkey#8710 `Wins: 2 | Losses: 11 | Games Played: 2 | League EXP: 2/4 | Level: 1`
    if(command === 'HauntedMonkey') {
        let p = new Discord.RichEmbed()
.addField('Wins', '2', true)
.addField('Losses', '11', true)
.addField('Games Played', '2', true)
.addField('League Experience', '2/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,242', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '2', true)
.addField('Win Percentage', '*15.38%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• HauntedMonkey •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Havoc#0821 `Wins: 143 | Losses: 50 | Games Played: 49 | League EXP: 494/590 | Level: 12`
    if(command === 'Havoc') {
        let p = new Discord.RichEmbed()
.addField('Wins', '143', true)
.addField('Losses', '50', true)
.addField('Games Played', '49', true)
.addField('League Experience', '494/590', true)
.addField('Level', '12', true)
.addField('Last Game Played', '1,790', true)
.addField('Current Win Streak', '9', true)
.addField('Longest Win Streak', '19', true)
.addField('Win Percentage', '*74.09%*', true)

.addField('Warlord', '<:warlord:319931261894524928>', true)
.addField('Solid Host', '⍟', true)

.addField('Location', ':flag_ch: • Switzerland')

.setFooter('•|• Havoc •|•')
.setColor(0x77FF82)
        message.channel.sendEmbed(p);
    };
//@Hdeuzo#7944 `Wins: 10 | Losses: 5 | Games Played: 3 | League EXP: 10/16 | Level: 3`
    if(command === 'Hdeuzo') {
        let p = new Discord.RichEmbed()
.addField('Wins', '10', true)
.addField('Losses', '5', true)
.addField('Games Played', '3', true)
.addField('League Experience', '10/16', true)
.addField('Level', '3', true)
.addField('Last Game Played', '1,698', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '5', true)
.addField('Win Percentage', '*66.66%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Hdeuzo •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Helioliveira#4641 `Wins: 42 | Losses: 42 | Games Played: 17 | League EXP: 44/65 | Level: 6`
    if(command === 'Helioliveira') {
        let p = new Discord.RichEmbed()
.addField('Wins', '42', true)
.addField('Losses', '42', true)
.addField('Games Played', '17', true)
.addField('League Experience', '42/65', true)
.addField('Level', '6', true)
.addField('Last Game Played', '1,504', true)
.addField('Current Win Streak', '4', true)
.addField('Longest Win Streak', '6', true)
.addField('Win Percentage', '*50.00%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Helioliveira •|•')
.setColor(0x0C5B80)
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
//@heyalex#8406 `Wins: 4 | Losses: 16 | Games Played: 4 | League EXP: 4/9 | Level: 2`
    if(command === 'heyalex') {
        let p = new Discord.RichEmbed()
.addField('Wins', '4', true)
.addField('Losses', '16', true)
.addField('Games Played', '4', true)
.addField('League Experience', '4/9', true)
.addField('Level', '2', true)
.addField('Last Game Played', '1,531', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '3', true)
.addField('Win Percentage', '*20.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Incidents Reported:', '•**Raging Barbarian:** 1')

.addField('Location', ':flag_us: • America')

.setFooter('•|• heyalex •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@HobbitX#3822 `Wins: 79 | Losses: 232 | Games Played: 61 | League EXP: 74/105 | Level: 7`
    if(command === 'HobbitX') {
        let p = new Discord.RichEmbed()
.addField('Wins', '79', true)
.addField('Losses', '232', true)
.addField('Games Played', '61', true)
.addField('League Experience', '74/105', true)
.addField('Level', '7', true)
.addField('Last Game Played', '1,692', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '4', true)
.addField('Win Percentage', '*25.40%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Incidents Reported:', '•**Raging Barbarian:** 2\n•**Quitting Barbarian:** 3\n•**Uncivilized Barbarian:** 1\n•**Banned:** 1')

.addField('Location', ':flag_us: • America')

.setFooter('•|• HobbitX •|•')
.setColor(0x0C5B80)
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
//@horvaa#5702 `Wins: 5 | Losses: 10 | Games Played: 3 | League EXP: 5/9 | Level: 2`
    if(command === 'horvaa') {
        let p = new Discord.RichEmbed()
.addField('Wins', '5', true)
.addField('Losses', '10', true)
.addField('Games Played', '3', true)
.addField('League Experience', '5/9', true)
.addField('Level', '2', true)
.addField('Last Game Played', '1,706', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '2', true)
.addField('Win Percentage', '*33.33%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• horvaa •|•')
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
//@Huracanizado#1868 `Wins: 146 | Losses: 292 | Games Played: 94 | League EXP: 175/275 | Level: 9`
    if(command === 'Huracanizado') {
        let p = new Discord.RichEmbed()
.addField('Wins', '146', true)
.addField('Losses', '292', true)
.addField('Games Played', '94', true)
.addField('League Experience', '175/275', true)
.addField('Level', '9', true)
.addField('Last Game Played', '1,780', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '5', true)
.addField('Win Percentage', '*33.33%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_ar: • Argentina')

.setFooter('•|• Huracanizado •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@hyogodan#1069 `Wins: 27 | Losses: 34 | Games Played: 13 | League EXP: 27/40 | Level: 5`
    if(command === 'hydogodan') {
        let p = new Discord.RichEmbed()
.addField('Wins', '27', true)
.addField('Losses', '34', true)
.addField('Games Played', '13', true)
.addField('League Experience', '27/40', true)
.addField('Level', '5', true)
.addField('Last Game Played', '1,367', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '4', true)
.addField('Win Percentage', '*44.26%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• hydogodan •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@hypersphere#7483 `Wins: 8 | Losses: 23 | Games Played: 6 | League EXP: 12/16 | Level: 3`
    if(command === 'hypersphere') {
        let p = new Discord.RichEmbed()
.addField('Wins', '8', true)
.addField('Losses', '23', true)
.addField('Games Played', '6', true)
.addField('League Experience', '12/16', true)
.addField('Level', '3', true)
.addField('Last Game Played', '1,540', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '4', true)
.addField('Win Percentage', '*25.80%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• hypersphere •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@IanV#8795 `Wins: 3 | Losses: 9 | Games Played: 3 | League EXP: 13/16 | Level: 3`
    if(command === 'IanV') {
        let p = new Discord.RichEmbed()
.addField('Wins', '3', true)
.addField('Losses', '9', true)
.addField('Games Played', '3', true)
.addField('League Experience', '13/16', true)
.addField('Level', '3', true)
.addField('Last Game Played', '1,716', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '2', true)
.addField('Win Percentage', '*25.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• IanV •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@iartur#8087 `Wins: 127 | Losses: 188 | Games Played: 65 | League EXP: 142/170 | Level: 8`
    if(command === 'iartur') {
        let p = new Discord.RichEmbed()
.addField('Wins', '127', true)
.addField('Losses', '188', true)
.addField('Games Played', '65', true)
.addField('League Experience', '142/170', true)
.addField('Level', '8', true)
.addField('Last Game Played', '1,416', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '9', true)
.addField('Win Percentage', '*40.31%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_us: • America')

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
//@ldsmith104#2345 `Wins: 3 | Losses: 15 | Games Played: 4 | League EXP: 13/16 | Level: 3`
    if(command === 'ldsmith104') {
        let p = new Discord.RichEmbed()
.addField('Wins', '3', true)
.addField('Losses', '15', true)
.addField('Games Played', '3', true)
.addField('League Experience', '13/16', true)
.addField('Level', '3', true)
.addField('Last Game Played', '1,427', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '2', true)
.addField('Win Percentage', '*16.66%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• ldsmith104 •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@IG2U12#9711 `Wins: 1 | Losses: 1 | Games Played: 1 | League EXP: 1/4 | Level: 1`
    if(command === 'IG2U12') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '1', true)
            .addField('Losses', '1', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '1/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '1,040', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '1', true)
            .addField('Win Percentage', '*50.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• IG2U12 •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@IgnasC#5187 `Wins: 44 | Losses: 71 | Games Played: 23 | League EXP: 59/65 | Level: 6`
    if(command === 'IgnasC') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '44', true)
            .addField('Losses', '71', true)
            .addField('Games Played', '23', true)
            .addField('League Experience', '59/65', true)
            .addField('Level', '6', true)
            .addField('Last Game Played', '1,669', true)
            .addField('Current Win Streak', '2', true)
            .addField('Longest Win Streak', '14', true)
            .addField('Win Percentage', '*38.26%*', true)

            .addField('Chieftain', '<:chieftain:320176909927579648>', true)

            .setFooter('•|• IgnasC •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@iHas#1005 `Wins: 18 | Losses: 43 | Games Played: 12 | League EXP: 18/25 | Level: 4`
    if(command === 'SpAFire') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '18', true)
            .addField('Losses', '43', true)
            .addField('Games Played', '12', true)
            .addField('League Experience', '18/25', true)
            .addField('Level', '4', true)
            .addField('Last Game Played', '961', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '4', true)
            .addField('Win Percentage', '*29.50%*', true)

            .setFooter('•|• [SpA] Fire •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@ilasha#6028 `Wins: 10 | Losses: 0 | Games Played: 2 | League EXP: 27/40 | Level: 5`
    if(command === 'ilisha') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '10', true)
            .addField('Losses', '0', true)
            .addField('Games Played', '2', true)
            .addField('League Experience', '27/40', true)
            .addField('Level', '5', true)
            .addField('Last Game Played', '992', true)
            .addField('Current Win Streak', '10', true)
            .addField('Longest Win Streak', '10', true)
            .addField('Win Percentage', '*100.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• ilisha •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@illuminatiman#9389 `Wins: 6 | Losses: 20 | Games Played: 5 | League EXP: 6/9 | Level: 2`
    if(command === 'MrMeeseeks') {
        let p = new Discord.RichEmbed()
.addField('Wins', '6', true)
.addField('Losses', '20', true)
.addField('Games Played', '5', true)
.addField('League Experience', '6/9', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,566', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '4', true)
.addField('Win Percentage', '*23.07%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Mr.Meeseeks •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Im.Cryツ#8961 `Wins: 8 | Losses: 17 | Games Played: 5 | League EXP: 8/9 | Level: 2`
    if(command === 'Im.Cry') {
        let p = new Discord.RichEmbed()
.addField('Wins', '8', true)
.addField('Losses', '17', true)
.addField('Games Played', '5', true)
.addField('League Experience', '8/9', true)
.addField('Level', '2', true)
.addField('Last Game Played', '1,470', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '2', true)
.addField('Win Percentage', '*32.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Im.Cry •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@iMonstrosity#4051 `Wins: 0 | Losses: 5 | Games Played: 1 | League EXP: 0/4 | Level: 0`
    if(command === 'iMonstrosity') {
        let p = new Discord.RichEmbed()
.addField('Wins', '0', true)
.addField('Losses', '5', true)
.addField('Games Played', '1', true)
.addField('League Experience', '0/4', true)
.addField('Level', '0', true)
.addField('Last Game Played', '1,184', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '0', true)
.addField('Win Percentage', '*0.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• iMonstrosity •|•')
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
//@InfectedYoU#7530 `Wins: 20 | Losses: 38 | Games Played: 12 | League EXP: 22/25 | Level: 4`
    if(command === 'InfectedYoU') {
        let p = new Discord.RichEmbed()
.addField('Wins', '20', true)
.addField('Losses', '38', true)
.addField('Games Played', '12', true)
.addField('League Experience', '22/25', true)
.addField('Level', '4', true)
.addField('Last Game Played', '1,641', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '6', true)
.addField('Win Percentage', '*34.48%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• InfectedYoU •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@InregnoDei#8147 `Wins: 6 | Losses: 4 | Games Played: 2 | League EXP: 15/16 | Level: 3`
    if(command === 'InregnoDei') {
        let p = new Discord.RichEmbed()
.addField('Wins', '6', true)
.addField('Losses', '4', true)
.addField('Games Played', '2', true)
.addField('League Experience', '15/16', true)
.addField('Level', '3', true)
.addField('Last Game Played', '1,756', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '5', true)
.addField('Win Percentage', '*60.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• InregnoDei •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@iPekto#9852 `Wins: 0 | Losses: 3 | Games Played: 1 | League EXP: 10/16 | Level: 3`
    if(command === 'iPekto') {
        let p = new Discord.RichEmbed()
.addField('Wins', '0', true)
.addField('Losses', '3', true)
.addField('Games Played', '1', true)
.addField('League Experience', '10/16', true)
.addField('Level', '3', true)
.addField('Last Game Played', '1,728', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '0', true)
.addField('Win Percentage', '*0.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|•  •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Is. Leave. Possible.#0433 `Wins: 9 | Losses: 12 | Games Played: 3 | League EXP: 9/16 | Level: 3`
    if(command === 'IsLeavePossible') {
        let p = new Discord.RichEmbed()
.addField('Wins', '9', true)
.addField('Losses', '12', true)
.addField('Games Played', '3', true)
.addField('League Experience', '9/16', true)
.addField('Level', '3', true)
.addField('Last Game Played', '1,642', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '0', true)
.addField('Win Percentage', '*0.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_eu: • Europe')

.setFooter('•|• Is. Leave. Possible. •|•')
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
//@j_n_isengard#4424 `Wins: 1 | Losses: 4 | Games Played: 1 | League EXP: 1/4 | Level: 1`
    if(command === 'j_n_isengard') {
        let p = new Discord.RichEmbed()
.addField('Wins', '1', true)
.addField('Losses', '4', true)
.addField('Games Played', '1', true)
.addField('League Experience', '1/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,157', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '1', true)
.addField('Win Percentage', '*20.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• j_n_isengard •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Jack The Ripper#5364 `Wins: 10 | Losses: 28 | Games Played: 7 | League EXP: 10/16 | Level: 3`
    if(command === 'Jack The Ripper') {
        let p = new Discord.RichEmbed()
.addField('Wins', '10', true)
.addField('Losses', '28', true)
.addField('Games Played', '7', true)
.addField('League Experience', '10/16', true)
.addField('Level', '3', true)
.addField('Last Game Played', '1,789', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '3', true)
.addField('Win Percentage', '*26.31%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Jack The Ripper •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Jakers#0864 `Wins: 2 | Losses: 5 | Games Played: 1 | League EXP: 2/4 | Level: 1`
    if(command === 'Jakers') {
        let p = new Discord.RichEmbed()
.addField('Wins', '2', true)
.addField('Losses', '5', true)
.addField('Games Played', '1', true)
.addField('League Experience', '2/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,348', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '2', true)
.addField('Win Percentage', '*28.57%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Jakers •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@JakuroTaSallz#1386 `Wins: 2 | Losses: 4 | Games Played: 1 | League EXP: 2/4 | Level: 1`
    if(command === 'JakuroTaSallz') {
        let p = new Discord.RichEmbed()
.addField('Wins', '2', true)
.addField('Losses', '4', true)
.addField('Games Played', '1', true)
.addField('League Experience', '2/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,500', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '2', true)
.addField('Win Percentage', '*33.33%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• JakuroTaSallz •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Jammy#7116 `Wins: 3 | Losses: 2 | Games Played: 1 | League EXP: 3/4 | Level: 1`
    if(command === 'Jammy') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '3', true)
            .addField('Losses', '2', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '3/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '1,104', true)
            .addField('Current Win Streak', '3', true)
            .addField('Longest Win Streak', '3', true)
            .addField('Win Percentage', '*60.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Jammy •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Jango#9171 `Wins: 4 | Losses: 11 | Games Played: 2 | League EXP: 4/9 | Level: 2`
    if(command === 'Jango') {
        let p = new Discord.RichEmbed()
.addField('Wins', '4', true)
.addField('Losses', '11', true)
.addField('Games Played', '2', true)
.addField('League Experience', '4/9', true)
.addField('Level', '2', true)
.addField('Last Game Played', '1,449', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '4', true)
.addField('Win Percentage', '*26.66%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Incidents Reported:', '•**Quitting Barbarian:** 1')

.addField('Location', ':flag_us: • America')

.setFooter('•|• Jango •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@jason#0666 `Wins: 4 | Losses: 25 | Games Played: 6 | League EXP: 4/9 | Level: 2`
    if(command === 'jason') {
        let p = new Discord.RichEmbed()
.addField('Wins', '4', true)
.addField('Losses', '25', true)
.addField('Games Played', '6', true)
.addField('League Experience', '4/9', true)
.addField('Level', '2', true)
.addField('Last Game Played', '1,378', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '2', true)
.addField('Win Percentage', '*13.79%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_au: • Australia')

.setFooter('•|• jason •|•')
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
//@jaximus#1438 `Wins: 106 | Losses: 51 | Games Played: 32 | League EXP: 171/275 | Level: 9`
    if(command === 'jaximus') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '106', true)
            .addField('Losses', '51', true)
            .addField('Games Played', '32', true)
            .addField('League Experience', '171/275', true)
            .addField('Level', '9', true)
            .addField('Last Game Played', '1,0853', true)
            .addField('Current Win Streak', '4', true)
            .addField('Longest Win Streak', '14', true)
            .addField('Win Percentage', '*67.51%*', true)

            .addField('Chieftain', '<:chieftain:320176909927579648>', true)

            .setFooter('•|• jaximus •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Jay#7593 `Wins: 2 | Losses: 2 | Games Played: 1 | League EXP: 2/4 | Level: 1`
    if(command === 'Cryda') {
        let p = new Discord.RichEmbed()
.addField('Wins', '2', true)
.addField('Losses', '2', true)
.addField('Games Played', '1', true)
.addField('League Experience', '2/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,449', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '2', true)
.addField('Win Percentage', '*50.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Cryda •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@JayGeezy#7117 `Wins: 0 | Losses: 5 | Games Played: 1 | League EXP: 0/4 | Level: 0`
    if(command === 'JayGeezy') {
        let p = new Discord.RichEmbed()
.addField('Wins', '0', true)
.addField('Losses', '5', true)
.addField('Games Played', '1', true)
.addField('League Experience', '0/4', true)
.addField('Level', '0', true)
.addField('Last Game Played', '1,653', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '0', true)
.addField('Win Percentage', '*0.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Incidents Reported:', '•**Quitting Barbarian:** 1')

.addField('Location', ':flag_us: • America')

.setFooter('•|• JayGeezy •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
/*@Jebać UFO#6187 `Wins: 0 | Losses: 16 | Games Played: 3 | EXP: 0/4 | Level: 0`
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



.setFooter('•|• Jebać UFO •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };*/
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
//@Jerkuti#0539 `Wins: 17 | Losses: 31 | Games Played: 9 | League EXP: 17/25 | Level: 4`
    if(command === 'Jerkuti') {
        let p = new Discord.RichEmbed()
.addField('Wins', '17', true)
.addField('Losses', '31', true)
.addField('Games Played', '9', true)
.addField('League Experience', '17/25', true)
.addField('Level', '4', true)
.addField('Last Game Played', '1,564', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '3', true)
.addField('Win Percentage', '*35.41%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Jerkuti •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@JessicaP#9217 `Wins: 10 | Losses: 6 | Games Played: 4 | League EXP: 16/25 | Level: 4`
    if(command === 'JessicaP') {
        let p = new Discord.RichEmbed()
.addField('Wins', '10', true)
.addField('Losses', '6', true)
.addField('Games Played', '4', true)
.addField('League Experience', '16/25', true)
.addField('Level', '4', true)
.addField('Last Game Played', '1,452', true)
.addField('Current Win Streak', '6', true)
.addField('Longest Win Streak', '6', true)
.addField('Win Percentage', '*62.50%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• JessicaP •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@JesusHadAegis#0168 `Wins: 0 | Losses: 6 | Games Played: 1 | League EXP: 0/4 | Level: 0`
    if(command === 'JesusHadAegis') {
        let p = new Discord.RichEmbed()
.addField('Wins', '0', true)
.addField('Losses', '6', true)
.addField('Games Played', '1', true)
.addField('League Experience', '0/4', true)
.addField('Level', '0', true)
.addField('Last Game Played', '1,291', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '0', true)
.addField('Win Percentage', '*0.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Incidents Reported:', '•**Quitting Barbarian:** 1')

.addField('Location', ':flag_us: • America')

.setFooter('•|• JesusHadAegis •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@JesusIslam#8773 `Wins: 4 | Losses: 7 | Games Played: 2 | League EXP: 4/9 | Level: 2`
    if(command === 'JesusIslam') {
        let p = new Discord.RichEmbed()
.addField('Wins', '4', true)
.addField('Losses', '7', true)
.addField('Games Played', '2', true)
.addField('League Experience', '4/9', true)
.addField('Level', '2', true)
.addField('Last Game Played', '1,352', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '3', true)
.addField('Win Percentage', '*36.36%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• JesusIslam •|•')
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
//@JohhnyPro#4540 `Wins: 107 | Losses: 96 | Games Played: 40 | League EXP: 140/170 | Level: 8`
    if(command === 'Johnny') {
        let p = new Discord.RichEmbed()
.addField('Wins', '107', true)
.addField('Losses', '96', true)
.addField('Games Played', '40', true)
.addField('League Experience', '140/170', true)
.addField('Level', '8', true)
.addField('Last Game Played', '1,654', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '11', true)
.addField('Win Percentage', '*52.70%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Johnny •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@JohnBoyOPP#3249 `Wins: 3 | Losses: 2 | Games Played: 1 | League EXP: 3/4 | Level: 1`
    if(command === 'JohnBoyOPP') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '3', true)
            .addField('Losses', '2', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '3/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '999', true)
            .addField('Current Win Streak', '3', true)
            .addField('Longest Win Streak', '3', true)
            .addField('Win Percentage', '*60.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• JohnBoyOPP •|•')
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
//@jokazc#5899 `Wins: 14 | Losses: 10 | Games Played: 5 | League EXP: 14/16 | Level: 3`
    if(command === 'jokazc') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '14', true)
            .addField('Losses', '10', true)
            .addField('Games Played', '5', true)
            .addField('League Experience', '14/16', true)
            .addField('Level', '3', true)
            .addField('Last Game Played', '1,026', true)
            .addField('Current Win Streak', '4', true)
            .addField('Longest Win Streak', '4', true)
            .addField('Win Percentage', '*58.33%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

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
//@ju1yyy#3858 `Wins: 3 | Losses: 7 | Games Played: 2 | League EXP: 3/4 | Level: 1`
    if(command === 'ju1y') {
        let p = new Discord.RichEmbed()
.addField('Wins', '3', true)
.addField('Losses', '7', true)
.addField('Games Played', '2', true)
.addField('League Experience', '3/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,483', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '2', true)
.addField('Win Percentage', '*30.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• ju1y •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@jules_cesar_44#4076 `Wins: 22 | Losses: 32 | Games Played: 10 | League EXP: 26/40 | Level: 5`
    if(command === 'jules_cesar_44') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '22', true)
            .addField('Losses', '32', true)
            .addField('Games Played', '10', true)
            .addField('League Experience', '26/40', true)
            .addField('Level', '5', true)
            .addField('Last Game Played', '1,056', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '4', true)
            .addField('Win Percentage', '*40.74%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• jules_cesar_44 •|•')
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
//@Kekistani#5484 `Wins: 15 | Losses: 26 | Games Played: 8 | League EXP: 15/16 | Level: 3`
    if(command === 'Kekistani') {
        let p = new Discord.RichEmbed()
.addField('Wins', '15', true)
.addField('Losses', '26', true)
.addField('Games Played', '8', true)
.addField('League Experience', '15/16', true)
.addField('Level', '3', true)
.addField('Last Game Played', '1,755', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '4', true)
.addField('Win Percentage', '*36.58%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

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
//@KFTh#1577 `Wins: 1 | Losses: 4 | Games Played: 1 | League EXP: 1/4 | Level: 1`
    if(command === 'KFTh') {
        let p = new Discord.RichEmbed()
.addField('Wins', '1', true)
.addField('Losses', '4', true)
.addField('Games Played', '1', true)
.addField('League Experience', '1/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,701', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '1', true)
.addField('Win Percentage', '*20.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• KFTh •|•')
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
//@Killa_Kann#3048 `Wins: 0 | Losses: 5 | Games Played: 1 | League EXP: 0/4 | Level: 0`
    if(command === 'Killa_Kann') {
        let p = new Discord.RichEmbed()
.addField('Wins', '0', true)
.addField('Losses', '5', true)
.addField('Games Played', '1', true)
.addField('League Experience', '0/4', true)
.addField('Level', '0', true)
.addField('Last Game Played', '1,683', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '0', true)
.addField('Win Percentage', '*0.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Incidents Reported:', '•**Raging Barbarian:** 1')

.addField('Location', ':flag_us: • America')

.setFooter('•|• Killa_Kann •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@KillerFTW99#6119 `Wins: 12 | Losses: 10 | Games Played: 5 | League EXP: 19/25 | Level: 4`
    if(command === 'KillerFTW99') {
        let p = new Discord.RichEmbed()
.addField('Wins', '12', true)
.addField('Losses', '10', true)
.addField('Games Played', '5', true)
.addField('League Experience', '19/25', true)
.addField('Level', '4', true)
.addField('Last Game Played', '1,182', true)
.addField('Current Win Streak', '4', true)
.addField('Longest Win Streak', '4', true)
.addField('Win Percentage', '*54.54%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• KillerFTW99 •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Kings.Orient#1345 `Wins: 87 | Losses: 15 | Games Played: 22 | League EXP: 157/170 | Level: 8`
    if(command === 'KingsOrient') {
        let p = new Discord.RichEmbed()
.addField('Wins', '87', true)
.addField('Losses', '15', true)
.addField('Games Played', '22', true)
.addField('League Experience', '157/170', true)
.addField('Level', '8', true)
.addField('Last Game Played', '1,741', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '30', true)
.addField('Win Percentage', '*85.29%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_kr: • Korean')

.setFooter('•|• KingsOrient •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@kingsaul#1606 `Wins: 1 | Losses: 4 | Games Played: 1 | League EXP: 1/4 | Level: 1`
    if(command === 'kingsaul') {
        let p = new Discord.RichEmbed()
.addField('Wins', '1', true)
.addField('Losses', '4', true)
.addField('Games Played', '1', true)
.addField('League Experience', '1/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,702', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '1', true)
.addField('Win Percentage', '*20.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• kingsaul •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Kiss#2089 `Wins: 5 | Losses: 7 | Games Played: 2 | League EXP: 5/9 | Level: 2`
    if(command === 'KissMyASL') {
        let p = new Discord.RichEmbed()
.addField('Wins', '5', true)
.addField('Losses', '7', true)
.addField('Games Played', '2', true)
.addField('League Experience', '5/9', true)
.addField('Level', '2', true)
.addField('Last Game Played', '1,579', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '3', true)
.addField('Win Percentage', '*41.66%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Kiss My ASL •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@KK the Boss#1941 `Wins: 0 | Losses: 5 | Games Played: 1 | League EXP: 0/4 | Level: 0`
    if(command === 'KKtheBoss') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '0', true)
            .addField('Losses', '5', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '0/4', true)
            .addField('Level', '0', true)
            .addField('Last Game Played', '1,011', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '0', true)
            .addField('Win Percentage', '*0.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• KK the Boss •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@KMlv#6996 `Wins: 18 | Losses: 22 | Games Played: 8 | League EXP: 25/40 | Level: 5`
    if(command === 'KMlv') {
        let p = new Discord.RichEmbed()
.addField('Wins', '18', true)
.addField('Losses', '22', true)
.addField('Games Played', '8', true)
.addField('League Experience', '25/40', true)
.addField('Level', '5', true)
.addField('Last Game Played', '1,788', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '7', true)
.addField('Win Percentage', '*60.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• KMlv •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@knoko#6969 `Wins: 26 | Losses: 23 | Games Played: 10 | League EXP: 22/25 | Level: 4`
    if(command === 'knoko') {
        let p = new Discord.RichEmbed()
.addField('Wins', '26', true)
.addField('Losses', '23', true)
.addField('Games Played', '10', true)
.addField('League Experience', '22/25', true)
.addField('Level', '4', true)
.addField('Last Game Played', '1,160', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '4', true)
.addField('Win Percentage', '*53.06%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• knoko •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Kobo#3262 `Wins: 7 | Losses: 13 | Games Played: 3 | League EXP: 7/9 | Level: 2`
    if(command === 'Kobo') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '7', true)
            .addField('Losses', '13', true)
            .addField('Games Played', '3', true)
            .addField('League Experience', '7/9', true)
            .addField('Level', '2', true)
            .addField('Last Game Played', '1,224', true)
            .addField('Current Win Streak', '3', true)
            .addField('Longest Win Streak', '3', true)
            .addField('Win Percentage', '*35.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Kobo •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@kosma#2799 `Wins: 32 | Losses: 42 | Games Played: 17 | League EXP: 54/65 | Level: 6`
    if(command === 'Kosmanaut') {
        let p = new Discord.RichEmbed()
.addField('Wins', '32', true)
.addField('Losses', '42', true)
.addField('Games Played', '17', true)
.addField('League Experience', '54/65', true)
.addField('Level', '6', true)
.addField('Last Game Played', '1,788', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '9', true)
.addField('Win Percentage', '*43.24%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_se: • Sweden')

.setFooter('•|• Kosmanaut •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@kossa9000#3378 `Wins: 29 | Losses: 48 | Games Played: 15 | League EXP: 49/65 | Level: 6`
    if(command === 'hamster') {
        let p = new Discord.RichEmbed()
.addField('Wins', '29', true)
.addField('Losses', '48', true)
.addField('Games Played', '15', true)
.addField('League Experience', '49/65', true)
.addField('Level', '6', true)
.addField('Last Game Played', '1,766', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '4', true)
.addField('Win Percentage', '*37.66%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• hamster •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Krupa aka Zika Baby#1788 `Wins: 145 | Losses: 201 | Games Played: 70 | League EXP: 165/170 | Level: 8`
    if(command === 'Krupa') {
        let p = new Discord.RichEmbed()
.addField('Wins', '145', true)
.addField('Losses', '201', true)
.addField('Games Played', '70', true)
.addField('League Experience', '165/170', true)
.addField('Level', '8', true)
.addField('Last Game Played', '1,740', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '9', true)
.addField('Win Percentage', '*41.90%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• krupa aka Zika Baby •|•')
.setColor(0x0C5B80)
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

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Laberik •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Lauro#5943 `Wins: 52 | Losses: 104 | Games Played: 31 | League EXP: 57/65 | Level: 6`
    if(command === 'Lauro') {
        let p = new Discord.RichEmbed()
.addField('Wins', '52', true)
.addField('Losses', '104', true)
.addField('Games Played', '31', true)
.addField('League Experience', '57/65', true)
.addField('Level', '6', true)
.addField('Last Game Played', '1,604', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '6', true)
.addField('Win Percentage', '*33.33%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Lauro •|•')
.setColor(0x77FF82)
        message.channel.sendEmbed(p);
    };
//@Lax4life53#9280 `Wins: 6 | Losses: 7 | Games Played: 3 | League EXP: 6/9 | Level: 2`
    if(command === 'Lax4life53') {
        let p = new Discord.RichEmbed()
.addField('Wins', '6', true)
.addField('Losses', '7', true)
.addField('Games Played', '3', true)
.addField('League Experience', '6/9', true)
.addField('Level', '2', true)
.addField('Last Game Played', '1,707', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '2', true)
.addField('Win Percentage', '*46.15%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Lax4life53 •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@leetmax#6044 `Wins: 40 | Losses: 44 | Games Played: 17 | League EXP: 48/65 | Level: 6`
    if(command === 'LeetSalope') {
        let p = new Discord.RichEmbed()
.addField('Wins', '40', true)
.addField('Losses', '44', true)
.addField('Games Played', '17', true)
.addField('League Experience', '48/65', true)
.addField('Level', '6', true)
.addField('Last Game Played', '1,195', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '9', true)
.addField('Win Percentage', '*47.61%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• LeetSalope •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Lemon#7587 `Wins: 1 | Losses: 4 | Games Played: 1 | League EXP: 1/4 | Level: 1`
    if(command === 'Lemonati') {
        let p = new Discord.RichEmbed()
.addField('Wins', '1', true)
.addField('Losses', '4', true)
.addField('Games Played', '1', true)
.addField('League Experience', '1/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,251', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '1', true)
.addField('Win Percentage', '*20.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Lemonati •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@lesgolas95#1340 `Wins: 1 | Losses: 10 | Games Played: 2 | League EXP: 1/4 | Level: 1`
    if(command === 'lesgolas95') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '1', true)
            .addField('Losses', '10', true)
            .addField('Games Played', '2', true)
            .addField('League Experience', '1/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '1,131', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '1', true)
            .addField('Win Percentage', '*9.09%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .addField('Location', ':flag_:')

            .setFooter('•|• lesgolas95 •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Leven#1118 `Wins: 2 | Losses: 13 | Games Played: 3 | League EXP: 2/4 | Level: 1`
    if(command === 'Leven') {
        let p = new Discord.RichEmbed()
.addField('Wins', '2', true)
.addField('Losses', '13', true)
.addField('Games Played', '3', true)
.addField('League Experience', '2/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,623', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '2', true)
.addField('Win Percentage', '*13.33%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Leven •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@levi1988#3829 `Wins: 15 | Losses: 15 | Games Played: 5 | League EXP: 57/65 | Level: 6`
    if(command === 'levi1988') {
        let p = new Discord.RichEmbed()
.addField('Wins', '15', true)
.addField('Losses', '15', true)
.addField('Games Played', '6', true)
.addField('League Experience', '57/65', true)
.addField('Level', '6', true)
.addField('Last Game Played', '1,663', true)
.addField('Current Win Streak', '7', true)
.addField('Longest Win Streak', '7', true)
.addField('Win Percentage', '*50.00%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• levi1988 •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@liam is ew and so am i#1035 `Wins: 1 | Losses: 9 | Games Played: 2 | League EXP: 1/4 | Level: 1`
    if(command === 'liamisewandsoami') {
        let p = new Discord.RichEmbed()
.addField('Wins', '1', true)
.addField('Losses', '9', true)
.addField('Games Played', '2', true)
.addField('League Experience', '1/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,154', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '1', true)
.addField('Win Percentage', '*10.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• liam is ew and so am i •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Libard#5521 `Wins: 13 | Losses: 19 | Games Played: 7 | League EXP: 15/16 | Level: 3`
    if(command === 'Libard') {
        let p = new Discord.RichEmbed()
.addField('Wins', '13', true)
.addField('Losses', '19', true)
.addField('Games Played', '7', true)
.addField('League Experience', '15/16', true)
.addField('Level', '3', true)
.addField('Last Game Played', '1,751', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '5', true)
.addField('Win Percentage', '*40.62%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_kr: • Korea Republic')

.setFooter('•|• Libard •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@likeaquarius#1233 `Wins: 10 | Losses: 5 | Games Played: 3 | League EXP: 11/16 | Level: 3`
    if(command === 'likeaquarius') {
        let p = new Discord.RichEmbed()
.addField('Wins', '10', true)
.addField('Losses', '5', true)
.addField('Games Played', '3', true)
.addField('League Experience', '11/16', true)
.addField('Level', '3', true)
.addField('Last Game Played', '1,273', true)
.addField('Current Win Streak', '9', true)
.addField('Longest Win Streak', '9', true)
.addField('Win Percentage', '*66.66%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• likeaquarius •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@LithiumToast#7550 `Wins: 5 | Losses: 8 | Games Played: 3 | League EXP: 15/16 | Level: 3`
    if(command === 'LithiumToast') {
        let p = new Discord.RichEmbed()
.addField('Wins', '5', true)
.addField('Losses', '8', true)
.addField('Games Played', '1', true)
.addField('League Experience', '15/16', true)
.addField('Level', '3', true)
.addField('Last Game Played', '1,650', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '4', true)
.addField('Win Percentage', '*38.46%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• LithiumToast •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Lizi_RUS#4813 `Wins: 3 | Losses: 26 | Games Played: 7 | League EXP: 3/4 | Level: 1`
    if(command === 'Lizi_RUS') {
        let p = new Discord.RichEmbed()
.addField('Wins', '3', true)
.addField('Losses', '26', true)
.addField('Games Played', '7', true)
.addField('League Experience', '3/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,324', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '2', true)
.addField('Win Percentage', '*10.34%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_ru: • Russia')

.setFooter('•|• Lizi_RUS •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@lolfifoo#1856 `Wins: 0 | Losses: 10 | Games Played: 2 | League EXP: 0/4 | Level: 0`
    if(command === 'lolfifoo') {
        let p = new Discord.RichEmbed()
.addField('Wins', '0', true)
.addField('Losses', '10', true)
.addField('Games Played', '2', true)
.addField('League Experience', '0/4', true)
.addField('Level', '0', true)
.addField('Last Game Played', '1,767', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '0', true)
.addField('Win Percentage', '*0.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• lolfifoo •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@lolohcrap#8475 `Wins: 396 | Losses: 243 | Games Played: 129 | League EXP: 548/590 | Level: 12`
    if(command === 'lolohcrap') {
        let p = new Discord.RichEmbed()
.addField('Wins', '396', true)
.addField('Losses', '243', true)
.addField('Games Played', '129', true)
.addField('League Experience', '548/590', true)
.addField('Level', '12', true)
.addField('Last Game Played', '1,788', true)
.addField('Current Win Streak', '6', true)
.addField('Longest Win Streak', '18', true)
.addField('Win Percentage', '*57.74%*', true)

.addField('Warlord', '<:warlord:319931261894524928>', true)

.addField('Location', ':flag_kr: • Korean')

.setFooter('•|• lolohcrap •|•')
.setColor(0x77FF82)
        message.channel.sendEmbed(p);
    };
//@longhornt#7841 `Wins: 1 | Losses: 9 | Games Played: 2 | League EXP: 1/4 | Level: 1`
    if(command === 'YETI') {
        let p = new Discord.RichEmbed()
.addField('Wins', '1', true)
.addField('Losses', '9', true)
.addField('Games Played', '1', true)
.addField('League Experience', '1/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,307', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '1', true)
.addField('Win Percentage', '*10.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• YETI •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Lord Quackers#2801 `Wins: 0 | Losses: 4 | Games Played: 2 | League EXP: 20/25 | Level: 4`
    if(command === 'LordQuackers') {
        let p = new Discord.RichEmbed()
.addField('Wins', '0', true)
.addField('Losses', '4', true)
.addField('Games Played', '2', true)
.addField('League Experience', '20/25', true)
.addField('Level', '4', true)
.addField('Last Game Played', '1,650', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '0', true)
.addField('Win Percentage', '*0.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Incidents Reported:', '•**Raging Barbarian:** 1')

.addField('Location', ':flag_us: • America')

.setFooter('•|• Lord Quackers •|•')
.setColor(0x04771B)
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
//@LTLB#1061 `Wins: 4 | Losses: 6 | Games Played: 2 | League EXP: 4/9 | Level: 2`
    if(command === 'LTLB') {
        let p = new Discord.RichEmbed()
.addField('Wins', '4', true)
.addField('Losses', '6', true)
.addField('Games Played', '2', true)
.addField('League Experience', '4/9', true)
.addField('Level', '2', true)
.addField('Last Game Played', '1,669', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '3', true)
.addField('Win Percentage', '*50.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• LTLB •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Luigiigi#1393 `Wins: 0 | Losses: 5 | Games Played: 1 | League EXP: 0/4 | Level: 0`
    if(command === 'Luigiigi') {
        let p = new Discord.RichEmbed()
.addField('Wins', '0', true)
.addField('Losses', '5', true)
.addField('Games Played', '1', true)
.addField('League Experience', '0/4', true)
.addField('Level', '0', true)
.addField('Last Game Played', '1,704', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '0', true)
.addField('Win Percentage', '*0.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Luigiigi •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Lykeri `Wins: 1 | Losses: 5 | Games Played: 1 | League EXP: 1/4 | Level: 1`
    if(command === 'Lykeri') {
        let p = new Discord.RichEmbed()
.addField('Wins', '1', true)
.addField('Losses', '5', true)
.addField('Games Played', '1', true)
.addField('League Experience', '1/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,410', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '1', true)
.addField('Win Percentage', '*16.66%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Lykeri •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Lyksy#3251 `Wins: 1 | Losses: 4 | Games Played: 1 | League EXP: 1/4 | Level: 1`
    if(command === 'Lyksy') {
        let p = new Discord.RichEmbed()
.addField('Wins', '1', true)
.addField('Losses', '4', true)
.addField('Games Played', '1', true)
.addField('League Experience', '1/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,677', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '1', true)
.addField('Win Percentage', '*20.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Lyksy •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Lynx#6521 `Wins: 7 | Losses: 8 | Games Played: 3 | League EXP: 7/9 | Level: 2`
    if(command === 'Lynx') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '7', true)
            .addField('Losses', '8', true)
            .addField('Games Played', '3', true)
            .addField('League Experience', '7/9', true)
            .addField('Level', '2', true)
            .addField('Last Game Played', '730', true)
            .addField('Current Win Streak', '4', true)
            .addField('Longest Win Streak', '4', true)
            .addField('Win Percentage', '*46.66%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Lynx •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@m1ka#3594 `Wins: 12 | Losses: 10 | Games Played: 5 | League EXP: 24/25 | Level: 4`
    if(command === 'm1ka') {
        let p = new Discord.RichEmbed()
.addField('Wins', '12', true)
.addField('Losses', '10', true)
.addField('Games Played', '5', true)
.addField('League Experience', '24/25', true)
.addField('Level', '4', true)
.addField('Last Game Played', '1,687', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '5', true)
.addField('Win Percentage', '*54.54%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_fr: • France')

.setFooter('•|• m1ka •|•')
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

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• 𝓜𝓻𝓑𝓸𝓼𝓽𝓲𝓬𝓚 •|•')
            .setColor(0xC665C1)
        message.channel.sendEmbed(p);
    };
//@MΛΧ#8232 `Wins: 36 | Losses: 58 | Games Played: 18 | League EXP: 31/40 | Level: 5`
    if(command === 'MAX') {
        let p = new Discord.RichEmbed()
.addField('Wins', '36', true)
.addField('Losses', '58', true)
.addField('Games Played', '18', true)
.addField('League Experience', '31/40', true)
.addField('Level', '5', true)
.addField('Last Game Played', '1,300', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '5', true)
.addField('Win Percentage', '*38.29%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_gb: • Great Britain Republic')

.setFooter('•|• MΛΧ •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@MÅ¥§Θ∩#2606 `Wins: 3 | Losses: 7 | Games Played: 2 | League EXP: 3/4 | Level: 1`
    if(command === 'Mayson') {
        let p = new Discord.RichEmbed()
.addField('Wins', '3', true)
.addField('Losses', '7', true)
.addField('Games Played', '2', true)
.addField('League Experience', '3/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,154', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '3', true)
.addField('Win Percentage', '*30.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• MÅ¥§Θ∩ •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Machete#6311 `Wins: 105 | Losses: 118 | Games Played: 46 | League EXP: 183/275 | Level: 9`
    if(command === 'Machete') {
        let p = new Discord.RichEmbed()
.addField('Wins', '105', true)
.addField('Losses', '118', true)
.addField('Games Played', '46', true)
.addField('League Experience', '183/275', true)
.addField('Level', '9', true)
.addField('Last Game Played', '1,425', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '8', true)
.addField('Win Percentage', '*47.08%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_us: • America')

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
//@Mad King#2854 `Wins: 125 | Losses: 75 | Games Played: 44 | League EXP: 171/275 | Level: 9`
    if(command === 'MadKing') {
        let p = new Discord.RichEmbed()
.addField('Wins', '125', true)
.addField('Losses', '75', true)
.addField('Games Played', '44', true)
.addField('League Experience', '171/275', true)
.addField('Level', '9', true)
.addField('Last Game Played', '1,784', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '20', true)
.addField('Win Percentage', '*62.50%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)
.addField('Solid Host', '⍟', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Mad King •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@maedivah#1944 `Wins: 10 | Losses: 17 | Games Played: 5 | League EXP: 10/16 | Level: 3`
    if(command === 'GameMaster') {
        let p = new Discord.RichEmbed()
.addField('Wins', '10', true)
.addField('Losses', '17', true)
.addField('Games Played', '5', true)
.addField('League Experience', '10/16', true)
.addField('Level', '3', true)
.addField('Last Game Played', '1,674', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '5', true)
.addField('Win Percentage', '*37.03%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Game Master •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@magicznawyspa#5256 `Wins: 9 | Losses: 18 | Games Played: 5 | League EXP: 9/16 | Level: 3`
    if(command === 'magicznawyspa') {
        let p = new Discord.RichEmbed()
.addField('Wins', '9', true)
.addField('Losses', '18', true)
.addField('Games Played', '5', true)
.addField('League Experience', '9/16', true)
.addField('Level', '3', true)
.addField('Last Game Played', '1,710', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '3', true)
.addField('Win Percentage', '*33.33%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• magicznawyspa •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Mannawar#6243 `Wins: 0 | Losses: 10 | Games Played: 2 | League EXP: 0/4 | Level: 0`
    if(command === 'Mannawar') {
        let p = new Discord.RichEmbed()
.addField('Wins', '0', true)
.addField('Losses', '10', true)
.addField('Games Played', '2', true)
.addField('League Experience', '0/4', true)
.addField('Level', '0', true)
.addField('Last Game Played', '1,451', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '0', true)
.addField('Win Percentage', '*0.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Incidents Reported:', '•**Quitting Barbarian:** 1')

.addField('Location', ':flag_us: • America')

.setFooter('•|• Mannawar •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Mase0406#9396 `Wins: 6 | Losses: 14 | Games Played: 4 | League EXP: 6/9 | Level: 2`
    if(command === 'mas0406') {
        let p = new Discord.RichEmbed()
.addField('Wins', '6', true)
.addField('Losses', '14', true)
.addField('Games Played', '4', true)
.addField('League Experience', '6/9', true)
.addField('Level', '2', true)
.addField('Last Game Played', '1,568', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '2', true)
.addField('Win Percentage', '*30.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• mas0406 •|•')
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
//@MauPow#1652 `Wins: 0 | Losses: 5 | Games Played: 1 | League EXP: 0/4 | Level: 0`
    if(command === 'MauPow') {
        let p = new Discord.RichEmbed()
.addField('Wins', '0', true)
.addField('Losses', '5', true)
.addField('Games Played', '1', true)
.addField('League Experience', '0/4', true)
.addField('Level', '0', true)
.addField('Last Game Played', '1,467', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '0', true)
.addField('Win Percentage', '*0.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• MauPow •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@maus73#3565 `Wins: 35 | Losses: 34 | Games Played: 14 | League EXP: 35/40 | Level: 5`
    if(command === 'Mau73') {
        let p = new Discord.RichEmbed()
.addField('Wins', '35', true)
.addField('Losses', '34', true)
.addField('Games Played', '14', true)
.addField('League Experience', '35/40', true)
.addField('Level', '5', true)
.addField('Last Game Played', '1,400', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '7', true)
.addField('Win Percentage', '*50.72%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Mau73 •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Mavic#9981 `Wins: 0 | Losses: 5 | Games Played: 1 | League EXP: 0/4 | Level: 0`
    if(command === 'Mavic') {
        let p = new Discord.RichEmbed()
.addField('Wins', '0', true)
.addField('Losses', '5', true)
.addField('Games Played', '1', true)
.addField('League Experience', '0/4', true)
.addField('Level', '0', true)
.addField('Last Game Played', '1,283', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '0', true)
.addField('Win Percentage', '*0.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Mavic •|•')
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
//@Maho974#2701 `Wins: 66 | Losses: 70 | Games Played: 31 | League EXP: 72/105 | Level: 7`
    if(command === 'Maho974') {
        let p = new Discord.RichEmbed()
.addField('Wins', '66', true)
.addField('Losses', '70', true)
.addField('Games Played', '31', true)
.addField('League Experience', '72/105', true)
.addField('Level', '7', true)
.addField('Last Game Played', '1,398', true)
.addField('Current Win Streak', '4', true)
.addField('Longest Win Streak', '8', true)
.addField('Win Percentage', '*48.52%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Maho974 •|•')
.setColor(0x0C5B80)
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
//@Me (kyle)#9168 `Wins: 7 | Losses: 7 | Games Played: 3 | League EXP: 7/9 | Level: 2`
    if(command === 'BoostedAnimal') {
        let p = new Discord.RichEmbed()
.addField('Wins', '7', true)
.addField('Losses', '7', true)
.addField('Games Played', '3', true)
.addField('League Experience', '7/9', true)
.addField('Level', '2', true)
.addField('Last Game Played', '1,662', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '4', true)
.addField('Win Percentage', '*50.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Boosted Animal •|•')
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
//@Merc#6962 `Wins: 9 | Losses: 16 | Games Played: 6 | League EXP: 9/16 | Level: 3`
    if(command === 'Merc') {
        let p = new Discord.RichEmbed()
.addField('Wins', '9', true)
.addField('Losses', '14', true)
.addField('Games Played', '6', true)
.addField('League Experience', '9/16', true)
.addField('Level', '3', true)
.addField('Last Game Played', '1,697', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '3', true)
.addField('Win Percentage', '*39.13%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Merc •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@MetaXVelta#1115 `Wins: 23 | Losses: 38 | Games Played: 11 | League EXP: 23/25 | Level: 4`
    if(command === 'MetaXVelta') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '23', true)
            .addField('Losses', '38', true)
            .addField('Games Played', '11', true)
            .addField('League Experience', '23/25', true)
            .addField('Level', '4', true)
            .addField('Last Game Played', '1,025', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '4', true)
            .addField('Win Percentage', '*37.70%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• MetaXVelta •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@methtical#0379 `Wins: 31 | Losses: 26 | Games Played: 11 | League EXP: 41/65 | Level: 6`
    if(command === 'blue') {
        let p = new Discord.RichEmbed()
.addField('Wins', '31', true)
.addField('Losses', '26', true)
.addField('Games Played', '11', true)
.addField('League Experience', '41/65', true)
.addField('Level', '6', true)
.addField('Last Game Played', '1,685', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '8', true)
.addField('Win Percentage', '*54.38%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Incidents Reported:', '•**Quitting Barbarian:** 1')

.addField('Location', ':flag_us: • America')

.setFooter('•|• methtical •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@🅜🅞🅓🅢 Mezdonian#1604 `Wins: 0 | Losses: 6 | Games Played: 2 | League EXP: 20/25 | Level: 4`
    if(command === '🅜🅞🅓🅢 Mezdonian') {
        let p = new Discord.RichEmbed()
.addField('Wins', '0', true)
.addField('Losses', '6', true)
.addField('Games Played', '2', true)
.addField('League Experience', '20/25', true)
.addField('Level', '4', true)
.addField('Last Game Played', '1,787', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '0', true)
.addField('Win Percentage', '*0.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• 🅜🅞🅓🅢 Mezdonian •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Middlestudent#6256 `Wins: 24 | Losses: 32 | Games Played: 13 | League EXP: 32/40 | Level: 5`
    if(command === 'Middlestudent') {
        let p = new Discord.RichEmbed()
.addField('Wins', '24', true)
.addField('Losses', '32', true)
.addField('Games Played', '13', true)
.addField('League Experience', '32/40', true)
.addField('Level', '5', true)
.addField('Last Game Played', '1,633', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '8', true)
.addField('Win Percentage', '*42.85%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Incidents Reported:', '•**Raging Barbarian:** 3\n•**Uncivilized Barbarian:** 1')

.addField('Location', ':flag_us: • America')

.setFooter('•|• Middlestudent •|•')
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
//@Mikki#7848 `Wins: 56 | Losses: 35 | Games Played: 20 | League EXP: 73/105 | Level: 6`
    if(command === 'Mikki') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '56', true)
            .addField('Losses', '35', true)
            .addField('Games Played', '20', true)
            .addField('League Experience', '73/105', true)
            .addField('Level', '6', true)
            .addField('Last Game Played', '1,195', true)
            .addField('Current Win Streak', '3', true)
            .addField('Longest Win Streak', '13', true)
            .addField('Win Percentage', '*61.53%*', true)

            .addField('Chieftain', '<:chieftain:320176909927579648>', true)

            .setFooter('•|• Mikki •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Minion Slayer#2341 `Wins: 2 | Losses: 2 | Games Played: 2 | League EXP: 18/25 | Level: 4`
    if(command === 'MinionSlayer') {
        let p = new Discord.RichEmbed()
.addField('Wins', '2', true)
.addField('Losses', '2', true)
.addField('Games Played', '2', true)
.addField('League Experience', '18/25', true)
.addField('Level', '4', true)
.addField('Last Game Played', '1,577', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '2', true)
.addField('Win Percentage', '*50.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Minion Slayer •|•')
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
//@mitchell8f5#0232 `Wins: 3 | Losses: 8 | Games Played: 2 | League EXP: 3/4 | Level: 1`
    if(command === 'mitchell8f5') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '3', true)
            .addField('Losses', '8', true)
            .addField('Games Played', '2', true)
            .addField('League Experience', '3/4', true)
            .addField('Level', '0', true)
            .addField('Last Game Played', '1,085', true)
            .addField('Current Win Streak', '3', true)
            .addField('Longest Win Streak', '3', true)
            .addField('Win Percentage', '*27.27%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• mitchell8f5 •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@MiyaGi#2307 `Wins: 5 | Losses: 7 | Games Played: 2 | League EXP: 5/9 | Level: 2`
    if(command === 'MiyaGi') {
        let p = new Discord.RichEmbed()
.addField('Wins', '5', true)
.addField('Losses', '7', true)
.addField('Games Played', '2', true)
.addField('League Experience', '5/9', true)
.addField('Level', '2', true)
.addField('Last Game Played', '1,652', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '5', true)
.addField('Win Percentage', '*41.66%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Incidents Reported:', '•**Abusive Barbarian:** 1')

.addField('Location', ':flag_us: • America')

.setFooter('•|• MiyaGi •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Miyu MaYU#6683 `Wins: 85 | Losses: 80 | Games Played: 35 | League EXP: 88/105 | Level: 7`
    if(command === 'Miyu') {
        let p = new Discord.RichEmbed()
.addField('Wins', '85', true)
.addField('Losses', '80', true)
.addField('Games Played', '35', true)
.addField('League Experience', '88/105', true)
.addField('Level', '7', true)
.addField('Last Game Played', '1,313', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '6', true)
.addField('Win Percentage', '*51.51%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)
.addField('Solid Host', '⍟', true)

.addField('Location', ':flag_us: • Thailand')

.setFooter('•|• Miyu •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Modjo#4086 `Wins: 7 | Losses: 19 | Games Played: 5 | League EXP: 7/9 | Level: 2`
    if(command === 'Maurice') {
        let p = new Discord.RichEmbed()
.addField('Wins', '7', true)
.addField('Losses', '19', true)
.addField('Games Played', '5', true)
.addField('League Experience', '7/9', true)
.addField('Level', '2', true)
.addField('Last Game Played', '1,583', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '2', true)
.addField('Win Percentage', '*26.92%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Maurice •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@molle0317#4516 `Wins: 43 | Losses: 35 | Games Played: 17 | League EXP: 53/65 | Level: 6`
    if(command === 'Molle') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '43', true)
            .addField('Losses', '35', true)
            .addField('Games Played', '17', true)
            .addField('League Experience', '53/65', true)
            .addField('Level', '6', true)
            .addField('Last Game Played', '1,140', true)
            .addField('Current Win Streak', '5', true)
            .addField('Longest Win Streak', '9', true)
            .addField('Win Percentage', '*55.12%*', true)

            .addField('Chieftain', '<:chieftain:320176909927579648>', true)

            .setFooter('•|• Mölle the Supream skogshuggare •|•')
            .setColor(0x0C5B80)
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
//@Mormermer#2842 `Wins: 1 | Losses: 9 | Games Played: 2 | League EXP: 1/4 | Level: 1`
    if(command === 'Mormermer') {
        let p = new Discord.RichEmbed()
.addField('Wins', '1', true)
.addField('Losses', '9', true)
.addField('Games Played', '2', true)
.addField('League Experience', '1/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '981', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '1', true)
.addField('Win Percentage', '*10.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_dk: • Denmark')

.setFooter('•|• Mormermer •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Mr.B#3021 `Wins: 6 | Losses: 14 | Games Played: 4 | League EXP: 6/9 | Level: 2`
    if(command === 'BiscuitsSanders') {
        let p = new Discord.RichEmbed()
.addField('Wins', '6', true)
.addField('Losses', '14', true)
.addField('Games Played', '4', true)
.addField('League Experience', '6/9', true)
.addField('Level', '2', true, true)
.addField('Last Game Played', '1,790')
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '3', true)
.addField('Win Percentage', '*30.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Biscuits Sanders •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Mr.YON#4032 `Wins: 50 | Losses: 25 | Games Played: 15 | League EXP: 83/105 | Level: 7`
    if(command === 'Mr.YON') {
        let p = new Discord.RichEmbed()
.addField('Wins', '50', true)
.addField('Losses', '25', true)
.addField('Games Played', '15', true)
.addField('League Experience', '83/105', true)
.addField('Level', '7', true)
.addField('Last Game Played', '1,582', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '22', true)
.addField('Win Percentage', '*66.66%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_kr: • Korea Republic')

.setFooter('•|• Mr.YON •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Mr, Krigan#2451 `Wins: 53 | Losses: 108 | Games Played: 33 | League EXP: 58/65 | Level: 6`
    if(command === 'Krigan') {
        let p = new Discord.RichEmbed()
.addField('Wins', '53', true)
.addField('Losses', '108', true)
.addField('Games Played', '33', true)
.addField('League Experience', '58/65', true)
.addField('Level', '6', true)
.addField('Last Game Played', '1,644', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '5', true)
.addField('Win Percentage', '*32.91%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Krigan •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Mr_Sheepington#5862 `Wins: 4 | Losses: 1 | Games Played: 1 | League EXP: 4/9 | Level: 2`
    if(command === 'Mr_Sheepington') {
        let p = new Discord.RichEmbed()
.addField('Wins', '4', true)
.addField('Losses', '1', true)
.addField('Games Played', '1', true)
.addField('League Experience', '4/9', true)
.addField('Level', '2', true)
.addField('Last Game Played', '1,572', true)
.addField('Current Win Streak', '4', true)
.addField('Longest Win Streak', '4', true)
.addField('Win Percentage', '*80.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Mr_Sheepington •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@mrchips#7155 `Wins: 3 | Losses: 2 | Games Played: 1 | League EXP: 3/4 | Level: 1`
    if(command === 'mrchips') {
        let p = new Discord.RichEmbed()
.addField('Wins', '3', true)
.addField('Losses', '2', true)
.addField('Games Played', '1', true)
.addField('League Experience', '3/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,767', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '3', true)
.addField('Win Percentage', '*60.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• mrchips •|•')
.setColor(0x04771B)
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
//@Mule#7629 `Wins: 16 | Losses: 32 | Games Played: 10 | League EXP: 17/25 | Level: 4`
    if(command === 'Mule') {
        let p = new Discord.RichEmbed()
.addField('Wins', '16', true)
.addField('Losses', '32', true)
.addField('Games Played', '10', true)
.addField('League Experience', '17/25', true)
.addField('Level', '4', true)
.addField('Last Game Played', '1,760', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '4', true)
.addField('Win Percentage', '*33.33%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Mule •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Murcielaghost#1159 `Wins: 416 | Losses: 258 | Games Played: 144 | League EXP: 700/800 | Level: 14`
    if(command === 'Murcielaghost') {
        let p = new Discord.RichEmbed()
.addField('Wins', '416', true)
.addField('Losses', '258', true)
.addField('Games Played', '144', true)
.addField('League Experience', '700/800', true)
.addField('Level', '14', true)
.addField('Last Game Played', '1,785', true)
.addField('Current Win Streak', '7', true)
.addField('Longest Win Streak', '18', true)
.addField('Win Percentage', '*61.72%*', true)

.addField('Warlord', '<:warlord:319931261894524928>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Murcielaghost •|•')
.setColor(0x77FF82)
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
//@mykbg#0863 `Wins: 14 | Losses: 48 | Games Played: 12 | League EXP: 14/16 | Level: 3`
    if(command === 'mykbg') {
        let p = new Discord.RichEmbed()
.addField('Wins', '14', true)
.addField('Losses', '48', true)
.addField('Games Played', '12', true)
.addField('League Experience', '14/16', true)
.addField('Level', '3', true)
.addField('Last Game Played', '1,736', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '3', true)
.addField('Win Percentage', '*22.58%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• mykbg •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Naamiss#5612 `Wins: 1 | Losses: 4 | Games Played: 1 | League EXP: 1/4 | Level: 1`
    if(command === 'Naamiss') {
        let p = new Discord.RichEmbed()
.addField('Wins', '1', true)
.addField('Losses', '4', true)
.addField('Games Played', '1', true)
.addField('League Experience', '1/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,354', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '1', true)
.addField('Win Percentage', '*20.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Naamiss •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Nargul#6831 `Wins: 1 | Losses: 4 | Games Played: 1 | League EXP: 1/4 | Level: 1`
    if(command === 'Nargul') {
        let p = new Discord.RichEmbed()
.addField('Wins', '1', true)
.addField('Losses', '4', true)
.addField('Games Played', '1', true)
.addField('League Experience', '1/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,298', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '1', true)
.addField('Win Percentage', '*20.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Nargul •|•')
.setColor(0x04771B)
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
//@nbk#9364 `Wins: 2 | Losses: 2 | Games Played: 1 | League EXP: 2/4 | Level: 1`
    if(command === 'nbk') {
        let p = new Discord.RichEmbed()
.addField('Wins', '2', true)
.addField('Losses', '2', true)
.addField('Games Played', '1', true)
.addField('League Experience', '2/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,449', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '2', true)
.addField('Win Percentage', '*50.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• nbk •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@neb#8743 `Wins: 69 | Losses: 76 | Games Played: 29 | League EXP: 84/105 | Level: 7`
    if(command === 'Nikee') {
        let p = new Discord.RichEmbed()
.addField('Wins', '69', true)
.addField('Losses', '76', true)
.addField('Games Played', '29', true)
.addField('League Experience', '84/105', true)
.addField('Level', '7', true)
.addField('Last Game Played', '1,776', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '9', true)
.addField('Win Percentage', '*47.58%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Nikee •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@NecroFear#0040 `Wins: 10 | Losses: 24 | Games Played: 7 | League EXP: 12/16 | Level: 3`
    if(command === 'NecroFear') {
        let p = new Discord.RichEmbed()
.addField('Wins', '10', true)
.addField('Losses', '24', true)
.addField('Games Played', '7', true)
.addField('League Experience', '12/16', true)
.addField('Level', '3', true)
.addField('Last Game Played', '1,171', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '5', true)
.addField('Win Percentage', '*29.41%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• NecroFear •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Negi#1116 `Wins: 306 | Losses: 28 | Games Played: 70 | League EXP: 588/590 | Level: 12`
    if(command === 'Negi') {
        let p = new Discord.RichEmbed()
.addField('Wins', '306', true)
.addField('Losses', '28', true)
.addField('Games Played', '70', true)
.addField('League Experience', '588/590', true)
.addField('Level', '12', true)
.addField('Last Game Played', '1,051', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '135', true)
.addField('Win Percentage', '*91.61%*', true)

.addField('Warlord', '<:warlord:319931261894524928>', true)

.addField('Location', ':flag_kr: • Korean')

.setFooter('•|• Negi •|•')
.setColor(0x77FF82)
        message.channel.sendEmbed(p);
    };
//@Nero#4287 `Wins: 1 | Losses: 4 | Games Played: 1 | League EXP: 1/4 | Level: 1`
    if(command === 'Nero') {
        let p = new Discord.RichEmbed()
.addField('Wins', '1', true)
.addField('Losses', '4', true)
.addField('Games Played', '1', true)
.addField('League Experience', '1/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,534', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '1', true)
.addField('Win Percentage', '*20.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Nero •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Neshi#8561 `Wins: 11 | Losses: 11 | Games Played: 4 | League EXP: 11/16 | Level: 3`
    if(command === 'Neshi') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '11', true)
            .addField('Losses', '11', true)
            .addField('Games Played', '4', true)
            .addField('League Experience', '11/16', true)
            .addField('Level', '3', true)
            .addField('Last Game Played', '1,153', true)
            .addField('Current Win Streak', '3', true)
            .addField('Longest Win Streak', '5', true)
            .addField('Win Percentage', '*50.00%*', true)

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
//@NewbieOne#7348 `Wins: 198 | Losses: 137 | Games Played: 69 | League EXP: 267/275 | Level: 9`
    if(command === 'NewbieOne') {
        let p = new Discord.RichEmbed()
.addField('Wins', '198', true)
.addField('Losses', '137', true)
.addField('Games Played', '69', true)
.addField('League Experience', '267/275', true)
.addField('Level', '9', true)
.addField('Last Game Played', '1,745', true)
.addField('Current Win Streak', '4', true)
.addField('Longest Win Streak', '14', true)
.addField('Win Percentage', '*59.10%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_us: • America')

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
//@Nikolai_I#2837 `Wins: 6 | Losses: 8 | Games Played: 3 | League EXP: 6/9 | Level: 2`
    if(command === 'ASG') {
        let p = new Discord.RichEmbed()
.addField('Wins', '6', true)
.addField('Losses', '8', true)
.addField('Games Played', '3', true)
.addField('League Experience', '6/9', true)
.addField('Level', '2', true)
.addField('Last Game Played', '1,629', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '3', true)
.addField('Win Percentage', '*42.85%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• ASG •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Ninja#9473 `Wins: 2 | Losses: 3 | Games Played: 1 | League EXP: 2/4 | Level: 1`
    if(command === 'Ninja') {
        let p = new Discord.RichEmbed()
.addField('Wins', '2', true)
.addField('Losses', '3', true)
.addField('Games Played', '1', true)
.addField('League Experience', '2/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,634', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '2', true)
.addField('Win Percentage', '*40.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Ninja •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Nomadhtims#7488 `Wins: 4 | Losses: 11 | Games Played: 3 | League EXP: 4/9 | Level: 2`
    if(command === 'Nomadhtims') {
        let p = new Discord.RichEmbed()
.addField('Wins', '4', true)
.addField('Losses', '11', true)
.addField('Games Played', '3', true)
.addField('League Experience', '4/9', true)
.addField('Level', '2', true)
.addField('Last Game Played', '1,750', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '2', true)
.addField('Win Percentage', '*26.66%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Incidents Reported:', '•**Quitting Barbarian:** 1')

.addField('Location', ':flag_us: • America')

.setFooter('•|• Nomadhtims •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Normax#9149 `Wins: 10 | Losses: 5 | Games Played: 3 | League EXP: 15/16 | Level: 3`
    if(command === 'Normax') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '10', true)
            .addField('Losses', '5', true)
            .addField('Games Played', '3', true)
            .addField('League Experience', '15/16', true)
            .addField('Level', '3', true)
            .addField('Last Game Played', '980', true)
            .addField('Current Win Streak', '3', true)
            .addField('Longest Win Streak', '8', true)
            .addField('Win Percentage', '*66.66%*', true)

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
//@-=SunZ=-nutella67#5615 `Wins: 77 | Losses: 63 | Games Played: 27 | League EXP: 108/170 | Level: 8`
    if(command === 'nutella67') {
        let p = new Discord.RichEmbed()
.addField('Wins', '77', true)
.addField('Losses', '63', true)
.addField('Games Played', '27', true)
.addField('League Experience', '108/170', true)
.addField('Level', '8', true)
.addField('Last Game Played', '1,789', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '13', true)
.addField('Win Percentage', '*55.00%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Incidents Reported:', '•**Quitting Barbarian:** 1\n•**Raging Barbarian:** 2')

.addField('Location', ':flag_us: • America')

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
//@O8O#1798 `Wins: 1 | Losses: 4 | Games Played: 1 | League EXP: 1/4 | Level: 1`
    if(command === '080') {
        let p = new Discord.RichEmbed()
.addField('Wins', '1', true)
.addField('Losses', '4', true)
.addField('Games Played', '1', true)
.addField('League Experience', '1/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,198', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '1', true)
.addField('Win Percentage', '*20.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)
.addField('Solid Host', '⍟', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• 080 •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Odnogлазый#3712 `Wins: 5 | Losses: 0 | Games Played: 1 | League EXP: 15/16| Level: 3`
    if(command === 'OdnoglasiY') {
        let p = new Discord.RichEmbed()
.addField('Wins', '5', true)
.addField('Losses', '0', true)
.addField('Games Played', '1', true)
.addField('League Experience', '15/16', true)
.addField('Level', '3', true)
.addField('Last Game Played', '1,278', true)
.addField('Current Win Streak', '5', true)
.addField('Longest Win Streak', '5', true)
.addField('Win Percentage', '*100.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_ru: • Russia')

.setFooter('•|• @Одноглазый [Tb-12] •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Octavian#3753 `Wins: 0 | Losses: 5 | Games Played: 1 | League EXP: 0/4 | Level: 0`
    if(command === 'Octavian') {
        let p = new Discord.RichEmbed()
.addField('Wins', '0', true)
.addField('Losses', '5', true)
.addField('Games Played', '1', true)
.addField('League Experience', '0/4', true)
.addField('Level', '0', true)
.addField('Last Game Played', '1,525', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '0', true)
.addField('Win Percentage', '*0.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Incidents Reported:', '•**Raging Barbarian:** 1')

.addField('Location', ':flag_us: • America')

.setFooter('•|• Octavian •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Okbobo#2104 `Wins: 3 | Losses: 1 | Games Played: 1 | League EXP: 3/4 | Level: 1`
    if(command === 'Okbobo') {
        let p = new Discord.RichEmbed()
.addField('Wins', '3', true)
.addField('Losses', '1', true)
.addField('Games Played', '1', true)
.addField('League Experience', '3/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,223', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '3', true)
.addField('Win Percentage', '*75.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Okbobo •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Olo#1281 `Wins: 2 | Losses: 3 | Games Played: 1 | League EXP: 2/4 | Level: 1`
    if(command === 'Olo') {
        let p = new Discord.RichEmbed()
.addField('Wins', '2', true)
.addField('Losses', '3', true)
.addField('Games Played', '1', true)
.addField('League Experience', '2/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,767', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '3', true)
.addField('Win Percentage', '*40.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Olo •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Olympian31#5507 `Wins: 3 | Losses: 7 | Games Played: 2 | League EXP: 3/4 | Level: 1`
    if(command === 'jpm1997') {
        let p = new Discord.RichEmbed()
.addField('Wins', '3', true)
.addField('Losses', '7', true)
.addField('Games Played', '2', true)
.addField('League Experience', '3/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,353', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '3', true)
.addField('Win Percentage', '*30.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• jpm1997 •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@onfire369#1882 `Wins: 81 | Losses: 94 | Games Played: 35 | EXP: 96/105 | Level: 7`
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

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• onfire369 •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@ovostupidboy#3383 `Wins: 1 | Losses: 9 | Games Played: 2 | League EXP: 1/4 | Level: 1`
    if(command === 'MoreLife') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '1', true)
            .addField('Losses', '9', true)
            .addField('Games Played', '2', true)
            .addField('League Experience', '1/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '1,114', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '1', true)
            .addField('Win Percentage', '*10.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• More Life •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@owlelg6#5745 `Wins: 80 | Losses: 80 | Games Played: 32 | League EXP: 123/170 | Level: 8`
    if(command === '724') {
        let p = new Discord.RichEmbed()
.addField('Wins', '80', true)
.addField('Losses', '80', true)
.addField('Games Played', '32', true)
.addField('League Experience', '123/170', true)
.addField('Level', '8', true)
.addField('Last Game Played', '1,320', true)
.addField('Current Win Streak', '12', true)
.addField('Longest Win Streak', '12', true)
.addField('Win Percentage', '*50.00%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Incidents Reported:', '•**Quitting Barbarian:** 2')

.addField('Location', ':flag_kr: • Korea Republic')

.setFooter('•|• 724 •|•')
.setColor(0x0C5B80)
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
//@ozdobaster#6635 `Wins: 1 | Losses: 4 | Games Played: 1 | League EXP: 1/4 | Level: 1`
    if(command === 'ozdobaster') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '1', true)
            .addField('Losses', '4', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '1/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '1,010', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '1', true)
            .addField('Win Percentage', '*20.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• ozdobaster •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Ozymandias#4833 `Wins: 1 | Losses: 3 | Games Played: 1 | League EXP: 1/4 | Level: 1`
    if(command === 'Ozymandias') {
        let p = new Discord.RichEmbed()
.addField('Wins', '1', true)
.addField('Losses', '3', true)
.addField('Games Played', '1', true)
.addField('League Experience', '1/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,180', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '1', true)
.addField('Win Percentage', '*25.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Ozymandias •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Packpok#0087 `Wins: 149 | Losses: 70 | Games Played: 45 | League EXP: 422/485 | Level: 11`
    if(command === 'Packpok') {
        let p = new Discord.RichEmbed()
.addField('Wins', '149', true)
.addField('Losses', '70', true)
.addField('Games Played', '45', true)
.addField('League Experience', '422/485', true)
.addField('Level', '11', true)
.addField('Last Game Played', '1,218', true)
.addField('Current Win Streak', '4', true)
.addField('Longest Win Streak', '23', true)
.addField('Win Percentage', '*68.03%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_kr: • Korean')

.setFooter('•|• Packpok •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Pako#6300 `Wins: 1 | Losses: 15 | Games Played: 4 | League EXP: 1/4 | Level: 1`
    if(command === 'Pako') {
        let p = new Discord.RichEmbed()
.addField('Wins', '1', true)
.addField('Losses', '15', true)
.addField('Games Played', '4', true)
.addField('League Experience', '1/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,132', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '1', true)
.addField('Win Percentage', '*6.25%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Incidents Reported:', '•**Quitting Barbarian:** 1')

.addField('Location', ':flag_us: • America')

.setFooter('•|• Pako •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Palych#8121 `Wins: 0 | Losses: 5 | Games Played: 1 | League EXP: 0/4 | Level: 0`
    if(command === 'Palych') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '0', true)
            .addField('Losses', '5', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '0/4', true)
            .addField('Level', '0', true)
            .addField('Last Game Played', '1,072', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '0', true)
            .addField('Win Percentage', '*0.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Palych •|•')
            .setColor(0x04771B)
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
//@Panda#2649 `Wins: 5 | Losses: 27 | Games Played: 6 | League EXP: 5/9 | Level: 2`
    if(command === 'Panda') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '5', true)
            .addField('Losses', '27', true)
            .addField('Games Played', '6', true)
            .addField('League Experience', '5/9', true)
            .addField('Level', '2', true)
            .addField('Last Game Played', '1,147', true)
            .addField('Current Win Streak', '3', true)
            .addField('Longest Win Streak', '3', true)
            .addField('Win Percentage', '*15.62%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Panda •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Papa Mac#0957 `Wins: 10 | Losses: 20 | Games Played: 6 | League EXP: 10/16 | Level: 3`
    if(command === 'Papa Mac') {
        let p = new Discord.RichEmbed()
.addField('Wins', '10', true)
.addField('Losses', '20', true)
.addField('Games Played', '6', true)
.addField('League Experience', '10/16', true)
.addField('Level', '3', true)
.addField('Last Game Played', '1,658', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '3', true)
.addField('Win Percentage', '*33.33%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Incidents Reported:', '•**Quitting Barbarian:** 1')

.addField('Location', ':flag_us: • America')

.setFooter('•|• Papa Mac •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Pat102ko#8010 `Wins: 3 | Losses: 22 | Games Played: 5 | League EXP: 3/4 | Level: 1`
     if(command === 'Pat102ko') {
        let p = new Discord.RichEmbed()
.addField('Wins', '3', true)
.addField('Losses', '22', true)
.addField('Games Played', '4', true)
.addField('League Experience', '3/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,548', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '3', true)
.addField('Win Percentage', '*12.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Pat102ko •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Patadekabra#2362 `Wins: 4 | Losses: 6 | Games Played: 2 | League EXP: 4/9 | Level: 2`
    if(command === 'Patadekabra') {
        let p = new Discord.RichEmbed()
.addField('Wins', '4', true)
.addField('Losses', '6', true)
.addField('Games Played', '2', true)
.addField('League Experience', '4/9', true)
.addField('Level', '2', true)
.addField('Last Game Played', '1,631', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '4', true)
.addField('Win Percentage', '*40.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Patadekabra •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@patriones#0557 `Wins: 12 | Losses: 23 | Games Played: 7 | League EXP: 12/16 | Level: 3`
    if(command === 'patriones') {
        let p = new Discord.RichEmbed()
.addField('Wins', '12', true)
.addField('Losses', '23', true)
.addField('Games Played', '7', true)
.addField('League Experience', '12/16', true)
.addField('Level', '3', true)
.addField('Last Game Played', '1,276', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '4', true)
.addField('Win Percentage', '*34.28%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• patriones •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Paul#7055 `Wins: 9 | Losses: 26 | Games Played: 7 | League EXP: 9/16 | Level: 3`
    if(command === 'pwoozy920') {
        let p = new Discord.RichEmbed()
.addField('Wins', '9', true)
.addField('Losses', '26', true)
.addField('Games Played', '7', true)
.addField('League Experience', '9/16', true)
.addField('Level', '3', true)
.addField('Last Game Played', '1,515', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '3', true)
.addField('Win Percentage', '*25.71%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• pwoozy920 •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Paul (Daddy Kukui)#6519 `Wins: 19 | Losses: 12 | Games Played: 6 | League EXP: 27/40 | Level: 5`
    if(command === 'DaddyKukui') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '19', true)
            .addField('Losses', '12', true)
            .addField('Games Played', '6', true)
            .addField('League Experience', '27/40', true)
            .addField('Level', '5', true)
            .addField('Last Game Played', '1,772', true)
            .addField('Current Win Streak', '4', true)
            .addField('Longest Win Streak', '6', true)
            .addField('Win Percentage', '*61.29%*', true)

            .setFooter('•|• Daddy Kukui •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Pavlo#8873 `Wins: 16 | Losses: 20 | Games Played: 7 | League EXP: 18/25 | Level: 4`
    if(command === 'Pavlo') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '16', true)
            .addField('Losses', '20', true)
            .addField('Games Played', '7', true)
            .addField('League Experience', '18/25', true)
            .addField('Level', '4', true)
            .addField('Last Game Played', '1,780', true)
            .addField('Current Win Streak', '4', true)
            .addField('Longest Win Streak', '4', true)
            .addField('Win Percentage', '*44.44%*', true)

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
//@Penn#6797 `Wins: 5 | Losses: 3 | Games Played: 3 | League EXP: 47/65 | Level: 6`
    if(command === 'Tal') {
        let p = new Discord.RichEmbed()
.addField('Wins', '5', true)
.addField('Losses', '3', true)
.addField('Games Played', '3', true)
.addField('League Experience', '47/65', true)
.addField('Level', '6', true)
.addField('Last Game Played', '1,734', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '5', true)
.addField('Win Percentage', '*62.50%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Incidents Reported:', '•**Raging Barbarian:** 1\n•**Uncivilized Barbarian:** 1')


.addField('Location', ':flag_us: • America')

.setFooter('•|• Tal •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@PheonixTailsHD#5583 `Wins: 5 | Losses: 21 | Games Played: 6 | League EXP: 5/9 | Level: 2`
    if(command === 'PheonixTailsHD') {
        let p = new Discord.RichEmbed()
.addField('Wins', '5', true)
.addField('Losses', '21', true)
.addField('Games Played', '6', true)
.addField('League Experience', '5/9', true)
.addField('Level', '2', true)
.addField('Last Game Played', '1,497', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '2', true)
.addField('Win Percentage', '*19.23%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• PheonixTailsHD •|•')
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
//@piaorou2333#6172 `Wins: 0 | Losses: 10 | Games Played: 2 | League EXP: 0/4 | Level: 0`
    if(command === 'piaorou2333') {
        let p = new Discord.RichEmbed()
.addField('Wins', '0', true)
.addField('Losses', '10', true)
.addField('Games Played', '2', true)
.addField('League Experience', '0/4', true)
.addField('Level', '0', true)
.addField('Last Game Played', '1,5', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '0', true)
.addField('Win Percentage', '*0.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• piaorou2333 •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Pickbox#0461 `Wins: 4 | Losses: 11 | Games Played: 3 | League EXP: 4/9 | Level: 2`
    if(command === 'Pickbox') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '4', true)
            .addField('Losses', '11', true)
            .addField('Games Played', '3', true)
            .addField('League Experience', '4/9', true)
            .addField('Level', '2', true)
            .addField('Last Game Played', '1,020', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '3', true)
            .addField('Win Percentage', '*26.66%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Pickbox •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@PIGGYTORTOISE#2631 `Wins: 0 | Losses: 5 | Games Played: 1 | League EXP: 0/4 | Level: 0`
    if(command === 'PiggyTortoise') {
        let p = new Discord.RichEmbed()
.addField('Wins', '0', true)
.addField('Losses', '5', true)
.addField('Games Played', '1', true)
.addField('League Experience', '0/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,185', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '0', true)
.addField('Win Percentage', '*0.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_kr: • Korea Republic')

.setFooter('•|• PIGGYTORTOISE •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Pirnetran#1235 `Wins: 46 | Losses: 28 | Games Played: 15 | League EXP: 68/105 | Level: 7`
    if(command === 'wilder991') {
        let p = new Discord.RichEmbed()
.addField('Wins', '46', true)
.addField('Losses', '28', true)
.addField('Games Played', '15', true)
.addField('League Experience', '68/105', true)
.addField('Level', '7', true)
.addField('Last Game Played', '1,678', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '15', true)
.addField('Win Percentage', '*62.16%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• wilder991 •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Planthom#6208 `Wins: 7 | Losses: 13 | Games Played: 4 | League EXP: 7/9 | Level: 2`
    if(command === 'Planthom') {
        let p = new Discord.RichEmbed()
.addField('Wins', '7', true)
.addField('Losses', '13', true)
.addField('Games Played', '4', true)
.addField('League Experience', '7/9', true)
.addField('Level', '2', true)
.addField('Last Game Played', '1,726', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '3', true)
.addField('Win Percentage', '*35.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Planthom •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Potadolf#7316 `Wins: 8 | Losses: 31 | Games Played: 7 | League EXP: 8/9 | Level: 2`
    if(command === 'Potadolf') {
        let p = new Discord.RichEmbed()
.addField('Wins', '8', true)
.addField('Losses', '31', true)
.addField('Games Played', '7', true)
.addField('League Experience', '8/9', true)
.addField('Level', '2', true)
.addField('Last Game Played', '1,756', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '2', true)
.addField('Win Percentage', '*20.51%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Potadolf •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@PrawdziwyAlbanczyk#5070 `Wins: 4 | Losses: 4 | Games Played: 2 | League EXP: 11/16 | Level: 3`
    if(command === 'PrawdziwyAlbanczyk') {
        let p = new Discord.RichEmbed()
.addField('Wins', '4', true)
.addField('Losses', '4', true)
.addField('Games Played', '2', true)
.addField('League Experience', '11/16', true)
.addField('Level', '3', true)
.addField('Last Game Played', '1,252', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '2', true)
.addField('Win Percentage', '*50.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• PrawdziwyAlbanczyk •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Priogab#4504 `Wins: 1 | Losses: 4 | Games Played: 1 | League EXP: 1/4 | Level: 1`
    if(command === 'Priogab') {
        let p = new Discord.RichEmbed()
.addField('Wins', '1', true)
.addField('Losses', '4', true)
.addField('Games Played', '1', true)
.addField('League Experience', '1/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,323', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '1', true)
.addField('Win Percentage', '*20.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Priogab •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Problemator#5503 `Wins: 39 | Losses: 97 | Games Played: 27 | League EXP: 39/40| Level: 5`
    if(command === 'Problemator') {
        let p = new Discord.RichEmbed()
.addField('Wins', '39', true)
.addField('Losses', '97', true)
.addField('Games Played', '27', true)
.addField('League Experience', '39/40', true)
.addField('Level', '5', true)
.addField('Last Game Played', '1,735', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '4', true)
.addField('Win Percentage', '*28.67%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Problemator •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Putin#7142 `Wins: 1 | Losses: 8 | Games Played: 3 | League EXP: 1/4 | Level: 1`
    if(command === 'Putin') {
        let p = new Discord.RichEmbed()
.addField('Wins', '1', true)
.addField('Losses', '8', true)
.addField('Games Played', '3', true)
.addField('League Experience', '1/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,680', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '1', true)
.addField('Win Percentage', '*11.11%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Putin •|•')
.setColor(0x04771B)
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
//@quazlat#4323 `Wins: 1 | Losses: 4 | Games Played: 1 | League EXP: 1/4 | Level: 1`
    if(command === 'quazlat') {
        let p = new Discord.RichEmbed()
.addField('Wins', '1', true)
.addField('Losses', '4', true)
.addField('Games Played', '1', true)
.addField('League Experience', '1/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,725', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '1', true)
.addField('Win Percentage', '*20.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• quazlat •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Rabbit Deployment#7051 `Wins: 0 | Losses: 0 | Games Played: 2 | League EXP: 14/16 | Level: 3`
    if(command === 'KingBee') {
        let p = new Discord.RichEmbed()
.addField('Wins', '0', true)
.addField('Losses', '0', true)
.addField('Games Played', '2', true)
.addField('League Experience', '14/16', true)
.addField('Level', '3', true)
.addField('Last Game Played', '1,767', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '0', true)
.addField('Win Percentage', '*0.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• KingBee •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Rachet#5479 `Wins: 0 | Losses: 3 | Games Played: 1 | League EXP: 10/16 | Level: 3`
    if(command === 'Rachet') {
        let p = new Discord.RichEmbed()
.addField('Wins', '0', true)
.addField('Losses', '3', true)
.addField('Games Played', '1', true)
.addField('League Experience', '10/16', true)
.addField('Level', '3', true)
.addField('Last Game Played', '1,427', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '0', true)
.addField('Win Percentage', '*0.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Rachet •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@rahmj12[CPL]#4308 `Wins: 11 | Losses: 2 | Games Played: 3 | League EXP: 16/25 | Level: 4`
    if(command === 'rahmj12') {
        let p = new Discord.RichEmbed()
.addField('Wins', '11', true)
.addField('Losses', '2', true)
.addField('Games Played', '3', true)
.addField('League Experience', '16/25', true)
.addField('Level', '4', true)
.addField('Last Game Played', '1,440', true)
.addField('Current Win Streak', '7', true)
.addField('Longest Win Streak', '7', true)
.addField('Win Percentage', '*83.61%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• rahmj12 •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Raksomagno#3018 `Wins: 26 | Losses: 69 | Games Played: 21 | League EXP: 29/40 | Level: 5`
    if(command === 'Raksomagno') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '26', true)
            .addField('Losses', '69', true)
            .addField('Games Played', '21', true)
            .addField('League Experience', '29/40', true)
            .addField('Level', '5', true)
            .addField('Last Game Played', '1,051', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '4', true)
            .addField('Win Percentage', '*27.36%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Raksomagno •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Raid3n#5186 `Wins: 50 | Losses: 71 | Games Played: 23 | League EXP: 50/65 | Level: 6`
    if(command === 'Raid3n') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '50', true)
            .addField('Losses', '71', true)
            .addField('Games Played', '23', true)
            .addField('League Experience', '50/65', true)
            .addField('Level', '6', true)
            .addField('Last Game Played', '964', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '4', true)
            .addField('Win Percentage', '*41.32%*', true)

            .addField('Chieftain', '<:chieftain:320176909927579648>', true)

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
//@RedPhoenix#8694 `Wins: 5 | Losses: 0 | Games Played: 1 | League EXP: 17/25 | Level: 4`
    if(command === 'RedPhoenix') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '5', true)
            .addField('Losses', '0', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '17/25', true)
            .addField('Level', '4', true)
            .addField('Last Game Played', '1,068', true)
            .addField('Current Win Streak', '5', true)
            .addField('Longest Win Streak', '5', true)
            .addField('Win Percentage', '*100.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• RedPhoenix •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@reQuiiieM#1310 `Wins: 187 | Losses: 183 | Games Played: 79 | League EXP: 211/275 | Level: 9`
    if(command === 'reQuiiieM') {
        let p = new Discord.RichEmbed()
.addField('Wins', '187', true)
.addField('Losses', '183', true)
.addField('Games Played', '79', true)
.addField('League Experience', '211/275', true)
.addField('Level', '9', true)
.addField('Last Game Played', '1,759', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '12', true)
.addField('Win Percentage', '*50.54%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)
.addField('Solid Host', '⍟', true)

.addField('Location', ':flag_es: • Spain')

.setFooter('•|• reQuiiieM •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@rice_cake#0337 `Wins: 21 | Losses: 8 | Games Played: 6 | League EXP: 38/40 | Level: 5`
    if(command === 'Rice-Cake') {
        let p = new Discord.RichEmbed()
.addField('Wins', '21', true)
.addField('Losses', '8', true)
.addField('Games Played', '6', true)
.addField('League Experience', '38/40', true)
.addField('Level', '5', true)
.addField('Last Game Played', '1,206', true)
.addField('Current Win Streak', '4', true)
.addField('Longest Win Streak', '13', true)
.addField('Win Percentage', '*72.41%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_kr: • Korea Republic')

.setFooter('•|• Rice-Cake •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@RiCK#9342 `Wins: 6 | Losses: 16 | Games Played: 4 | League EXP: 6/9 | Level: 2`
    if(command === 'RiCK') {
        let p = new Discord.RichEmbed()
.addField('Wins', '6', true)
.addField('Losses', '16', true)
.addField('Games Played', '4', true)
.addField('League Experience', '6/9', true)
.addField('Level', '2', true)
.addField('Last Game Played', '1,626', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '3', true)
.addField('Win Percentage', '*27.27%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• RiCK •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@ridethespiral23#0888 `Wins: 0 | Losses: 5 | Games Played: 1 | League EXP: 0/4 | Level: 0`
    if(command === 'ridethespiral23') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '0', true)
            .addField('Losses', '5', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '0/4', true)
            .addField('Level', '0', true)
            .addField('Last Game Played', '1,009', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '0', true)
            .addField('Win Percentage', '*0.00%*', true)

            .addField('Left Discord/Game', '<:settler:319889887996411915>', true)

            .setFooter('•|• ridethespiral23 •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Rikkiya#1901 `Wins: 2 | Losses: 4 | Games Played: 1 | League EXP: 2/4 | Level: 1`
    if(command === 'Rika') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '2', true)
            .addField('Losses', '4', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '2/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '1,085', true)
            .addField('Current Win Streak', '2', true)
            .addField('Longest Win Streak', '2', true)
            .addField('Win Percentage', '*33.33%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Rikå •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Rinu#1895 `Wins: 115 | Losses: 51 | Games Played: 34 | League EXP: 172/275 | Level: 9`
    if(command === 'Rinu') {
        let p = new Discord.RichEmbed()
.addField('Wins', '115', true)
.addField('Losses', '51', true)
.addField('Games Played', '34', true)
.addField('League Experience', '172/275', true)
.addField('Level', '9', true)
.addField('Last Game Played', '1,564', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '12', true)
.addField('Win Percentage', '*69.27%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_kr: • Korea Republic')

.setFooter('•|• Rinu •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@robawtic#4365 `Wins: 34 | Losses: 88 | Games Played: 24 | League EXP: 35/40 | Level: 5`
    if(command === 'robawtic') {
        let p = new Discord.RichEmbed()
.addField('Wins', '34', true)
.addField('Losses', '88', true)
.addField('Games Played', '24', true)
.addField('League Experience', '35/40', true)
.addField('Level', '5', true)
.addField('Last Game Played', '1,774', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '4', true)
.addField('Win Percentage', '*27.86%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• robawtic •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@robban#0662 `Wins: 20 | Losses: 14 | Games Played: 7 | League EXP: 30/40 | Level: 5`
    if(command === 'robban') {
        let p = new Discord.RichEmbed()
.addField('Wins', '20', true)
.addField('Losses', '14', true)
.addField('Games Played', '7', true)
.addField('League Experience', '30/40', true)
.addField('Level', '5', true)
.addField('Last Game Played', '1,712', true)
.addField('Current Win Streak', '7', true)
.addField('Longest Win Streak', '7', true)
.addField('Win Percentage', '*58.82%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• robban •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Robert#4137 `Wins: 23 | Losses: 30 | Games Played: 11 | League EXP: 34/40 | Level: 5`
    if(command === 'robert_puhlfuerst') {
        let p = new Discord.RichEmbed()
.addField('Wins', '23', true)
.addField('Losses', '30', true)
.addField('Games Played', '11', true)
.addField('League Experience', '34/40', true)
.addField('Level', '5', true)
.addField('Last Game Played', '1,742', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '5', true)
.addField('Win Percentage', '*43.39%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Incidents Reported:', '•**Raging Barbarian:** 1')

.addField('Location', ':flag_us: • America')

.setFooter('•|• robert_puhlfuerst •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Rockoxe#5598 `Wins: 6 | Losses: 14 | Games Played: 4 | League EXP: 6/9 | Level: 2`
    if(command === 'Rockoxe') {
        let p = new Discord.RichEmbed()
.addField('Wins', '6', true)
.addField('Losses', '14', true)
.addField('Games Played', '4', true)
.addField('League Experience', '6/9', true)
.addField('Level', '2', true)
.addField('Last Game Played', '1,503', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '2', true)
.addField('Win Percentage', '*30.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Rockoxe •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@rolfejason#5840 `Wins: 33 | Losses: 22 | Games Played: 12 | League EXP: 40/65 | Level: 6`
    if(command === 'rolfejason') {
        let p = new Discord.RichEmbed()
.addField('Wins', '33', true)
.addField('Losses', '22', true)
.addField('Games Played', '12', true)
.addField('League Experience', '40/65', true)
.addField('Level', '6', true)
.addField('Last Game Played', '1,547', true)
.addField('Current Win Streak', '6', true)
.addField('Longest Win Streak', '6', true)
.addField('Win Percentage', '*60.00%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_au: • Australia')

.setFooter('•|• rolfejason •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Ronalitox#1306 `Wins: 6 | Losses: 12 | Games Played: 4 | League EXP: 6/9 | Level: 2`
    if(command === 'Ronalitox') {
        let p = new Discord.RichEmbed()
.addField('Wins', '6', true)
.addField('Losses', '12', true)
.addField('Games Played', '4', true)
.addField('League Experience', '6/9', true)
.addField('Level', '2', true)
.addField('Last Game Played', '1,739', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '3', true)
.addField('Win Percentage', '*33.33%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Ronalitox •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@ronan#8203 `Wins: 1 | Losses: 4 | Games Played: 1 | League EXP: 1/4 | Level: 1`

//@roroyoboat123#1569 `Wins: 0 | Losses: 9 | Games Played: 2 | League EXP: 0/4 | Level: 0`
    if(command === 'roroyoboat123') {
        let p = new Discord.RichEmbed()
.addField('Wins', '0', true)
.addField('Losses', '9', true)
.addField('Games Played', '2', true)
.addField('League Experience', '0/4', true)
.addField('Level', '0', true)
.addField('Last Game Played', '1,257', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '0', true)
.addField('Win Percentage', '*0.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Incidents Reported:', '•**Quitting Barbarian:** 1')

.addField('Location', ':flag_us: • America')

.setFooter('•|• roroyoboat123 •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@RoyalTanuki#8956 `Wins: 17 | Losses: 40 | Games Played: 12 | League EXP: 24/25 | Level: 4`
    if(command === 'RoyalTanuki') {
        let p = new Discord.RichEmbed()
.addField('Wins', '17', true)
.addField('Losses', '40', true)
.addField('Games Played', '12', true)
.addField('League Experience', '24/25', true)
.addField('Level', '4', true)
.addField('Last Game Played', '1,240', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '3', true)
.addField('Win Percentage', '*29.82%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• RoyalTanuki •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@RoyRene#4878 `Wins: 0 | Losses: 5 | Games Played: 1 | League EXP: 0/4 | Level: 0`
    if(command === '-GEM- RoyRene') {
        let p = new Discord.RichEmbed()
.addField('Wins', '0', true)
.addField('Losses', '5', true)
.addField('Games Played', '0', true)
.addField('League Experience', '0/4', true)
.addField('Level', '0', true)
.addField('Last Game Played', '1,749', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '0', true)
.addField('Win Percentage', '*0.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• -GEM- RoyRene •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Rozovici#5220 `Wins: 263 | Losses: 242 | Games Played: 104 | League EXP: 281/380 | Level: 10`
    if(command === 'Rozovici') {
        let p = new Discord.RichEmbed()
.addField('Wins', '263', true)
.addField('Losses', '242', true)
.addField('Games Played', '104', true)
.addField('League Experience', '281/380', true)
.addField('Level', '10', true)
.addField('Last Game Played', '1,788', true)
.addField('Current Win Streak', '7', true)
.addField('Longest Win Streak', '14', true)
.addField('Win Percentage', '*52.07%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)
.addField('Solid Host', '⍟', true)

.addField('Location', ':flag_ro: • Romania')

.setFooter('•|• Rozovici •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Ruchan#0242 `Wins: 14 | Losses: 26 | Games Played: 8 | League EXP: 14/16 | Level: 3`
    if(command === 'Ruchan') {
        let p = new Discord.RichEmbed()
.addField('Wins', '14', true)
.addField('Losses', '26', true)
.addField('Games Played', '8', true)
.addField('League Experience', '14/16', true)
.addField('Level', '3', true)
.addField('Last Game Played', '1,431', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '4', true)
.addField('Win Percentage', '*35.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Ruchan •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Ruciel#5128 `Wins: 4 | Losses: 1 | Games Played: 1 | League EXP: 4/9 | Level: 2`
    if(command === 'Ruciel') {
        let p = new Discord.RichEmbed()
.addField('Wins', '4', true)
.addField('Losses', '1', true)
.addField('Games Played', '1', true)
.addField('League Experience', '4/9', true)
.addField('Level', '2', true)
.addField('Last Game Played', '1,767', true)
.addField('Current Win Streak', '4', true)
.addField('Longest Win Streak', '4', true)
.addField('Win Percentage', '*80.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|•  •|•')
.setColor(0x04771B)
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
//@rusridersman#9179 `Wins: 19 | Losses: 28 | Games Played: 10 | League EXP: 39/40 | Level: 5`
    if(command === 'rusridersman') {
        let p = new Discord.RichEmbed()
.addField('Wins', '19', true)
.addField('Losses', '28', true)
.addField('Games Played', '10', true)
.addField('League Experience', '39/40', true)
.addField('Level', '5', true)
.addField('Last Game Played', '1,535', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '4', true)
.addField('Win Percentage', '*40.42%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_ru: • Russia')

.setFooter('•|• rusridersman •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Russian_hacker_Moscow#7445 `Wins: 2 | Losses: 9 | Games Played: 3 | League EXP: 2/4 | Level: 1`
    if(command === 'Russian_hacker_Moscow') {
        let p = new Discord.RichEmbed()
.addField('Wins', '2', true)
.addField('Losses', '9', true)
.addField('Games Played', '3', true)
.addField('League Experience', '2/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,655', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '2', true)
.addField('Win Percentage', '*18.18%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Russian_hacker_Moscow •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@ruzy#9110 `Wins: 0 | Losses: 16 | Games Played: 3 | League EXP: 0/4 | Level: 0`
    if(command === 'ruzy') {
        let p = new Discord.RichEmbed()
.addField('Wins', '0', true)
.addField('Losses', '16', true)
.addField('Games Played', '3', true)
.addField('League Experience', '0/4', true)
.addField('Level', '0', true)
.addField('Last Game Played', '1,715', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '0', true)
.addField('Win Percentage', '*0.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Incidents Reported:', '•**Quitting Barbarian:** 3\n•**Uncivilized Barbarian:** 1\n•**Banned:** 1')

.addField('Location', ':flag_us: • America')

.setFooter('•|• ruzy •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Ryan "RyM1" Miller#1747 `Wins: 2 | Losses: 8 | Games Played: 2 | League EXP: 2/4 | Level: 1`
    if(command === 'RyanMiller') {
        let p = new Discord.RichEmbed()
.addField('Wins', '2', true)
.addField('Losses', '8', true)
.addField('Games Played', '2', true)
.addField('League Experience', '2/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,522', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '0', true)
.addField('Win Percentage', '*20.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Ryan "RyM1" Miller •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Salamatkustaja#7276 `Wins: 11 | Losses: 4 | Games Played: 3 | League EXP: 16/25 | Level: 4`
    if(command === 'Salamatkustaja') {
        let p = new Discord.RichEmbed()
.addField('Wins', '11', true)
.addField('Losses', '4', true)
.addField('Games Played', '3', true)
.addField('League Experience', '16/25', true)
.addField('Level', '4', true)
.addField('Last Game Played', '1,260', true)
.addField('Current Win Streak', '9', true)
.addField('Longest Win Streak', '9', true)
.addField('Win Percentage', '*73.33%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Salamatkustaja •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Samsun#5460 `Wins: 75 | Losses: 42 | Games Played: 25 | League EXP: 118/170 | Level: 8`
    if(command === 'Samsun') {
        let p = new Discord.RichEmbed()
.addField('Wins', '75', true)
.addField('Losses', '42', true)
.addField('Games Played', '25', true)
.addField('League Experience', '118/170', true)
.addField('Level', '8', true)
.addField('Last Game Played', '1,699', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '17', true)
.addField('Win Percentage', '*64.10%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_kr: • Korea Republic')

.setFooter('•|• Samsun •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@sasasa3#4692 `Wins: 31 | Losses: 45 | Games Played: 15 | League EXP: 31/40 | Level: 5`
    if(command === 'sasasa3') {
        let p = new Discord.RichEmbed()
.addField('Wins', '31', true)
.addField('Losses', '45', true)
.addField('Games Played', '15', true)
.addField('League Experience', '31/40', true)
.addField('Level', '5', true)
.addField('Last Game Played', '1,341', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '5', true)
.addField('Win Percentage', '*40.78%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• sasasa3 •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Sayem#7692 `Wins: 5 | Losses: 6 | Games Played: 2 | League EXP: 5/9 | Level: 2`
    if(command === 'Sayem') {
        let p = new Discord.RichEmbed()
.addField('Wins', '5', true)
.addField('Losses', '6', true)
.addField('Games Played', '2', true)
.addField('League Experience', '5/9', true)
.addField('Level', '2', true)
.addField('Last Game Played', '1,188', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '3', true)
.addField('Win Percentage', '*45.45%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Sayem •|•')
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
//@Sandro_RagingGlory#9052 `Wins: 9 | Losses: 18 | Games Played: 5 | League EXP: 9/16 | Level: 3`
    if(command === 'Sandro_RagingGlory') {
        let p = new Discord.RichEmbed()
.addField('Wins', '9', true)
.addField('Losses', '18', true)
.addField('Games Played', '5', true)
.addField('League Experience', '9/16', true)
.addField('Level', '3', true)
.addField('Last Game Played', '1,739', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '3', true)
.addField('Win Percentage', '*33.33%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Sandro_RagingGlory •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@sansare#7637 `Wins: 2 | Losses: 12 | Games Played: 3 | League EXP: 2/4 | Level: 1`
    if(command === 'sansare') {
        let p = new Discord.RichEmbed()
.addField('Wins', '2', true)
.addField('Losses', '12', true)
.addField('Games Played', '3', true)
.addField('League Experience', '2/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,736', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '2', true)
.addField('Win Percentage', '*14.28%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Incidents Reported:', '•**Quitting Barbarian:** 1')

.addField('Location', ':flag_us: • America')

.setFooter('•|• sansare •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Science#0330 `Wins: 5 | Losses: 4 | Games Played: 2 | League EXP: 5/9 | Level: 2`
    if(command === 'Science_K') {
        let p = new Discord.RichEmbed()
.addField('Wins', '5', true)
.addField('Losses', '4', true)
.addField('Games Played', '2', true)
.addField('League Experience', '5/9', true)
.addField('Level', '2', true)
.addField('Last Game Played', '1,721', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '3', true)
.addField('Win Percentage', '*55.55%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Science_K •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@ScratchJaxon#1599 `Wins: 1 | Losses: 15 | Games Played: 4 | League EXP: 1/4 | Level: 1`
    if(command === 'MasculineBean') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '1', true)
            .addField('Losses', '15', true)
            .addField('Games Played', '4', true)
            .addField('League Experience', '1/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '1,029', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '1', true)
            .addField('Win Percentage', '*6.25%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• MasculineBean •|•')
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
//@seinzumtode#5354 `Wins: 160 | Losses: 63 | Games Played: 47 | League EXP: 256/275 | Level: 9`
    if(command === 'seinzumtode') {
        let p = new Discord.RichEmbed()
.addField('Wins', '160', true)
.addField('Losses', '63', true)
.addField('Games Played', '47', true)
.addField('League Experience', '256/275', true)
.addField('Level', '9', true)
.addField('Last Game Played', '1,416', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '30', true)
.addField('Win Percentage', '*71.74%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_kr: • Korea Republic')

.setFooter('•|• sein zun tode •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Sephirawk#7517 `Wins: 38 | Losses: 62 | Games Played: 20 | League EXP: 43/65 | Level: 6`
    if(command === 'Sephirawk') {
        let p = new Discord.RichEmbed()
.addField('Wins', '38', true)
.addField('Losses', '62', true)
.addField('Games Played', '20', true)
.addField('League Experience', '43/65', true)
.addField('Level', '6', true)
.addField('Last Game Played', '1,052', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '7', true)
.addField('Win Percentage', '*38.00%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Incidents Reported:', '•**Raging Barbarian:** 4')

.addField('Location', ':flag_us: • America')

.setFooter('•|• Sephirawk •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Seredusc#7412 `Wins: 1 | Losses: 5 | Games Played: 1 | League EXP: 1/4 | Level: 1`
    if(command === 'Seredusc') {
        let p = new Discord.RichEmbed()
.addField('Wins', '1', true)
.addField('Losses', '5', true)
.addField('Games Played', '1', true)
.addField('League Experience', '1/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,684', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '1', true)
.addField('Win Percentage', '*16.66%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Incidents Reported:', '•**Quitting Barbarian:** 1')

.addField('Location', ':flag_us: • America')

.setFooter('•|• Seredusc •|•')
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
//@Seth#5468 `Wins: 31 | Losses: 33 | Games Played: 18 | League EXP: 36/40 | Level: 5`
    if(command === 'StevenBuscemi') {
        let p = new Discord.RichEmbed()
.addField('Wins', '31', true)
.addField('Losses', '33', true)
.addField('Games Played', '16', true)
.addField('League Experience', '36/40', true)
.addField('Level', '5', true)
.addField('Last Game Played', '1,401', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '7', true)
.addField('Win Percentage', '*48.43%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• StevenBuscemi •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Sewn2getherWrong#4568 `Wins: 13 | Losses: 30 | Games Played: 9 | League EXP: 13/16 | Level: 3`
    if(command === 'Sewn2getherWrong') {
        let p = new Discord.RichEmbed()
.addField('Wins', '13', true)
.addField('Losses', '30', true)
.addField('Games Played', '9', true)
.addField('League Experience', '13/16', true)
.addField('Level', '3', true)
.addField('Last Game Played', '1,632', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '3', true)
.addField('Win Percentage', '*30.23%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Sewn2getherWrong •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@SH#0195 `Wins: 200 | Losses: 163 | Games Played: 74 | League EXP: 273/275 | Level: 9`
    if(command === 'SH') {
        let p = new Discord.RichEmbed()
.addField('Wins', '200', true)
.addField('Losses', '163', true)
.addField('Games Played', '74', true)
.addField('League Experience', '273/275', true)
.addField('Level', '9', true)
.addField('Last Game Played', '1,511', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '18', true)
.addField('Win Percentage', '*55.09%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_kr: • Korean')

.setFooter('•|• SH •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Shade#0572 `Wins: 15 | Losses: 12 | Games Played: 5 | League EXP: 15/16 | Level: 3`
    if(command === 'Shade') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '15', true)
            .addField('Losses', '12', true)
            .addField('Games Played', '5', true)
            .addField('League Experience', '15/16', true)
            .addField('Level', '3', true)
            .addField('Last Game Played', '1,030', true)
            .addField('Current Win Streak', '3', true)
            .addField('Longest Win Streak', '4', true)
            .addField('Win Percentage', '*55.55%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Shade •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Shadow#7719 `Wins: 30 | Losses: 45 | Games Played: 16 | League EXP: 35/40 | Level: 5`
    if(command === 'Shadow') {
        let p = new Discord.RichEmbed()
.addField('Wins', '30', true)
.addField('Losses', '45', true)
.addField('Games Played', '16', true)
.addField('League Experience', '35/40', true)
.addField('Level', '5', true)
.addField('Last Game Played', '1,409', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '7', true)
.addField('Win Percentage', '*40.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Shadow •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Shadow_link291#7162 `Wins: 23 | Losses: 23 | Games Played: 9 | League EXP: 28/40 | Level: 5`
    if(command === 'briansgames') {
        let p = new Discord.RichEmbed()
.addField('Wins', '23', true)
.addField('Losses', '23', true)
.addField('Games Played', '9', true)
.addField('League Experience', '28/40', true)
.addField('Level', '5', true)
.addField('Last Game Played', '1,514', true)
.addField('Current Win Streak', '6', true)
.addField('Longest Win Streak', '6', true)
.addField('Win Percentage', '*50.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• briansgames •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@ShadowHunter280#9014 `Wins: 5 | Losses: 2 | Games Played: 1 | League EXP: 5/9 | Level: 2`
    if(command === 'ShadowHunter280') {
        let p = new Discord.RichEmbed()
.addField('Wins', '5', true)
.addField('Losses', '2', true)
.addField('Games Played', '1', true)
.addField('League Experience', '5/9', true)
.addField('Level', '2', true)
.addField('Last Game Played', '1,574', true)
.addField('Current Win Streak', '5', true)
.addField('Longest Win Streak', '5', true)
.addField('Win Percentage', '*71.42%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• ShadowHunter280 •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Shalashaska#1197 `Wins: 0 | Losses: 10 | Games Played: 2 | League EXP: 0/4 | Level: 0`
    if(command === 'Shalashaska') {
        let p = new Discord.RichEmbed()
.addField('Wins', '0', true)
.addField('Losses', '10', true)
.addField('Games Played', '2', true)
.addField('League Experience', '0/4', true)
.addField('Level', '0', true)
.addField('Last Game Played', '1,478', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '0', true)
.addField('Win Percentage', '*0.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Shalashaska •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@shampoux#9436 `Wins: 5 | Losses: 14 | Games Played: 4 | League EXP: 4/9 | Level: 2`
    if(command === 'shampoux') {
        let p = new Discord.RichEmbed()
.addField('Wins', '4', true)
.addField('Losses', '14', true)
.addField('Games Played', '4', true)
.addField('League Experience', '4/9', true)
.addField('Level', '2', true)
.addField('Last Game Played', '1,374', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '3', true)
.addField('Win Percentage', '*22.22%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• shampoux •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@SheepHorror#4369 `Wins: 69 | Losses: 53 | Games Played: 25 | League EXP: 85/105 | Level: 7`
    if(command === 'SheepHorror') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '69', true)
            .addField('Losses', '53', true)
            .addField('Games Played', '25', true)
            .addField('League Experience', '85/105', true)
            .addField('Level', '7', true)
            .addField('Last Game Played', '1,237', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '11', true)
            .addField('Win Percentage', '*56.55%*', true)

            .addField('Chieftain', '<:chieftain:320176909927579648>', true)

            .setFooter('•|• SheepHorror •|•')
            .setColor(0x0C5B80)
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
//@Shibi4you#8817 `Wins: 40 | Losses: 47 | Games Played: 19 | League EXP: 41/65 | Level: 6`
    if(command === 'Shibi4you') {
        let p = new Discord.RichEmbed()
.addField('Wins', '40', true)
.addField('Losses', '47', true)
.addField('Games Played', '19', true)
.addField('League Experience', '41/65', true)
.addField('Level', '6', true)
.addField('Last Game Played', '1,628', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '6', true)
.addField('Win Percentage', '*45.97%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Shibi4you •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@shidizzle#6617 `Wins: 4 | Losses: 4 | Games Played: 3 | League EXP: 24/25 | Level: 4`
    if(command === 'shidizzle') {
        let p = new Discord.RichEmbed()
.addField('Wins', '4', true)
.addField('Losses', '4', true)
.addField('Games Played', '3', true)
.addField('League Experience', '24/25', true)
.addField('Level', '4', true)
.addField('Last Game Played', '1,413', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '4', true)
.addField('Win Percentage', '*50.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• shidizzle •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@xMoy#4858 `Wins: 43 | Losses: 51 | Games Played: 22 | League EXP: 79/105 | Level: 7`
    if(command === 'xMoy') {
        let p = new Discord.RichEmbed()
.addField('Wins', '43', true)
.addField('Losses', '51', true)
.addField('Games Played', '22', true)
.addField('League Experience', '79/105', true)
.addField('Level', '7', true)
.addField('Last Game Played', '1,791', true)
.addField('Current Win Streak', '5', true)
.addField('Longest Win Streak', '6', true)
.addField('Win Percentage', '*44.74%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_fr: • France')

.setFooter('•|• xMoy •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@shrikey#2837 `Wins: 4 | Losses: 15 | Games Played: 4 | League EXP: 4/9 | Level: 2`
    if(command === 'ASG') {
        let p = new Discord.RichEmbed()
.addField('Wins', '4', true)
.addField('Losses', '15', true)
.addField('Games Played', '4', true)
.addField('League Experience', '4/9', true)
.addField('Level', '2', true)
.addField('Last Game Played', '1,336', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '2', true)
.addField('Win Percentage', '*21.05%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• ASG •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@shout#5321 `Wins: 8 | Losses: 2 | Games Played: 2 | League EXP: 8/9 | Level: 2`
    if(command === 'shout') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '8', true)
            .addField('Losses', '2', true)
            .addField('Games Played', '2', true)
            .addField('League Experience', '8/9', true)
            .addField('Level', '2', true)
            .addField('Last Game Played', '960', true)
            .addField('Current Win Streak', '4', true)
            .addField('Longest Win Streak', '4', true)
            .addField('Win Percentage', '*80.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• shout •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Shuckle#9042 `Wins: 3 | Losses: 7 | Games Played: 2 | League EXP: 3/4 | Level: 1`
    if(command === 'Shuckle') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '3', true)
            .addField('Losses', '7', true)
            .addField('Games Played', '2', true)
            .addField('League Experience', '3/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '1,084', true)
            .addField('Current Win Streak', '2', true)
            .addField('Longest Win Streak', '2', true)
            .addField('Win Percentage', '*30.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Shuckle •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Shynet Meow#3567 `Wins: 0 | Losses: 4 | Games Played: 1 | League EXP: 0/4 | Level: 0`
    if(command === 'ShynetMeow') {
        let p = new Discord.RichEmbed()
.addField('Wins', '0', true)
.addField('Losses', '4', true)
.addField('Games Played', '1', true)
.addField('League Experience', '0/4', true)
.addField('Level', '0', true)
.addField('Last Game Played', '1,524', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '0', true)
.addField('Win Percentage', '*0.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Shynet Meow •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@SilentPunisher#4438 `Wins: 1 | Losses: 4 | Games Played: 1 | League EXP: 1/4 | Level: 1`
    if(command === 'SilentPunisher') {
        let p = new Discord.RichEmbed()
.addField('Wins', '1', true)
.addField('Losses', '4', true)
.addField('Games Played', '1', true)
.addField('League Experience', '1/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,723', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '1', true)
.addField('Win Percentage', '*20.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• SilentPunisher •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@SilentSmoker52#4266 `Wins: 0 | Losses: 3 | Games Played: 1 | League EXP: 10/16 | Level: 3`
    if(command === 'SilentSmoker52') {
        let p = new Discord.RichEmbed()
.addField('Wins', '0', true)
.addField('Losses', '3', true)
.addField('Games Played', '1', true)
.addField('League Experience', '10/16', true)
.addField('Level', '3', true)
.addField('Last Game Played', '1,734', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '0', true)
.addField('Win Percentage', '*0.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• SilentSmoker52 •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@silver#0600 `Wins: 0 | Losses: 2 | Games Played: 1 | League EXP: 10/16 | Level: 3`
    if(command === 'dmsilver2') {
        let p = new Discord.RichEmbed()
.addField('Wins', '0', true)
.addField('Losses', '2', true)
.addField('Games Played', '1', true)
.addField('League Experience', '10/16', true)
.addField('Level', '3', true)
.addField('Last Game Played', '1,607', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '0', true)
.addField('Win Percentage', '*0.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• dmsilver2 •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Sitrx#5673 `Wins: 1 | Losses: 4 | Games Played: 1 | League EXP: 1/4 | Level: 1`
    if(command === 'S1tr1x') {
        let p = new Discord.RichEmbed()
.addField('Wins', '1', true)
.addField('Losses', '4', true)
.addField('Games Played', '1', true)
.addField('League Experience', '1/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,259', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '1', true)
.addField('Win Percentage', '*20.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• S1tr1x •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Sitter#1163 `Wins: 11 | Losses: 8 | Games Played: 4 | League EXP: 13/16 | Level: 3`
    if(command === 'Sitter') {
        let p = new Discord.RichEmbed()
.addField('Wins', '11', true)
.addField('Losses', '8', true)
.addField('Games Played', '4', true)
.addField('League Experience', '13/16', true)
.addField('Level', '3', true)
.addField('Last Game Played', '1,247', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '5', true)
.addField('Win Percentage', '*57.89%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Sitter •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Skwitz#5702 `Wins: 1 | Losses: 4 | Games Played: 1 | League EXP: 1/4 | Level: 1`
    if(command === 'Skwitz') {
        let p = new Discord.RichEmbed()
.addField('Wins', '1', true)
.addField('Losses', '4', true)
.addField('Games Played', '1', true)
.addField('League Experience', '1/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,268', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '1', true)
.addField('Win Percentage', '*20.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Skwitz •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@skylinegraz#3363 `Wins: 1 | Losses: 4 | Games Played: 1 | League EXP: 1/4 | Level: 1`
    if(command === 'skylinegraz') {
        let p = new Discord.RichEmbed()
.addField('Wins', '1', true)
.addField('Losses', '4', true)
.addField('Games Played', '1', true)
.addField('League Experience', '1/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,752', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '1', true)
.addField('Win Percentage', '*20.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• skylinegraz •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Skylord_Grove#9319 `Wins: 6 | Losses: 14 | Games Played: 4 | League EXP: 6/9 | Level: 2`
    if(command === 'Skylord_Grove') {
        let p = new Discord.RichEmbed()
.addField('Wins', '6', true)
.addField('Losses', '14', true)
.addField('Games Played', '4', true)
.addField('League Experience', '6/9', true)
.addField('Level', '2', true)
.addField('Last Game Played', '1,425', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '3', true)
.addField('Win Percentage', '*30.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Skylord_Grove •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@slegach#6717 `Wins: 4 | Losses: 1 | Games Played: 1 | League EXP: 4/9 | Level: 2`
    if(command === 'slegach') {
        let p = new Discord.RichEmbed()
.addField('Wins', '4', true)
.addField('Losses', '1', true)
.addField('Games Played', '1', true)
.addField('League Experience', '4/9', true)
.addField('Level', '2', true)
.addField('Last Game Played', '1,590', true)
.addField('Current Win Streak', '4', true)
.addField('Longest Win Streak', '4', true)
.addField('Win Percentage', '*80.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• slegach •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@slick_salamander#9407 `Wins: 51 | Losses: 67 | Games Played: 24 | League EXP: 64/65 | Level: 6`
    if(command === 'slick_salamander') {
        let p = new Discord.RichEmbed()
.addField('Wins', '51', true)
.addField('Losses', '67', true)
.addField('Games Played', '24', true)
.addField('League Experience', '64/65', true)
.addField('Level', '6', true)
.addField('Last Game Played', '1,783', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '5', true)
.addField('Win Percentage', '*43.22%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• slick_salamander •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@slprywhnwet#9191 `Wins: 24 | Losses: 43 | Games Played: 14 | League EXP: 28/40 | Level: 5`
    if(command === 'running4life7') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '24', true)
            .addField('Losses', '43', true)
            .addField('Games Played', '14', true)
            .addField('League Experience', '28/40', true)
            .addField('Level', '5', true)
            .addField('Last Game Played', '1,020', true)
            .addField('Current Win Streak', '2', true)
            .addField('Longest Win Streak', '6', true)
            .addField('Win Percentage', '*35.82%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• running4life7 •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Slysal4#2405 `Wins: 0 | Losses: 5 | Games Played: 1 | League EXP: 0/4 | Level: 0`
    if(command === 'Slysal4') {
        let p = new Discord.RichEmbed()
.addField('Wins', '0', true)
.addField('Losses', '5', true)
.addField('Games Played', '1', true)
.addField('League Experience', '0/4', true)
.addField('Level', '0', true)
.addField('Last Game Played', '1,228', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '0', true)
.addField('Win Percentage', '*0.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Slysal4 •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@SnowFlake#2133 `Wins: 3 | Losses: 7 | Games Played: 2 | League EXP: 3/4 | Level: 1`
    if(command === 'SnowFlake') {
        let p = new Discord.RichEmbed()
.addField('Wins', '3', true)
.addField('Losses', '7', true)
.addField('Games Played', '2', true)
.addField('League Experience', '3/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,518', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '2', true)
.addField('Win Percentage', '*30.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• SnowFlake •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Solinar#7233 `Wins: 1 | Losses: 4 | Games Played: 1 | League EXP: 1/4 | Level: 1`
    if(command === 'Solinar') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '1', true)
            .addField('Losses', '4', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '1/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '1,092', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '1', true)
            .addField('Win Percentage', '*20.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Solinar •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@soregix#2255 `Wins: 4 | Losses: 5 | Games Played: 2 | League EXP: 4/9 | Level: 2`
    if(command === 'soregix') {
        let p = new Discord.RichEmbed()
.addField('Wins', '4', true)
.addField('Losses', '5', true)
.addField('Games Played', '2', true)
.addField('League Experience', '4/9', true)
.addField('Level', '2', true)
.addField('Last Game Played', '1,551', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '3', true)
.addField('Win Percentage', '*44.44%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• soregix •|•')
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
//@SoryJery#4013 `Wins: 2 | Losses: 23 | Games Played: 5 | League EXP: 2/4 | Level: 1`
    if(command === 'SoryJery') {
        let p = new Discord.RichEmbed()
.addField('Wins', '2', true)
.addField('Losses', '23', true)
.addField('Games Played', '5', true)
.addField('League Experience', '2/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,166', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '1', true)
.addField('Win Percentage', '*8.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• SoryJery •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@SourceGear#0062 `Wins: 91 | Losses: 81 | Games Played: 36 | League EXP: 115/170 | Level: 8`
    if(command === 'SourceGear') {
        let p = new Discord.RichEmbed()
.addField('Wins', '91', true)
.addField('Losses', '81', true)
.addField('Games Played', '36', true)
.addField('League Experience', '115/170', true)
.addField('Level', '8', true)
.addField('Last Game Played', '1,760', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '11', true)
.addField('Win Percentage', '*52.90%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Incidents Reported:', '•**Quitting Barbarian:** 1')

.addField('Location', ':flag_us: • America')

.setFooter('•|• SourceGear •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Sphod#1205 `Wins: 28 | Losses: 21 | Games Played: 10 | League EXP: 47/65 | Level: 6`
    if(command === 'Sphod') {
        let p = new Discord.RichEmbed()
.addField('Wins', '28', true)
.addField('Losses', '21', true)
.addField('Games Played', '10', true)
.addField('League Experience', '47/65', true)
.addField('Level', '6', true)
.addField('Last Game Played', '1,770', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '14', true)
.addField('Win Percentage', '*57.14%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Sphod •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@emt409#1968 `Wins: 153 | Losses: 204 | Games Played: 73 | League EXP: 170/275 | Level: 9`
    if(command === 'emt409') {
        let p = new Discord.RichEmbed()
.addField('Wins', '153', true)
.addField('Losses', '204', true)
.addField('Games Played', '73', true)
.addField('League Experience', '170/275', true)
.addField('Level', '9', true)
.addField('Last Game Played', '1,545', true)
.addField('Current Win Streak', '4', true)
.addField('Longest Win Streak', '10', true)
.addField('Win Percentage', '*42.85%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)
.addField('Solid Host', '⍟', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• emt409 •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Eysteinh#8079 `Wins: 5 | Losses: 3 | Games Played: 2 | League EXP: 40/65 | Level: 6`
    if(command === 'Eysteinh') {
        let p = new Discord.RichEmbed()
.addField('Wins', '5', true)
.addField('Losses', '3', true)
.addField('Games Played', '2', true)
.addField('League Experience', '40/65', true)
.addField('Level', '6', true)
.addField('Last Game Played', '1,784', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '3', true)
.addField('Win Percentage', '*62.50%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_no: • Norway')

.setFooter('•|• Eysteinh •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@sPuKi#6713 `Wins: 2 | Losses: 9 | Games Played: 3 | League EXP: 4/9 | Level: 2`
    if(command === 'sPuKi') {
        let p = new Discord.RichEmbed()
.addField('Wins', '2', true)
.addField('Losses', '9', true)
.addField('Games Played', '3', true)
.addField('League Experience', '4/9', true)
.addField('Level', '2', true)
.addField('Last Game Played', '1,106', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '1', true)
.addField('Win Percentage', '*18.18%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Incidents Reported:', '•**Quitting Barbarian:** 1')

.addField('Location', ':flag_us: • America')

.setFooter('•|• sPuKi •|•')
.setColor(0x04771B)
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
//@Squish#0658 `Wins: 189 | Losses: 166 | Games Played: 74 | League EXP: 249/275 | Level: 9`
    if(command === 'Squish') {
        let p = new Discord.RichEmbed()
.addField('Wins', '189', true)
.addField('Losses', '166', true)
.addField('Games Played', '74', true)
.addField('League Experience', '249/275', true)
.addField('Level', '9', true)
.addField('Last Game Played', '1,776', true)
.addField('Current Win Streak', '9', true)
.addField('Longest Win Streak', '15', true)
.addField('Win Percentage', '*53.23%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_ru: • Russia')

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
//@stbio#0178 `Wins: 53 | Losses: 37 | Games Played: 18 | League EXP: 82/105 | Level: 7`
    if(command === 'SaintBio') {
        let p = new Discord.RichEmbed()
.addField('Wins', '53', true)
.addField('Losses', '37', true)
.addField('Games Played', '18', true)
.addField('League Experience', '82/105', true)
.addField('Level', '7', true)
.addField('Last Game Played', '1,241', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '7', true)
.addField('Win Percentage', '*58.88%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• SaintBio •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Civilized Barbarian#5706 `Wins: 12 | Losses: 14 | Games Played: 6 | League EXP: 48/65 | Level: 6`
    if(command === 'Steve_C') {
        let p = new Discord.RichEmbed()
.addField('Wins', '12', true)
.addField('Losses', '14', true)
.addField('Games Played', '6', true)
.addField('League Experience', '48/65', true)
.addField('Level', '6', true)
.addField('Last Game Played', '1,784', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '6', true)
.addField('Win Percentage', '*46.15%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Steve_C •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@StickEmUpSucka#8746 `Wins: 2 | Losses: 3 | Games Played: 1 | League EXP: 2/4 | Level: 1
    if(command === 'StickEmUpSucka') {
        let p = new Discord.RichEmbed()
.addField('Wins', '2', true)
.addField('Losses', '3', true)
.addField('Games Played', '1', true)
.addField('League Experience', '2/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,166', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '2', true)
.addField('Win Percentage', '*40.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')
.addField('Location', ':flag_kr: • Korea Republic')

.setFooter('•|• StickEmUpSucka •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@stillgaming#6383 `Wins: 7 | Losses: 9 | Games Played: 3 | League EXP: 9/16 | Level: 3`
    if(command === 'stillgaming') {
        let p = new Discord.RichEmbed()
.addField('Wins', '7', true)
.addField('Losses', '9', true)
.addField('Games Played', '3', true)
.addField('League Experience', '9/16', true)
.addField('Level', '3', true)
.addField('Last Game Played', '1,773', true)
.addField('Current Win Streak', '7', true)
.addField('Longest Win Streak', '7', true)
.addField('Win Percentage', '*43.75%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• stillgaming •|•')
.setColor(0x04771B)
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
//@SUGARISPOISON#5267 `Wins: 35 | Losses: 60 | Games Played: 19 | League EXP: 36/40 | Level: 5`
    if(command === 'SUGARISPOISON') {
        let p = new Discord.RichEmbed()
.addField('Wins', '35', true)
.addField('Losses', '60', true)
.addField('Games Played', '19', true)
.addField('League Experience', '36/40', true)
.addField('Level', '5', true)
.addField('Last Game Played', '1,716', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '5', true)
.addField('Win Percentage', '*36.84%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)
.addField('Solid Host', '⍟', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• SUGARISPOISON •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Summerhill guy#7259 `Wins: 2 | Losses: 3 | Games Played: 1 | League EXP: 2/4 | Level: 1`
    if(command === 'Summerhillguy') {
        let p = new Discord.RichEmbed()
.addField('Wins', '2', true)
.addField('Losses', '3', true)
.addField('Games Played', '1', true)
.addField('League Experience', '2/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,159', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '2', true)
.addField('Win Percentage', '*40.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Summerhill guy •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Superfunk07#1030 `Wins: 2 | Losses: 3 | Games Played: 1 | League EXP: 2/4 | Level: 1`
    if(command === 'Superfunk07') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '2', true)
            .addField('Losses', '3', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '2/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '1,038', true)
            .addField('Current Win Streak', '2', true)
            .addField('Longest Win Streak', '2', true)
            .addField('Win Percentage', '*40.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Superfunk07 •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Svelander#4629 `Wins: 3 | Losses: 2 | Games Played: 1 | League EXP: 3/4 | Level: 1`
    if(command === 'Svelander') {
        let p = new Discord.RichEmbed()
.addField('Wins', '3', true)
.addField('Losses', '2', true)
.addField('Games Played', '1', true)
.addField('League Experience', '3/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,681', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '3', true)
.addField('Win Percentage', '*60.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Svelander •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@swing#0422 `Wins: 14 | Losses: 11 | Games Played: 5 | League EXP: 26/40 | Level: 5`
    if(command === 'swing') {
        let p = new Discord.RichEmbed()
.addField('Wins', '14', true)
.addField('Losses', '11', true)
.addField('Games Played', '5', true)
.addField('League Experience', '26/40', true)
.addField('Level', '5', true)
.addField('Last Game Played', '1,778', true)
.addField('Current Win Streak', '8', true)
.addField('Longest Win Streak', '8', true)
.addField('Win Percentage', '*56.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• swing •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Swirlix#6895 `Wins: 148 | Losses: 109 | Games Played: 55 | League EXP: 195/275 | Level: 9`
    if(command === 'Swirlix') {
        let p = new Discord.RichEmbed()
.addField('Wins', '148', true)
.addField('Losses', '109', true)
.addField('Games Played', '55', true)
.addField('League Experience', '195/275', true)
.addField('Level', '9', true)
.addField('Last Game Played', '1,636', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '17', true)
.addField('Win Percentage', '*57.58%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_ca: • Canada')

.setFooter('•|• Swirlix •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@swolej#4956 `Wins: 1 | Losses: 11 | Games Played: 2 | League EXP: 1/4 | Level: 1`
    if(command === 'swolej') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '1', true)
            .addField('Losses', '11', true)
            .addField('Games Played', '2', true)
            .addField('League Experience', '1/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '1,559', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '1', true)
            .addField('Win Percentage', '*6.66%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• swolej •|•')
            .setColor(0x04771B)
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
//@Symfynx Maricadie#5290 `Wins: 6 | Losses: 33 | Games Played: 8 | League EXP: 6/9 | Level: 2`
    if(command === 'SymfynxMaricadie') {
        let p = new Discord.RichEmbed()
.addField('Wins', '6', true)
.addField('Losses', '33', true)
.addField('Games Played', '8', true)
.addField('League Experience', '6/9', true)
.addField('Level', '2', true)
.addField('Last Game Played', '1,541', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '3', true)
.addField('Win Percentage', '*15.38%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Symfynx Maricadie •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Synh#9379 `Wins: 0 | Losses: 5 | Games Played: 2 | League EXP: 7/9 | Level: 2`
    if(command === 'Synh') {
        let p = new Discord.RichEmbed()
.addField('Wins', '0', true)
.addField('Losses', '5', true)
.addField('Games Played', '2', true)
.addField('League Experience', '7/9', true)
.addField('Level', '2', true)
.addField('Last Game Played', '1,666', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '0', true)
.addField('Win Percentage', '*0.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Synh •|•')
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
//@take a shit on the floor#6389 `Wins: 39 | Losses: 72 | Games Played: 22 | League EXP: 44/65 | Level: 6`
    if(command === 'piddywaffles') {
        let p = new Discord.RichEmbed()
.addField('Wins', '39', true)
.addField('Losses', '72', true)
.addField('Games Played', '22', true)
.addField('League Experience', '44/40', true)
.addField('Level', '6', true)
.addField('Last Game Played', '1,236', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '6', true)
.addField('Win Percentage', '*35.13%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• piddywaffles •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@tariq2000#3870 `Wins: 3 | Losses: 2 | Games Played: 1 | League EXP: 3/4 | Level: 1`
    if(command === 'TJ') {
        let p = new Discord.RichEmbed()
.addField('Wins', '3', true)
.addField('Losses', '2', true)
.addField('Games Played', '1', true)
.addField('League Experience', '3/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,210', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '3', true)
.addField('Win Percentage', '*60.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• TJ •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@TaskForceFish#7213 `Wins: 199 | Losses: 19 | Games Played: 44 | League EXP: 366/380 | Level: 10`
    if(command === 'TaskForceFish') {
        let p = new Discord.RichEmbed()
.addField('Wins', '199', true)
.addField('Losses', '19', true)
.addField('Games Played', '44', true)
.addField('League Experience', '366/380', true)
.addField('Level', '10', true)
.addField('Last Game Played', '1,771', true)
.addField('Current Win Streak', '9', true)
.addField('Longest Win Streak', '51', true)
.addField('Win Percentage', '*91.28%*', true)

.addField('Solid Host', '⍟', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• TaskForceFish - "Peacekeeping Force on the Way" •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Tazzounet#1689 `Wins: 2 | Losses: 3 | Games Played: 1 | League EXP: 2/4 | Level: 1`
    if(command === 'Tazzounet') {
        let p = new Discord.RichEmbed()
.addField('Wins', '2', true)
.addField('Losses', '3', true)
.addField('Games Played', '1', true)
.addField('League Experience', '2/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,720', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '2', true)
.addField('Win Percentage', '*40.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Tazzounet •|•')
.setColor(0x04771B)
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
//@Tearranverse#7732 `Wins: 22 | Losses: 33 | Games Played: 12 | League EXP: 22/25 | Level: 4`
    if(command === 'Tearranverse') {
        let p = new Discord.RichEmbed()
.addField('Wins', '22', true)
.addField('Losses', '33', true)
.addField('Games Played', '12', true)
.addField('League Experience', '22/25', true)
.addField('Level', '4', true)
.addField('Last Game Played', '1,629', true)
.addField('Current Win Streak', '5', true)
.addField('Longest Win Streak', '5', true)
.addField('Win Percentage', '*40.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Tearranverse •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@TeddyRazer#7543 `Wins: 0 | Losses: 5 | Games Played: 1 | League EXP: 0/4 | Level: 0`
    if(command === 'TeddyRazer') {
        let p = new Discord.RichEmbed()
.addField('Wins', '0', true)
.addField('Losses', '5', true)
.addField('Games Played', '1', true)
.addField('League Experience', '0/4', true)
.addField('Level', '0', true)
.addField('Last Game Played', '1,214', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '0', true)
.addField('Win Percentage', '*0.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Incidents Reported:', '•**Quitting Barbarian:** 1')

.addField('Location', ':flag_us: • America')

.setFooter('•|• TeddyRazer •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@ThaneOfHyrule 🌟#6513 `Wins: 9 | Losses: 27 | Games Played: 7 | League EXP: 16/25 | Level: 4`
    if(command === 'ThaneOfHyrule') {
        let p = new Discord.RichEmbed()
.addField('Wins', '9', true)
.addField('Losses', '27', true)
.addField('Games Played', '7', true)
.addField('League Experience', '16/25', true)
.addField('Level', '4', true)
.addField('Last Game Played', '1,493', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '3', true)
.addField('Win Percentage', '*25.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• ThaneOfHyrule 🌟 •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@The__Sorrow#4085 `Wins: 4 | Losses: 11 | Games Played: 3 | League EXP: 4/9 | Level: 2`
    if(command === 'The__Sorrow') {
        let p = new Discord.RichEmbed()
.addField('Wins', '4', true)
.addField('Losses', '11', true)
.addField('Games Played', '2', true)
.addField('League Experience', '4/9', true)
.addField('Level', '2', true)
.addField('Last Game Played', '1,738', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '3', true)
.addField('Win Percentage', '*26.66%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• The__Sorrow •|•')
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
//@Theevils#7815 `Wins: 5 | Losses: 8 | Games Played: 3 | League EXP: 5/9 | Level: 2`
    if(command === 'Theevils') {
        let p = new Discord.RichEmbed()
.addField('Wins', '5', true)
.addField('Losses', '8', true)
.addField('Games Played', '3', true)
.addField('League Experience', '5/9', true)
.addField('Level', '2', true)
.addField('Last Game Played', '1,312', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '3', true)
.addField('Win Percentage', '*38.46%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_eg: • Egypt')

.setFooter('•|• Theevils •|•')
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
//@TheIceBaron#5920 `Wins: 135 | Losses: 139 | Games Played: 53 | League EXP: 173/275 | Level: 9`
    if(command === 'TheIceBaron') {
        let p = new Discord.RichEmbed()
.addField('Wins', '135', true)
.addField('Losses', '139', true)
.addField('Games Played', '53', true)
.addField('League Experience', '173/275', true)
.addField('Level', '9', true)
.addField('Last Game Played', '1,762', true)
.addField('Current Win Streak', '5', true)
.addField('Longest Win Streak', '12', true)
.addField('Win Percentage', '*49.27%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• TheIceBaron •|•')
.setColor(0x0C5B80 )
        message.channel.sendEmbed(p);
    };
//@TheLegend27#8125 `Wins: 0 | Losses: 5 | Games Played: 1 | League EXP: 0/4 | Level: 0`
    if(command === 'TheLegend27') {
        let p = new Discord.RichEmbed()
.addField('Wins', '0', true)
.addField('Losses', '5', true)
.addField('Games Played', '1', true)
.addField('League Experience', '0/4', true)
.addField('Level', '0', true)
.addField('Last Game Played', '1,368', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '0', true)
.addField('Win Percentage', '*0.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Incidents Reported:', '•**Quitting Barbarian:** 1')

.addField('Location', ':flag_us: • America')

.setFooter('•|• TheLegend27 •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@TheLuckKing#2070 `Wins: 0 | Losses: 5 | Games Played: 1 | League EXP: 0/4 | Level: 0`
    if(command === 'TheLuckKing') {
        let p = new Discord.RichEmbed()
.addField('Wins', '0', true)
.addField('Losses', '5', true)
.addField('Games Played', '1', true)
.addField('League Experience', '0/4', true)
.addField('Level', '0', true)
.addField('Last Game Played', '1,200', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '0', true)
.addField('Win Percentage', '*0.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• TheLuckKing •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@TheMysteriousX#2166 `Wins: 4 | Losses: 10 | Games Played: 3 | League EXP: 4/9 | Level: 2`
    if(command === 'TheMysteriousX') {
        let p = new Discord.RichEmbed()
.addField('Wins', '4', true)
.addField('Losses', '10', true)
.addField('Games Played', '3', true)
.addField('League Experience', '4/9', true)
.addField('Level', '2', true)
.addField('Last Game Played', '1,789', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '2', true)
.addField('Win Percentage', '*40.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Incidents Reported:', '•**Raging Barbarian:** 1')

.addField('Location', ':flag_us: • America')

.setFooter('•|• TheMysteriousX •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@thenuggetlover#3954 `Wins: 11 | Losses: 34 | Games Played: 9 | League EXP: 11/16 | Level: 3`
    if(command === 'thenuggetlover') {
        let p = new Discord.RichEmbed()
.addField('Wins', '11', true)
.addField('Losses', '34', true)
.addField('Games Played', '9', true)
.addField('League Experience', '11/16', true)
.addField('Level', '3', true)
.addField('Last Game Played', '1,353', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '2', true)
.addField('Win Percentage', '*31.42%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• thenuggetlover •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@TheRobArmy#1622 `Wins: 19 | Losses: 23 | Games Played: 9 | League EXP: 34/40 | Level: 5`
    if(command === 'TheRobArmy') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '19', true)
            .addField('Losses', '23', true)
            .addField('Games Played', '9', true)
            .addField('League Experience', '34/40', true)
            .addField('Level', '5', true)
            .addField('Last Game Played', '1,238', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '6', true)
            .addField('Win Percentage', '*45.23%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• TheRobArmy •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@TheScottishDwarf#5763 `Wins: 0 | Losses: 5 | Games Played: 1 | League EXP: 0/4 | Level: 0`
    if(command === 'TheScottishDwarf') {
        let p = new Discord.RichEmbed()
.addField('Wins', '0', true)
.addField('Losses', '5', true)
.addField('Games Played', '1', true)
.addField('League Experience', '0/4', true)
.addField('Level', '0', true)
.addField('Last Game Played', '1,558', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '0', true)
.addField('Win Percentage', '*0.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• TheScottishDwarf •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@TheSeiBigdog#3806 `Wins: 2 | Losses: 24 | Games Played: 5 | League EXP: 2/4 | Level: 1`
    if(command === 'TheseiBigdog') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '2', true)
            .addField('Losses', '24', true)
            .addField('Games Played', '5', true)
            .addField('League Experience', '2/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '967', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '1', true)
            .addField('Win Percentage', '*7.69%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Thesei Bigdog •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@theShyForest#1311 `Wins: 88 | Losses: 196 | Games Played: 56 | League EXP: 109/170 | Level: 8`
    if(command === 'theShyForest') {
        let p = new Discord.RichEmbed()
.addField('Wins', '88', true)
.addField('Losses', '196', true)
.addField('Games Played', '56', true)
.addField('League Experience', '109/170', true)
.addField('Level', '8', true)
.addField('Last Game Played', '1,744', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '6', true)
.addField('Win Percentage', '*30.98%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)
.addField('Solid Host', '⍟', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• theShyForest •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@TheSwicky#3692 `Wins: 3 | Losses: 6 | Games Played: 2 | League EXP: 3/4 | Level: 1`
    if(command === 'TheSwicky') {
        let p = new Discord.RichEmbed()
.addField('Wins', '3', true)
.addField('Losses', '6', true)
.addField('Games Played', '2', true)
.addField('League Experience', '3/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,677', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '3', true)
.addField('Win Percentage', '*33.33%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• TheSwicky •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@ThugLife#7123 `Wins: 42 | Losses: 58 | Games Played: 22 | League EXP: 87/105 | Level: 7`
    if(command === 'ThugLife') {
        let p = new Discord.RichEmbed()
.addField('Wins', '42', true)
.addField('Losses', '58', true)
.addField('Games Played', '22', true)
.addField('League Experience', '87/105', true)
.addField('Level', '7', true)
.addField('Last Game Played', '1,783', true)
.addField('Current Win Streak', '4', true)
.addField('Longest Win Streak', '6', true)
.addField('Win Percentage', '*42.00%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_br: • Brazil')

.setFooter('•|• ThugLife •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@thunderbug#9933 `Wins: 1 | Losses: 4 | Games Played: 1 | League EXP: 1/4 | Level: 1`
    if(command === 'thunderbug') {
        let p = new Discord.RichEmbed()
.addField('Wins', '1', true)
.addField('Losses', '4', true)
.addField('Games Played', '1', true)
.addField('League Experience', '1/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,546', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '1', true)
.addField('Win Percentage', '*20.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• thunderbug •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Timon#2541 `Wins: 39 | Losses: 77 | Games Played: 26 | League EXP: 58/65 | Level: 6`
    if(command === 'Timon') {
        let p = new Discord.RichEmbed()
.addField('Wins', '39', true)
.addField('Losses', '77', true)
.addField('Games Played', '26', true)
.addField('League Experience', '58/65', true)
.addField('Level', '6', true)
.addField('Last Game Played', '1,515', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '5', true)
.addField('Win Percentage', '*33.62%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_in: • India')

.setFooter('•|• Timon •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Tiri#8430 `Wins: 348 | Losses: 96 | Games Played: 95 | League EXP: 646/695 | Level: 13`
    if(command === 'Tiri') {
        let p = new Discord.RichEmbed()
.addField('Wins', '348', true)
.addField('Losses', '96', true)
.addField('Games Played', '95', true)
.addField('League Experience', '646/695', true)
.addField('Level', '13', true)
.addField('Last Game Played', '1,764', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '35', true)
.addField('Win Percentage', '*78.37%*', true)

.addField('Warlord', '<:warlord:319931261894524928>', true)

.addField('Location', ':flag_kr: • Korea Republic')

.setFooter('•|• Tiri •|•')
.setColor(0x77FF82)
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
//@TKswag#2630 `Wins: 123 | Losses: 85 | Games Played: 48 | League EXP: 178/275 | Level: 9`
    if(command === 'TKswag') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '123', true)
            .addField('Losses', '85', true)
            .addField('Games Played', '48', true)
            .addField('League Experience', '178/275', true)
            .addField('Level', '7', true)
            .addField('Last Game Played', '1,037', true)
            .addField('Current Win Streak', '8', true)
            .addField('Longest Win Streak', '15', true)
            .addField('Win Percentage', '*59.13%*', true)

            .addField('Chieftain', '<:chieftain:320176909927579648>', true)

            .setFooter('•|• TKswag •|•')
            .setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Toguer#3538 `Wins: 3 | Losses: 4 | Games Played: 1 | League EXP: 3/4 | Level: 1`
    if(command === 'Toguer') {
        let p = new Discord.RichEmbed()
.addField('Wins', '3', true)
.addField('Losses', '4', true)
.addField('Games Played', '1', true)
.addField('League Experience', '3/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,454', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '3', true)
.addField('Win Percentage', '*42.85%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Toguer •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@tomasthedankengine#1982 `Wins: 24 | Losses: 58 | Games Played: 17 | League EXP: 31/40 | Level: 5`
    if(command === 'DanSchneider') {
        let p = new Discord.RichEmbed()
.addField('Wins', '24', true)
.addField('Losses', '58', true)
.addField('Games Played', '17', true)
.addField('League Experience', '31/40', true)
.addField('Level', '5', true)
.addField('Last Game Played', '1,652', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '3', true)
.addField('Win Percentage', '*29.26%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Dan Schneider •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@tomatosoup#9897 `Wins: 0 | Losses: 4 | Games Played: 1 | League EXP: 0/4 | Level: 0`
    if(command === 'tomatosoup') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '0', true)
            .addField('Losses', '4', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '0/4', true)
            .addField('Level', '0', true)
            .addField('Last Game Played', '999', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '0', true)
            .addField('Win Percentage', '*0.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• tomatosoup •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Tommyaka#2657 `Wins: 20 | Losses: 48 | Games Played: 14 | League EXP: 22/25 | Level: 4`
    if(command === 'Tommyaka') {
        let p = new Discord.RichEmbed()
.addField('Wins', '20', true)
.addField('Losses', '48', true)
.addField('Games Played', '14', true)
.addField('League Experience', '22/25', true)
.addField('Level', '4', true)
.addField('Last Game Played', '1,508', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '4', true)
.addField('Win Percentage', '*29.41%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Tommyaka •|•')
.setColor(0x04771B)
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
//@TraneBoy#3344 `Wins: 11 | Losses: 37 | Games Played: 9 | League EXP:11/16 | Level: 3`
    if(command === 'TraneBoy') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '11', true)
            .addField('Losses', '37', true)
            .addField('Games Played', '9', true)
            .addField('League Experience', '11/16', true)
            .addField('Level', '3', true)
            .addField('Last Game Played', '684', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '2', true)
            .addField('Win Percentage', '*22.91%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• TraneBoy •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Treehearth#2319 `Wins: 3 | Losses: 2 | Games Played: 1 | League EXP: 3/4 | Level: 1`
    if(command === 'Treehearth') {
        let p = new Discord.RichEmbed()
.addField('Wins', '3', true)
.addField('Losses', '2', true)
.addField('Games Played', '1', true)
.addField('League Experience', '3/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,368', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '3', true)
.addField('Win Percentage', '*60.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Treehearth •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@treflan#1832 `Wins: 65 | Losses: 66 | Games Played: 26 | League EXP: 111/170 | Level: 8`
    if(command === 'treflan') {
        let p = new Discord.RichEmbed()
.addField('Wins', '65', true)
.addField('Losses', '66', true)
.addField('Games Played', '26', true)
.addField('League Experience', '111/170', true)
.addField('Level', '8', true)
.addField('Last Game Played', '1,698', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '6', true)
.addField('Win Percentage', '*49.61%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• treflan •|•')
.setColor(0x0C5B80)
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
//@Tristan#9158 `Wins: 0 | Losses: 3 | Games Played: 1 | League EXP: 10/16 | Level: 3`
    if(command === 'Tristan') {
        let p = new Discord.RichEmbed()
.addField('Wins', '0', true)
.addField('Losses', '3', true)
.addField('Games Played', '1', true)
.addField('League Experience', '10/16', true)
.addField('Level', '3', true)
.addField('Last Game Played', '1,734', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '0', true)
.addField('Win Percentage', '*0.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Tristan •|•')
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
//@Turtle_Dude423#9692 `Wins: 0 | Losses: 5 | Games Played: 1 | League EXP: 0/4 | Level: 0`
    if(command === 'Turtle_Dude423') {
        let p = new Discord.RichEmbed()
.addField('Wins', '0', true)
.addField('Losses', '5', true)
.addField('Games Played', '1', true)
.addField('League Experience', '0/4', true)
.addField('Level', '0', true)
.addField('Last Game Played', '1,070', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '0', true)
.addField('Win Percentage', '*0.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Incidents Reported:', '•**Raging Barbarian:** 1')

.addField('Location', ':flag_us: • America')

.setFooter('•|• Turtle_Dude423 •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@TW_Merk#6975 `Wins: 3 | Losses: 2 | Games Played: 1 | League EXP: 3/4 | Level: 1`
    if(command === 'TW_Merk') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '3', true)
            .addField('Losses', '2', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '3/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '966', true)
            .addField('Current Win Streak', '3', true)
            .addField('Longest Win Streak', '3', true)
            .addField('Win Percentage', '*60.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• TW_Merk •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Tyfar#4570 `Wins: 24 | Losses: 27 | Games Played: 10 | League EXP: 24/25 | Level: 4`
    if(command === 'Tyfar') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '24', true)
            .addField('Losses', '27', true)
            .addField('Games Played', '10', true)
            .addField('League Experience', '24/25', true)
            .addField('Level', '4', true)
            .addField('Last Game Played', '979', true)
            .addField('Current Win Streak', '2', true)
            .addField('Longest Win Streak', '4', true)
            .addField('Win Percentage', '*47.05%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

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
//@Tyree#1158 `Wins: 114 | Losses: 240 | Games Played: 70 | League EXP: 122/170 | Level: 8`
    if(command === 'DemonWolf') {
        let p = new Discord.RichEmbed()
.addField('Wins', '114', true)
.addField('Losses', '240', true)
.addField('Games Played', '70', true)
.addField('League Experience', '122/170', true)
.addField('Level', '8', true)
.addField('Last Game Played', '1,776', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '6', true)
.addField('Win Percentage', '*32.20%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)
.addField('Solid Host', '⍟', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• DemonWolf •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Tzara#2650 `Wins: 0 | Losses: 5 | Games Played: 1 | League EXP: 0/4 | Level: 0`
    if(command === 'Tzara') {
        let p = new Discord.RichEmbed()
.addField('Wins', '0', true)
.addField('Losses', '5', true)
.addField('Games Played', '1', true)
.addField('League Experience', '0/4', true)
.addField('Level', '0', true)
.addField('Last Game Played', '1,698', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '0', true)
.addField('Win Percentage', '*0.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Tzara •|•')
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
//@Ultima#5262 `Wins: 1 | Losses: 4 | Games Played: 1 | League EXP: 1/4 | Level: 1`
    if(command === 'Ultima') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '1', true)
            .addField('Losses', '4', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '1/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '1,116', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '1', true)
            .addField('Win Percentage', '*20.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Ultima •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Under#8770 `Wins: 258 | Losses: 251 | Games Played: 106 | League EXP: 360/380 | Level: 10`
    if(command === 'Under') {
        let p = new Discord.RichEmbed()
.addField('Wins', '258', true)
.addField('Losses', '251', true)
.addField('Games Played', '106', true)
.addField('League Experience', '360/380', true)
.addField('Level', '10', true)
.addField('Last Game Played', '1,784', true)
.addField('Current Win Streak', '4', true)
.addField('Longest Win Streak', '15', true)
.addField('Win Percentage', '*50.68%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_gb: • Wales')

.setFooter('•|• Under - "Game in 30 Minutes?!" •|•')
.setColor(0x0C5B80)
.setDescription("[Watch my Twitch!](https://www.twitch.tv/under89)")
        message.channel.sendEmbed(p);
    };
//@Uni#6538 `Wins: 81 | Losses: 49 | Games Played: 25 | League EXP: 123/170 | Level: 8`
if(command === 'UNI') {
let p = new Discord.RichEmbed()
.addField('Wins', '81', true)
.addField('Losses', '49', true)
.addField('Games Played', '25', true)
.addField('League Experience', '123/170', true)
.addField('Level', '8', true)
.addField('Last Game Played', '1,666', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '19', true)
.addField('Win Percentage', '*62.30%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_pl: • Poland')

.setFooter('•|• UNI •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@unintuistic#1011 `Wins: 6 | Losses: 9 | Games Played: 3 | League EXP: 11/16 | Level: 3`
    if(command === 'unintuistic') {
        let p = new Discord.RichEmbed()
.addField('Wins', '6', true)
.addField('Losses', '9', true)
.addField('Games Played', '3', true)
.addField('League Experience', '11/16', true)
.addField('Level', '3', true)
.addField('Last Game Played', '1,307', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '6', true)
.addField('Win Percentage', '*40.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• unintuistic •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@urlik#3458 `Wins: 55 | Losses: 76 | Games Played: 26 | League EXP: 65/105 | Level: 7`
    if(command === 'urlik') {
        let p = new Discord.RichEmbed()
.addField('Wins', '55', true)
.addField('Losses', '76', true)
.addField('Games Played', '26', true)
.addField('League Experience', '65/105', true)
.addField('Level', '6', true)
.addField('Last Game Played', '1,630', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '7', true)
.addField('Win Percentage', '*43.30%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Incidents Reported:', '•**Raging Barbarian:** 1')

.addField('Location', ':flag_us: • America')

.setFooter('•|• urlik •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Uroboros#6449 `Wins: 15 | Losses: 18 | Games Played: 6 | League EXP: 40/65 | Level: 6`
    if(command === 'Uroboros') {
        let p = new Discord.RichEmbed()
.addField('Wins', '15', true)
.addField('Losses', '18', true)
.addField('Games Played', '6', true)
.addField('League Experience', '40/65', true)
.addField('Level', '6', true)
.addField('Last Game Played', '1,217', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '7', true)
.addField('Win Percentage', '*45.45%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Uroboros •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@ustmip[CPL]#8911 `Wins: 168| Losses: 82 | Games Played: 49 | League EXP: 233/275 | Level: 9`
    if(command === 'ustmip') {
        let p = new Discord.RichEmbed()
.addField('Wins', '168', true)
.addField('Losses', '82', true)
.addField('Games Played', '49.', true)
.addField('League Experience', '233/275', true)
.addField('Level', '9', true)
.addField('Last Game Played', '1,778', true)
.addField('Current Win Streak', '4', true)
.addField('Longest Win Streak', '25', true)
.addField('Win Percentage', '*67.20%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)
.addField('Solid Host', '⍟', true)

.addField('Location', ':flag_hk: • Hong Kong')

.setFooter('•|• ustmip •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Uti-Puti#1122 `Wins: 2 | Losses: 3 | Games Played: 1 | League EXP: 2/4 | Level: 1`
    if(command === 'Uti-Puti') {
        let p = new Discord.RichEmbed()
.addField('Wins', '2', true)
.addField('Losses', '3', true)
.addField('Games Played', '1', true)
.addField('League Experience', '2/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,468', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '2', true)
.addField('Win Percentage', '*40.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Uti-Puti •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Uyux#3675 `Wins: 11 | Losses: 4 | Games Played: 3 | League EXP: 23/25 | Level: 4`
    if(command === 'Uyux') {
        let p = new Discord.RichEmbed()
.addField('Wins', '11', true)
.addField('Losses', '4', true)
.addField('Games Played', '3', true)
.addField('League Experience', '23/25', true)
.addField('Level', '4', true)
.addField('Last Game Played', '1,789', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '5', true)
.addField('Win Percentage', '*73.33%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Uyux •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Valdemar1902#1189 `Wins: 2 | Losses: 7 | Games Played: 2 | League EXP: 2/4 | Level: 1`
    if(command === 'Valdemar1902') {
        let p = new Discord.RichEmbed()
.addField('Wins', '2', true)
.addField('Losses', '7', true)
.addField('Games Played', '2', true)
.addField('League Experience', '2/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,556', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '2', true)
.addField('Win Percentage', '*22.22%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Valdemar1902 •|•')
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
//@Valentine#0981 `Wins: 3 | Losses: 7 | Games Played: 2 | League EXP: 3/4 | Level: 1`
    if(command === 'Valentine') {
        let p = new Discord.RichEmbed()
.addField('Wins', '3', true)
.addField('Losses', '7', true)
.addField('Games Played', '2', true)
.addField('League Experience', '3/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,718', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '2', true)
.addField('Win Percentage', '*30.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Valentine •|•')
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
//@Vengfulrobot#5396 `Wins: 0 | Losses: 5 | Games Played: 1 | League EXP: 0/4 | Level: 0`
    if(command === 'VaultBoy') {
        let p = new Discord.RichEmbed()
.addField('Wins', '0', true)
.addField('Losses', '5', true)
.addField('Games Played', '1', true)
.addField('League Experience', '0/4', true)
.addField('Level', '0', true)
.addField('Last Game Played', '1,555', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '0', true)
.addField('Win Percentage', '*0.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Vault Boy •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Vibraxis#4828 `Wins: 0 | Losses: 5 | Games Played: 1 | League EXP: 0/4 | Level: 0`
    if(command === 'Vibraxis') {
        let p = new Discord.RichEmbed()
.addField('Wins', '0', true)
.addField('Losses', '5', true)
.addField('Games Played', '1', true)
.addField('League Experience', '0/4', true)
.addField('Level', '0', true)
.addField('Last Game Played', '1,265', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '0', true)
.addField('Win Percentage', '*0.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Vibraxis •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Viceroy#2292 `Wins: 12 | Losses: 20 | Games Played: 6 | League EXP: 12/16 | Level: 3`
    if(command === 'ViceroyofTexas') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '12', true)
            .addField('Losses', '20', true)
            .addField('Games Played', '6', true)
            .addField('League Experience', '12/16', true)
            .addField('Level', '3', true)
            .addField('Last Game Played', '977', true)
            .addField('Current Win Streak', '1', true)
            .addField('Longest Win Streak', '3', true)
            .addField('Win Percentage', '*37.50%*', true)

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
//@Vindicate#0679 `Wins: 3 | Losses: 15 | Games Played: 6 | League EXP: 66/105 | Level: 7`
    if(command === 'Vindicate') {
        let p = new Discord.RichEmbed()
.addField('Wins', '3', true)
.addField('Losses', '15', true)
.addField('Games Played', '6', true)
.addField('League Experience', '66/105', true)
.addField('Level', '7', true)
.addField('Last Game Played', '1,748', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '3', true)
.addField('Win Percentage', '*16.66%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Vindicate •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@Vkec#1720 `Wins: 25 | Losses: 29 | Games Played: 11 | League EXP: 27/40 | Level: 5`
    if(command === 'Vkec') {
        let p = new Discord.RichEmbed()
.addField('Wins', '25', true)
.addField('Losses', '29', true)
.addField('Games Played', '11', true)
.addField('League Experience', '27/40', true)
.addField('Level', '5', true)
.addField('Last Game Played', '1,651', true)
.addField('Current Win Streak', '4', true)
.addField('Longest Win Streak', '4', true)
.addField('Win Percentage', '*46.29%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Vkec •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@🅜🅞🅓🅢 VonHolio#7826 `Wins: 0 | Losses: 6 | Games Played: 2 | League EXP: 20/25 | Level: 4`
    if(command === '🅜🅞🅓🅢 VonHolio') {
        let p = new Discord.RichEmbed()
.addField('Wins', '0', true)
.addField('Losses', '6', true)
.addField('Games Played', '2', true)
.addField('League Experience', '20/25', true)
.addField('Level', '4', true)
.addField('Last Game Played', '1,787', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '0', true)
.addField('Win Percentage', '*0.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• 🅜🅞🅓🅢 VonHolio •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Wallow#9017 `Wins: 25 | Losses: 29 | Games Played: 12 | League EXP: 30/40 | Level: 5`
    if(command === 'Wallow') {
        let p = new Discord.RichEmbed()
.addField('Wins', '25', true)
.addField('Losses', '29', true)
.addField('Games Played', '12', true)
.addField('League Experience', '30/40', true)
.addField('Level', '5', true)
.addField('Last Game Played', '1,685', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '5', true)
.addField('Win Percentage', '*46.29%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Incidents Reported:', '•**Quitting Barbarian:** 1')

.addField('Location', ':flag_us: • America')

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
//@warlock12#5727 `Wins: 0 | Losses: 2 | Games Played: 1 | League EXP: 10/16 | Level: 3`
    if(command === 'warlock12') {
        let p = new Discord.RichEmbed()
.addField('Wins', '0', true)
.addField('Losses', '2', true)
.addField('Games Played', '1', true)
.addField('League Experience', '10/16', true)
.addField('Level', '3', true)
.addField('Last Game Played', '1,660', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '0', true)
.addField('Win Percentage', '*0.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• warlock12 •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@wazabaza#9125 `Wins: 226 | Losses: 185 | Games Played: 83 | League EXP: 302/380 | Level: 10`
    if(command === 'wazabaza') {
        let p = new Discord.RichEmbed()
.addField('Wins', '226', true)
.addField('Losses', '185', true)
.addField('Games Played', '83', true)
.addField('League Experience', '302/380', true)
.addField('Level', '10', true)
.addField('Last Game Played', '1,782', true)
.addField('Current Win Streak', '4', true)
.addField('Longest Win Streak', '23', true)
.addField('Win Percentage', '*54.98%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Incidents Reported:', '•**Raging Barbarian:** 1\n•**Quitting Barbarian:** 2')

.addField('Location', ':flag_us: • America')

.setFooter('•|• wazabaza •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@wendymarvell42#1775 `Wins: 1 | Losses: 4 | Games Played: 1 | League EXP: 1/4 | Level: 1`
    if(command === 'wendymarvell42') {
        let p = new Discord.RichEmbed()
.addField('Wins', '1', true)
.addField('Losses', '4', true)
.addField('Games Played', '1', true)
.addField('League Experience', '1/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,386', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '1', true)
.addField('Win Percentage', '*20.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• wendymarvell42 •|•')
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
//@WhySoSerious?#9087 `Wins: 4 | Losses: 1 | Games Played: 1 | League EXP: 4/9 | Level: 2`
    if(command === 'WhySoSerious') {
        let p = new Discord.RichEmbed()
.addField('Wins', '4', true)
.addField('Losses', '1', true)
.addField('Games Played', '1', true)
.addField('League Experience', '4/9', true)
.addField('Level', '2', true)
.addField('Last Game Played', '1,785', true)
.addField('Current Win Streak', '4', true)
.addField('Longest Win Streak', '4', true)
.addField('Win Percentage', '*80.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• WhySoSerious •|•')
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
//@Wilson#5035 `Wins: 9 | Losses: 16 | Games Played: 5 | League EXP: 9/16 | Level: 3`
    if(command === 'Wilson') {
        let p = new Discord.RichEmbed()
.addField('Wins', '9', true)
.addField('Losses', '16', true)
.addField('Games Played', '5', true)
.addField('League Experience', '9/16', true)
.addField('Level', '3', true)
.addField('Last Game Played', '1,725', true)
.addField('Current Win Streak', '4', true)
.addField('Longest Win Streak', '4', true)
.addField('Win Percentage', '*36.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Incidents Reported:', '•**Raging Barbarian:** 1')

.addField('Location', ':flag_us: • America')

.setFooter('•|• Wilson •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@WineTime#8812 `Wins: 221 | Losses: 269 | Games Played: 102 | League EXP: 267/275 | Level: 9`
    if(command === 'WineTime') {
        let p = new Discord.RichEmbed()
.addField('Wins', '221', true)
.addField('Losses', '269', true)
.addField('Games Played', '102', true)
.addField('League Experience', '267/275', true)
.addField('Level', '9', true)
.addField('Last Game Played', '1,701', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '11', true)
.addField('Win Percentage', '*45.10%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Incidents Reported:', '•**Raging Barbarian:** 1')

.addField('Location', ':flag_gb: • Great Britain Republic')

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
//@wisel1#6094 `Wins: 0 | Losses: 5 | Games Played: 1 | League EXP: 0/4 | Level: 0`
    if(command === 'wisel1') {
        let p = new Discord.RichEmbed()
.addField('Wins', '0', true)
.addField('Losses', '5', true)
.addField('Games Played', '1', true)
.addField('League Experience', '0/4', true)
.addField('Level', '0', true)
.addField('Last Game Played', '1,506', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '0', true)
.addField('Win Percentage', '*0.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• wisel1 •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@wolf scopes#9316 `Wins: 11 | Losses: 7 | Games Played: 5 | League EXP: 34/40 | Level: 5`
    if(command === 'kenny s') {
        let p = new Discord.RichEmbed()
.addField('Wins', '11', true)
.addField('Losses', '7', true)
.addField('Games Played', '5', true)
.addField('League Experience', '34/40', true)
.addField('Level', '5', true)
.addField('Last Game Played', '1,786', true)
.addField('Current Win Streak', '4', true)
.addField('Longest Win Streak', '4', true)
.addField('Win Percentage', '*61.11%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• kenny s •|•')
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
//@xavier#9632 `Wins: 40 | Losses: 45 | Games Played: 17 | League EXP: 46/65 | Level: 6`
    if(command === 'Renegade Xavier') {
        let p = new Discord.RichEmbed()
.addField('Wins', '40', true)
.addField('Losses', '45', true)
.addField('Games Played', '17', true)
.addField('League Experience', '46/65', true)
.addField('Level', '6', true)
.addField('Last Game Played', '1,739', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '8', true)
.addField('Win Percentage', '*47.05%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Renegade Xavier •|•')
.setColor(0x0C5B80)
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
//@Yash#6693 `Wins: 36 | Losses: 20 | Games Played: 11 | League EXP: 59/65 | Level: 6`
    if(command === 'Yash') {
        let p = new Discord.RichEmbed()
.addField('Wins', '36', true)
.addField('Losses', '20', true)
.addField('Games Played', '11', true)
.addField('League Experience', '59/65', true)
.addField('Level', '6', true)
.addField('Last Game Played', '1,564', true)
.addField('Current Win Streak', '9', true)
.addField('Longest Win Streak', '14', true)
.addField('Win Percentage', '*64.28%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Yash •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@YazondinAlt#2012 `Wins: 1 | Losses: 5 | Games Played: 2 | League EXP: 1/4 | Level: 1`
    if(command === 'YazondinAlt') {
        let p = new Discord.RichEmbed()
.addField('Wins', '1', true)
.addField('Losses', '5', true)
.addField('Games Played', '2', true)
.addField('League Experience', '1/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,790', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '1', true)
.addField('Win Percentage', '*16.66%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Incidents Reported:', '•**Quitting Barbarian:** 1')

.addField('Location', ':flag_us: • America')

.setFooter('•|• YazondinAlt •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Yeetinsiderher#8029 `Wins: 27 | Losses: 25 | Games Played: 11 | League EXP: 34/40 | Level: 5`
    if(command === 'lolsoda777') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '27', true)
            .addField('Losses', '25', true)
            .addField('Games Played', '11', true)
            .addField('League Experience', '34/25', true)
            .addField('Level', '5', true)
            .addField('Last Game Played', '1,086', true)
            .addField('Current Win Streak', '5', true)
            .addField('Longest Win Streak', '4', true)
            .addField('Win Percentage', '*51.92%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• lolsoda777 •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Yi Suchong#5697 `Wins: 0 | Losses: 5 | Games Played: 1 | League EXP: 0/4 | Level: 0`
    if(command === 'Yi Suchong') {
        let p = new Discord.RichEmbed()
.addField('Wins', '0', true)
.addField('Losses', '5', true)
.addField('Games Played', '1', true)
.addField('League Experience', '0/4', true)
.addField('Level', '0', true)
.addField('Last Game Played', '1,761', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '0', true)
.addField('Win Percentage', '*0.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|•  •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Yoshi [CPL]#0915 `Wins: 43 | Losses: 11 | Games Played: 16 | League EXP: 68/105 | Level: 7`
    if(command === 'Yoshi') {
        let p = new Discord.RichEmbed()
.addField('Wins', '43', true)
.addField('Losses', '11', true)
.addField('Games Played', '16', true)
.addField('League Experience', '68/105', true)
.addField('Level', '7', true)
.addField('Last Game Played', '1,446', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '21', true)
.addField('Win Percentage', '*79.62%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Yoshi •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@YOYO4230#7170 `Wins: 226 | Losses: 341 | Games Played: 119 | League EXP: 280/380 | Level: 10`
    if(command === 'YOYO') {
        let p = new Discord.RichEmbed()
.addField('Wins', '226', true)
.addField('Losses', '341', true)
.addField('Games Played', '119', true)
.addField('League Experience', '290/380', true)
.addField('Level', '10', true)
.addField('Last Game Played', '1,646', true)
.addField('Current Win Streak', '5', true)
.addField('Longest Win Streak', '8', true)
.addField('Win Percentage', '*39.85%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Incidents Reported:', '•**Raging Barbarian:** 2')

.addField('Location', ':flag_fr: • France')

.setFooter('•|• YOYO •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@yumenosekai#0127 `Wins: 68 | Losses: 38 | Games Played: 24 | League EXP: 88/105 | Level: 7`
    if(command === 'yumenosekai') {
        let p = new Discord.RichEmbed()
.addField('Wins', '68', true)
.addField('Losses', '38', true)
.addField('Games Played', '24', true)
.addField('League Experience', '88/105', true)
.addField('Level', '7', true)
.addField('Last Game Played', '1,336', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '14', true)
.addField('Win Percentage', '*64.15%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_kr: • Korea Republic')

.setFooter('•|• yumenosekai •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@z3phiR#4635 `Wins: 1 | Losses: 4 | Games Played: 1 | League EXP: 1/4 | Level: 1`
    if(command === 'z3phiR') {
        let p = new Discord.RichEmbed()
.addField('Wins', '1', true)
.addField('Losses', '4', true)
.addField('Games Played', '1', true)
.addField('League Experience', '1/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,658', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '1', true)
.addField('Win Percentage', '*20.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• z3phiR •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Zack#5784 `Wins: 24 | Losses: 22 | Games Played: 9 | League EXP: 31/40 | Level: 5`
    if(command === 'zakzackattack') {
        let p = new Discord.RichEmbed()
.addField('Wins', '24', true)
.addField('Losses', '22', true)
.addField('Games Played', '9', true)
.addField('League Experience', '31/40', true)
.addField('Level', '5', true)
.addField('Last Game Played', '1,747', true)
.addField('Current Win Streak', '2', true)
.addField('Longest Win Streak', '4', true)
.addField('Win Percentage', '*52.17%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• zakzackattack •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Zaeta#1664 `Wins: 6 | Losses: 20 | Games Played: 6 | League EXP: 6/9 | Level: 2`
    if(command === 'Zaeta') {
        let p = new Discord.RichEmbed()
.addField('Wins', '6', true)
.addField('Losses', '20', true)
.addField('Games Played', '6', true)
.addField('League Experience', '6/9', true)
.addField('Level', '2', true)
.addField('Last Game Played', '1,496', true)
.addField('Current Win Streak', '1', true)
.addField('Longest Win Streak', '2', true)
.addField('Win Percentage', '*23.07%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Zaeta •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@zap648#2111 `Wins: 3 | Losses: 6 | Games Played: 2 | League EXP: 3/4 | Level: 1`
    if(command === 'zap648') {
        let p = new Discord.RichEmbed()
.addField('Wins', '3', true)
.addField('Losses', '6', true)
.addField('Games Played', '2', true)
.addField('League Experience', '3/4', true)
.addField('Level', '1', true)
.addField('Last Game Played', '1,232', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '3', true)
.addField('Win Percentage', '*33.33%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• zap648 •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Zeek#7978 `Wins: 0 | Losses: 5 | Games Played: 1 | League EXP: 0/4 | Level: 0`
    if(command === 'Zeek') {
        let p = new Discord.RichEmbed()
.addField('Wins', '0', true)
.addField('Losses', '5', true)
.addField('Games Played', '1', true)
.addField('League Experience', '0/4', true)
.addField('Level', '0', true)
.addField('Last Game Played', '1,264', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '0', true)
.addField('Win Percentage', '*0.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• Zeek •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Zonda#2047 `Wins: 12 | Losses: 17 | Games Played: 6 | League EXP: 32/40 | Level: 5`
    if(command === 'Zonda') {
        let p = new Discord.RichEmbed()
.addField('Wins', '12', true)
.addField('Losses', '19', true)
.addField('Games Played', '6', true)
.addField('League Experience', '32/40', true)
.addField('Level', '5', true)
.addField('Last Game Played', '1,199', true)
.addField('Current Win Streak', '4', true)
.addField('Longest Win Streak', '4', true)
.addField('Win Percentage', '*38.70%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.setFooter('•|• Zonda •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@zzzeff#3108 `Wins: 8 | Losses: 24 | Games Played: 6 | League EXP: 8/9 | Level: 2`
    if(command === 'zzzeff') {
        let p = new Discord.RichEmbed()
.addField('Wins', '8', true)
.addField('Losses', '24', true)
.addField('Games Played', '6', true)
.addField('League Experience', '8/9', true)
.addField('Level', '2', true)
.addField('Last Game Played', '1,627', true)
.addField('Current Win Streak', '0', true)
.addField('Longest Win Streak', '3', true)
.addField('Win Percentage', '*25.00%*', true)

.addField('Settler', '<:settler:319889887996411915>', true)

.addField('Location', ':flag_us: • America')

.setFooter('•|• zzzeff •|•')
.setColor(0x04771B)
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
//@zickbagg#7982 `Wins: 237 | Losses: 280 | Games Played: 104 | League EXP: 301/380 | Level: 9`
    if(command === 'zickbagg') {
        let p = new Discord.RichEmbed()
.addField('Wins', '237', true)
.addField('Losses', '280', true)
.addField('Games Played', '104', true)
.addField('League Experience', '301/275', true)
.addField('Level', '8', true)
.addField('Last Game Played', '1,760', true)
.addField('Current Win Streak', '3', true)
.addField('Longest Win Streak', '10', true)
.addField('Win Percentage', '*45.84%*', true)

.addField('Chieftain', '<:chieftain:320176909927579648>', true)

.addField('Location', ':flag_lb: • Lebanon')

.setFooter('•|• zickbagg •|•')
.setColor(0x0C5B80)
        message.channel.sendEmbed(p);
    };
//@zubat#3308 `Wins: 2 | Losses: 3 | Games Played: 1 | League EXP: 2/4 | Level: 1`
    if(command === 'wat') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '2', true)
            .addField('Losses', '3', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '2/4', true)
            .addField('Level', '1', true)
            .addField('Last Game Played', '1,134', true)
            .addField('Current Win Streak', '2', true)
            .addField('Longest Win Streak', '2', true)
            .addField('Win Percentage', '*40.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .addField('Location', ':flag_:')

            .setFooter('•|• wat •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
//@Zukken#5751 `Wins: 0 | Losses: 4 | Games Played: 1 | League EXP: 0/4 | Level: 0`
    if(command === 'Ghostly') {
        let p = new Discord.RichEmbed()
            .addField('Wins', '0', true)
            .addField('Losses', '4', true)
            .addField('Games Played', '1', true)
            .addField('League Experience', '0/4', true)
            .addField('Level', '0', true)
            .addField('Last Game Played', '999', true)
            .addField('Current Win Streak', '0', true)
            .addField('Longest Win Streak', '0', true)
            .addField('Win Percentage', '*0.00%*', true)

            .addField('Settler', '<:settler:319889887996411915>', true)

            .setFooter('•|• Ghostly •|•')
            .setColor(0x04771B)
        message.channel.sendEmbed(p);
    };

/*Civilization Leaders*/
//Alexander of Macedon
    if(command === '-Alexander' || command === '-alexander') {
        let p = new Discord.RichEmbed()
            .addField('•|• Alexander of the Macedonian Empire •|•', "<:macedon:319191099111505931> ****", true)
            
            .addField("To the World's End", '*Cities do not incur war weariness. All Military units heal completely when this player captures a city with a World Wonder.\n**Current Bug Abuse:** Do not place a wonder down before keeping/razing city.*')
            .addField('-- • -- • -- • -- • -- • -- • -- • --', '•|• **__Unique Units__** •|•')
            .addField('', '', true)
            .addField('', '', true)
            .addField('-- • -- • -- • -- • -- • -- • -- • --', '•|• **__Unique Districts__** •|•')
            .addField('', '', true)

            .setFooter('•|• Alexander of the Macedonian Empire •|•')
            .setColor(0xff0000)
        message.channel.sendEmbed(p);
    };

//Victoria of England
    if(command === '-Victoria' || command === '-victoria') {
        let p = new Discord.RichEmbed()
            .addField('•|• Victoria of the English Empire •|•', '<:england:319148263900971008> **Sun never Sets!**', true)
            
            .addField('Pax Britannica', '*All settled or conquered cities on a continent other than your home continent receive a free melee unit. Gain the **Redcoat** unit when the Military Science is researched.*')
            .addField('British Museum', '*Each Archaeological Museum holds 6 Artificats instead of 3, and can support 2 Archaeologists at once. Archaeological Museums are automatically themed when they have 6 Artifacts.*')
            .addField('-- • -- • -- • -- • -- • -- • -- • --', '•|• **__Unique Units__** •|•')
            .addField('Red Coat', '*Industrial Era Melee unit that has\n+10 Combat Strength when fighting\non a different continent foreign to\nyour home. No disembark costs.*\n•**Production:** 340\n•**Combat Strength:** 65\n•**Base Movement:** 2', true)
            .addField('Sea Dog', '*Renaissance Era Naval unit that can\ncapture enemy ships. Cannot be seen,\nunless adjacent to it. (Replaces: Privateer).*\n•**Production:** 280\n•**Combat Strength:** 40\n•**Ranged Combat Strength:** 50\n•**Base Movement:** 4', true)
            .addField('-- • -- • -- • -- • -- • -- • -- • --', '•|• **__Unique Districts__** •|•')
            .addField('Royal Navy Dockyard', '*Naval activity with no embark\npenalties to land units.\n(Replaces: Harbor).*\n•**+1 Movement to Ships**\n•**+2 Gold on Foreign Land**\n•**+1 Trader Route Capacity**', true)

            .setFooter('•|• Victoria of the English Empire •|•')
            .setColor(0xff0000)
        message.channel.sendEmbed(p);
    };
});

CivLeagueStats.login(Config.tokens.StatsBot);

/*
.addField('Incidents Reported:', '•**Abusive Barbarian:** 1')
.addField('Incidents Reported:', '•**Raging Barbarian:** 1')
.addField('Incidents Reported:', '•**Quitting Barbarian:** 1')
.addField('Incidents Reported:', '•**Uncivilized Barbarian:** 1')
.addField('Incidents Reported:', '•**Banned:** 1')

.addField('Location', ':flag_au: • Australia')
.addField('Location', ':flag_br: • Brazil')
.addField('Location', ':flag_ca: • Canada')
.addField('Location', ':flag_ch: • China')
.addField('Location', ':flag_dk: • Denmark')
.addField('Location', ':flag_eu: • Europe')
.addField('Location', ':flag_fr: • France')
.addField('Location', ':flag_fi: • Finland')
.addField('Location', ':flag_de: • Germany')
.addField('Location', ':flag_gb: • Great Britain Republic')
.addField('Location', ':flag_hk: • Hong Kong')
.addField('Location', ':flag_kr: • Korea Republic')
.addField('Location', ':flag_lv: • Latvia')
.addField('Location', ':flag_no: • Norway')
.addField('Location', ':flag_pl: • Poland')
.addField('Location', ':flag_ru: • Russia')
.addField('Location', ':flag_sk: • Slovakia')
.addField('Location', ':flag_es: • Spain')
.addField('Location', ':flag_se: • Sweden')
.addField('Location', ':flag_ch: • Switzerland')

.addField('Solid Host', '⍟', true)
-------------------------------------------------
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

.addField('Location', ':flag_us: • America')

.setFooter('•|•  •|•')
.setColor(0x04771B)
        message.channel.sendEmbed(p);
    };
-------------------------------------------------
0x77FF82
.addField('Warlord', '<:warlord:319931261894524928>', true)

0x0C5B80
.addField('Chieftain', '<:chieftain:320176909927579648>', true)
*/
