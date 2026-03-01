import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

export default function HeroBanner() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1a1a1a]">
            {/* Background image with overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&auto=format')",
                    filter: 'brightness(0.35)',
                }}
            />

            {/* Gold gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

            {/* Content */}
            <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-sans-luxury text-xs tracking-[0.6em] uppercase text-[#C9A96E] mb-6"
                >
                    Exclusive — BIS Hallmarked — IGI Certified
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-none tracking-wide mb-6"
                >
                    Crafted for<br />
                    <em className="text-[#C9A96E]">Eternity</em>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="font-sans-luxury text-sm md:text-base tracking-wider text-gray-300 mb-10 max-w-xl mx-auto leading-relaxed"
                >
                    Discover our curated collection of fine jewellery — from timeless classics to contemporary masterpieces, each piece a testament to exceptional craftsmanship.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="flex flex-wrap items-center justify-center gap-4"
                >
                    <Link to="/shop">
                        <Button variant="primary" size="lg">Explore Collection</Button>
                    </Link>
                    <Link to="/premium-collection">
                        <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#1a1a1a]">
                            Premium Pieces
                        </Button>
                    </Link>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="font-sans-luxury text-[10px] tracking-[0.4em] uppercase text-gray-400">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="w-[1px] h-10 bg-gradient-to-b from-[#C9A96E] to-transparent"
                />
            </motion.div>
        </section>
    );
}
