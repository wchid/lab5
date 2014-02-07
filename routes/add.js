var data = require("../data.json");

exports.addFriend = function(req, res) {

	var newFriend = {
		"name": req.query.name,
		"description": req.query.description,
		"imageURL": "http://lorempixel.com/300/300/people"
	};

	data["friends"].push(newFriend); 

	res.render('add', {
		"newName" : req.query.name,
		"data" : data}
		);
 }