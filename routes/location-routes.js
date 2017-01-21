const router = require('express').Router();
const models = require('../server/models')


////////////////
///FUNCTION/////
////////////////
const findLocation = (req,res) => {
	models.User.findById(req.params.userId)
	.then(user => {
		console.log(user)
		models.Location.findAll({
		where:{
			UserId:user.dataValues.id
		}
	})})
	.then(data => res.send(data))
	.catch(error => res.status(500).send(error))
}

const addLocation = (req,res) => {
	models.Location.create({
		location:req.body.location,
		street:req.body.street,
		city:req.body.city,
		state:req.body.state,
		zip:req.body.zip
	})
	.then(data => res.send(data))
	.catch(error => res.status(500).send(error))
}

// const latLng = (req,res) => {
// 	models.Location.find
// 	})
// }
////////////////
/////ROUTES/////
////////////////
router.route('/location/:userId')
	.get(findLocation)
	.post(addLocation)
	// .put(latLng)
////////////////
///EXPORTS//////
////////////////
module.exports = router;