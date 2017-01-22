var express = require('express')
var app = express()
var bodyparser = require('body-parser')
var path = require('path')
var db = require('./models')
var router = express.Router();
var indexRouter = require('../routes').routes

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())
app.use(express.static('public'))

// ********** Routes here **********

app.use('/api' , indexRouter.User)
app.use('/api' , indexRouter.Location)
app.use('/api/market' , indexRouter.Market)
app.use('/api/' , indexRouter.TreasureChest)
// join tables how does this work

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/views/index.html'))
})

db.sequelize.sync().then(function() {
	console.log('Server Is Running On http://localhost:3000')
  app.listen(3000)
})
