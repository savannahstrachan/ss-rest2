const express = require('express');  //naming variables basically
const app = express();
const port = 3000 ;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.listen(process.env.PORT || 3000, function(err) {  // this is changed-- Heroku knows what
	// to put in there. fallback is whatever is past ||.
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`Magic is happening on ${port}`)
});

mongoose.connect('mongodb://heroku_xqz0gvn1:751m26uu1hjnf4otua908tr8fa@ds153732.mlab.com:53732/heroku_xqz0gvn1', function(error){

if (error) console.error (error);
else console.log ('mongo connected')

});

//var url = "localhost:3000"; // local
//var url = "https//:restaurant-db-test.herokuapp.com/" // dev

var RSchema = new mongoose.Schema ({
	name: String,
	hunger: Number,
	price: Number,
	alcohol: Boolean,
	Carryout: Boolean,
	fancy: Number,
	ID: Number
},{ collection: "restaurants"}
);


var Restaurant = mongoose.model('restaurants', RSchema);

// app.post('/restaurants', function (req, res){
// 	console.log("/restaurant endpoint getting hit");
	
// 	var restaurant = new Restaurant(req.body);

// 	restaurant.save(function(err){
// 		console.log(restaurant)
// 		
// 			};
// });

// 	});

// app.get('/restaurants', function(request, response) {  
// 	Restaurant.find({},function(err, Restaurant){
// 		if(err){
// 			console.log(err)
// 		}else{
// 			response.json(Restaurant);
// 		}
// 	});
// });

app.post('/restaurants', function(request, response) {  
	console.log(request.body.hunger);
	Restaurant.find({hunger: (request.body.hunger)},function(err, Restaurant){
		if(err){
			console.log(err)
		}else{
			console.log(Restaurant);
			response.send(Restaurant);
		};
});
});


// app.post('/firstname', function (req, res){
// 	console.log("/firstname endpoint getting hit");
// 	var firstname = new Firstname(req.body);
		
// 		console.log(firstname);
// 		firstname.save(function (err){
// 			res.send(firstname);
// 		});

// });




// });

// app.use(express.static('public'));









// TEST of post



// var FSchema = mongoose.Schema ({
// 	firstname: String,
// }, {collection: "names"}
// );



// var Firstname = mongoose.model('names', FSchema)




//  app.get('/restaurants', function (req, res){

//  	Restaurant.find(function(err, restaurants){
//  		if(err){
//  			console.log(err)
//  		}else{
//  			console.log(restaurants)}
//  	});
//  });


// app.get('/firstname', function (req, res){
// 	res.json(200, {msg: 'Ok'});
// })

// app.get('/firstname', function (req, res){
// 	Firstname.find(function (err, firstname){
// 		res.json(200, firstname);
// 	});
// });







// });








// // var AllRestaurants = [

// {
// 	"name": "Juan's Flying Burrito",
// 	"hunger": 1,
// 	"price": 1,
// 	"alcohol": true,
// 	"carryout": true,
// 	"fancy": 1,
// 	"ID": 1,
// },

// {
// 	"name": "Turkey and the Wolf",
// 	"hunger": 2,
// 	"price": 2,
// 	"alcohol": true,
// 	"carryout": true,
// 	"fancy": 2,
// 	"ID": 2,
// },

// {
// 	"name": "Kin",
// 	"hunger": 3,
// 	"price": 3,
// 	"alcohol": false,
// 	"carryout": false,
// 	"fancy": 3,
// 	"ID": 3,
// },

// {
// 	"name": "Shaya",
// 	"hunger": 4,
// 	"price": 4,
// 	"alcohol": true,
// 	"carryout": true,
// 	"fancy": 4,
// 	"ID": 4,
// },

// {
// 	"name": "Lilette",
// 	"hunger": 5,
// 	"price": 5,
// 	"alcohol": true,
// 	"carryout": false,
// 	"fancy": 5,
// 	"ID": 5,
// },

// {
// 	"name": "August",
// 	"hunger": 6,
// 	"price": 6,
// 	"alcohol": true,
// 	"carryout": false,
// 	"fancy": 6,
// 	"ID": 6,
// }
// ];




// app.get('/get-all-restaurants', function(request, response){
	
	
// 	console.log(AllRestaurants);
// 	response.send(AllRestaurants);


// 	});


















































// app.get('/get-rest-loops', function(request, response) {


// }



// 	)




// var userData;

// //prints elements from the request object!

// app.post ('/get-userData', function (request, response) {

// 	userData = request.body;

// 	for(i=0; i<AllRestaurants.length; i++){

// 	if(AllRestaurants[i].price == userData.price){
		
// 		response.send(AllRestaurants[i])
// 		console.log(AllRestaurants[i])

// 	}

// }
// }
// );





	// console.log(userData);
	// response.send(userData);


	







	// 

	// 


	// };

	// response.send(AllRestaurants);
// ;
	// AllRestaurants.push(request.body);
	// response.send(AllRestaurants[i].name);



// console.log(AllRestaurants);






// app.post ('/get-userData', function(request, response) {
// 	console.log("route getting hit");
// 	console.log(request.body);
	


// });










