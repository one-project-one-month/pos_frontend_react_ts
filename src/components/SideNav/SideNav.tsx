import { navLinks } from '@/constants/nav-link-constant';
import { Store } from 'lucide-react';
import SideNavLink from './SideNavLink';

const SideNav = () => {
    return (
        <aside className="w-64 flex flex-col border-r border-slate-200 bg-white/70 px-3 py-4 dark:border-slate-700 dark:bg-slate-900 ">
            <div
                className="mb-5 flex justify-center items-center rounded-lg px-3 py-2 text-slate-900 dark:text-white"
            >
                <Store size={36} color="#164e63" />
                <span className="ml-3 text-xl text-cyan-900 font-semibold">POS</span>
            </div>
            <ul className="space-y-2 text-sm font-medium">
                {navLinks.map((navLink, i) => (
                    <SideNavLink key={i} navLink={navLink} />
                ))}
            </ul>
        </aside>


    )
}


export default SideNav
