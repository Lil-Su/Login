import { membersTypes } from "../types/types"

export const setMembers = (payloade) => {
    return {
        type: membersTypes.SET_MEMBERS,
        payloade
    }
}

export const addMember = ((payloade) => {
    return {
        type: membersTypes.ADD_MEMBER,
        payloade,
    }
})

export const setMemberError = (payloade) => {
    return {
        type: membersTypes.SET_MEMBER_ERROR,
        payloade
    }
}