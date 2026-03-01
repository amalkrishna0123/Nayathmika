import { Link } from 'react-router-dom';
import { IoLogoInstagram, IoLogoFacebook, IoLogoTwitter, IoLogoPinterest } from 'react-icons/io5';
import Container from '../ui/Container';

const footerLinks = {
    Shop: [
        { label: 'Rings', to: '/category/rings' },
        { label: 'Necklaces', to: '/category/necklaces' },
        { label: 'Earrings', to: '/category/earrings' },
        { label: 'Bangles', to: '/category/bangles' },
        { label: 'Bracelets', to: '/category/bracelets' },
        { label: 'Mangalsutra', to: '/category/mangalsutra' },
    ],
    Collections: [
        { label: 'New Arrivals', to: '/new-arrivals' },
        { label: 'Best Sellers', to: '/best-sellers' },
        { label: 'Premium Collection', to: '/premium-collection' },
        { label: 'Festival Collection', to: '/festival-collection' },
        { label: 'Combo Offers', to: '/combo-offers' },
    ],
    Customer: [
        { label: 'Track Order', to: '/track-order' },
        { label: 'FAQs', to: '/faqs' },
        { label: 'Contact Us', to: '/contact' },
        { label: 'About Us', to: '/about' },
        { label: 'Testimonials', to: '/testimonials' },
        { label: 'Blog', to: '/blog' },
    ],
    Policies: [
        { label: 'Shipping & Delivery', to: '/shipping' },
        { label: 'Returns & Refunds', to: '/refund-policy' },
        { label: 'Privacy Policy', to: '/privacy-policy' },
        { label: 'Terms & Conditions', to: '/terms' },
    ],
};

const socials = [
    { icon: IoLogoInstagram, href: '#', label: 'Instagram' },
    { icon: IoLogoFacebook, href: '#', label: 'Facebook' },
    { icon: IoLogoTwitter, href: '#', label: 'Twitter' },
    { icon: IoLogoPinterest, href: '#', label: 'Pinterest' },
];

export default function Footer() {
    return (
        <footer className="bg-[#1a1a1a] text-gray-400">
            {/* Top section */}
            <div className="border-b border-white/10">
                <Container className="py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
                        {/* Brand */}
                        <div className="lg:col-span-2">
                            <h2 className="font-serif text-2xl tracking-[0.2em] text-white uppercase mb-1">Nayathmika</h2>
                            <p className="font-sans-luxury text-[10px] tracking-[0.5em] text-[#C9A96E] uppercase mb-4">Fine Jewellery</p>
                            <p className="text-sm leading-relaxed text-gray-500 mb-6 max-w-xs">
                                Crafting timeless jewellery with passion and precision since 1995. Each piece tells a story of love, tradition, and luxury.
                            </p>
                            <div className="flex gap-4">
                                {socials.map(({ icon: Icon, href, label }) => (
                                    <a key={label} href={href} aria-label={label}
                                        className="w-9 h-9 border border-white/20 flex items-center justify-center text-gray-500 hover:border-[#C9A96E] hover:text-[#C9A96E] transition-all duration-300">
                                        <Icon size={16} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Link columns */}
                        {Object.entries(footerLinks).map(([title, links]) => (
                            <div key={title}>
                                <h4 className="font-sans-luxury text-[10px] tracking-[0.4em] uppercase text-[#C9A96E] mb-5">{title}</h4>
                                <ul className="flex flex-col gap-3">
                                    {links.map(({ label, to }) => (
                                        <li key={label}>
                                            <Link to={to} className="text-sm text-gray-500 hover:text-white transition-colors">
                                                {label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>

            {/* Bottom bar */}
            <Container className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="font-sans-luxury text-xs text-gray-600">
                    © {new Date().getFullYear()} Nayathmika Fine Jewellery. All rights reserved.
                </p>
                <div className="flex items-center gap-4">
                    <img src="https://cdn.razorpay.com/static/assets/merchant-badge/badge-light.png" alt="Razorpay" className="h-5 opacity-40 hover:opacity-60 transition-opacity" />
                    <p className="font-sans-luxury text-xs text-gray-600">BIS Hallmarked &bull; IGI Certified</p>
                </div>
            </Container>
        </footer>
    );
}
