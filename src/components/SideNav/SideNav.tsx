import { cn } from '@/lib/utils';
import { TRoutes } from '@/type/routesType';
import { Home, Package, NotepadText, UserCog, Store, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from "react-router-dom"

const navLinks = [
    {
        routeName: "Home",
        icon: <Home />,
        route: "/"
    },
    {
        routeName: "Management",
        icon: <UserCog />,
        route: "/management",
        subRoutes: [
            {
                routeName: "Shops",
                route: "/management",
            },
            {
                routeName: "Customers",
                route: "/management/customers",
            },

            {
                routeName: "Staffs",
                route: "/management/staffs",
            }
        ]
    },
    {
        routeName: "Products",
        icon: <Package />,
        route: "/products",
        subRoutes: [
            {
                routeName: "Products",
                route: "/products",
            },
            {
                routeName: "Category",
                route: "/products/category",
            },

        ]

    },

    {
        routeName: "Invoice",
        icon: <NotepadText />,
        route: "/sale-invoice",
        subRoutes: [
            {
                routeName: "Invoice",
                route: "/sale-invoice",
            },
            {
                routeName: "History",
                route: "/sale-invoice/history",
            },

        ]
    },

]

const SideNav = () => {

    return (
        <aside
            id="sidebar"
            className=" h-screen transition-all duration-300 "
            aria-label="Sidebar"
        >
            <div className="flex h-full flex-col border-r border-slate-200 bg-white/70 px-3 py-4 dark:border-slate-700 dark:bg-slate-900 ">
                <div
                    className="mb-5 flex items-center rounded-lg px-3 py-2 text-slate-900 dark:text-white"
                >
                    <Store />
                    <span className="ml-3 text-base font-semibold">POS</span>
                </div>
                <ul className="space-y-2 text-sm font-medium">
                    {navLinks.map((navLink, i) => (
                        <SideNavLink key={i} navLink={navLink} />
                    ))}
                </ul>
            </div>
        </aside >

    )
}

const SideNavLink = ({ navLink }: { navLink: TRoutes }) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            {navLink.subRoutes ? (
                <>
                    <li>
                        <NavLink
                            to={navLink.route}
                            className={({ isActive }) => cn("flex rounded-lg px-3 py-2 text-slate-900  dark:text-white dark:hover:bg-slate-700", { "bg-slate-900 text-white": isActive })}
                            onClick={handleOpen}
                        >
                            <div className='flex items-center'>
                                {navLink.icon}
                                <span className="mx-4">{navLink.routeName}</span>
                                <button className={cn({ "rotate-180 transition-rotate duration-100 ease-in-out": isOpen })} ><ChevronDown /></button>
                            </div>
                        </NavLink>
                    </li>

                    {isOpen && navLink.subRoutes?.map(subroute => (
                        <NavLink
                            key={subroute.routeName}
                            to={subroute.route}
                            className={({ isActive }) => cn("flex items-center rounded-lg px-8 py-2 text-slate-900  dark:text-white dark:hover:bg-gray-100 ", { "text-slate-600": isActive })}
                            end
                        >
                            <span>{subroute.routeName}</span>
                        </NavLink>
                    ))}
                </>


            ) : (
                <li>
                    <NavLink
                        to={navLink.route}
                        className={({ isActive }: any) => cn("flex rounded-lg px-3 py-2 text-slate-900  dark:text-white dark:hover:bg-slate-700", { "bg-slate-900 text-white": isActive })}
                    >
                        <div className='flex items-center'>
                            {navLink.icon}
                            <span className="ml-3 flex-1 whitespace-nowrap">{navLink.routeName}</span>
                        </div>
                    </NavLink>
                </li>
            )
            }


        </>

    )
}


export default SideNav
