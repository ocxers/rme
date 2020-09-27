import * as React from "react"
import {
    AuthUserContext
} from "./contexts/AuthUserContext"
import {connect} from 'react-redux'

interface IProps {
    authState: any
}

const mapStateToProps = ({authState}: { authState: any }) => {
    return {
        authState: authState ? authState.authState : null
    }
}

const AuthUserProvider: React.FC<IProps> = props => (
    <AuthUserContext.Provider value={props.authState}>
        {props.children}
    </AuthUserContext.Provider>
)
export default connect(mapStateToProps)(AuthUserProvider)
