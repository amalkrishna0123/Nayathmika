import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    IoHeartOutline, IoHeart, IoStarSharp, IoShareSocialOutline,
    IoChevronForward, IoChevronBack, IoShieldCheckmarkOutline,
} from 'react-icons/io5';
import { FaTruck } from 'react-icons/fa';
import { products } from '../data/products';
import Container from '../components/ui/Container';
import Breadcrumb from '../components/ui/Breadcrumb';
import Button from '../components/ui/Button';
import ProductCard from '../components/products/ProductCard';
import { useCart } from '../hooks/useCart';
import { useWishlist } from '../hooks/useWishlist';
import { useToast } from '../components/ui/Toast';

const TABS = ['Details', 'Specifications', 'Care & Warranty'];

export default function ProductDetailPage() {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id)) || products[0];

    const [currentImage, setCurrentImage] = useState(0);
    const [selectedVariant, setSelectedVariant] = useState(product.variants?.[0] || '');
    const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || '');
    const [engraving, setEngraving] = useState('');
    const [tab, setTab] = useState('Details');
    const [qty, setQty] = useState(1);
    const [pincode, setPincode] = useState('');

    const { addToCart } = useCart();
    const { toggleWishlist, isWishlisted } = useWishlist();
    const { toast } = useToast();
    const wishlisted = isWishlisted(product.id);

    const handleAddToCart = () => {
        addToCart(product, qty, { variant: selectedVariant, size: selectedSize, engraving });
        toast('Added to cart!', 'success');
    };

    const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id);

    return (
        <div className="py-12">
            <Container>
                <Breadcrumb items={[
                    { label: 'Home', href: '/' },
                    { label: product.category, href: `/category/${product.category.toLowerCase()}` },
                    { label: product.name },
                ]} />

                <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-14">
                    {/* Image Gallery */}
                    <div className="flex flex-col md:flex-row gap-4">
                        {/* Thumbnails */}
                        <div className="flex md:flex-col gap-3 order-2 md:order-1">
                            {product.images.map((img, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentImage(i)}
                                    className={`w-16 h-16 flex-shrink-0 border-2 transition-all ${i === currentImage ? 'border-[#C9A96E]' : 'border-transparent'
                                        }`}
                                >
                                    <img src={img} alt="" className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>

                        {/* Main image */}
                        <div className="flex-1 relative bg-[#F9F4EC] aspect-square overflow-hidden order-1 md:order-2">
                            <motion.img
                                key={currentImage}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                src={product.images[currentImage]}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                            {/* Nav arrows */}
                            {product.images.length > 1 && (
                                <>
                                    <button
                                        onClick={() => setCurrentImage(i => (i - 1 + product.images.length) % product.images.length)}
                                        className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 flex items-center justify-center shadow hover:bg-[#C9A96E] hover:text-white transition-colors"
                                    >
                                        <IoChevronBack size={16} />
                                    </button>
                                    <button
                                        onClick={() => setCurrentImage(i => (i + 1) % product.images.length)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 flex items-center justify-center shadow hover:bg-[#C9A96E] hover:text-white transition-colors"
                                    >
                                        <IoChevronForward size={16} />
                                    </button>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div>
                        {/* Badges */}
                        <div className="flex gap-2 mb-4">
                            {product.isNew && <span className="bg-[#1a1a1a] text-white font-sans-luxury text-[10px] tracking-widest uppercase px-2 py-1">New</span>}
                            {product.isPremium && <span className="border border-[#C9A96E] text-[#C9A96E] font-sans-luxury text-[10px] tracking-widest uppercase px-2 py-1">Premium</span>}
                        </div>

                        <h1 className="font-serif text-3xl md:text-4xl font-light mb-3">{product.name}</h1>

                        {/* Rating */}
                        <div className="flex items-center gap-2 mb-4">
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <IoStarSharp key={i} size={14} className={i < Math.floor(product.rating) ? 'text-[#C9A96E]' : 'text-gray-200'} />
                                ))}
                            </div>
                            <span className="font-sans-luxury text-xs text-gray-400">{product.rating} ({product.reviews} reviews)</span>
                        </div>

                        {/* Price */}
                        <div className="flex items-end gap-4 mb-6">
                            <span className="font-serif text-3xl">₹{product.price.toLocaleString('en-IN')}</span>
                            {product.originalPrice > product.price && (
                                <>
                                    <span className="font-sans-luxury text-base text-gray-300 line-through">₹{product.originalPrice.toLocaleString('en-IN')}</span>
                                    <span className="bg-[#C9A96E] text-white font-sans-luxury text-xs px-2 py-1">{product.discount}% OFF</span>
                                </>
                            )}
                        </div>
                        <div className="h-[1px] bg-gray-100 mb-6" />

                        {/* Variant selector */}
                        {product.variants.length > 0 && (
                            <div className="mb-5">
                                <p className="font-sans-luxury text-[10px] tracking-[0.4em] uppercase text-gray-400 mb-3">Metal Type</p>
                                <div className="flex flex-wrap gap-2">
                                    {product.variants.map(v => (
                                        <button
                                            key={v}
                                            onClick={() => setSelectedVariant(v)}
                                            className={`px-4 py-2 font-sans-luxury text-xs tracking-widest uppercase border transition-all ${selectedVariant === v ? 'border-[#C9A96E] bg-[#C9A96E] text-white' : 'border-gray-200 hover:border-[#C9A96E] text-gray-600'
                                                }`}
                                        >
                                            {v}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Size selector */}
                        {product.sizes.length > 0 && (
                            <div className="mb-5">
                                <p className="font-sans-luxury text-[10px] tracking-[0.4em] uppercase text-gray-400 mb-3">Size</p>
                                <div className="flex flex-wrap gap-2">
                                    {product.sizes.map(s => (
                                        <button
                                            key={s}
                                            onClick={() => setSelectedSize(s)}
                                            className={`w-12 h-12 font-sans-luxury text-xs border transition-all ${selectedSize === s ? 'border-[#C9A96E] bg-[#C9A96E] text-white' : 'border-gray-200 hover:border-[#C9A96E]'
                                                }`}
                                        >
                                            {s}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Engraving */}
                        <div className="mb-6">
                            <p className="font-sans-luxury text-[10px] tracking-[0.4em] uppercase text-gray-400 mb-3">Personal Engraving (Optional)</p>
                            <input
                                type="text"
                                maxLength={20}
                                value={engraving}
                                onChange={e => setEngraving(e.target.value)}
                                placeholder="e.g. Forever Yours"
                                className="w-full px-4 py-3 border border-gray-200 focus:border-[#C9A96E] outline-none font-sans-luxury text-sm bg-white transition-colors placeholder:text-gray-300"
                            />
                            <p className="text-[10px] text-gray-300 font-sans-luxury mt-1">{engraving.length}/20 characters</p>
                        </div>

                        {/* Qty + CTA */}
                        <div className="flex flex-wrap gap-3 mb-6">
                            {/* Qty */}
                            <div className="flex items-center border border-gray-200">
                                <button onClick={() => setQty(q => Math.max(1, q - 1))} className="w-10 h-12 flex items-center justify-center hover:bg-gray-50">−</button>
                                <span className="w-10 text-center font-sans-luxury text-sm">{qty}</span>
                                <button onClick={() => setQty(q => q + 1)} className="w-10 h-12 flex items-center justify-center hover:bg-gray-50">+</button>
                            </div>
                            <Button onClick={handleAddToCart} variant="primary" size="lg" className="flex-1">Add to Cart</Button>
                            <Link to="/checkout">
                                <Button variant="secondary" size="lg">Buy Now</Button>
                            </Link>
                            <button
                                onClick={() => { toggleWishlist(product); toast(wishlisted ? 'Removed from wishlist' : 'Saved to wishlist', 'info'); }}
                                className="w-12 h-12 border border-gray-200 flex items-center justify-center hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors"
                            >
                                {wishlisted ? <IoHeart className="text-red-500" size={20} /> : <IoHeartOutline size={20} />}
                            </button>
                        </div>

                        {/* Delivery check */}
                        <div className="border border-gray-100 p-4 mb-6">
                            <p className="font-sans-luxury text-[10px] tracking-[0.4em] uppercase text-gray-400 mb-3">Check Delivery</p>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    maxLength={6}
                                    value={pincode}
                                    onChange={e => setPincode(e.target.value.replace(/\D/, ''))}
                                    placeholder="Enter Pincode"
                                    className="flex-1 px-3 py-2 border border-gray-200 font-sans-luxury text-sm outline-none focus:border-[#C9A96E] bg-white"
                                />
                                <Button variant="outline" size="sm">Check</Button>
                            </div>
                        </div>

                        {/* Trust signals */}
                        <div className="flex flex-wrap gap-4 text-xs font-sans-luxury text-gray-400">
                            <div className="flex items-center gap-1.5"><IoShieldCheckmarkOutline className="text-[#C9A96E]" size={16} /> BIS Hallmarked</div>
                            <div className="flex items-center gap-1.5"><FaTruck className="text-[#C9A96E]" size={16} /> Free Insured Shipping</div>
                            <div className="flex items-center gap-1.5"><IoShieldCheckmarkOutline className="text-[#C9A96E]" size={16} /> 30-Day Returns</div>
                        </div>
                    </div>
                </div>

                {/* Product Tabs */}
                <div className="mt-16">
                    <div className="flex border-b border-gray-100">
                        {TABS.map(t => (
                            <button
                                key={t}
                                onClick={() => setTab(t)}
                                className={`px-6 py-4 font-sans-luxury text-xs tracking-widest uppercase transition-all border-b-2 -mb-[2px] ${tab === t ? 'border-[#C9A96E] text-[#C9A96E]' : 'border-transparent text-gray-400 hover:text-gray-600'
                                    }`}
                            >
                                {t}
                            </button>
                        ))}
                    </div>
                    <div className="py-8 font-sans-luxury text-sm text-gray-500 leading-relaxed max-w-2xl">
                        {tab === 'Details' && <p>{product.description}</p>}
                        {tab === 'Specifications' && (
                            <div className="grid grid-cols-2 gap-4">
                                {[['Metal', product.metal], ['Weight', product.weight], ['Category', product.category], ['Rating', `${product.rating}/5`]].map(([k, v]) => (
                                    <div key={k}>
                                        <p className="text-[10px] tracking-[0.4em] uppercase text-[#C9A96E] mb-1">{k}</p>
                                        <p className="text-gray-600">{v}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                        {tab === 'Care & Warranty' && (
                            <div className="flex flex-col gap-3">
                                <p>Store your jewellery separately in a soft pouch to prevent scratching.</p>
                                <p>Avoid contact with perfumes, chemicals, and extreme heat.</p>
                                <p>Clean with a soft, dry cloth. For deep cleaning, bring it to our store.</p>
                                <p className="text-[#C9A96E]">All Nayathmika pieces come with a 1-year manufacturing warranty.</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Similar Products */}
                {relatedProducts.length > 0 && (
                    <div className="mt-16">
                        <h3 className="font-serif text-3xl font-light mb-8">You May Also Like</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {relatedProducts.slice(0, 4).map(p => (
                                <ProductCard key={p.id} product={p} />
                            ))}
                        </div>
                    </div>
                )}
            </Container>
        </div>
    );
}
