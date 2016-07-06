/*
	The main entry point in this JSPM, es6, and react application.
	This is very much a tree structure in that this is the root node.
	First start by importing some libraries
*/

import $ from "jquery";
import React from "react";
import ReactDOM from "react-dom";

/*
	Now custom code i've written
*/

import FeedAppRoot from "./components/FeedAppRoot.jsx!";

/*
	Finally, render the thing on application load
*/

ReactDOM.render(<FeedAppRoot />, document.getElementById("feed-app-container"));
