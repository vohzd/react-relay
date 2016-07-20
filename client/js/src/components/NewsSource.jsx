import React from "react";
import NewsItem from "./NewsItem.jsx!";

const NewsSource = React.createClass({

	render(){

		console.log(this.props);

		return(

			<div className="news-item">
				<h4>{this.props.title}</h4>
				{this.wrapNewsItems(this.props.children)}	
			</div>

		);

	},

	wrapNewsItems(entries){


		return (

			entries.map((entryItem) => {
				return (
					<NewsItem key={entryItem.title} link={entryItem.link}>
						{entryItem.title}
					</NewsItem>
				)
			})
		)
	}

});

export default NewsSource;
