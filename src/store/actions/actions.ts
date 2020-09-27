import {
    SIGNED_IN,
    SIGNED_OUT
} from "./actionTypes"

export const signedIn = (auth: any) => ({
    type: SIGNED_IN,
    auth: auth
})

export const signedOut = () => ({
    type: SIGNED_OUT
})