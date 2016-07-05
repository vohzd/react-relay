import React from "react";
import NewsList from "./NewsList.js";
//import FeedManager from "./FeedManager.js";
import $ from "jquery";

const FeedManager = React.createClass({

	componentDidMount(){
		console.log("mouted");
	},

	getInitialState(){
		return {
			test: []
		}
	},

	render(){

		const Nodes = this.props.siteUrls.map((node) => {
			return (
				<div className="blah">efoefwhfow</div>
			)
		});
		return(
			{Nodes}
		)

	}

})

export default React.createClass({

	getInitialState(){

		return {
			siteUrls: []
		};

	},

	loadCommentsFromServer(){

		$.ajax({
			type: "GET",
			url: "/sites",
			success: (response) => {
				this.setState({siteUrls: response});
			}
		});

	},

	componentDidMount(){

		this.loadCommentsFromServer();

	},

	onFormSubmit(data){
		console.log("lol data");
		console.log(data);
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