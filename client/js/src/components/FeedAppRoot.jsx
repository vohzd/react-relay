import React from "react";
import $ from "jquery";
import NewsList from "./NewsList.jsx!";
import FeedManager from "./FeedManager.jsx!";

export default React.createClass({

	getInitialState(){
		return {siteUrls: []};
	},

	fetchSites(){
		fetch("/sites")
			.then(response => response.json())
			.then(data => this.state.siteUrls = data)
			.catch(e => console.log("err"))
	},

	componentWillMount(){
		this.fetchSites();
	},

	addItemToState(item){
		// because the state always should be treated as immutible
		// i can only ever call setState and hence need to dupe the current vals
		let dupe = this.state.siteUrls;
			dupe.push(item);
		this.setState({siteUrls: dupe})
	},

	onFormSubmit(data){
		const postReq = {method: "POST", body: data};

		console.log(postReq);
		// this only ever receives 'sane' values... hopefully!
		fetch("/sites", postReq)
			.then(response => response.json())
			.then((databaseId) => {
				data._id = databaseId;
				return data;
			})
			.then((data) => {
				this.addItemToState(data)
			})
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