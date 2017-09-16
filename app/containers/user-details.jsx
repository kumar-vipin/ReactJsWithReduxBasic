import React from 'react';
import {connect} from 'react-redux';

class UserDetails extends React.Component {

	render() {
		var oUser = this.props.user;
		if(!oUser) {
			return (<h4>Select a user...</h4>);
		}
		return (
			<div className="userDetailsContainer">
				<div className="imageWrapper">
					<img src={oUser.thumbnail}/>
				</div>
				<div className="userDetailsWrapper">
					<div className="userName">{oUser.first} {oUser.last}</div>
					<div className="age">{oUser.age}</div>
					<div className="address">{oUser.description}</div>
				</div>
			</div>
		);
	}
};

function mapStateToProps(state) {
	return {
		user: state.activeUser
	}
};

export default connect(mapStateToProps)(UserDetails);
