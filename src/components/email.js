import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as EmailsActions from '../store/actions/emails';

const Users = ({ emails }) => {
	return (
		<div>
			<p>Email: {emails}</p>
		</div>
	);
};

const mapStateToProps = state => ({
	emails: state.emails,
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(EmailsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Users);
