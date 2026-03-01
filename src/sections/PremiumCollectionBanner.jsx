import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Container from '../components/ui/Container';

export default function PremiumCollectionBanner() {
    return (
        <section className="py-0 bg-white">
            <div className="relative h-[500px] overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&auto=format"
                    alt="Premium Collection"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/10" />
                <div className="absolute inset-0 flex items-center">
                    <Container>
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="max-w-lg text-white"
                        >
                            <p className="font-sans-luxury text-[10px] tracking-[0.6em] uppercase text-[#C9A96E] mb-4">
                                Exclusive — Limited Edition
                            </p>
                            <h2 className="font-serif text-5xl md:text-6xl font-light leading-none mb-4">
                                Premium<br /><em>Collection</em>
                            </h2>
                            <p className="font-sans-luxury text-sm text-gray-300 tracking-wider leading-relaxed mb-8 max-w-xs">
                                Our finest masterpieces — rare gemstones, extraordinary craftsmanship, truly one of a kind.
                            </p>
                            <Link to="/premium-collection">
                                <Button variant="primary" size="lg">Discover Premium</Button>
                            </Link>
                        </motion.div>
                    </Container>
                </div>
            </div>
        </section>
    );
}
