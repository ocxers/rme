import { NavLink, useLocation } from 'react-router-dom'
import React from 'react'
// import './SideBarNav.scss'
import cx from 'classnames'
import Routes from '../../routes'
import utils from '../../utils/utils'
import i18n from "i18next"

const SideBarNav = (props: any) => {
    let user = utils.getAuthUser()
    let location = useLocation()

    const activeRoute = (routeName: string) => {
        return location.pathname.indexOf(routeName) > -1 ? 'active' : ''
    }

    return (
        <div className={cx('side-bar-nav')}>
            <div className="nav-list">
                <ul>
                    {Routes(user).map((prop: any, key: number) => {
                        if (!prop.hide) {
                            return (
                                <li
                                    className={
                                        activeRoute(prop.path) + (prop.pro ? ' active-pro' : '')
                                    }
                                    key={key}
                                >
                                    <NavLink
                                        to={prop.path}
                                        className={'nav-link'}
                                        activeClassName={'active'}
                                    >
                                        {/*{prop.icon}*/}
                                        <p>{i18n.t(prop.name)}</p>
                                    </NavLink>
                                </li>
                            )
                        }
                    })}
                </ul>
            </div>
        </div>
    )
}

export default SideBarNav
