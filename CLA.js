/*Author: © • Song Adieu | Created: February 17th, 2017*/

const Discord = require("discord.js");
const Config = require("./config.json");
const fs = require("fs");

const CivPlayersAdmin = new Discord.Client();

function cmdIS(str, msg) {
    return msg.content.toLowerCase().startsWith("*" + str);
}
function pluck(array) {
    return array.map(function (item) {
        return item["name"];
    });
}
function hasRole(mem, role) {
    return pluck(mem.roles).includes(role);
}

CivPlayersAdmin.on("ready", () => {
    console.log("*CivPlayersAdmin Activated*");
});

CivPlayersAdmin.on('message', message => {
    let args = message.content.split(/[ ]+/);

    
    /*List of Commands*/
    if (cmdIS("clear", message)) {
        if (hasRole(message.member, "Admin")) {
            if (args.length >= 3) {
                message.channel.sendMessage(`You defined too many Args. '.clear (Number of Messages to Delete.)'`);
            } else {
                let msg;
                if (args.length === 1) {
                    msg = 2;
                } else {
                    msg = parseInt(args[1]) + 1;
                }
                message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
            }
        } else {
            message.channel.sendMessage('You are not Authorized.');
        }
    }
    if (cmdIS("gu", message)) {
        if (hasRole(message.member, "Admin")) {
            var data = {players: []};
            let users = CivPlayersAdmin.users.array();

            for (let user in users){
                user = users[user];
                var player = {
                    id:user.id, 
                    name:user.username,
                    discriminator:user.discriminator};
                data.players.push(player);
            }
            fs.writeFile("./users.json", JSON.stringify(data), (err) => console.error);
                return message.reply("Finished Collecting Users!'");
        } else {
            message.channel.sendMessage('You are not Authorized.');
        }
    }
    if (cmdIS("createMembers", message)) {
        if (hasRole(message.member, "Admin")) {
            var data = {players: []};
            let users = CivPlayersAdmin.users.array();
    
            for (let user in users){
                user = users[user];
                var player = {
                    id:user.id, 
                    name:user.username,
                    discriminator:user.discriminator};
                data.players.push(player);
            }
            fs.writeFile("./users.json", JSON.stringify(data, null, 4), (err) => console.error);
            CivPlayersAdmin.user.send('hello');
            message.channel.send('Testing message', {
                    files: [
                      "./users.json"
                    ]
                  });
            return    message.reply("Finished Collecting Users!'");
        } else {
            message.channel.sendMessage('You are not Authorized.');
        }
    }
});

//Tournament Drafter
CivPlayersAdmin.on("message", message => {
    if (message.author.CivPlayersAdmin) return;
    if (!message.content.startsWith(Config.ast)) return;
    message.content = message.content.toString().toLowerCase();
    let command = message.content;
    command = command.slice(Config.ast.length);
    

/*Array of Teams to Generate to Play

🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩
*/
let teamsJoin = [
`\n**[🅜🅢🅜] Magcial Sandwich Makers**\n   @groove#8337\n   @ToMbraider#6882\n   @mike#3166`,
`\n**[OP] Over-Powered**\n   @ElStrecho#0984\n   @[OP]rahmj12[CPL]#4308\n   @[OP]DeathBringer#8348`,
`\n**SunZ A-Team**\n   @rolfejason#5840\n   @-=SunZ=-SourceGear#0062\n   @TheDonKillum#8936`,
`\n**TeamBlazedCow**\n   @🅜🅞🅓🅢 Blazed#1055\n   @[EPIC]CowGoMoo#1228\n   @James Papadops#0944`,
`\n**Sun Tzu\'s War Academy**\n   @-=Sunz=- HarambeV2#7259\n   @phillyboy7987[CPL]#1428\n   @BladeSe7en#7657`,
`\n**tCL 1**\n   @Havoc#0821\n   @Totally#5987\n   @Squish#0658`,
`\n**DragLion**\n   @SNudel#0139\n   @Viridios#5706\n   @czozp#8908`,
`\n**tCL 3**\n   @catstronaut420#7516\n   @TaskForceFish#7213\n   @🅒🅜🅕Bloopinator#4314`
];

  function shuffle(teamsJoin) {
    let currentPass = teamsJoin.length;
    let index, temp;

    while (currentPass > 0) {
      index=Math.floor(Math.random() * currentPass);
      currentPass--;

      temp = teamsJoin[currentPass];
      teamsJoin[currentPass] = teamsJoin[index];
      teamsJoin[index] = temp;
    }
    return teamsJoin;
  }//.draft
    if(message.member.hasPermission("Admin")) {
        if(command==="tournament") {
            let shuffleTeams = shuffle(teamsJoin);
            message.channel.sendMessage(
"**__CivLeague <:civIconPurple:291784556489474049> Tournament Initial Drafter__**" +
"\n------------------------------\n   •**Tournament Game 1**•\n------------------------------" + shuffleTeams[0] + "\n              --**vs.**--" + shuffleTeams[1] +
"\n\n------------------------------\n   •**Tournament Game 2**•\n------------------------------" + shuffleTeams[2] + "\n              --**vs.**--" + shuffleTeams[3] +
"\n\n------------------------------\n   •**Tournament Game 3**•\n------------------------------" + shuffleTeams[4] + "\n              --**vs.**--" + shuffleTeams[5] +
"\n\n------------------------------\n   •**Tournament Game 4**•\n------------------------------" + shuffleTeams[6] + "\n              --**vs.**--" + shuffleTeams[7]
            );
        }
    }
});

CivPlayersAdmin.on("guildMemberRemove", member => {
    let user = member.user;
    var channel = CivPlayersAdmin.channels.find("name", "admin");
    channel.send(
            `**__Just Left CivLeague__** •<:civIcon:291784556489474049>• **__Community!__**
    :broken_heart: ${member.user} :broken_heart: *.. oh no.. just one more turn!*`
    );
});

CivPlayersAdmin.login(Config.tokens.AdminBot);
