import { motion } from 'framer-motion';
import { IoStar } from 'react-icons/io5';
import { IoMdQuote } from 'react-icons/io';
import { testimonials } from '../data/testimonials';
import Container from '../components/ui/Container';

export default function TestimonialsSection() {
    return (
        <section className="py-20 bg-[#1a1a1a] overflow-hidden">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <p className="font-sans-luxury text-[10px] tracking-[0.5em] uppercase text-[#C9A96E] mb-3">
                        What Our Customers Say
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl font-light text-white">
                        Stories of Love & Joy
                    </h2>
                    <div className="w-16 h-[1px] bg-[#C9A96E] mx-auto mt-4" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((review, index) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 p-8 hover:border-[#C9A96E]/40 transition-all duration-300 group"
                        >
                            <IoMdQuote className="text-[#C9A96E]/40 mb-4" size={32} />
                            <p className="font-serif text-gray-300 leading-relaxed mb-6 text-sm">
                                "{review.comment}"
                            </p>
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <IoStar key={i} size={12} className={i < review.rating ? 'text-[#C9A96E]' : 'text-gray-600'} />
                                ))}
                            </div>
                            <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                                <img
                                    src={review.avatar}
                                    alt={review.name}
                                    className="w-10 h-10 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                                />
                                <div>
                                    <p className="font-sans-luxury text-xs font-medium text-white tracking-wider">
                                        {review.name}
                                    </p>
                                    <p className="font-sans-luxury text-[10px] text-gray-500">{review.location} &bull; {review.date}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
