const models = require('../models')

models.User.bulkCreate([
  {first_name:'Chanice', last_name:'Stlouis', user_name:'kobe24', e_mail:"chanicestlouis@aol.com", password:'pass123'},
  {first_name:"Victor",last_name:"Amos",user_name:"Vamosa",e_mail:"victoramosjs@gmail.com",password:"pass123"},
  {first_name:"Raybia",last_name:"Watson-Maiorana",user_name:"ormabe",e_mail:"ormabe@gmail.com",password:"pass123"}
])
.then(data => models.Location.bulkCreate([
  {location: "Home", street: "1621 Lexington Avenue, Apt. 2", city: "New York", state: "NY", zip: 10029, UserId: 1},
  {location: "Work", street: "31-00 47th Avenue", city: "Long Island City", state: "NY", zip: 11101, UserId: 1},
  {location: "Home", street: "1925 Glenwood Road, Apt. 4A", city: "Brooklyn", state: "NY", zip: 11230, UserId: 2},
  {location: "Work", street: "1470 Madison Avenue", city: "New York", state: "NY", zip: 10029, UserId: 2}
]))
.then(data => models.Market.bulkCreate([
    {name: "Boro Park Greenmarket", UserId: 2},
    {name: "Brownsville Community Farmers' Market", UserId: 2},
    {name: "Bushwick Farmers' Market I", UserId: 3},

  ]))
.catch(error => console.log(error))