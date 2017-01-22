const router = require('express').Router();
const models = require('../server/models');


function getBudget(req, res) {
  models.User.findById(req.params.userId)
  .then(function(user) {
    console.log(user);
    return models.TreasureChest.findOne({
      where: {
        UserId: user.dataValues.id
      }
    })
  })
  .then(function(budget) {
    res.send(budget)
  })
}

function addBudget(req, res) {
  models.User.findById(req.params.userId)
  .then(function(user) {
    return models.TreasureChest.create({
      snapBudget: req.body.snapBudget,
      cashBudget: req.body.cashBudget,
      snapSpent: 0,
      cashSpent: 0,
      UserId: user.dataValues.id
    })
  })
  .then(function(budget) {
    res.send(budget)
  })
}

function updateBudget(req, res) {
  models.TreasureChest.update({
    snapBudget: req.body.snapBudget,
    cashBudget: req.body.cashBudget,
    snapSpent: req.body.snapSpent,
    cashSpent: req.body.cashSpent
  }, {
    where: {
      UserId: req.params.userId
    }
  })
  .then(function() {
    res.send('Budget has been updated.')
  })
}

////////////////
/////ROUTES/////
////////////////
router.route('/treasure/:userId')
  .get(getBudget)
  .post(addBudget)
  .put(updateBudget)


////////////////
///EXPORTS//////
////////////////
module.exports = router;