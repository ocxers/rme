import React from 'react'
import cx from 'classnames'
import RME from 'react-magic-element'
import RMERoutes from './routes'
import {Route, Switch} from "react-router-dom"
import _ from 'lodash'

export default (props: any) => {
    return (
        <RME fixed p15 fill='60px,,,240px' cn-oy-auto>
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
        </RME>
    )
}