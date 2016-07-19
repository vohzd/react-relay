import React from "react";

const NewsItem = React.createClass({

	render(){

		return(

			<div className="news-item">
				<a href={this.props.link[0]}>
					{this.props.children[0]}
				</a>
			</div>

		);

	},


});

export default NewsItem;
