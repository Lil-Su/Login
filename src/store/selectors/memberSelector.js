export const membersSelector = ((store) => {
    return store.memberReducer.memberList
})
export const membersErrorSelector = ((store) => {
    return store.memberReducer.error
})
