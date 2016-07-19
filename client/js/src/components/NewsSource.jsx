import React from "react";
import NewsItem from "./NewsItem.jsx!";

const NewsSource = React.createClass({

	render(){

		return(

			<div className="news-item">
				<h4>{this.props.title}</h4>
				{this.wrapNewsItems(this.props.entries)}
			</div>

		);

	},

	wrapNewsItems(entries){

		// I am so sorry
		let randId = parseInt(Math.random().toString().split(".")[1]);

		return (

			entries.map((entryItem) => {
				return (
					<NewsItem key={randId} link={entryItem.link}>
						{entryItem.title}
					</NewsItem>
				)
			})
		)
	}

});

export default NewsSource;
