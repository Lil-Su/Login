import { all } from 'redux-saga/effects'
import { authSaga } from './authSaga'
import { membersSaga } from './membersSaga'

export default function* rootSaga() {
    yield all([
        authSaga(),
        membersSaga(),
    ])
}