/*Author: © • Song Adieu | Created: February 17th, 2017*/

const Discord = require("discord.js");
const Config = require("./config.json");
const fs = require("fs");

const CivPlayersAdmin = new Discord.Client();

function cmdIS(str, msg) {
    return msg.content.toLowerCase().startsWith("." + str);
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
});

CivPlayersAdmin.login(Config.tokens.AdminBot);