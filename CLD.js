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

//Array of Civilizations Available
let allCivsDLC = {
    //Top Tier Civs
    germany: '\n  • <:frederickb:317422295113269248>*Germany (**Frederick Barbarossa**)*',
    macedon: '\n  • <:alexader:317405771631558656>*Macedon (**Alexander**)*',
    rome: '\n  • <:trajan:317401277825024021>*Rome (**Trajan**)*',

    //Low Tier Civs
    gandhi: '\n  • <:gandhi:317452366783971328>*India (**Gandhi**)*',
    france: '\n  • <:catherinem:317460679189725185>*France (**Catherine De Medici**)*',

    america: '\n  • <:america:291788587329126402>*America (**Teddy Roosevelt**)*',
    arabia: '\n  • <:arabia:291788624041607170>*Arabia (**Saladin**)*',
    australia: '\n  • <:johnc:317801445275729950>*Australia (**John Curtin**)*',
    aztec: '\n  • <:montezuma:317829598673108993>*Aztec (**Montezuma**)*',
    brazil: '\n  • <:brazil:291788717587300353>*Brazil (**Pedro II**)*',
    china: '\n  • <:china:291788737573027840>*China (**Qin Shi Huang**)*',
    egypt: '\n  • <:cleopatra:317500171355422730>*Egypt (**Cleopatra**)*',
    england: '\n  • <:england:291788789079080971>*England (**Victoria**)*',
    
    gorgo: '\n  • <:gorgo:317699788256837632>*Greece (**Gorgo**)*',
    pericles: '\n  • <:pericles:317700081807654913>*Greece (**Pericles**)*',
    japan: '\n  • <:hojot:317736482578366485>*Japan (**Hojo Tokimune**)*',
    kongo: '\n  • <:kongo:291788970805952513>*Kongo (**Mvemba A Nzinga**)*',
    norway: '\n  • <:haraldh:317727671830315010>*Norway (**Harald Hardrada**)*',
    persia: '\n  • <:cyrus:317414457762512896>*Persia (**Cyrus**)*',
    poland: '\n  • <:jadwiga:317764772001087488>*Poland (**Jadwiga**)*',
    russia: '\n  • <:russia:291789137424416778>*Russia (**Peter**)*',
    scythia: '\n  • <:scythia:291789172434272256>*Scythia (**Tomyris**)*',
    spain: '\n  • <:spain:291789195691819010>*Spain (**Philip II**)*',
    sumeria: '\n  • <:gilgamesh:317534174904975362>*Sumeria (**Gilgamesh**)*'};

let icons = {
    purple: '<:civIconPurple:291784556489474049>',
    white: '<:civIconWhite:317154981054513152>',
    red: '<:civIconRed:292900895094603776>',
    green: '<:civIconGreen:292900880519397376> '
};

let teamIcons = [icons['white'], icons['red'], icons['purple'], icons['green']],
    civsPerPlayer = {2:6, 3:5, 4:4, 5:3, 6:3, 7:2, 8:2, 9:2, 10:1};

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
        return "\n**Invalid command used.**";
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

    if (['draft', 'shuffle', 'civList', 'civListOP', 'banList'].indexOf(command[0]) === -1){
        // message.channel.sendMessage('\nInvalid command layout.  Valid commands:\n' + commandHelp);
        return;
    }

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
                        //Valid Channel. Time to get to work
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