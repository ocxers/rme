import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"
import Routes from './routes'
import SideBarNav from "./components/common/SideNav"
import utils from "./utils/utils"

export default function App() {
    const user = utils.getAuthUser()
    return (
        <Router>
            {/*<Layout/>*/}
            {/*/!*<Main/>*!/*/}
            {/*<Media/>*/}
            {/*<Tag/>*/}
            {/*<Button/>*/}
            {/*<Alert/>*/}
            {/*<Grid/>*/}
            {/*<Switch>*/}
            {/*    <Route path="/signin" component={SignIn}></Route>*/}
            {/*    <Route path="/signup" component={SignUp}></Route>*/}
            {/*    <Route path="/forget-password"*/}
            {/*           component={ForgetPassword}></Route>*/}
            {/*    <Route path="/reset-password"*/}
            {/*           component={ResetPassword}></Route>*/}
            {/*    <Route path="/password-recovery-sent"*/}
            {/*           component={PasswordRecoverySent}></Route>*/}
            {/*    <Route path="/signup-verify" component={SignUpVerify}></Route>*/}
            {/*    <Route path="/activate-account" component={AcountActivate}></Route>*/}
            {/*    <Route path="/signup-success" component={SignUpSuccess}></Route>*/}
            {/*    {renderRedirect(signinUrl)}*/}
            {/*</Switch>*/}
            {/*<SideBarNav/>*/}
            {/*{renderSwitch('/', {type: 'admin'})}*/}
            <div>
                <SideBarNav/>

                <Switch>
                    {Routes(user).map((prop, key) => {
                        console.log(prop)
                        return (
                            <Route
                                path={prop.path}
                                key={key}
                            >
                                {prop.component}
                            </Route>
                        )
                    })}
                    {/*{renderRedirect(reportsUrl)}*/}
                </Switch>
            </div>
        </Router>
    )
}
