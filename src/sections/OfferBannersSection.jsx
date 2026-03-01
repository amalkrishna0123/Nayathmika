import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Container from '../components/ui/Container';

const offers = [
    {
        id: 1,
        label: 'Festival Special',
        title: 'Up to 30% Off on Bridal Sets',
        subtitle: 'Limited time offer',
        image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&auto=format',
        to: '/festival-collection',
        className: 'col-span-2 row-span-2',
    },
    {
        id: 2,
        label: 'New Arrivals',
        title: 'Diamond Solitaires',
        subtitle: 'Starting ₹24,999',
        image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&auto=format',
        to: '/new-arrivals',
        className: 'col-span-1',
    },
    {
        id: 3,
        label: 'Combo Offer',
        title: 'Ring + Earring Set',
        subtitle: 'Save ₹8,000',
        image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=600&auto=format',
        to: '/combo-offers',
        className: 'col-span-1',
    },
];

export default function OfferBannersSection() {
    return (
        <section className="py-16 bg-white">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ gridTemplateRows: 'auto auto' }}>
                    {offers.map((offer, i) => (
                        <motion.div
                            key={offer.id}
                            initial={{ opacity: 0, scale: 0.96 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={offer.className}
                        >
                            <Link to={offer.to} className="relative group block overflow-hidden h-full min-h-[220px]">
                                <img
                                    src={offer.image}
                                    alt={offer.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 min-h-[220px]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                                <div className="absolute bottom-6 left-6">
                                    <p className="font-sans-luxury text-[10px] tracking-[0.4em] uppercase text-[#C9A96E] mb-1">
                                        {offer.label}
                                    </p>
                                    <h3 className="font-serif text-xl md:text-2xl text-white mb-1">{offer.title}</h3>
                                    <p className="font-sans-luxury text-xs text-gray-300">{offer.subtitle}</p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
