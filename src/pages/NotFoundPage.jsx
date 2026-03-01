import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

export default function NotFoundPage() {
    return (
        <div className="min-h-[90vh] flex items-center justify-center">
            <Container size="sm">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <motion.p
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ repeat: Infinity, duration: 3 }}
                        className="font-serif text-[120px] md:text-[180px] font-light text-[#C9A96E]/20 leading-none"
                    >
                        404
                    </motion.p>
                    <p className="font-sans-luxury text-[10px] tracking-[0.5em] uppercase text-[#C9A96E] mb-4 -mt-8">Page Not Found</p>
                    <h1 className="font-serif text-4xl font-light mb-4">Lost in Luxury?</h1>
                    <p className="font-sans-luxury text-sm text-gray-400 mb-10 leading-relaxed">
                        The page you're looking for doesn't exist. Let us guide you back to our exquisite collection.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link to="/"><Button variant="primary" size="lg">Go Home</Button></Link>
                        <Link to="/shop"><Button variant="outline" size="lg">Browse Shop</Button></Link>
                    </div>
                </motion.div>
            </Container>
        </div>
    );
}
