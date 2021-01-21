import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as UsersActions from './store/actions/users';

const App = ({ teste, toggleUsers }) => {
	return (
		<div>
			<p>{teste}</p>
			<button onClick={() => toggleUsers()}>Chamar users</button>
		</div>
	);
};

const mapStateToProps = state => ({
	teste: state.users,
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(UsersActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
