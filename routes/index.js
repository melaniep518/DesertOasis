const User = require('./user-routes.js')
const Location = require('./location-routes.js')
const Market = require('./market-routes.js')
const TreasureChest = require('./treasureChest-routes.js')

module.exports = {
	routes: {
		User,
		Location,
    Market,
    TreasureChest
	}
}