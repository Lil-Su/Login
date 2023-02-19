import { membersTypes } from "../types/types";

const initialState = {
    memberList: [],
    error: ''
}

export default function memberReducer(state = initialState, action) {
    switch (action.type) {
        case membersTypes.SET_MEMBERS:
            return {
                ...state,
                memberList: action.payloade
            }
            case membersTypes.SET_MEMBER_ERROR:
                return {
                    ...state,
                    error: action.payloade
                }  
        default: return state
    }

}