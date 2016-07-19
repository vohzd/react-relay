import React from "react";

const NewsItem = React.createClass({

	render(){

		return(

			<div className="news-item">
				<a href={this.props.link}>
					{this.props.children}
				</a>
			</div>

		);

	},


});

export default NewsItem;
