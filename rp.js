const DiscordRPC = require('discord-rpc');

const rpc = new DiscordRPC.Client({
	transport: 'ipc'
});
rpc.config = config;

var d1 = new Date ();
var d2 = new Date(d1);

// the time you want to set (for example, it will count back from 23 hrs as shown here. feel free to change it.
d2.setSeconds(d1.getSeconds() + 86400000);

rpc.on('ready', () => {
	
	rpc.setActivity({
		details: "", // your rpc details here
		state: "", // your state here (must be at least 2 char)
		largeImageKey: "", // your large image here that you uploaded to ur application in the dev portal. 
		largeImageText: "", // the text to show when mousing over ur large image
		smallImageKey: "", // your small image
		smallImageText: "", // the text to show when mousing over ur small image
		instance: true,
		partySize: 1, // optional. this is ur party size included in state (e.x. 1 of partyMax)
		partyMax: 1, 
		startTimestamp: d1, // you can cut these two timestamps off if you dont want a timer
		endTimestamp: d2
	}).then(console.log('set rp')).catch(err => {});



});


rpc.login('YOUR-CLIENT-ID-HERE').catch(console.error);
