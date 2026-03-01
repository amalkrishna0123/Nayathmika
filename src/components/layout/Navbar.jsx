import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    IoBagOutline, IoHeartOutline, IoPersonOutline, IoSearchOutline,
    IoMenuOutline, IoChevronDownOutline, IoCallOutline, IoClose,
} from 'react-icons/io5';
import Drawer from '../ui/Drawer';
import { navCategories } from '../../data/categories';

export default function Navbar({ cartCount = 0, wishlistCount = 0 }) {
    const [scrolled, setScrolled] = useState(false);
    const [megaMenu, setMegaMenu] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const megaTimeout = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleMegaEnter = (id) => {
        clearTimeout(megaTimeout.current);
        setMegaMenu(id);
    };
    const handleMegaLeave = () => {
        megaTimeout.current = setTimeout(() => setMegaMenu(null), 200);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/shop?q=${encodeURIComponent(searchQuery.trim())}`);
            setSearchOpen(false);
            setSearchQuery('');
        }
    };

    return (
        <>
            {/* Announcement bar */}
            <div className="bg-[#1a1a1a] text-[#C9A96E] text-center py-2 font-sans-luxury text-xs tracking-[0.3em] uppercase">
                Free shipping on orders above ₹25,000 &nbsp;|&nbsp; BIS Hallmarked Jewellery &nbsp;|&nbsp; Easy 30-Day Returns
            </div>

            {/* Main navbar */}
            <motion.header
                animate={{ boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.08)' : 'none' }}
                className={`sticky top-0 z-[900] bg-white transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">

                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0">
                        <motion.div whileHover={{ scale: 1.02 }} className="text-center">
                            <p className="font-serif text-2xl tracking-[0.2em] text-[#1a1a1a] uppercase leading-none">
                                Nayathmika
                            </p>
                            <p className="font-sans-luxury text-[9px] tracking-[0.5em] text-[#C9A96E] uppercase mt-0.5">
                                Fine Jewellery
                            </p>
                        </motion.div>
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navCategories.map(cat => (
                            <div
                                key={cat.id}
                                className="relative"
                                onMouseEnter={() => handleMegaEnter(cat.id)}
                                onMouseLeave={handleMegaLeave}
                            >
                                <NavLink
                                    to={`/category/${cat.slug}`}
                                    className="flex items-center gap-1 font-sans-luxury text-xs tracking-widest uppercase text-gray-600 hover:text-[#C9A96E] transition-colors py-2"
                                >
                                    {cat.name}
                                    <IoChevronDownOutline size={12} className={`transition-transform duration-200 ${megaMenu === cat.id ? 'rotate-180' : ''}`} />
                                </NavLink>
                            </div>
                        ))}
                        {['Collections', 'Festival', 'Offers'].map(label => (
                            <NavLink
                                key={label}
                                to={`/${label.toLowerCase().replace(' ', '-')}`}
                                className="font-sans-luxury text-xs tracking-widest uppercase text-gray-600 hover:text-[#C9A96E] transition-colors"
                            >
                                {label}
                            </NavLink>
                        ))}
                    </nav>

                    {/* Right icons */}
                    <div className="flex items-center gap-4">
                        {/* Search */}
                        <button onClick={() => setSearchOpen(true)} className="p-2 hover:text-[#C9A96E] transition-colors hidden sm:flex">
                            <IoSearchOutline size={20} />
                        </button>

                        {/* Wishlist */}
                        <Link to="/wishlist" className="p-2 hover:text-[#C9A96E] transition-colors relative hidden sm:flex">
                            <IoHeartOutline size={20} />
                            {wishlistCount > 0 && (
                                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#C9A96E] text-white text-[10px] flex items-center justify-center font-sans-luxury">
                                    {wishlistCount}
                                </span>
                            )}
                        </Link>

                        {/* Cart */}
                        <Link to="/cart" className="p-2 hover:text-[#C9A96E] transition-colors relative">
                            <IoBagOutline size={20} />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#C9A96E] text-white text-[10px] flex items-center justify-center font-sans-luxury">
                                    {cartCount}
                                </span>
                            )}
                        </Link>

                        {/* User */}
                        <Link to="/dashboard" className="p-2 hover:text-[#C9A96E] transition-colors hidden sm:flex">
                            <IoPersonOutline size={20} />
                        </Link>

                        {/* Hamburger */}
                        <button onClick={() => setDrawerOpen(true)} className="p-2 hover:text-[#C9A96E] transition-colors lg:hidden">
                            <IoMenuOutline size={22} />
                        </button>
                    </div>
                </div>

                {/* Mega menu dropdown */}
                <AnimatePresence>
                    {megaMenu && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            onMouseEnter={() => handleMegaEnter(megaMenu)}
                            onMouseLeave={handleMegaLeave}
                            className="absolute left-0 w-full bg-white border-t border-gray-100 shadow-2xl z-[901]"
                        >
                            <div className="max-w-7xl mx-auto px-8 py-8 grid grid-cols-5 gap-6">
                                {/* Subcategories */}
                                <div className="col-span-3">
                                    <p className="font-sans-luxury text-[10px] tracking-[0.4em] uppercase text-gray-400 mb-4">
                                        Shop by Type
                                    </p>
                                    <div className="grid grid-cols-3 gap-2">
                                        {navCategories.find(c => c.id === megaMenu)?.subcategories.map(sub => (
                                            <Link
                                                key={sub.id}
                                                to={`/category/${navCategories.find(c => c.id === megaMenu)?.slug}/${sub.slug}`}
                                                onClick={() => setMegaMenu(null)}
                                                className="text-sm font-sans-luxury text-gray-600 hover:text-[#C9A96E] transition-colors py-1.5 border-b border-gray-50 hover:border-[#C9A96E]/30"
                                            >
                                                {sub.name}
                                                <span className="text-gray-300 text-xs ml-1">({sub.count})</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                                {/* Feature image */}
                                <div className="col-span-2">
                                    <img
                                        src={navCategories.find(c => c.id === megaMenu)?.image}
                                        alt="Category"
                                        className="w-full h-48 object-cover"
                                    />
                                    <p className="mt-2 font-sans-luxury text-xs text-[#C9A96E] tracking-widest uppercase">
                                        Explore {navCategories.find(c => c.id === megaMenu)?.name}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.header>

            {/* Search overlay */}
            <AnimatePresence>
                {searchOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9999] bg-white/95 backdrop-blur-sm flex items-start justify-center pt-32"
                    >
                        <button onClick={() => setSearchOpen(false)} className="absolute top-6 right-6 p-2 hover:text-[#C9A96E] transition-colors">
                            <IoClose size={24} />
                        </button>
                        <div className="w-full max-w-2xl px-6">
                            <p className="font-sans-luxury text-xs tracking-[0.4em] uppercase text-[#C9A96E] mb-6 text-center">
                                Search Jewellery
                            </p>
                            <form onSubmit={handleSearch} className="flex border-b-2 border-[#C9A96E] pb-2">
                                <input
                                    autoFocus
                                    type="text"
                                    value={searchQuery}
                                    onChange={e => setSearchQuery(e.target.value)}
                                    placeholder="Search rings, necklaces, earrings..."
                                    className="flex-1 font-serif text-2xl outline-none bg-transparent placeholder:text-gray-200"
                                />
                                <button type="submit" className="text-[#C9A96E] hover:scale-110 transition-transform">
                                    <IoSearchOutline size={28} />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Drawer */}
            <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} title="Menu" position="left">
                <div className="p-6 flex flex-col gap-1">
                    {navCategories.map(cat => (
                        <div key={cat.id}>
                            <Link
                                to={`/category/${cat.slug}`}
                                onClick={() => setDrawerOpen(false)}
                                className="block font-sans-luxury text-xs tracking-widest uppercase py-3 border-b border-gray-50 hover:text-[#C9A96E] transition-colors"
                            >
                                {cat.name}
                            </Link>
                        </div>
                    ))}
                    {['Shop', 'Collections', 'Festival', 'Offers', 'About', 'Contact'].map(label => (
                        <Link
                            key={label}
                            to={`/${label.toLowerCase()}`}
                            onClick={() => setDrawerOpen(false)}
                            className="block font-sans-luxury text-xs tracking-widest uppercase py-3 border-b border-gray-50 hover:text-[#C9A96E] transition-colors"
                        >
                            {label}
                        </Link>
                    ))}
                    <div className="mt-6 flex flex-col gap-3">
                        <Link to="/dashboard" onClick={() => setDrawerOpen(false)} className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#C9A96E] transition-colors">
                            <IoPersonOutline size={18} /> My Account
                        </Link>
                        <Link to="/wishlist" onClick={() => setDrawerOpen(false)} className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#C9A96E] transition-colors">
                            <IoHeartOutline size={18} /> Wishlist
                        </Link>
                        <Link to="/cart" onClick={() => setDrawerOpen(false)} className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#C9A96E] transition-colors">
                            <IoBagOutline size={18} /> Cart
                        </Link>
                        <a href="tel:+919876543210" className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#C9A96E] transition-colors">
                            <IoCallOutline size={18} /> +91 98765 43210
                        </a>
                    </div>
                </div>
            </Drawer>
        </>
    );
}
