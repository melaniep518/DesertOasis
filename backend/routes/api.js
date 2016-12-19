var express = require('express')
var commentRouter = express.Router();
var Comment = require('../models/commentModel')
var app = express()
var Sequelize = ('sequelize')
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));







const getAllComments=(req,res)=>{
	Comment.findAll({}).then(function(data) {
		  // console.log(data)
		res.send(data)
	})
}



commentRouter.route('/')
	.get(getAllComments)


module.exports = commentRouter