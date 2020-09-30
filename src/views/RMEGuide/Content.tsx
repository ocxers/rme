import React from 'react'
import { useLocation } from 'react-router-dom'
import RME from 'react-magic-element'
import RMERoutes from './routes'
import { Route, Switch } from 'react-router-dom'
import _ from 'lodash'

export default (props: any) => {
  const location = useLocation()
  const renderDefaultStylesContent = () => {
    if (location.pathname === '/rme') {
      return (
        <RME p30>
          <RME h1>Welcome to RME!</RME>
          <RME>It's a personal small library to speed up a little.</RME>
        </RME>
      )
    }
  }
  return (
    <RME fixed fill='60px,0,0,240px' cn-oy-auto pb30>
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
      </Switch>
      {renderDefaultStylesContent()}
    </RME>
  )
}