import React from "react";
import SiteAddForm from "./SiteAddForm.jsx!";
import SiteList from "./SiteList.jsx!";

const FeedManager = React.createClass({

	render(){

		// Temporary
		let message = "";
		if (this.props.siteUrls.length === 0){
			message = "There are no sites! Consider getting some added!";
		}

		return (
			<div className="feed-manager-root aside-viewport">
				<div className="help-text-wrapper">{message}</div>
				<SiteList siteUrls={this.props.siteUrls} />
				<SiteAddForm siteUrls={this.props.siteUrls} onFormSubmit={this.props.onFormSubmit} />
			</div>
		)

	}

});


export default FeedManager;