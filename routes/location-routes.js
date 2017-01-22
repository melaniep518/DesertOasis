const router = require('express').Router();
const models = require('../server/models')


////////////////
///FUNCTION/////
////////////////
const findLocation = (req,res) => {
	models.User.findById(req.params.userId)
	.then(data => {
		return models.Location.findAll()
	})
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

const latLng = (req,res) => {
		models.Location.update({
			lat:req.body.lat,
			lng:req.body.lng
		}, {
			where:{
				UserId:req.params.userId
			}
		})
	.then(data => res.send(data))
	.catch(error => res.send(error))
}
////////////////
/////ROUTES/////
////////////////
router.route('/location/:userId')
	.get(findLocation)
	.post(addLocation)
	.put(latLng)
////////////////
///EXPORTS//////
////////////////
module.exports = router;