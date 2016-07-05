import React from "react";
import mui from "material-ui";

const NewsList = React.createClass({

	render(){

		const items = this.props.newsData.map(function(newsItem){

			return (
				<NewsItem key={newsItem.id} title={newsItem.siteTitle}>
					{newsItem.content}
				</NewsItem>
			);

		});

		return(
			<div className="newsList">
				<h4>testing</h4>
				{items}
			</div>
		)

	}

});

const NewsItem = React.createClass({

	render(){

		return(

			<div className="newsItem">
				<h4>{this.props.title}</h4>
				<p>{this.props.children}</p>
			</div>

		);

	}

});

export default React.createClass({

	getInitialState(){
		return {
			feeds: [
				{
					id: 1,
					content: "Boris has quit the race",
					siteTitle: "BBC News"
				},
				{
					id: 2,
					content: "go skateboarding",
					siteTitle: "Slashdot"
				},
				{
					id: 3,
					content: "Biggie smals Biggie smalls biggie smalls",
					siteTitle: "House of Vans"
				}
			]
		}
	},

	render(){

		return(
			<div className="NewsContainer">
				<h3>What's the haps man?</h3>
				<NewsList newsData={this.state.feeds}/>
			</div>
		)

	}

});
