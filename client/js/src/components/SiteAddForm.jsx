import React from "react";
import Helpers from "../misc/Helpers.js";

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

	checkInput(){
		if (!this.state.url || !this.state.name){
			Helpers.createNotification("Please fill out both forms")
		}
		else {		
			if (Helpers.validURL(this.state.url)){
				if (Helpers.isMatchInArray(this.props.siteUrls, this.state)){
<<<<<<< HEAD
					// Success!
=======
>>>>>>> origin/master
					Helpers.createNotification("Success");
					this.sendFormToRoot();
				}
				else {
					Helpers.createNotification("There's already a site with that url added :)");
				}
			}
			else {
				Helpers.createNotification("Please enter a valid URL.");
			}
		}
	},

	sendFormToRoot(){
		this.props.onFormSubmit(this.state)
	},

	render(){

		return (
			<form>

				<h2>Add a new feed</h2>
				<input type="text" placeholder="Site URL" value={this.state.url} onChange={this.handleInputChange} id="site-url"/>
				<input type="text" placeholder="Site Name" value={this.state.name} onChange={this.handleInputChange} id="site-name"/>
				<input type="button" value="Add Site" onClick={this.checkInput}/>

			</form>
		)

	}

});

export default SiteAddForm;


