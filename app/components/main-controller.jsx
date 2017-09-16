import React from "react";

import UserList from "../containers/user-list";
import UserDetails from "../containers/user-details";

class MainController extends React.Component {

	render () {
		return (
			<div className="mainContainer">
				<h1>Username List:</h1>
				<UserList/>
				<hr/>
				<h1>User Details:</h1>
				<UserDetails/>
			</div>
		);
	}
}

module.exports = MainController;