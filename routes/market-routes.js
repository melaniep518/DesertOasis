const router = require('express').Router();
const models = require('../server/models/index');

////////////////
///FUNCTION/////
////////////////
function addMarket(req, res) {
  models.User.findById(req.params.userId)
  .then(function(user) {
    console.log('USER: ===>', user)
    return models.Market.create({
      name: req.body.name,
      UserId: user.dataValues.id
    })
  })
  .then(function(market) {
    console.log('MARKET: ===>', market)
    res.send(market)
  })
}

function getMarkets(req, res) {
  models.User.findById(req.params.userId)
  .then(function(user) {
    console.log('USER: ===>', user)
    return models.Market.findAll({
      where: {
        UserId: user.dataValues.id
      }
    })
  })
  .then(function(markets) {
    console.log('MARKET: ===>', markets)
    res.send(markets)
  })
}

////////////////
/////ROUTES/////
////////////////
router.route('/:userId')
  .post(addMarket)
  .get(getMarkets)

////////////////
///EXPORTS//////
////////////////
module.exports = router;