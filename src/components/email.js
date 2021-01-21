import React from 'react';

import { connect } from 'react-redux';

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

export default connect(mapStateToProps)(Users);
