import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Container from '../components/ui/Container';

const features = [
    { icon: '💎', title: 'BIS Hallmarked', desc: 'Every piece certified for gold purity and authenticity.' },
    { icon: '🔬', title: 'IGI Certified', desc: 'Our diamonds are IGI & GIA certified for your peace of mind.' },
    { icon: '✦', title: 'Master Crafted', desc: '30+ years of artisanal jewellery craftsmanship tradition.' },
    { icon: '🚚', title: 'Free Shipping', desc: 'Complimentary insured shipping on all orders above ₹25,000.' },
    { icon: '↩', title: '30-Day Returns', desc: 'Hassle-free returns within 30 days, no questions asked.' },
    { icon: '🛡', title: 'Lifetime Service', desc: 'Free cleaning and minor repairs for the lifetime of your piece.' },
];

export default function WhyChooseUs() {
    return (
        <section className="py-20 bg-white">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <p className="font-sans-luxury text-[10px] tracking-[0.5em] uppercase text-[#C9A96E] mb-3">
                        The Nayathmika Promise
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl font-light text-[#1a1a1a]">
                        Why Choose Us
                    </h2>
                    <div className="w-16 h-[1px] bg-[#C9A96E] mx-auto mt-4" />
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                    {features.map((f, i) => (
                        <motion.div
                            key={f.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="text-center group"
                        >
                            <div className="w-14 h-14 border border-[#C9A96E]/30 flex items-center justify-center mx-auto mb-4 text-2xl group-hover:border-[#C9A96E] group-hover:bg-[#C9A96E]/5 transition-all duration-300">
                                {f.icon}
                            </div>
                            <h3 className="font-sans-luxury text-xs tracking-widest uppercase text-[#1a1a1a] mb-2">{f.title}</h3>
                            <p className="font-sans-luxury text-sm text-gray-400 leading-relaxed">{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
