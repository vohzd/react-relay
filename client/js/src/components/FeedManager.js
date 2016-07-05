import React from "react";
import SiteAddForm from "./SiteAddForm.js";

const FeedManager = React.createClass({

	render(){

		let message = "";

		if (this.props.siteUrls.length === 0){
			message = "There are no sites!";
		}
		else {
			message = "Here are the sites"
		}

		return (
			<div className="feedManager">
				<div>{message}</div>
				<SiteAddForm />
			</div>
		)

	}

});


export default FeedManager;