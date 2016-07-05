import React from "react";
import mui from "material-ui";
import NewsList from "./NewsList.js";
import FeedManager from "./FeedManager.js";

export default React.createClass({

	getInitialState(){

		feedData = [
			{
				id: 
			},
			{
				id: 
			},
			{
				id: 
			}
		]
	}

	render(){

		return (
			<div className="FeedApp">
				<FeedManager />
				<NewsList />
			</div>
		)

	}

});