import React from "react";
import NewsSource from "./NewsSource.jsx!";

const NewsList = React.createClass({

	getInitialState(){
		return {
			feedData: []

			/*
			feedData: [
				{
					_id: 123456,
					name: "site one",
					entries: [
						{
							link: "http://example.com",
							title: "this is a very good title"
						},
						{
							link: "http://example.com",
							title: "a second one"
						},
						{
							link: "http://example.com",
							title: "third one"
						}
					]
				},
				{
					_id: 123457,
					name: "site two",
					entries: [
						{
							link: "http://example.com",
							title: "this is a very good title 2"
						},
						{
							link: "http://example.com",
							title: "a second one 2"
						},
						{
							link: "http://example.com",
							title: "third one 2"
						},
						{
							link: "http://example.com",
							title: "a fourth one 2"
						},
						{
							link: "http://example.com",
							title: "fifth one 2"
						}
					]
				}
			]
			*/
		}
	},

	addItemToState(item){

		let copy = this.state.feedData;
			copy.push(item);
		this.setState({feedData: copy});

	},

	componentDidMount(){

		// fires once in the lifecycle... however will be replaced with setInterval as it will be needed to poll the db every now and again
		setTimeout( () => {
			this.getFeedData();
		}, 300);

	},

	getFeedData(){

		for (let source of this.props.siteUrls){
			fetch("/getSiteData/" + source.url)
				.then(response => response.json())
				.then(data => this.mergeAndPushNewsMeta(source, data))
				.catch(e => console.log("err"))
		};
	},

	mergeAndPushNewsMeta(siteMeta, itemsPayload){
		// because i know what the name, url, and subsequently, what the news items payload is...
		// merge them into the state here rather than having logic inside the fetch request
		let newsItem = siteMeta;

			// this is weird because i can be calling either xml (rss 2 / atom) or json...
			// which means the root key has a weird name (e.g 'rss' or 'feed')... this just saves having to hardcode them

			// within this there's also the sub object of 'channel', which has many properties including 'item' which contains the stuff we want
			// else if 'entry' exists, that contains all the items
			if (itemsPayload[Object.keys(itemsPayload)[0]].channel){
				newsItem.entries = itemsPayload[Object.keys(itemsPayload)[0]].channel[0].item;
			}
			else if (itemsPayload[Object.keys(itemsPayload)[0]].entry){
				newsItem.entries = itemsPayload[Object.keys(itemsPayload)[0]].entry;
			}
			else {
				console.log("unsupported property. debug!");
			}

		// plonk it within the state
		this.addItemToState(newsItem);


	},

	render(){

		return (
			<div className="news-container-root main-viewport">
				<h3><i className="fa fa-newspaper-o" aria-hidden="true"></i> You well read person, you</h3>
				{this.wrapNewsSources(this.state.feedData)}
			</div>
		)

	},


	wrapNewsSources(feedData){

		return (

			feedData.map((feed) => {
				return (
					<NewsSource key={feed._id} title={feed.name}>
						{feed.entries}
					</NewsSource>
				)
			})
		)
	}

});

export default NewsList;
