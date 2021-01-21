import React, { useState } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as EmailsActions from '../store/actions/emails';
import * as UsersActions from '../store/actions/users';

const Input = ({ toggleEmails, toggleUsers }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');

	const handleDispatch = () => {
		toggleEmails(email);
		toggleUsers(name);
		setName('');
		setEmail('');
	};

	return (
		<div>
			<input
				placeholder="Nome"
				value={name}
				onChange={event => setName(event.target.value)}
			/>
			<input
				placeholder="Email"
				value={email}
				onChange={event => setEmail(event.target.value)}
			/>
			<button onClick={handleDispatch}>Enviar</button>
		</div>
	);
};

const mapDispatchToProps = dispatch =>
	bindActionCreators({ ...EmailsActions, ...UsersActions }, dispatch);

export default connect(null, mapDispatchToProps)(Input);
