import React from 'react';

import Users from './components/users';
import Emails from './components/email';
import Input from './components/input';

const App = () => {
	return (
		<div>
			<Input />
			<Users />
			<Emails />
		</div>
	);
};

export default App;
