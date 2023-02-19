import { takeLatest } from "redux-saga/effects";
import { put } from "redux-saga/effects";
import { setCurrentUser, setError } from "../actions/authActions";
import { setMemberError, setMembers } from "../actions/memberActions";
import { autoTypes } from "../types/types";


function* authLogin() {
    let currentUser = localStorage.getItem('currentUser')
    if (currentUser) {
        currentUser = JSON.parse(currentUser)
        yield put(setCurrentUser(currentUser))
    }
}

function* logOut() {
    localStorage.removeItem('currentUser')
    yield put(setCurrentUser(null));
}
// localStorage.setItem('currentUser', JSON.stringify(null))
// localStorage.setItem('memberList',JSON.stringify([{login:'Admin',password:'123456789'}]))
// localStorage.clear()
function* login(action) {
    const user = action.payloade
    let members = localStorage.getItem("memberList");
    if (members) {
        members = JSON.parse(members)
        const currentMember = members.find((el) => {
            if (el.login === user.login && el.password === user.password) {
                return true
            }
        })
        if (currentMember) {
            yield put(setError(''));
            localStorage.setItem('currentUser', JSON.stringify(currentMember));
            yield put(setCurrentUser(currentMember));
            yield put(setMembers(members));
        } else {
            yield put(setError('Wrong password or login'))
        }
    }

}
export function* authSaga() {
    yield takeLatest(autoTypes.AUTO_LOGIN, authLogin)
    yield takeLatest(autoTypes.LOG_OUT, logOut)
    yield takeLatest(autoTypes.LOG_IN, login)

}

