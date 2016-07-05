const Helpers = {

	createNotification(stringMessage){
		if (typeof stringMessage !== "string"){
			console.log("nope")
			return;
		}
		else {
			console.log(stringMessage);
		}
	},

	validURL(str){

		const pattern = new RegExp(/^https?:\/\/[\-A-Za-z0-9+&@#\/%?=~_|!:,.;]*[\-A-Za-z0-9+&@#\/%=~_|]/);

		if(!pattern.test(str)){
			this.createNotification("Please enter a valid URL.");
			return false;
		} else {
			this.createNotification("Success!");
			return true;
		}
	}


}

export default Helpers;