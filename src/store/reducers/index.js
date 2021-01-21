import { combineReducers } from 'redux';

import users from './users';
import emails from './emails';

export default combineReducers({
	users,
	emails,
});
