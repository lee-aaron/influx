import { 
    call, put, takeLatest
} from 'redux-saga/effects';
import { AUTH_REQUEST, AUTH_ERROR, AUTH_SUCCESS, authError, authSuccess } from '../actions/handleAuth';

export function* watcherSaga() {
    yield takeLatest(AUTH_REQUEST, workerSaga)
}

function* workerSaga(action) {
    try {
        yield put(authSuccess())
    } catch (e) {
        console.log(e);
        yield put(authError())
    }
}