import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import RME from 'react-magic-element'
import RMERoutes from './routes'
import _ from 'lodash'

export default (props: any) => {
  return (
    <RME fixed pos='60,0,0,240' cn-oy-auto pb30>
      <Switch>
        {_.values(RMERoutes).map((prop: any, key: number) => {
          return (
            <Route
              key={key}
              path={prop.layout + prop.path}
              component={prop.component}
            />
          )
        })}
        <Redirect strict from="/rme/" to="/rme/getting-started" />
        <Redirect strict from="/rme" to="/rme/getting-started" />
      </Switch>
    </RME>
  )
}