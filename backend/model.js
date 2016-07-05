const Mongoose 	= require("mongoose");
const Schema 	= Mongoose.Schema;

const SiteSchema = new Schema({

	siteName: {type: String, required: true},
	siteURL: {type: String, required: true}

});

module.exports = Mongoose.model("sites", SiteSchema);