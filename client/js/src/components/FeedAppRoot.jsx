import React from "react";
import NewsList from "./NewsList.jsx!";
import FeedManager from "./FeedManager.jsx!";

export default React.createClass({

	getInitialState(){
		return {siteUrls: []};
	},

	loadAvailableFeeds(){
		fetch("/sites")
			.then(response => response.json())
			.then(data => this.state.siteUrls = data)
			.catch(e => console.log("err"))
	},

	addNewFeed(data){

		fetch("/sites", {
			"method": "post",
			"headers": {
				"content-type": "application/json"
			},
			"body": JSON.stringify(data)
		}).then(response => response.text())
		  .then(function(){
		  	console.log("success");
		  })

	},

	componentWillMount(){
		this.loadAvailableFeeds();
	},

	onFormSubmit(data){
		let dupe = this.state.siteUrls;
			dupe.push(data);
		this.setState({siteUrls: dupe})
	},
	
	render(){
		return (
			<div className="FeedApp">
				<FeedManager siteUrls={this.state.siteUrls} onFormSubmit={this.onFormSubmit}/>
				<NewsList />
			</div>
		)
	}

});