import React from "react";
import NewsItem from "./NewsItem.jsx!";
import $ from "jquery";

const NewsList = React.createClass({

	/*
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
			],
			testing: this.props.siteUrls
		}
	},
	*/

	getInitialState(){
		return {
			feedData: this.props.siteUrls
		}
	},

	componentDidMount(){

		this.getFeedData();

	},

	getFeedData(){
		setTimeout(() => {

			// it begins

			for (let source of this.props.siteUrls){

				console.log(source);
				$.ajax({
					url: source.url,
					datatype: "xml",
					type: "GET",
					success(response){
						console.log(response);
					}
				})

			}






		}, 200)
	},


	render(){
		return (
			<div className="news-container-root main-viewport">
				<h3><i className="fa fa-newspaper-o" aria-hidden="true"></i> You well read person, you</h3>
			</div>
		)

	},
				//{this.wrapNewsItems(this.state.feeds)}

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
