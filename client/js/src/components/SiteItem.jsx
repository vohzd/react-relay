import React from "react";

const SiteItem = React.createClass({

	render(){

		return (
			<div className="site-item">
				<div className="site-item-name">{this.props.siteMeta.name}</div>
				<div className="site-item-url">{this.props.siteMeta.url}</div>
			</div>
		)

	}

});

export default SiteItem;
