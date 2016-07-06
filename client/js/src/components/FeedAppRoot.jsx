import React from "react";
import NewsList from "./NewsList.jsx!";
import FeedManager from "./FeedManager.jsx!";

export default React.createClass({

	getInitialState(){
		return {siteUrls: []};
	},

	loadCommentsFromServer(){
		fetch("/sites")
			.then(response => response.json())
			.then(data => this.state.siteUrls = data)
			.catch(e => console.log("err"))
	},

	componentWillMount(){
		this.loadCommentsFromServer();
	},

	onFormSubmit(event){
		console.log("this should be called");
		console.log("location: root node.... invokee: child node");
		console.log(event);
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