import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import users from './reducers/users';
import emails from './reducers/emails';
import banners from './reducers/banners';
import rootSaga from './sagas/banners';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	combineReducers({
		users,
		emails,
		banners,
	}),
	applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
