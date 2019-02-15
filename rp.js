const DiscordRPC = require('discord-rpc');
const config = require('./config.json');
const rpc = new DiscordRPC.Client({
	transport: 'ipc'
});
rpc.config = config;

var d1 = new Date ();
var d2 = new Date(d1);

d2.setSeconds(d1.getSeconds() + 86400000);

rpc.on('ready', () => {
	
	rpc.setActivity({
		details: config.Rich_Presence.details,
		state: config.Rich_Presence.state,
		//largeImageKey: config.Rich_Presence.file_bannername,
		//largeImageText: config.Rich_Presence.bannername,
		//smallImageKey: config.Rich_Presence.file_username,
		//smallImageText: config.Rich_Presence.username,
		instance: true,
		partySize: 1,
		partyMax: config.Rich_Presence.partyMax,
		startTimestamp: d1,
		endTimestamp: d2,
               join: "025ed05c71f639de8bfaa0d679d7c94b2fdce12f",
                spectate: "e7eb30d2ee025ed05c71ea495f770b76454ee4e0",
               match: "4b2fdce12f639de8bfa7e3591b71a0d679d7c93f"
	}).then(console.log('set rp')).catch(err => {});



});


rpc.login(config.Client_Id).catch(console.error);