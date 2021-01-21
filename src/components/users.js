import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as UsersActions from '../store/actions/users';

const Users = ({ users }) => {
	return (
		<div>
			<p>Nome: {users}</p>
		</div>
	);
};

const mapStateToProps = state => ({
	users: state.users,
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(UsersActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Users);
