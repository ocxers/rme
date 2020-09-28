import React from 'react'
import { useLocation, Route, Switch } from 'react-router-dom'

import { AuthUserContext } from './providers/contexts/AuthUserContext'
import { AuthUserProvider } from './providers'
import axios from 'axios'

import Routes from './routes'
import SideBarNav from './components/common/SideNav'

import Home from './views/Landing/Landing'
import RMEIndex from './views/RMEGuide'
import './styles/main.scss'
import utils from './utils/utils'
import _ from 'lodash'
import Grid from './views/RMEGuide/Components/Grid'

interface IAppProps {
  authState?: any
}

let count = 0
let signinUser: any

axios.interceptors.request.use((config: any) => {
  if (signinUser && config.url.indexOf('s3.') <= -1) {
    config.headers['Authorization'] = 'Bearer ' + signinUser.jwtToken
  }
  return config
}, err => {
  return err
})

axios.interceptors.response.use((res: any) => {
  if (res.config && res.config.loading) {
    if (--count <= 0) {

    }
  }
  return res
}, err => {
  return err
})

const App = (props: IAppProps) => {
  const location = useLocation()

  return (
    <AuthUserProvider>
      <AuthUserContext.Consumer>
        {(authUser: any) => {
          if (location.pathname === '/') {
            return <Home/>
          } else if (_.includes(location.pathname, '/rme')) {
            return <RMEIndex/>
          } else {
            signinUser = authUser || utils.getAuthUser()

            return (
              <>
                <SideBarNav/>

                <Switch>
                  {Routes(signinUser).map((prop, key) => {
                    return (
                      <Route
                        path={prop.path}
                        key={key}
                      />
                    )
                  })}
                </Switch>
              </>
            )
          }
        }}
      </AuthUserContext.Consumer>
    </AuthUserProvider>
  )
}

export default App