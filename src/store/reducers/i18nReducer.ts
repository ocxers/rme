import {SWITCH_LNG} from "../actions/actionTypes"

const initialState = {
    lng: 'en' // i18n language
}

interface IAction {
    type: string,
    lng?: string
}

export default function (state = initialState, action: IAction) {
    switch (action.type) {
        case SWITCH_LNG:
            return {
                ...state,
                lng: action.lng
            }
        default:
            return state
    }
}
