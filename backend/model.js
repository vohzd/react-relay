const Mongoose 	= require("mongoose");
const Schema 	= Mongoose.Schema;

const SiteSchema = new Schema({

	name: {type: String, required: false},
	url: {type: String, required: false}

});

SiteSchema.pre("save", (next) => {
	console.log("hello");
	next();
})

module.exports = Mongoose.model("sites", SiteSchema);