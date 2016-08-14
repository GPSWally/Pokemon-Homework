/*
	Constructor function for a sighting
*/
function Sighting(locStr, pokemonId, timestamp, lat, long, user) {
	this.locStr = locStr;
	this.pokemonId = pokemonId;
	this.timestamp = timestamp;
	this.lat = lat;
	this.long = long;
	this.user = user;
}

/*
	In order to expose the Sighting constructor to to the outside,
	we have to assign it to the special
	keyword "module.exports".
*/
module.exports = Sighting;
