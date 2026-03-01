import { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { useToast } from '../components/ui/Toast';

export default function NewsletterSection() {
    const [email, setEmail] = useState('');
    const { toast } = useToast();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            toast('Thank you for subscribing! ✨', 'success');
            setEmail('');
        }
    };

    return (
        <section className="py-20 bg-[#FDFAF5] relative overflow-hidden">
            {/* Decorative gold lines */}
            <div className="absolute top-10 left-1/4 w-32 h-[1px] bg-gradient-to-r from-transparent to-[#C9A96E]/30" />
            <div className="absolute bottom-10 right-1/4 w-32 h-[1px] bg-gradient-to-l from-transparent to-[#C9A96E]/30" />

            <Container size="sm">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="font-sans-luxury text-[10px] tracking-[0.5em] uppercase text-[#C9A96E] mb-3">
                        Join Our World
                    </p>
                    <h2 className="font-serif text-4xl md:text-5xl font-light text-[#1a1a1a] mb-4">
                        Exclusive Member Benefits
                    </h2>
                    <p className="font-sans-luxury text-sm text-gray-500 tracking-wider mb-10 max-w-md mx-auto leading-relaxed">
                        Subscribe to receive early access to new collections, exclusive offers, and expert jewellery care tips.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                        <input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Your email address"
                            required
                            className="flex-1 px-5 py-3.5 border border-gray-200 font-sans-luxury text-sm outline-none focus:border-[#C9A96E] bg-white transition-colors placeholder:text-gray-300"
                        />
                        <Button type="submit" size="md" variant="primary">
                            Subscribe
                        </Button>
                    </form>

                    <p className="mt-4 font-sans-luxury text-[10px] tracking-wider text-gray-300">
                        No spam ever. Unsubscribe at any time.
                    </p>
                </motion.div>
            </Container>
        </section>
    );
}
