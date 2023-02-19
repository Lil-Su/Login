import { put, takeLatest } from "redux-saga/effects";
import { membersTypes } from "../types/types";
import { setMemberError, setMembers } from '../actions/memberActions'


function* addNewMember(action) {
    console.log("MemberSaga", action);
    const user = action.payloade
    console.log(user);
    let memberlist = localStorage.getItem('memberList');
    if(memberlist){
        memberlist= JSON.parse(memberlist)
        let member = memberlist.find((el)=>{
            return el.login === user.login
        })
        if(member===undefined){
            member = user
            memberlist.push(member)
            localStorage.setItem('memberList', JSON.stringify(memberlist))
            yield put (setMembers(memberlist))
        }else{
         yield put(setMemberError('Wrong'))
        }

    }       
}


export function* membersSaga() {
    yield takeLatest(membersTypes.ADD_MEMBER, addNewMember)
}