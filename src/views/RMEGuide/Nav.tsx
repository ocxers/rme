import React from 'react'
import cx from 'classnames'
import {NavLink} from "react-router-dom"
import RME from 'react-magic-element'
import i18n from 'i18next'
import RMERoutes from './routes'
import _ from 'lodash'

export default (props: any) => {
    const renderChildren = (children: any) => {
        if (children) {
        const navItems = _.map(children, (child: any, idx: number) => {
            return (
                <li key={idx}>
                    <NavLink
                        to={child.layout + child.path}
                        className={'nav-link'}
                        activeClassName={'active'}
                    >
                        <p>{i18n.t(child.name)}</p>
                    </NavLink>
                </li>
            )
        })
            return (
                <RME ul cn={'sub-items'}>{navItems}</RME>
            )
        } else {
            return (<></>)
        }
    }
    const renderComponents = () => {
        return _.values(RMERoutes).map((route: any, idx: number) => {
            return (
                <li key={idx}>
                    <NavLink
                        to={route.layout + route.path}
                        className={'nav-link'}
                        activeClassName={'active'}
                    >
                        <p>{i18n.t(route.name)}</p>
                    </NavLink>
                    {renderChildren(route.children)}
                </li>
            )
        })
    }
    return (
        <RME nav fixed fill='60px,auto,0,0' w240 cn={'br oy-auto nav'}>
            {renderComponents()}
        </RME>
    )
}