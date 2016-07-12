import React from "react";
import NewsItem from "./NewsItem.jsx!";

const NewsList = React.createClass({

	getInitialState(){
		return {
			feeds: [
				{
					id: 1,
					content: "Nigel has quit the race",
					siteTitle: "Twat News"
				},
				{
					id: 2,
					content: "go skateboarding",
					siteTitle: "Slashdot"
				},
				{
					id: 3,
					content: "Time for curry",
					siteTitle: "House of Vans"
				}
			]
		}
	},


	render(){

		return (
			<div className="news-container-root main-viewport">
				<h3><i className="fa fa-newspaper-o" aria-hidden="true"></i> You well read bastard, you</h3>
				{this.wrapNewsItems(this.state.feeds)}
			</div>
		)

	},

	wrapNewsItems(feedData){
		
		return (
			feedData.map((feed) => {
				return (
					<NewsItem key={feed.id} title={feed.siteTitle} >
						{feed.content}
					</NewsItem>
				)
			})
		)
	}

});

export default NewsList;
