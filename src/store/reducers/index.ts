import {combineReducers} from "redux"
import authState from './authReducer'
import lngState from "./i18nReducer"

export default combineReducers({
    authState,
    lngState
})
