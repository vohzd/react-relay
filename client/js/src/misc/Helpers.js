const Helpers = {

	createNotification(stringMessage, displayTime){
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
			return false;
		} else {
			return true;
		}
	},

	isMatchInArray(arrayToCheck, proposedValue){

		if (typeof arrayToCheck !== "object"){
			console.log("well this went horribly wrong");
			return false;
		}
		else {
			if (!arrayToCheck.length){
				return true;
			}
			else {
				for (let item of arrayToCheck){
					if (item.url == proposedValue.url){
						return false;
					}
					else {
						return true;
					}
				}
			}
		}


	}



}

export default Helpers;