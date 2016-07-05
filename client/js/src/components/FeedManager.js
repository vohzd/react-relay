import React from "react";
import mui from "material-ui";
import BaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import getMuiTheme from "material-ui/styles/getMuiTheme";

import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import RaisedButton from "material-ui/RaisedButton";

class FeedManager extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			open: false
		}
	}


	render(){

		return (

			<div>
				<RaisedButton label="Toggle Me!" onClick={this.handleToggle} />
				<Drawer open={this.state.open}>
					<MenuItem>Menu Item</MenuItem>
					<MenuItem>Menu Item 2</MenuItem>
				</Drawer>
			</div>

		);

	}

	getChildContext(){
		return {
			muiTheme: getMuiTheme(BaseTheme)
		}
	}

}

FeedManager.childContextTypes = {

	muiTheme: React.PropTypes.object.isRequired

}

export default FeedManager;