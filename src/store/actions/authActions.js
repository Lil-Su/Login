import { autoTypes } from "../types/types"


export const setCurrentUser = (payloade) => {
    return {
        type: autoTypes.SET_CURRENT_USER,
        payloade
    }
}

export const authLogin = () => {
    return {
        type: autoTypes.AUTO_LOGIN,
    }
}


export const logOut = () => {
    return {
        type: autoTypes.LOG_OUT,
    }
}

export const logIn = (payloade) => {
    return {
        type: autoTypes.LOG_IN,
        payloade

    }
}
export const setError = (payloade) => {
    return {
        type: autoTypes.SET_ERROR,
        payloade
    }
}