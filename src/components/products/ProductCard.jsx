import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IoHeartOutline, IoHeart, IoStar, IoEyeOutline } from 'react-icons/io5';
import { useWishlist } from '../../hooks/useWishlist';
import { useCart } from '../../hooks/useCart';
import { useToast } from '../ui/Toast';

export default function ProductCard({ product }) {
    const [hovered, setHovered] = useState(false);
    const { toggleWishlist, isWishlisted } = useWishlist();
    const { addToCart } = useCart();
    const { toast } = useToast();
    const wishlisted = isWishlisted(product.id);

    const handleWishlist = (e) => {
        e.preventDefault();
        toggleWishlist(product);
        toast(wishlisted ? 'Removed from wishlist' : 'Added to wishlist', wishlisted ? 'info' : 'success');
    };

    const handleAddToCart = (e) => {
        e.preventDefault();
        addToCart(product);
        toast('Added to cart', 'success');
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="group relative"
        >
            <Link to={`/product/${product.id}`}>
                {/* Image container */}
                <div className="relative overflow-hidden bg-[#F9F4EC] aspect-square">
                    <motion.img
                        src={product.image}
                        alt={product.name}
                        animate={{ scale: hovered ? 1.06 : 1 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full h-full object-cover"
                    />

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                        {product.isNew && (
                            <span className="bg-[#1a1a1a] text-white font-sans-luxury text-[10px] tracking-widest uppercase px-2 py-1">
                                New
                            </span>
                        )}
                        {product.discount > 0 && (
                            <span className="bg-[#C9A96E] text-white font-sans-luxury text-[10px] tracking-widest uppercase px-2 py-1">
                                -{product.discount}%
                            </span>
                        )}
                        {product.isPremium && (
                            <span className="bg-white/90 text-[#C9A96E] font-sans-luxury text-[10px] tracking-widest uppercase px-2 py-1">
                                Premium
                            </span>
                        )}
                    </div>

                    {/* Wishlist */}
                    <motion.button
                        onClick={handleWishlist}
                        animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : 8 }}
                        transition={{ duration: 0.25 }}
                        className="absolute top-3 right-3 w-9 h-9 bg-white flex items-center justify-center shadow-md hover:scale-110 transition-transform"
                    >
                        {wishlisted ? (
                            <IoHeart className="text-red-500" size={16} />
                        ) : (
                            <IoHeartOutline size={16} />
                        )}
                    </motion.button>

                    {/* Quick actions overlay */}
                    <motion.div
                        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute bottom-0 left-0 right-0 flex"
                    >
                        <button
                            onClick={handleAddToCart}
                            className="flex-1 bg-[#1a1a1a] text-white font-sans-luxury text-[10px] tracking-widest uppercase py-3 hover:bg-[#C9A96E] transition-colors"
                        >
                            Add to Cart
                        </button>
                        <Link
                            to={`/product/${product.id}`}
                            className="w-12 bg-white flex items-center justify-center border-l border-gray-100 hover:bg-[#C9A96E] hover:text-white transition-colors"
                        >
                            <IoEyeOutline size={16} />
                        </Link>
                    </motion.div>
                </div>

                {/* Product info */}
                <div className="mt-4">
                    <p className="font-sans-luxury text-[10px] tracking-[0.3em] uppercase text-[#C9A96E] mb-1">
                        {product.category}
                    </p>
                    <h3 className="font-serif text-base text-gray-800 group-hover:text-[#C9A96E] transition-colors leading-snug">
                        {product.name}
                    </h3>
                    <div className="flex items-center gap-1.5 mt-1.5 mb-2">
                        <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <IoStar
                                    key={i}
                                    size={11}
                                    className={i < Math.floor(product.rating) ? 'text-[#C9A96E]' : 'text-gray-200'}
                                />
                            ))}
                        </div>
                        <span className="font-sans-luxury text-[10px] text-gray-400">({product.reviews})</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="font-serif text-lg text-gray-900">
                            ₹{product.price.toLocaleString('en-IN')}
                        </span>
                        {product.originalPrice > product.price && (
                            <span className="text-sm text-gray-300 line-through">
                                ₹{product.originalPrice.toLocaleString('en-IN')}
                            </span>
                        )}
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
