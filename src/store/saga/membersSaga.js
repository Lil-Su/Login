import { put, select, takeLatest } from "redux-saga/effects";
import { membersTypes } from "../types/types";
import { setMemberError, setMembers } from '../actions/memberActions'
import { currentUserSelector } from "../selectors/authSelectors";


function* addNewMember(action) {
    console.log("MemberSaga", action);
    const user = action.payloade
    console.log(user);
    let memberlist = localStorage.getItem('memberList');
    if (memberlist) {
        memberlist = JSON.parse(memberlist)
        let member = memberlist.find((el) => {
            return el.login === user.login
        })
        if (member === undefined) {
            member = user
            memberlist.push(member)
            localStorage.setItem('memberList', JSON.stringify(memberlist))
            yield put(setMembers(memberlist))
        } else {
            yield put(setMemberError('The member already exists'))
        }

    }
}

function* deletMember(action) {
    // console.log('saga', action);
    // const user = action.payloade
    // console.log("delet", action);
    // const currentUser = yield select(currentUserSelector)
    // console.log(currentUser, 'bbbbbbb');
    // if (currentUser.login === user.login) {
    //     yield put(setMemberError('You cant delet this member'))
    // } else {
    //     const deletMember = currentUser.filter((el) => {
    //         if (user.login === el.login) {
    //             return false
    //         }
    //     })
    //     if (!deletMember) {
    //         localStorage.setItem('memberList', JSON.stringify(deletMember))
    //         yield put(setMembers(deletMember))
    //     }
    // }
}

export function* membersSaga() {
    yield takeLatest(membersTypes.ADD_MEMBER, addNewMember)
    yield takeLatest(membersTypes.DELET_MEMBER, deletMember)
    // yield takeLatest(membersTypes.EDIT_MEMBER, editMember)
}