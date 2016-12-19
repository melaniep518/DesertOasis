var express = require('express')
var app = express()
var bodyparser = require('body-parser')
var path = require('path')
var commentRouter =  require('./routes/api')
var postRouter =  require('.backend/routes/api')
var voteRouter =  require('.backend/routes/api')
var db = require('./models')
var router = express.Router();



app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())
app.use(express.static('public'))


app.use('/api/comment',commentRouter)
// app.use('/api/vote',voteRouter)
// app.use('/api/post',postRouter)
// 
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/views/index.html'))
})

db.sequelize.sync().then(function() {
	console.log('successful')
  app.listen(3000)
})
