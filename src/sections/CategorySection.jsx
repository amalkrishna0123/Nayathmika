import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { categories } from '../data/categories';
import Container from '../components/ui/Container';

export default function CategorySection() {
    return (
        <section className="py-20 bg-[#FDFAF5]">
            <Container>
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <p className="font-sans-luxury text-[10px] tracking-[0.5em] uppercase text-[#C9A96E] mb-3">
                        Our Collections
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl font-light text-[#1a1a1a]">
                        Shop by Category
                    </h2>
                    <div className="w-16 h-[1px] bg-[#C9A96E] mx-auto mt-4" />
                </motion.div>

                {/* Category grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={cat.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                        >
                            <Link to={`/category/${cat.slug}`} className="group flex flex-col items-center">
                                {/* Circle image */}
                                <div className="relative w-full aspect-square rounded-full overflow-hidden border-2 border-transparent group-hover:border-[#C9A96E] transition-all duration-400 shadow-md">
                                    <img
                                        src={cat.image}
                                        alt={cat.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-300 rounded-full" />
                                </div>
                                <p className="mt-3 font-sans-luxury text-xs tracking-[0.2em] uppercase text-gray-600 group-hover:text-[#C9A96E] transition-colors text-center">
                                    {cat.name}
                                </p>
                                <p className="font-sans-luxury text-[10px] text-gray-300">{cat.count} pieces</p>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
