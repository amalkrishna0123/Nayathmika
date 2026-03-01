import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProductCard from '../components/products/ProductCard';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { featuredProducts } from '../data/products';

export default function FeaturedProducts() {
    return (
        <section className="py-20 bg-white">
            <Container>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4"
                >
                    <div>
                        <p className="font-sans-luxury text-[10px] tracking-[0.5em] uppercase text-[#C9A96E] mb-2">
                            Handpicked for You
                        </p>
                        <h2 className="font-serif text-4xl md:text-5xl font-light text-[#1a1a1a]">
                            Featured Pieces
                        </h2>
                    </div>
                    <Link to="/shop">
                        <Button variant="outline" size="sm">View All</Button>
                    </Link>
                </motion.div>

                {/* Product grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                    {featuredProducts.slice(0, 8).map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <ProductCard product={product} />
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
