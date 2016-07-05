import React from "react";
import NewsList from "./NewsList.js";
import FeedManager from "./FeedManager.js";
import $ from "jquery";

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

		console.log("did mount");
		this.loadCommentsFromServer();

	},

	componentDidMount(){
		console.log(this.state.siteUrls);
	},

	onFormSubmit(data){
		console.log("lol data");
		console.log(data);
	},
	
	render(){

		console.log("render root");

		return (
			<div className="FeedApp">
				<FeedManager siteUrls={this.state.siteUrls} onFormSubmit={this.onFormSubmit}/>
				<NewsList />
			</div>
		)

	}

});