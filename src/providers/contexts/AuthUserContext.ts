import * as React from "react"

export const DEFAULT_AUTH_USER: IAuthUserProps = {
    user: null,
};

export interface IAuthUserUser {
    id: number;
    img?: string;
    firstName: string;
    lastName?: string;
    email?: string;
    phoneNumber?: string;
    createdAt?: string;
}

export interface IAuthUserProps {
    user: IAuthUserUser | null;
}

export const AuthUserContext = React.createContext<IAuthUserProps>(DEFAULT_AUTH_USER)