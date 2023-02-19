import { autoTypes } from "../types/types"

const initialState = {
    curentUser: null,
    error: ''
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case autoTypes.SET_CURRENT_USER:
            return {
                ...state,
                curentUser: action.payloade
            }
        case autoTypes.SET_ERROR:
            return {
                ...state,
                error: action.payloade
            }
        default: return state
    }

}