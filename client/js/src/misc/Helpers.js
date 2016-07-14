import $ from "jquery";

const Helpers = {

	createNotification(stringMessage, displayTime){
		if (typeof stringMessage !== "string"){
			console.log("nope")
			return;
		}
		else {
			const $notesContainer = $(".notifications-container");
			const timer = displayTime ? displayTime : 2000;
			if (!($notesContainer).hasClass("active-notification")){
				$notesContainer.html(stringMessage);
				$notesContainer.addClass("active-notification");
				setTimeout(() => {
					this.createNotification("", undefined);
				}, timer)
			}
			else {
				$notesContainer.removeClass("active-notification");
				setTimeout(() => {
					$notesContainer.html("");
				}, timer)
			}
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

	isNoMatchInArray(arrayToCheck, proposedValue){

		if (typeof arrayToCheck !== "object"){
			console.log("well this went horribly wrong");
			return false;
		}
		else {
			if (!arrayToCheck.length){
				return true;
			}
			else {

				let result = null;

				for (let item of arrayToCheck){

					if (item.url == proposedValue.url){
						console.log("false condition");
						result = false;
					}
					else {
						console.log("true condition");
						result = true;
					}
				}

				console.log(result);
				console.log("hello");

			}
		}

	}



}

export default Helpers;