import React from 'react'
import './App.css'
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom"
// import Routes from './routes'
// import SideBarNav from "./components/common/SideNav"
// import Layout from "./demo/Layout"
// import Main from "./demo/Main"
// import Tag from "./demo/Tag"
// import Media from "./demo/Media"
// import Button from "./demo/Button"
// import Grid from "./demo/Grid"
// import Alert from "./demo/Alert"
// import utils from "./utils/utils"
// import Dashboard from "./views/Dashboard/Dashboard"
// import Profile from "./views/Profile/Profile"

// const img = 'https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/01/02/b1/0102b189-c0e8-1725-aeb1-a7d5b63e59ec/source/256x256bb.jpg'

function Dashboard() {
    return <h2>Dashboard</h2>;
}

function Profile() {
    return <h2>Profile</h2>;
}

export default function App() {
    // const user = utils.getAuthUser()

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
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/profile">Profile</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/">
                        <Dashboard/>
                    </Route>
                    <Route path="/profile">
                        <Profile/>
                    </Route>
                    {/*{Routes(user).map((prop, key) => {*/}
                    {/*    console.log(prop)*/}
                    {/*    return (*/}
                    {/*        <Route*/}
                    {/*            path={prop.path}*/}
                    {/*            key={key}*/}
                    {/*        >*/}
                    {/*            {prop.component}*/}
                    {/*        </Route>*/}
                    {/*    )*/}
                    {/*})}*/}
                    {/*{renderRedirect(reportsUrl)}*/}
                </Switch>
            </div>
        </Router>
    )
}