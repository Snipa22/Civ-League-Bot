"use strict";
/*Author(s): Snipa and © • Song Adieu | Created: February 17th, 2017*/

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
  •*Shuffles the list of players for teams.*`
;

/*Array of Civilizations Available 

*/
let allCivsDLC = {
    //Top Tier Civs
    australia: '\n  • <:australia:319172870074793984> *Australia (**John Curtin**)*',
    aztec: '\n  • <:aztec:319176447531024384> *Aztec (**Montezuma**)*',
    germany: '\n  • <:germany:319191037337665536> *Germany (**Frederick Barbarossa**)*',
    macedon: '\n  • <:macedon:319191099111505931> *Macedon (**Alexander**)*',
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
    one: '<:NumbOne:318828396563922955>',
    two: '<:NumbTwo:318828407741743105>',
    three: '<:NumbThree:318828419888578560>',
    four: '<:NumbFour:318828429946519552>'
};

let teamIcons = [icons['two'], icons['three'], icons['one'], icons['four']],
    civsPerPlayer = {2:6, 3:5, 4:4, 5:3, 6:2, 7:2, 8:2, 9:2, 10:1};

let civListOP = ['-']; 

function readBanFile(){
    let loadedBans = {'OP': civListOP};
    try{
        loadedBans = JSON.parse(fs.readFileSync('data/bans.json', 'utf8'));
    } catch (err) {
        console.error("Unable to load ban file, using defaults.");
        console.error(err);
        writeBanFile(loadedBans);
    }
    return loadedBans;
}

function writeBanFile(bans){
    try{
        fs.writeFileSync('data/bans.json', JSON.stringify(bans));
    } catch (err) {
        console.error("Unable to load ban file, using defaults.");
        console.error(err);
    }
}

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

function draft(players, bans, drafts, max_players = 12, min_players = 2) {
    // Take a list of players, a list of bans, and an object of inputs, and spit out a set of things that match.
    // Return an object if there's no error.  If there's an error, return back a string
    let messageString = "";
    if (players.length > max_players || players.length < min_players){
        return '\n**Invalid amount of players in the current channel, please make sure there are the correct amount of people (2-10).**';
    }
    let validCivs = [];
    let loadedBans = readBanFile();
    bans = bans.filter(onlyUnique);
    for (let banGroup in loadedBans){
        if(!loadedBans.hasOwnProperty(banGroup)){
            continue;
        }
        if(bans.indexOf(banGroup) !== -1){
            bans.splice(bans.indexOf(banGroup), 1);
            bans = bans.concat(loadedBans[banGroup]);
        }
    }
    let invalidBans = validateBans(bans, drafts);
    if(invalidBans.length !== 0){
        return "\nInvalid ban(s) provided: "+invalidBans.join(", ");
    }
    if ((Object.keys(drafts).length - bans.length) < (civsPerPlayer[players.length] * players.length)){
        return '**Not enough Civilizations Allowed for 3 Choices. Please use: .draft2. Bans are provided after that command as usual. Good Luck!**';
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
    let randomCivs = shuffleList(validCivs);
    messageString += '\n•|• **__Player Choices__** •|•';
    let playerCounter = 0;
    while (playerCounter < players.length){
        let civCounter = 0;
        messageString += '\n**'+players[playerCounter]+'**';
        while(civCounter < civsPerPlayer[players.length]){
            messageString += ' ' + randomCivs.pop();
            civCounter += 1;
        }
        playerCounter += 1;
    }
    return messageString;
}

function readBanFile(){
    let loadedBans = {'OP': civListOP};
    try{
        loadedBans = JSON.parse(fs.readFileSync('data/bans.json', 'utf8'));
    } catch (err) {
        console.error("Unable to load ban file, using defaults.");
        console.error(err);
        writeBanFile(loadedBans);
    }
    return loadedBans;
}

function writeBanFile(bans){
    try{
        fs.writeFileSync('data/bans.json', JSON.stringify(bans));
    } catch (err) {
        console.error("Unable to load ban file, using defaults.");
        console.error(err);
    }
}

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

function draft(players, bans, drafts, max_players = 8, min_players = 2) {
    // Take a list of players, a list of bans, and an object of inputs, and spit out a set of things that match.
    // Return an object if there's no error.  If there's an error, return back a string
    let messageString = "";
    if (players.length > max_players || players.length < min_players){
        return '\n**Invalid Number for Draft!\n  *draft x = 2-8 Players (As with more players, the game can be less reliable.*';
    }
    let validCivs = [];
    let loadedBans = readBanFile();
    bans = bans.filter(onlyUnique);
    for (let banGroup in loadedBans){
        if(!loadedBans.hasOwnProperty(banGroup)){
            continue;
        }
        if(bans.indexOf(banGroup) !== -1){
            bans.splice(bans.indexOf(banGroup), 1);
            bans = bans.concat(loadedBans[banGroup]);
        }
    }
    let invalidBans = validateBans(bans, drafts);
    if(invalidBans.length !== 0){
        return "\nInvalid ban(s) provided: "+invalidBans.join(", ");
    }
    if ((Object.keys(drafts).length - bans.length) < (civsPerPlayer[players.length] * players.length)){
        return '\n**Excessive Amount of Bans!**\n  *Please Provide more Available Options.*';
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
    let randomCivs = shuffleList(validCivs);
    messageString += '\n•|• **__Player Choices__** •|•';
    let playerCounter = 0;
    while (playerCounter < players.length){
        let civCounter = 0;
        messageString += '\n**'+players[playerCounter]+'**';
        while(civCounter < civsPerPlayer[players.length]){
            messageString += ' ' + randomCivs.pop();
            civCounter += 1;
        }
        playerCounter += 1;
    }
    return messageString;
}

CivFFADrafter.on("message", message => {
    if (message.author.CivFFADrafter) {
        return;
    }
    if (!message.content.startsWith(Config.dot)) {
        return;
    }

    console.log(message.content);
    let command = message.content.slice(Config.dot.length).replace(/\s+/g, ' ').split(" ");
    console.log(command);

    if (['draft2', 'shuffle2', 'civList', 'civListOP', 'banList'].indexOf(command[0]) === -1){
        // message.channel.sendMessage('\nInvalid command layout.  Valid commands:\n' + commandHelp);
        return;
    }

    let messageString = "", bans = [], players = [], playerCount = 1, newBans=[];

    switch(command[0]){
        case 'draft2':
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
        case 'shuffle2':
            if (command.length !== 3){
                messageString = '\n**Incorrect Command Used.**\n\n**List of Available Commands:**\n' + commandHelp;
                break;
            }
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
            let channel = CivFFADrafter.channels.find('name', '•|• Staging: Teamers');
            if(channel.members.keyArray().length < command[2] * command[1]){
                messageString = '\n**Failed to Execute!**\n  *Please move to: •|• **Staging: Teamers**.*';
                break;
            }
            let civTeamDrafter = shuffleList(channel.members.array());
            messageString += '\n•|• **__' + title + '__** •|•';
            let teamCounter = 0;
            while (teamCounter < teams) {
                let teamID = teamCounter + 1, teamMemberCounter = 0;
                messageString += '\n\n  | **Team ' + teamID + ' ' + teamIcons[teamCounter] + '** |';
                while (teamMemberCounter < teamMembers) {
                    messageString += '\n    • <@' + civTeamDrafter.pop().user.id+'>';
                    teamMemberCounter += 1;
                }
                teamCounter += 1;
            }
            break;
        case 'civList':
            messageString = '\n•|• **__Current Civilizations__** •|•\n  •' + Object.keys(allCivsDLC).join('\n  •');
            break;
        case 'civListOP':
            messageString = '\n•|• **__Current OP Civilizations__** •|•\n  •' + '**' + civListOP.join('**' + '\n  •' + '**');
            break;
        case 'banList':
            if (command.length === 1 || ['delete', 'add', 'replace', 'list', 'details'].indexOf(command[1]) === -1){
                if (message.channel.id === Config.channels.Admin){
                    messageString = 'Invalid arguments for banList.  Valid arguments: add, list, delete, details, replace';
                }else{
                    messageString = 'Invalid arguments for banList.  Valid arguments: list, details';
                }
                break;
            }
            if (message.channel.id !== Config.channels.Admin && ['delete', 'add', 'replace'].indexOf(command[1]) !== -1){
                messageString = 'Invalid argument for this channel, please try again!';
                break;
            }
            bans = readBanFile();
            switch(command[1]){
                case 'list':
                    messageString = 'Current Ban Lists in the system are: ' + Object.keys(bans).join(", ");
                    break;
                case 'details':
                    if (typeof(command[2]) === 'undefined'){
                        messageString = 'Need to pass in a valid ban list!';
                    } else if (bans.hasOwnProperty(command[2])){
                        messageString = 'Civs banned in the list: '+command[2]+' are: ' + bans[command[2]].join(", ");
                    } else {
                        messageString = 'Invalid ban list provided!  Please provide a valid ban list for details.';
                    }
                    break;
                case 'add':
                    if (typeof(command[2]) === 'undefined'){
                        messageString = 'Need to pass in a valid ban list!';
                    } else if (bans.hasOwnProperty(command[2])){
                        messageString('Ban list: '+ command[2] + ' already exists, use replace to replace this list');
                    } else if (allCivsDLC.hasOwnProperty(command[2])) {
                        messageString = 'Name of banlist matches a civ.  Needs to be unique.';
                    } else {
                        newBans = command.slice(3);
                        let invalidBans = validateBans(newBans, allCivsDLC);
                        if(invalidBans.length === 0){
                            bans[command[2]] = newBans;
                            writeBanFile(bans);
                            messageString = 'Added '+command[2]+' with the following bans: '+newBans.join(', ');
                        } else {
                            messageString = 'Invalid bans provided: '+invalidBans.join(', ');
                        }
                    }
                    break;
                case 'delete':
                    if (typeof(command[2]) === 'undefined'){
                        messageString = 'Need to pass in a valid ban list!';
                    } else if (bans.hasOwnProperty(command[2])){
                        delete bans[command[2]];
                        writeBanFile(bans);
                        messageString = 'Removed ban list: '+command[2];
                    } else {
                        messageString = 'Invalid ban list provided!  Please provide a valid ban list to remove it';
                    }
                    break;
                case 'replace':
                    newBans = command.slice(3);
                    if (typeof(command[2]) === 'undefined'){
                        messageString = 'Need to pass in a valid ban list!';
                    } else if (bans.hasOwnProperty(command[2])){
                        newBans = command.slice(3);
                        let invalidBans = validateBans(newBans, allCivsDLC);
                        if(invalidBans.length === 0){
                            bans[command[2]] = newBans;
                            writeBanFile(bans);
                            messageString = 'Replaced '+command[2]+' with the following bans: '+newBans.join(', ');
                        } else {
                            messageString = 'Invalid bans provided: '+invalidBans.join(', ');
                        }
                    } else {
                        messageString = 'Invalid ban list provided!  Please provide a valid ban list to replace it';
                    }
                    break;
            }
    }
    message.channel.sendMessage(messageString);
});

CivFFADrafter.login(Config.tokens.DrafterBot);