import Dashboard from './views/Dashboard/Dashboard'
import Profile from "./views/Profile/Profile"

const routes: any = {
    profile: {
        path: "/profile",
        name: "Profile",
        // icon: DWOIcons.IconUser(),
        component: Profile,
        layout: "/admin",
    },
    dashboard: {
        path: "/",
        name: "Dashboard",
        // icon: DWOIcons.IconDashboard(),
        component: Dashboard,
        layout: "/admin",
    }
}

export default (user: any) => {
    let tempRoutes: Array<any> = []

    if (!tempRoutes.length) {
        switch (user.type) {
            case 'admin':
                'profile,dashboard'.split(',').map(item => {
                    tempRoutes.push(routes[item])
                })
                break
        }
    }
    return tempRoutes
}