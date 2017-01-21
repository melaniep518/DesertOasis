const models = require('../models')


	models.User.bulkCreate([
	{first_name:'Chanice', last_name:'Stlouis', user_name:'kobe24', e_mail:"chanicestlouis@aol.com", password:'pass123'},
	{first_name:"Victor",last_name:"Amos",user_name:"Vamosa",e_mail:"victoramosjs@gmail.com",password:"pass123"},
	{first_name:"Raybia",last_name:"Watson-Maiorana",user_name:"ormabe",e_mail:"ormabe@gmail.com",password:"pass123"}
])
.then(data => console.log('successful'))
.catch(error => console.log(error))