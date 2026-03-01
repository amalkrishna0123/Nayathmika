import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import ProductCard from '../components/products/ProductCard';
import Button from '../components/ui/Button';
import Breadcrumb from '../components/ui/Breadcrumb';
import { useWishlist } from '../hooks/useWishlist';

export default function WishlistPage() {
    const { wishlist } = useWishlist();

    return (
        <div className="py-12">
            <Container>
                <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Wishlist' }]} />
                <div className="mt-8 flex items-center justify-between mb-10">
                    <div>
                        <p className="font-sans-luxury text-[10px] tracking-[0.5em] uppercase text-[#C9A96E] mb-2">Your Saved Pieces</p>
                        <h1 className="font-serif text-4xl font-light">Wishlist</h1>
                    </div>
                    {wishlist.length > 0 && (
                        <Link to="/shop"><Button variant="outline" size="sm">Continue Browsing</Button></Link>
                    )}
                </div>

                {wishlist.length === 0 ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="py-24 text-center"
                    >
                        <p className="font-serif text-6xl text-gray-100 mb-6">♡</p>
                        <h2 className="font-serif text-2xl font-light mb-4">Your wishlist is empty</h2>
                        <p className="font-sans-luxury text-sm text-gray-400 mb-8">Save pieces you love and come back to them anytime.</p>
                        <Link to="/shop"><Button variant="primary" size="lg">Explore Jewellery</Button></Link>
                    </motion.div>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                        {wishlist.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </Container>
        </div>
    );
}
