import { takeLatest, put } from 'redux-saga/effects';

function* getTodoList(action) {
	yield put({ type: 'GET_EMAILS', email: action.email });
}

export default function* root() {
	yield takeLatest('ASYNC_GET_EMAILS', getTodoList);
}
