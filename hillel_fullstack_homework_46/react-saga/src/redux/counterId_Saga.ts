import {all, put, takeEvery } from 'redux-saga/effects';
import {cryAnything, pauseForSaga} from '../../shared/utilites.ts';
import {decrementAsync, incrementAsync, minusId, plusId} from './counterIdSlice.ts';

function* plusIdSaga () {
    yield pauseForSaga(3000);
    yield cryAnything("Wow!+");
    yield put(plusId());

}

function* minusIdSaga () {
    yield pauseForSaga(2000);
    yield cryAnything("Wow!-");
    yield put(minusId());

}

function* watchCounterIdSaga () {
    yield takeEvery(incrementAsync.type, plusIdSaga);
    yield takeEvery(decrementAsync.type, minusIdSaga);
}

export default function* rootSaga() {
    yield all([watchCounterIdSaga()]);
}