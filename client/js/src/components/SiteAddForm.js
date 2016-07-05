import React from "react";
import Helpers from "../misc/Helpers.js";


/*
const SiteAddForm = React.createClass({

	getInitialState(){
		return {url: "", name: ""};
	},

	handleInputChange(event){
		if (event.target.id.split("-")[1] == "url"){
			this.setState({url: event.target.value});
		}
		else {
			this.setState({name: event.target.value});
		}
	},

	componentDidMount(){
		console.log(this.state);
	},

	handleSubmit(){
		// basic validation


		//console.log(this);
		console.log(this.props.siteUrls);
		//console.log(this.state);
		/*
		if (!this.state.url || !this.state.name){
			Helpers.createNotification("Please enter both the fields :)");
		}
		else {
			if (Helpers.validURL(this.state.url)){
				// this one is a bit of a headfuck
				// you need to call the property 'onFormSubmit', which is actually an attribute of the DOM node (see the parent component for reference)
				//this.props.onFormSubmit({author: author, text: text});

				this.props.onFormSubmit({
					name: "test",
					url: "http://www.last.fm/home"
				});

				/*
				this.props.onFormSubmit({
					url: this.state.url,
					name: this.state.name
				})

				// by passing it the data, this somehow magically sends a payload of json
			}
		}

	},

	render(){

		return (
			<form>

				<h2>Add a new feed</h2>
				<input type="text" placeholder="Site URL" value={this.state.url} onChange={this.handleInputChange} id="site-url"/>
				<input type="text" placeholder="Site Name" value={this.state.name} onChange={this.handleInputChange} id="site-name"/>
				<input type="button" value="Add Site" onClick={this.handleSubmit}/>

			</form>
		)

	}

});

export default SiteAddForm;

*/

