"use strict";

// Requires
const express         = require('express');
const app             = express();
const http 			  = require("http").Server(app);
const port            = process.env.PORT || 1337;
const morgan		  = require("morgan");
const mongoose		  = require("mongoose");
const bodyParser	  = require("body-parser");
const methodOverride  = require("method-override");

// Set headers and datatypes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());


// Connect to MongoDB
const db = "mongodb://127.0.0.1/reactRelay";

// Feedback of how it went
mongoose.connect(db, (error, response) => {
	if (error){
		console.log("connecting to db resulted in an error: ", error);
	}
	else {
		console.log("success, connected to " + db);
	}
});



// Set up some routes for API like endpoints
require("./backend/routes.js")(app);

// Expose the jspm packages + config as well as the client front-end
app.use('/jspm_packages',  express.static(__dirname + '/jspm_packages'));
app.use("/config.js", express.static(__dirname + "/config.js"));
app.use(express.static(__dirname + "/client"));




// Start
// -------------------------------------------------------
http.listen(port, () => {
	console.log("Server is alive on port " + port);
})