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
`**draftFFA** *x = 2-8* *Bans Applied Here = Australia Germany England*\n
  *Example: draftFFA 6 Australia Germany England*\n
  *This will ban Australia, Germany and England.*\n
**draftTeam** *x = 2-4 (Number of Teams)* *x = 2-4 (Players on each Team)*\n
  *Example: draftTeam 3 3 (3v3)*`
;

//Array of Players Available
let civArrayTeamer = [
    `*Discord Slot 1*`, //0
    `*Discord Slot 2*`, //1
    `*Discord Slot 3*`, //2
    `*Discord Slot 4*`, //3
    `*Discord Slot 5*`, //4
    `*Discord Slot 6*`, //5
    `*Discord Slot 7*`, //6
    `*Discord Slot 8*`]; //7

//Array of Civilizations Available
let allCivs = {
    America: '<:america:291788587329126402>*America*', //0
    Arabia: '<:arabia:291788624041607170>*Arabia*', //1
    Australia: '<:australia:291788657000710144>*Australia*', //2
    Aztec: '<:aztec:291788693428109322>*Aztec*', //3
    Brazil: '<:brazil:291788717587300353>*Brazil*', //4
    China: '<:china:291788737573027840>*China*', //5
    Egypt: '<:egypt:291788765847093248>*Egypt*', //6
    England: '<:england:291788789079080971>*England*', //7
    France: '<:france:291788812068323330>*France*', //8
    Germany: '<:germany:291788833794818049>*Germany*', //9
    Gorgo: '<:gorgo:291788859736588290>*Greece (**Gorgo**)*', //10
    Pericles: '<:pericles:291789035289182208>*Greece (**Pericles**)*', //11
    India: '<:india:291788886513025034>*India*', //12
    Japan: '<:japanx:291788927424266250>*Japan*', //13
    Kongo: '<:kongo:291788970805952513>*Kongo*', //14
    Macedon: `<:macedon:296313184841891840>*Macedon*`, //15
    Norway: '<:norway:291789000954478592>*Norway*', //16
    Persia: `<:persia:296313246279794689>*Persia*`, //17
    Poland: '<:poland:291789066301603840>*Poland*', //18
    Rome: '<:rome:291789096244871169>*Rome*', //19
    Russia: '<:russia:291789137424416778>*Russia*', //20
    Scythia: '<:scythia:291789172434272256>*Scythia*', //21
    Spain: '<:spain:291789195691819010>*Spain*', //22
    Sumeria: '<:sumeria:291789223365836813>*Sumeria*'}; //23

let icons = {
    purple: '<:civIconPurple:291784556489474049>',
    white: '<:civIconWhite:293543789103022080>',
    blue: '<:civIconBlue:296338624855932929>',
    pink: '<:civIconPink:297682734195802113>'
};

let teamIcons = [icons['white'], icons['blue'], icons['purple'], icons['pink']],
    civsPerPlayer = {2:5, 3:5, 4:4, 5:3, 6:3, 7:2, 8:2};

let civListOP = ['Australia', 'Macedon', 'Rome', 'Persia', 'Scythia', 'Sumeria'];

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
        return "\nInvalid ban(s) provided: "+invalidBans.join(".");
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
    /*
    Command Format:
    draft <Teams> <Players Per Team> <Ban 1> <Ban 2> <Ban N>
    draftTeam <Teams> <Players Per Team>
    */

    if (['draftFFA', 'draftTeam', 'civList', 'civListOP', 'draftChannel', 'banList'].indexOf(command[0]) === -1){
        // message.channel.sendMessage('\nInvalid command layout.  Valid commands:\n' + commandHelp);
        return;
    }

    let messageString = "", bans = [], players = [], playerCount = 1, newBans=[];

    switch(command[0]){
        case 'draftFFA':
            if (command.length === 1){
                messageString = '\n**Incorrect Command Used.**\n\n**List of Available Commands:**\n' + commandHelp;
                break;
            }
            if (command.length > 2){
                // Bans!  Time to handle them.
                bans = command.slice(2);
            }
            while (playerCount <= Number(command[1])){
                players.push("Player "+playerCount);
                playerCount += 1;
            }
            messageString = draft(players, bans, allCivs);
            break;
        case 'draftChannel':
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
                        messageString = draft(players, bans, allCivs);
                        break;
                    }
                }
            }
            if (messageString === ""){
                messageString = "\nUnable to locate <@"+message.author.id+"> in a valid voice channel.";
            }
            break;
        case 'draftTeam':
            if (command.length !== 3){
                messageString = '\n**Incorrect Command Used.**\n\n**List of Available Commands:**\n' + commandHelp;
                break;
            }
            if (command[2] * command[1] < 2 || command[2] * command[1] > 8){
                messageString = '\nInvalid number of players for team generation.';
                break;
            }
            let title = 'Teamer Draft ('+command[2]+'v'+command[2]+')', teamMembers = command[2], teams = command[1];
            if (Number(teams) === 3) {
                title = 'Teamer Draft (' + teamMembers + 'v' + teamMembers + 'v' + teamMembers + ')';
            }
            if (Number(teams) === 4) {
                title = 'Teamer Draft (' + teamMembers + 'v' + teamMembers + 'v' + teamMembers + 'v' + teamMembers + ')';
            }
            let channel = CivFFADrafter.channels.find('name', '•|• Drafting Lobby •|•');
            if(channel.members.keyArray().length < command[2] * command[1]){
                messageString = '\n**Failed to Execute!**\n  *Need more Players in •|• **Drafting Lobby** •|•*.';
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
            messageString = '\n•|• **__Current Civilizations__** •|•\n  •' + Object.keys(allCivs).join('\n  •');
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
                        messageString = 'Invalid ban list provided!  Please provide a valid ban list for details';
                    }
                    break;
                case 'add':
                    if (typeof(command[2]) === 'undefined'){
                        messageString = 'Need to pass in a valid ban list!';
                    } else if (bans.hasOwnProperty(command[2])){
                        messageString('Ban list: '+ command[2] + ' already exists, use replace to replace this list');
                    } else if (allCivs.indexOf(command[2]) !== -1) {
                        messageString = 'Name of banlist matches a civ.  Needs to be unique.';
                    } else {
                        newBans = command.slice(3);
                        let invalidBans = validateBans(newBans, allCivs);
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
                        bans.splice(bans.indexOf(command[2]), 1);
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
                        let invalidBans = validateBans(newBans, allCivs);
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