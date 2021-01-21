import { takeLatest, put, call, delay } from 'redux-saga/effects';
import api from '../../services/api';

function* getTodoList() {
	const response = yield call(api.get, '/suarota');
	yield delay(2000);
	yield put({
		type: 'SUCCESS_GET_BANNERS',
		banners: response.data,
	});
}

export default function* root() {
	yield takeLatest('REQUEST_GET_BANNERS', getTodoList);
}
