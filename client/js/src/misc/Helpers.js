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

	isUniqueURL(arrayToCheck, proposedValue){

		// if the array isnt actually an array
		if (typeof arrayToCheck !== "object"){
			return false;
		}

		// go forth and investigate
		else {
			// i need to loop through teh entire array, and see if the proposedValue matches ANY of the values in arrayToCheck
			// this is O(n) as increases linearly as array length increases
			for (let item of arrayToCheck){

				if (item.url == proposedValue.url){
					return false;
				}

			}
			return true;

		}

	}



}

export default Helpers;