const TwitchApi = require("node-twitch").default; 
 
const twitch = new TwitchApi({ 
	client_id: "9qs83g9lk7ff3i5l5r2r0feupgq3ab", 
	client_secret: "j467j5wrzl0m66rrq2sr6myavkz0ez" 
}); 
 
module.exports.searchChannels = async function(name) { 
    const result = await twitch.searchChannels({query : name}) 
    return result; 
} 
 
module.exports.getClips = async function(id){ 
    return await twitch.getClips({broadcaster_id : id}) 
} 