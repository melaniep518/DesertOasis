const Location = require('../models').Location;

Location.bulkCreate([
  {location: "Home", street: "1621 Lexington Avenue, Apt. 2", city: "New York", state: "NY", zip: 10029, UserId: 1},
  {location: "Work", street: "31-00 47th Avenue", city: "Long Island City", state: "NY", zip: 11101, UserId: 1},
  {location: "Home", street: "1925 Glenwood Road, Apt. 4A", city: "Brooklyn", state: "NY", zip: 11230, UserId: 2},
  {location: "Work", street: "1470 Madison Avenue", city: "New York", state: "NY", zip: 10029, UserId: 2}
])
.then(data => console.log('successful'))
.catch(error => console.log(error))