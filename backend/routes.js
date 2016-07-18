const Mongoose 	= require("mongoose");
const Sites 	= require("./model.js");
const cors		= require("cors");
const http		= require("http");
const request   = require("request");
const parseString 	= require("xml2js").parseString;

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


	app.get("/getSiteData/*", (req, res) => {

		const url = req.params[0];

		request(url, (error, response, body) => {

			if (!error && response.statusCode == 200){

				// TODO... type checking for xml...
				const contentType = response.headers["content-type"];

				// used for xml -> json
				parseString(body, (err, result) => {

					if (!err){
						res.json(result)
					}

				});

			}
			else {
				console.log("fail");
			}

		});

	});

	// create a new news source
	app.post("/sites", (request, response) => {

		// create a new Model with the data from the 'POST' request
		const model = new Sites(request.body);

		console.log(request.body);

		model.save((error) => {
			if (error){
				// uh oh
				response.send(error)
			}
			else {
				// send the id back as that's useful!
				response.json(model._id)
			}
		})



	});

}