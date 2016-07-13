import React from "react";
import $ from "jquery";
import SiteAddForm from "./SiteAddForm.jsx!";
import SiteList from "./SiteList.jsx!";

const FeedManager = React.createClass({

	toggleSidePanel(){
		const $panel = $(".feed-manager-root");

		if (!$panel.hasClass("closed-panel")){
			$(".margin-tab").html("<i class='fa fa-arrow-left' aria-hidden='true'></i>");
			$panel.addClass("closed-panel");
		}
		else {			
			$(".margin-tab").html("<i class='fa fa-arrow-right' aria-hidden='true'></i>");
			$panel.removeClass("closed-panel");
		}
	},

	render(){

		// Temporary
		let message = "";
		if (this.props.siteUrls.length === 0){
			message = "There are no sites! Consider getting some added!";
		}

		return (
			<div className="feed-manager-root aside-viewport">
				<div className="margin-tab" onClick={this.toggleSidePanel}><i className='fa fa-arrow-right' aria-hidden='true'></i></div>
				<div className="help-text-wrapper">{message}</div>
				<div className="aside-bar-content">
					<SiteList siteUrls={this.props.siteUrls} />
					<SiteAddForm siteUrls={this.props.siteUrls} onFormSubmit={this.props.onFormSubmit} />
				</div>
			</div>
		)

	}

});


export default FeedManager;