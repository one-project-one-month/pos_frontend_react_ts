import { Outlet } from "react-router-dom"
import SideNav from "../../components/SideNav/SideNav"

const Layout = () => {
    return (
        <div className="flex dark:bg-dark-primary">
            <SideNav />
            <div className="w-4/5">
                <Outlet />
            </div>

        </div>
    )
}

export default Layout