import React from "react";

const NewsItem = React.createClass({

	render(){

		return(

			<div className="news-item">
				<h4>{this.props.title}</h4>
				<p>{this.props.children}</p>
			</div>

		);

	}

});

export default NewsItem;
