import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoChevronDownOutline, IoSearchOutline } from 'react-icons/io5';
import Container from '../components/ui/Container';
import Breadcrumb from '../components/ui/Breadcrumb';

const FAQS = [
    {
        q: "Are your diamonds certified?",
        a: "Yes, all our diamonds are certified by world-renowned laboratories such as GIA (Gemological Institute of America) and IGI (International Gemological Institute). Each piece comes with a certificate of authenticity."
    },
    {
        q: "Do you offer custom jewellery design?",
        a: "Absolutely. We specialize in bespoke jewellery. You can book a consultation with our lead designer to create a unique piece tailored to your vision. Contact us through our Bespoke section or visit our boutique."
    },
    {
        q: "What is your return policy?",
        a: "We offer a 14-day 'no questions asked' return policy for all standard collection items, provided they are in original condition. Custom-made or personalized pieces are non-returnable."
    },
    {
        q: "Do you provide lifetime maintenance?",
        a: "Yes, Nayathmika provides complimentary lifetime cleaning and inspection services for all our jewellery. For repairs or resizing, nominal charges may apply after the first year."
    },
    {
        q: "Is shipping insured?",
        a: "Every shipment from Nayathmika is fully insured until it reaches your doorstep. We use premium logistics partners specialized in handling high-value luxury goods."
    }
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div className="py-12">
            <Container size="sm">
                <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'FAQs' }]} />

                <div className="mt-10 text-center mb-16">
                    <p className="font-sans-luxury text-[10px] tracking-[0.5em] uppercase text-[#C9A96E] mb-3">Support</p>
                    <h1 className="font-serif text-4xl font-light mb-6">Frequently Asked Questions</h1>
                    <div className="relative max-w-md mx-auto">
                        <IoSearchOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            placeholder="Search for a question..."
                            className="w-full pl-12 pr-4 py-3 bg-[#FDFAF5] border-transparent focus:bg-white focus:border-[#C9A96E] outline-none font-sans-luxury text-xs tracking-wider border transition-all"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    {FAQS.map((f, i) => (
                        <div key={i} className="border-b border-gray-100">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                                className="w-full py-6 flex items-center justify-between text-left group"
                            >
                                <span className={`font-serif text-lg transition-colors ${openIndex === i ? 'text-[#C9A96E]' : 'text-gray-900 group-hover:text-[#C9A96E]'}`}>
                                    {f.q}
                                </span>
                                <IoChevronDownOutline
                                    className={`transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-[#C9A96E]' : 'text-gray-300'}`}
                                />
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="pb-8 font-sans-luxury text-sm text-gray-500 leading-relaxed">
                                            {f.a}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                <div className="mt-20 p-10 bg-[#FDFAF5] text-center">
                    <h3 className="font-serif text-xl mb-2">Still have questions?</h3>
                    <p className="font-sans-luxury text-sm text-gray-400 mb-6">Contact our concierge for personalized assistance.</p>
                    <button className="px-8 py-3 bg-[#1a1a1a] text-white font-sans-luxury text-[10px] tracking-[0.3em] uppercase hover:bg-[#C9A96E] transition-colors">
                        Contact Concierge
                    </button>
                </div>
            </Container>
        </div>
    );
}
