import React from "react";
import SiteItem from "./SiteItem.jsx!";

const SiteList = React.createClass({

	// returns a container of none or more SiteItems
	render(){

		return (
			<div className="site-item-wrapper">
				{this.wrapSiteItems(this.props.siteUrls)}
			</div>
		)

	},

	wrapSiteItems(siteUrls){

		return (
			siteUrls.map((site) => {
				return (
					<SiteItem key={site._id} siteMeta={site} />
				)
			})
		)

	}

});


export default SiteList;