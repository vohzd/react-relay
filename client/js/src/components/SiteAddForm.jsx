import React from "react";
import Helpers from "../misc/Helpers.js";

const SiteAddForm = React.createClass({

	getInitialState(){
		return {url: "", name: ""};
	},

	clearAllFormFields(){
		this.setState({url: "", name: ""})
	},

	handleInputChange(event){
		if (event.target.id.split("-")[1] == "url"){
			this.setState({url: event.target.value});
		}
		else {
			this.setState({name: event.target.value});
		}
	},

	checkInput(event){

		if (event.type == "keypress" && event.charCode !== 13){
			return;
		}
			
		if (!this.state.url || !this.state.name){
			Helpers.createNotification("Please fill out both forms", 3000)
		}
		else {		
			if (Helpers.validURL(this.state.url)){
				if (Helpers.isNoMatchInArray(this.props.siteUrls, this.state)){
					console.log(Helpers.isNoMatchInArray(this.props.siteUrls, this.state));
					// Success!
					Helpers.createNotification("Success", 1000);
					this.clearAllFormFields();
					this.sendFormToRoot();
				}
				else {
					Helpers.createNotification("There's already a site with that url added :)", 3000);
				}
			}
			else {
				Helpers.createNotification("Please enter a valid URL.", 3000);
			}
		}
	},

	sendFormToRoot(){
		this.props.onFormSubmit(this.state)
	},

	render(){

		return (
			<form className="add-new-site-form">

				<div className="add-new-site-row">
					<div className="add-new-site-form-header">New feed</div>
					<div className="add-new-site-form-submit" onClick={this.checkInput}>Add <i className="fa fa-plus" aria-hidden="true"></i></div>
				</div>
				<input type="text" placeholder="Site URL" onKeyPress={this.checkInput} value={this.state.url} onChange={this.handleInputChange} id="site-url"/>
				<input type="text" placeholder="Site Name" onKeyPress={this.checkInput} value={this.state.name} onChange={this.handleInputChange} id="site-name"/>

			</form>
		)

	}

});

export default SiteAddForm;


