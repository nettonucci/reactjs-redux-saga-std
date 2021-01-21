import React from 'react';

import Users from './components/users';
import Emails from './components/email';
import Input from './components/input';
import Banners from './components/banners';

const App = () => {
	return (
		<div>
			<Input />
			<Users />
			<Emails />
			<Banners />
		</div>
	);
};

export default App;
