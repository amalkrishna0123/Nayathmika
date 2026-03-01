import { useState, useEffect } from 'react';
import { NavLink, Link, Outlet, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    IoHomeOutline, IoListOutline, IoHeartOutline, IoLocationOutline,
    IoCardOutline, IoTicketOutline, IoReturnUpBackOutline, IoWalletOutline,
    IoNotificationsOutline, IoPersonOutline, IoLockClosedOutline,
    IoChevronBackOutline, IoLogOutOutline, IoMenuOutline,
} from 'react-icons/io5';

const sidebarLinks = [
    { to: '/dashboard', label: 'Overview', icon: IoHomeOutline, end: true },
    { to: '/dashboard/orders', label: 'My Orders', icon: IoListOutline },
    { to: '/dashboard/track-order', label: 'Track Order', icon: IoLocationOutline },
    { to: '/dashboard/wishlist', label: 'Wishlist', icon: IoHeartOutline },
    { to: '/dashboard/addresses', label: 'Saved Addresses', icon: IoLocationOutline },
    { to: '/dashboard/payments', label: 'Payment Methods', icon: IoCardOutline },
    { to: '/dashboard/coupons', label: 'Coupons', icon: IoTicketOutline },
    { to: '/dashboard/returns', label: 'Returns & Refunds', icon: IoReturnUpBackOutline },
    { to: '/dashboard/wallet', label: 'Wallet', icon: IoWalletOutline },
    { to: '/dashboard/notifications', label: 'Notifications', icon: IoNotificationsOutline },
    { to: '/dashboard/profile', label: 'Profile Settings', icon: IoPersonOutline },
    { to: '/dashboard/password', label: 'Change Password', icon: IoLockClosedOutline },
];

export default function DashboardLayout() {
    const [collapsed, setCollapsed] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const navigate = useNavigate();

    // Collapse sidebar below lg
    useEffect(() => {
        const check = () => setCollapsed(window.innerWidth < 1024);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    return (
        <div className="min-h-screen bg-[#FDFAF5] flex">
            {/* Overlay for mobile */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        onClick={() => setMobileOpen(false)}
                        className="fixed inset-0 z-40 bg-black/40 lg:hidden"
                    />
                )}
            </AnimatePresence>

            {/* Sidebar */}
            <motion.aside
                animate={{ width: collapsed && !mobileOpen ? 0 : mobileOpen ? 260 : 260 }}
                className={`
          bg-white border-r border-gray-100 flex flex-col h-screen z-50 overflow-hidden
          ${mobileOpen ? 'fixed' : 'relative'} lg:relative
        `}
                style={{ minWidth: mobileOpen ? 260 : undefined }}
            >
                {/* Sidebar header */}
                <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                    <Link to="/" className="font-serif text-lg tracking-[0.2em] uppercase text-[#1a1a1a]">
                        Nayathmika
                    </Link>
                    <button onClick={() => { setCollapsed(!collapsed); setMobileOpen(false); }} className="text-gray-400 hover:text-[#C9A96E] transition-colors">
                        <IoChevronBackOutline
                            size={18}
                            className={`transition-transform duration-300 ${collapsed ? 'rotate-180' : ''}`}
                        />
                    </button>
                </div>

                {/* User info */}
                <div className="px-6 py-5 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#C9A96E]/20 flex items-center justify-center">
                            <IoPersonOutline className="text-[#C9A96E]" size={18} />
                        </div>
                        <div>
                            <p className="font-sans-luxury text-xs font-medium text-[#1a1a1a]">Priya Sharma</p>
                            <p className="font-sans-luxury text-[10px] text-gray-400">Gold Member ✦</p>
                        </div>
                    </div>
                </div>

                {/* Nav links */}
                <nav className="flex-1 overflow-y-auto py-4">
                    {sidebarLinks.map(({ to, label, icon: Icon, end }) => (
                        <NavLink
                            key={to}
                            to={to}
                            end={end}
                            onClick={() => setMobileOpen(false)}
                            className={({ isActive }) => `
                flex items-center gap-3 px-6 py-3 font-sans-luxury text-xs tracking-widest uppercase
                transition-all duration-200 group border-l-2
                ${isActive
                                    ? 'text-[#C9A96E] bg-[#C9A96E]/5 border-[#C9A96E]'
                                    : 'text-gray-500 hover:text-gray-900 border-transparent hover:bg-gray-50'
                                }
              `}
                        >
                            <Icon size={16} className="flex-shrink-0" />
                            <span>{label}</span>
                        </NavLink>
                    ))}
                </nav>

                {/* Bottom actions */}
                <div className="p-6 border-t border-gray-100 flex flex-col gap-2">
                    <Link
                        to="/"
                        className="flex items-center gap-2 font-sans-luxury text-xs tracking-widest uppercase text-gray-400 hover:text-[#C9A96E] transition-colors"
                    >
                        <IoChevronBackOutline size={14} /> Back to Store
                    </Link>
                    <button className="flex items-center gap-2 font-sans-luxury text-xs tracking-widest uppercase text-red-400 hover:text-red-600 transition-colors">
                        <IoLogOutOutline size={14} /> Sign Out
                    </button>
                </div>
            </motion.aside>

            {/* Main content */}
            <div className="flex-1 min-w-0">
                {/* Mobile topbar */}
                <div className="lg:hidden flex items-center gap-4 px-6 py-4 bg-white border-b border-gray-100 sticky top-0 z-30">
                    <button onClick={() => setMobileOpen(true)} className="text-gray-500">
                        <IoMenuOutline size={22} />
                    </button>
                    <span className="font-serif text-base tracking-[0.2em] uppercase">My Account</span>
                </div>

                {/* Page content */}
                <div className="p-6 md:p-10 max-w-5xl">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
