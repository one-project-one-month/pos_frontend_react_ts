import { Outlet } from "react-router-dom"
import SideNav from "../../components/SideNav/SideNav"

const Layout = () => {
    return (
        <div className="flex dark:bg-dark-primary">
            <SideNav />
            <Outlet />
        </div>
    )
}

export default Layout