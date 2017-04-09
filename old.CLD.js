"use strict";
/*Author(s): Snipa and © • Song Adieu | Created: February 17th, 2017*/

const Discord = require("discord.js");
const Config = require("./config.json");

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

CivFFADrafter.on("message", message => {
    if (message.author.CivFFADrafter) {
        return;
    }
    if (!message.content.startsWith(Config.dot)) {
        return;
    }

    console.log(message.content);
    let command = message.content.slice(Config.dot.length).split(" ");
    console.log(command);
    /*
    Command Format:
    draft <Teams> <Players Per Team> <Ban 1> <Ban 2> <Ban N>
    draftTeam <Teams> <Players Per Team>
    */

    if (['draftFFA', 'draftTeam', 'civList', 'civListOP'].indexOf(command[0]) === -1){
        // message.channel.sendMessage('\nInvalid command layout.  Valid commands:\n' + commandHelp);
        return;
    }

    let messageString = "";

    switch(command[0]){
        case 'draftFFA':
            let bans = [];
            if (command.length === 1){
                messageString = '\n**Incorrect Command Used.**\n\n**List of Available Commands:**\n' + commandHelp;
                break;
            }
            let playerCount = Number(command[1]);
            if (playerCount > 8 || playerCount < 2){
                messageString = '\n**Invalid Number for Draft!\n  *draftFFA x = 2-8 Players (As with more players, the game can be Less Reliable.*';
                break;
            }
            if (command.length > 2){
                // Bans!  Time to handle them.
                bans = command.slice(2);
            }
            let validCivs = [];
            if(bans.indexOf('OP') !== -1){
                // Ban invalid civs
                bans = civListOP;
            }
            let invalidBans = [];
            for (let banCheckCount = 0; banCheckCount < bans.length; banCheckCount++){
                if(!allCivs.hasOwnProperty(bans[banCheckCount])){
                    invalidBans.push(bans[banCheckCount]);
                }
            }
            if(invalidBans.length !== 0){
                messageString = "\n**Invalid Ban(s) Provided:** "+invalidBans.join(".");
                break;
            }
            if ((Object.keys(allCivs).length - bans.length) < (civsPerPlayer[playerCount] * playerCount)){
                messageString = '\n**Excessive Amount of Bans!**\n  *Please Provide less Bans.*';
                break;
            }
            for (let civ in allCivs){
                if(!allCivs.hasOwnProperty(civ)){
                    continue;
                }
                if(bans.indexOf(civ) !== -1){
                    continue;
                }
                validCivs.push(allCivs[civ]);
            }
            let randomCivs = shuffleList(validCivs);
            messageString += '\n•|• **__Player Choices__** •|•';
            let playerCounter = 0;
            while (playerCounter < playerCount){
                let civCounter = 0;
                let playerID = playerCounter + 1;
                messageString += '\n**'+playerID+'**';
                while(civCounter < civsPerPlayer[playerCount]){
                    messageString += ' ' + randomCivs.pop();
                    civCounter += 1;
                }
                playerCounter += 1;
            }
            break;
        case 'draftTeam':
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
            let channel = CivFFADrafter.channels.find('name', '•|• Team Drafting •|•');
            if(channel.members.keyArray().length < command[2] * command[1]){
                messageString = '\n**Failed to Execute!**\n  *Need more Players in •|• **Team Drafting** •|•*.';
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
    }
    message.channel.sendMessage(messageString);
});

CivFFADrafter.login(Config.tokens.DrafterBot);