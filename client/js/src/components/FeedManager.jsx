import React from "react";
import SiteAddForm from "./SiteAddForm.jsx!";

const FeedManager = React.createClass({

	update(){
		console.log("theoretically this should be bypassed");
		console.log("i was called from the middle layer");
	},

	render(){

		// Temporary
		let message = "";
		if (this.props.siteUrls.length === 0){
			message = "There are no sites!";
		}
		else {
			message = this.props.siteUrls
		}

		return (
			<div className="feedManager">
				<div>{message}</div>
				<SiteAddForm onFormSubmit={this.props.onFormSubmit} />
			</div>
		)

	}

});


export default FeedManager;