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

	app.post("/sites", (request, response) => {

		// create a new Model with the data from the 'POST' request
		const model = new Sites(request.body);

		model.save((error) => {
			if (error){
				// uh oh
				response.send(error)
			}
			else {
				// send the id back as that's useful!
				console.log("i was successfull");
				console.log(model);
				console.log(request);
				console.log(response);
				response.json(model._id)
			}
		})



	});

}