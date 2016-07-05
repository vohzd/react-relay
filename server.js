"use strict";

// Requires
const express         = require('express');
const app             = express();
const http 			  = require("http").Server(app);
const port            = process.env.PORT || 1337;

// Expose the jspm packages + config as well as the client front-end
app.use('/jspm_packages',  express.static(__dirname + '/jspm_packages'));
app.use("/config.js", express.static(__dirname + "/config.js"));
app.use(express.static(__dirname + "/client"));

// Start
// -------------------------------------------------------
http.listen(port, () => {
	console.log("Server is alive on port " + port);
})