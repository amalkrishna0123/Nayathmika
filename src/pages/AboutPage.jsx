import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import Breadcrumb from '../components/ui/Breadcrumb';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

export default function AboutPage() {
    return (
        <div className="py-12">
            <Container>
                <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'About Us' }]} />

                {/* Hero Section */}
                <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="font-sans-luxury text-[10px] tracking-[0.5em] uppercase text-[#C9A96E] mb-4">Our Heritage</p>
                        <h1 className="font-serif text-5xl md:text-6xl font-light mb-8 leading-tight">
                            Crafting stories in<br />
                            <em className="text-[#C9A96E]">Gold & Diamonds</em>
                        </h1>
                        <p className="font-sans-luxury text-sm text-gray-500 leading-relaxed mb-6">
                            Founded in 1995, Nayathmika began with a simple vision: to create jewellery that transcends time. What started as a small artisanal boutique in Mumbai has grown into a hallmark of luxury, trusted by generations for its uncompromising quality and exquisite designs.
                        </p>
                        <p className="font-sans-luxury text-sm text-gray-500 leading-relaxed mb-10">
                            Every piece at Nayathmika is a labor of love, handcrafted by master artisans who have inherited centuries of traditional techniques, blended with modern precision.
                        </p>
                        <Link to="/shop">
                            <Button variant="primary" size="lg">Explore Our Archive</Button>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] bg-[#F9F4EC] overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=800&auto=format"
                                alt="Craftsmanship"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                        {/* Decorative box */}
                        <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-[#C9A96E] -z-10" />
                    </motion.div>
                </div>

                {/* Values */}
                <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        { title: 'Authenticity', desc: 'Every diamond and gemstone is ethically sourced and 100% certified by international laboratories like IGI and GIA.' },
                        { title: 'Excellence', desc: 'We settle for nothing less than perfection in every facet, setting, and finish of our jewellery.' },
                        { title: 'Tradition', desc: 'Preserving the rich heritage of Indian jewellery making while embracing contemporary aesthetics.' },
                    ].map((v, i) => (
                        <motion.div
                            key={v.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="text-center"
                        >
                            <h3 className="font-serif text-2xl mb-4 font-light">{v.title}</h3>
                            <p className="font-sans-luxury text-sm text-gray-400 leading-relaxed">
                                {v.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </div>
    );
}
