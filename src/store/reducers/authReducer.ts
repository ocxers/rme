import {SIGNED_IN, SIGN_UP, SIGNED_OUT} from "../actions/actionTypes"

const localAuthState = localStorage.getItem('authState')
const initialState = {
    authState: localAuthState ? JSON.parse(localAuthState === 'undefined' ? '{}' : localAuthState) : null
}

interface IAction {
    type: string,
    auth: any
}

export default function (state = initialState, action: IAction) {
    switch (action.type) {
        case SIGNED_IN:
            localStorage.setItem('authState', JSON.stringify(action.auth))
            return {
                ...state,
                authState: action.auth
            }
        case SIGN_UP:
            return {
                ...state,
                // authState: 'collapseMenu'
            }
        case SIGNED_OUT:
            localStorage.removeItem('authState')
            return {
                ...state,
                authState: null
            }
        default:
            return state
    }
}
