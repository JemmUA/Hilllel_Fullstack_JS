import {all, put, takeEvery } from 'redux-saga/effects';
import {cryAnything, pauseForSaga} from '../../shared/utilites.ts';
import {decrementAsync, incrementAsync, minusId, plusId} from './counterIdSlice.ts';

const delayDuration = 1000;

function* plusIdSaga () {
    yield cryAnything(`Wow! +   Delay: ${delayDuration} ms`);
    yield pauseForSaga(delayDuration);
    yield put(plusId());

}

function* minusIdSaga () {
    yield cryAnything(`Wow! -   Delay: ${delayDuration} ms`);
    yield pauseForSaga(delayDuration);
    yield put(minusId());

}

function* watchCounterIdSaga () {
    yield takeEvery(incrementAsync.type, plusIdSaga);
    yield takeEvery(decrementAsync.type, minusIdSaga);
}

export default function* rootSaga() {
    yield all([watchCounterIdSaga()]);
}