const Mongoose 	= require("mongoose");
const Sites 	= require("./model.js");

module.exports = function(app){

	// Get a list of all sites
	app.get("/sites", (request, response) => {

		const query = Sites.find({});

		query.exec((error, sites) => {

			if (error){
				response.send(error)
			}
			else {
				response.json(sites)
			}

		});

	});


	// Post a brand spankin new site!
	app.post("/site")

}