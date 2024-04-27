import { navLinks } from '@/constants/nav-link-constant';
import SideNavLink from './SideNavLink';
import { ModeToggle } from '../ui/mode-toggle';

const SideNav = () => {
    return (
        <aside className="min-h-screen w-60 flex flex-col border-r border-slate-200 bg-white/70 px-3 py-4 dark:border-slate-700 dark:bg-background ">
            <div
                className="mb-5 flex justify-between items-center rounded-lg px-1 py-2 text-slate-900 dark:text-white"
            >
                <div className='flex items-center'>
                    {/* <Store size={36} color="#164e63" /> */}
                    <span className="ml-1 text-xl text-cyan-900 dark:text-cyan-200 font-semibold">POS</span>
                </div>

                <ModeToggle />
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
