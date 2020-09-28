import React from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import RME from 'react-magic-element'
import _ from 'lodash'
import RMERoutes from '../routes'

export default (props: any) => {
  const location = useLocation()
  const renderDefault = () => {
    if (location.pathname === '/rme/styles') {
      return (
        <RME>Styles</RME>
      )
    }
  }
  return (
    <RME>
      <Switch>
        {RMERoutes.styles.children.map((prop: any, key: number) => {
          return (
            <Route
              key={key}
              path={prop.layout + prop.path}
            >
              {prop.component}
            </Route>
          )
        })}
      </Switch>
      {renderDefault()}
    </RME>
  )
}