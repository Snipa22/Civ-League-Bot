const Discord = require("discord.js");
const Config = require("./config.json");
const fs = require('fs');

const CivFFADrafter = new Discord.Client();
/*Activated*/
CivFFADrafter.on("ready", () => {
    console.log("*CivFFADrafter Activated*");
});

function shuffleList(listToShuffle) {
    let currentPass = listToShuffle.length;
    let index, temp;

    while (currentPass > 0) {
        index = Math.floor(Math.random() * currentPass);
        currentPass--;

        temp = listToShuffle[currentPass];
        listToShuffle[currentPass] = listToShuffle[index];
        listToShuffle[index] = temp;
    }
    return listToShuffle;
}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

let commandHelp = 
`**.draft**
  •*Drafts the list of civs for each player.*
**.shuffle**
  •*Shuffles the list of players for teams.*`;

//Array of Civilizations Available 
let allCivsDLC = {
    //Top Tier Civs
    australia: '\n  • <:australia:319172870074793984> *Australia (**John Curtin**)*',
    aztec: '\n  • <:aztec:319176447531024384> *Aztec (**Montezuma**)*',
    germany: '\n  • <:germany:319191037337665536> *Germany (**Frederick Barbarossa**)*',
    macedon: '\n  • <:macedon:319191099111505931> *Macedon (**Alexander**)*',
    nubia: '\n  • 🔔 *Nubia (**Amanitore**)*',
    persia: '\n  • <:persia:319191114793877504> *Persia (**Cyrus**)*',
    rome: '\n  • <:rome:319191129230671873> *Rome (**Trajan**)*',
    russia: '\n  • <:russia:319191141637685248> *Russia (**Peter**)*',
    scythia: '\n  • <:scythia:319191152563847178> *Scythia (**Tomyris**)*',
    sumeria: '\n  • <:sumeria:319165695721996291> *Sumeria (**Gilgamesh**)*',

    //Mid Tier Civs
    america: '\n  • <:america:319168816644882432> *America (**Teddy Roosevelt**)*',
    arabia: '\n  • <:arabia:319172861715808256> *Arabia (**Saladin**)*',
    brazil : `\n  • <:brazil:319176534373957632> *Brazil (**Pedro II**)*`,
    china: '\n  • <:china:319177163939250178> *China (**Qin Shi Huang**)*',
    england: '\n  • <:england:319148263900971008> *England (**Victoria**)*',
    gorgo: '\n  • <:greece_gorgo:319191048335130624> *Greece (**Gorgo**)*',
    pericles: '\n  • <:greece_pericles:319191058221236224> *Greece (**Pericles**)*',
    japan: '\n  • <:japan_hojo:319191078639108096> *Japan (**Hojo Tokimune**)*',
    kongo: '\n  • <:kongo:319191090399936512> *Kongo (**Mvemba A Nzinga**)*',

    //Low Tier Civs
    egypt: '\n  • <:egypt:319176482788343808> *Egypt (**Cleopatra**)*',
    france: '\n  • <:france:319191004550922250> *France (**Catherine De Medici**)*',
    india: '\n  • <:india:319191068488761354> *India (**Gandhi**)*',
    norway: '\n  • <:norway:319191107302850580> *Norway (**Harald Hardrada**)*',
    poland: '\n  • <:poland:319160313331056651> *Poland (**Jadwiga**)*',
    spain: '\n  • <:spain:319191162462273536> *Spain (**Philip II**)*'};

let icons = {
    one: '<:warlord:319931261894524928>',
    two: '<:emperor:320187485999071233>',
    three: '<:immortal:320320496010788865>',
    four: '<:deity:320326649654673410>'
};

let teamIcons = [icons['two'], icons['three'], icons['one'], icons['four']],
    civsPerPlayer = {1:6, 2:6, 3:6, 4:5, 5:4, 6:3, 7:3, 8:2, 9:2, 10:2};
    civsPerPlayer2 = {1:6, 2:6, 3:6, 4:5, 5:4, 6:3, 7:3, 8:2, 9:2, 10:2};
    

function validateBans(bans, drafts){
    bans = bans.filter(onlyUnique);
    let invalidBans = [];
    for (let banCheckCount = 0; banCheckCount < bans.length; banCheckCount++){
        if(!drafts.hasOwnProperty(bans[banCheckCount])){
            invalidBans.push(bans[banCheckCount]);
        }
    }
    return invalidBans;
}

function draftteam (players, bans, drafts, teams, teamMembers){
 let messageString = "";

    let validCivs = [];

    let invalidBans = validateBans(bans, drafts);
    if(invalidBans.length !== 0){
        return "\nInvalid ban(s) provided: "+invalidBans.join(", ");
    }
    for (let civ in drafts){
        if(!drafts.hasOwnProperty(civ)){
            continue;
        }
        if(bans.indexOf(civ) !== -1){
            continue;
        }
        validCivs.push(drafts[civ]);
    }

    var randomCivs = shuffleList(validCivs);
    let playerCounter = 0;    
    let teamCounter = 0;

    if (teams ==2 && teamMembers ==1 && players.length ==2){
         messageString ="\n**__Team 1:__**\n <@" + players[0].id+ ">" + randomCivs[0] + randomCivs[1] + randomCivs[2] + randomCivs[3] +
         "\n\n**__Team 2:__**\n <@" + players[1].id+ ">" + randomCivs[0] +  randomCivs[1]+  randomCivs[2]+  randomCivs[3]; 
        return messageString;
    }
    else if (teams ==2 && teamMembers ==2 && players.length ==4){
         messageString ="\n\n**__Tteam 1:__**\n <@" + players[0].id+ ">\n <@" + players[1].id+ ">"+
        "\n\n**__Team 2:__**\n <@" + players[2].id+ ">\n <@" + players[3].id+ ">"+
        "\n\n**Group Choice 1:**" + randomCivs[0] +randomCivs[1]+ randomCivs[2]+
        "\n\n**Group Choice 2:**" + randomCivs[3] +randomCivs[4]+ randomCivs[5];
        return messageString;
     }

     else if (teams ==2 && teamMembers ==3 && players.length ==6){
        messageString ="\n**__Team 1:__**\n <@" + players[0].id+ ">\n <@" + players[1].id+ ">"+"\n <@" + players[2].id+">"+
        "\n\n**__Team 2:__**\n <@" + players[3].id+ ">\n <@" + players[4].id+ ">"+"\n <@" + players[5].id+">"+
        "\n\n**Group Choice 1:**" + randomCivs[0] +randomCivs[1]+ randomCivs[2]+
        "\n\n**Group Choice 2:**" + randomCivs[3] +randomCivs[4]+ randomCivs[5]+
        "\n\n**Group Choice 3:**" + randomCivs[6] +randomCivs[7]+ randomCivs[8];
        return messageString;         
     }
    else if (teams ==3 && teamMembers ==2&& players.length ==6){
        messageString ="\n**__Team 1:__**\n <@" + players[0].id+ ">\n <@" + players[1].id+ ">"+
        "\n\n**__Team 2:__**\n <@" + players[2].id+ ">\n <@" + players[3].id+ ">"+
        "\n\n**__Team 3:__**\n <@" + players[4].id+ ">\n <@" + players[5].id+ ">"+
        "\n\n**Group Choice 1:**" + randomCivs[0] +randomCivs[1]+ randomCivs[2]+
        "\n\n**Group Choice 2:**" + randomCivs[3] +randomCivs[4]+ randomCivs[5];
        return messageString;
     }

     else if (teams ==4 && teamMembers ==2&& players.length ==8){
        messageString ="\n**__Team 1:__**\n <@" + players[0].id+ ">\n <@" + players[1].id+ ">"+
        "\n\n**__Team 2:__**\n <@" + players[2].id+ ">\n <@" + players[3].id+ ">"+
        "\n\n**__Team 3:__**\n <@" + players[4].id+ ">\n <@" + players[5].id+ ">"+
        "\n\n**__Team 4:__**\n <@" + players[6].id+ ">\n <@" + players[7].id+ ">"+
        "\n\n**Group Choice 1:**" + randomCivs[0] +randomCivs[1]+ randomCivs[2]+
        "\n\n**Group Choice 2:**" + randomCivs[3] +randomCivs[4]+ randomCivs[5];
        return messageString; 

     }
    else {messageString = "*Invalid amount of players in:* **○ Teamers ○**"; return messageString}
}
        

function draft(players, bans, drafts) {
    // Take a list of players, a list of bans, and an object of inputs, and spit out a set of things that match.
    // Return an object if there's no error.  If there's an error, return back a string
    let messageString = "";
    if (players.length > 10 || players.length < 1){
        return '\n**Invalid amount of players in the current channel, please make sure there are the correct amount of people (1-10).**';
    }
    let validCivs = [];

    let invalidBans = validateBans(bans, drafts);
    if(invalidBans.length !== 0){
        return "\nInvalid ban(s) provided: "+invalidBans.join(", ");
    }
    
    if ((Object.keys(drafts).length - bans.length) >= (players.length *3) ){
  
         for (let civ in drafts){
        if(!drafts.hasOwnProperty(civ)){
            continue;
        }
        if(bans.indexOf(civ) !== -1){
            continue;
        }
        validCivs.push(drafts[civ]);
    }
    let randomCivs = shuffleList(validCivs);
    messageString += '\n•|• **__Player Choices__** •|•';
    let playerCounter = 0;
    while (playerCounter < players.length){
        let civCounter = 0;
        messageString += '\n**'+players[playerCounter]+'**';
        while(civCounter <=2 ){
            messageString += ' ' + randomCivs.pop();
            civCounter += 1;
        }
        playerCounter += 1;
    }
    return messageString;

    }

    else if ((Object.keys(drafts).length - bans.length) >= (players.length *2) ){
     
         for (let civ in drafts){
        if(!drafts.hasOwnProperty(civ)){
            continue;
        }
        if(bans.indexOf(civ) !== -1){
            continue;
        }
        validCivs.push(drafts[civ]);
    }
    let randomCivs = shuffleList(validCivs);
    messageString += '\n•|• **__Player Choices__** •|•';
    let playerCounter = 0;
    while (playerCounter < players.length){
        let civCounter = 0;
        messageString += '\n**'+players[playerCounter]+'**';
        while(civCounter <=1 ){
            messageString += ' ' + randomCivs.pop();
            civCounter += 1;
        }
        playerCounter += 1;
    }
    return messageString;

    }
    else if ((Object.keys(drafts).length - bans.length) > (players.length) ){

    for (let civ in drafts){
        if(!drafts.hasOwnProperty(civ)){
            continue;
        }
        if(bans.indexOf(civ) !== -1){
            continue;
        }
        validCivs.push(drafts[civ]);
    }
    let randomCivs = shuffleList(validCivs);
    messageString += '\n•|• **__Player Choices__** •|•';
    let playerCounter = 0;
    while (playerCounter < players.length){
        let civCounter = 0;
        messageString += '\n**'+players[playerCounter]+'**';        
            messageString += ' ' + randomCivs.pop();
                  
        playerCounter += 1;
    }
    return messageString;


}
    else {messageString = "too many bans or sometime else went wrong!"; return messageString;}
}

CivFFADrafter.on("message", message => {
    if (message.author.CivFFADrafter) {
        return;
    }
    if (!message.content.startsWith(Config.dot)) {
        return;
    }

    console.log(message.content);
    message.content = message.content.toString().toLowerCase();
    let command = message.content.slice(Config.dot.length).replace(/\s+/g, ' ').split(" ");
   
    console.log(command);


    let messageString = "", bans = [], players = [], playerCount = 1, newBans=[];

    switch(command[0]){
        case 'draft':
            if (command.length > 1){
                // Bans!  Time to handle them.
                bans = command.slice(1);
            }
            let channelList = CivFFADrafter.channels.array();
            for (let channel in channelList){
                if (!channelList.hasOwnProperty(channel)){
                    continue;
                }
                if(messageString !== ""){
                    continue;
                }
                channel = channelList[channel];
                if (channel.type === 'text'){
                    continue;
                }
                if (typeof(channel.members) === 'undefined'){
                    continue;
                }
                let channelMembers = channel.members.array();
                for (let user in channelMembers){
                    if (!channelMembers.hasOwnProperty(user)){
                        continue;
                    }
                    if(messageString !== ""){
                        continue;
                    }
                    user = channelMembers[user];
                    if (user.user.id === message.author.id){
                        // Valid Channel.  Time to get to work
                        for (let channelUser in channelMembers){
                            if (!channelMembers.hasOwnProperty(channelUser)){
                                continue;
                            }
                            players.push('<@'+channelMembers[channelUser].user.id+'>');
                        }
                        messageString = draft(players, bans, allCivsDLC);
                        break;
                    }
                }
            }
            if (messageString === ""){
                messageString = "\nUnable to locate <@"+message.author.id+"> in a valid voice channel.";
            }
            break;
        case 'shuffle':
           if (command.length > 2){
               
                bans = command.slice(3);
                console.log (bans);
                
            }
         //   if (command.length !== 3){
         //       messageString = '\n**Incorrect Command Used.**\n\n**List of Available Commands:**\n' + commandHelp;
        //        break;
        //    }
            if (command[2] * command[1] < 2 || command[2] * command[1] > 8){
                messageString = '\n**Invalid Input for Team Generation.**';
                break;
            }
            let title = 'Teamer Draft ('+command[2]+'v'+command[2]+')', teamMembers = command[2], teams = command[1];
            if (Number(teams) === 3) {
                title = 'Teamer Draft (' + teamMembers + 'v' + teamMembers + 'v' + teamMembers + ')';
            }
            if (Number(teams) === 4) {
                title = 'Teamer Draft (' + teamMembers + 'v' + teamMembers + 'v' + teamMembers + 'v' + teamMembers + ')';
            }//Team Draft
            let channel = CivFFADrafter.channels.find('name', '○ Teamers ○');
            if(channel.members.keyArray().length < command[2] * command[1]){
                messageString = '\n**Failed to Execute!**\n  *Please move to the Staging Lobby: ○ **Teamers** ○*';
                break;
            }
            let civTeamDrafter = shuffleList(channel.members.array());
           console.log(civTeamDrafter);
            messageString += '\n•|• **__' + title + '__** •|•';
            let teamCounter = 0;
            messageString += draftteam(civTeamDrafter, bans, allCivsDLC, teams, teamMembers);
            break;
        case 'civlist':
            messageString = '\n•|• **__Current Civilizations__** •|•\n  •' + Object.keys(allCivsDLC).join('\n  •');
            break;
    }
    message.channel.send(messageString);
});

CivFFADrafter.login(Config.tokens.DrafterBot);
