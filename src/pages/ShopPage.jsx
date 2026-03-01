import { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import ProductCard from '../components/products/ProductCard';
import Breadcrumb from '../components/ui/Breadcrumb';
import Pagination from '../components/ui/Pagination';
import { Input, Select } from '../components/ui/FormInput';
import { products } from '../data/products';
import { IoFilterOutline, IoCloseOutline } from 'react-icons/io5';

const SORT_OPTIONS = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'rating', label: 'Best Rated' },
    { value: 'newest', label: 'Newest First' },
];

const METALS = ['18K White Gold', '18K Yellow Gold', '22K Gold', 'Rose Gold'];
const PRICE_RANGES = [
    { label: 'Under ₹10,000', min: 0, max: 10000 },
    { label: '₹10,000 – ₹25,000', min: 10000, max: 25000 },
    { label: '₹25,000 – ₹50,000', min: 25000, max: 50000 },
    { label: '₹50,000 – ₹1,00,000', min: 50000, max: 100000 },
    { label: 'Above ₹1,00,000', min: 100000, max: Infinity },
];

function FilterSidebar({ filters, setFilters, onClose }) {
    return (
        <div className="w-full">
            <div className="flex items-center justify-between mb-6">
                <h3 className="font-sans-luxury text-xs tracking-widest uppercase">Filter</h3>
                {onClose && <button onClick={onClose}><IoCloseOutline size={20} /></button>}
            </div>

            {/* Price Range */}
            <div className="mb-8">
                <p className="font-sans-luxury text-[10px] tracking-[0.4em] uppercase text-[#C9A96E] mb-3">Price Range</p>
                <div className="flex flex-col gap-2">
                    {PRICE_RANGES.map(r => (
                        <label key={r.label} className="flex items-center gap-2 cursor-pointer group">
                            <input
                                type="radio"
                                name="priceRange"
                                checked={filters.priceMin === r.min && filters.priceMax === r.max}
                                onChange={() => setFilters(f => ({ ...f, priceMin: r.min, priceMax: r.max }))}
                                className="accent-[#C9A96E]"
                            />
                            <span className="font-sans-luxury text-xs text-gray-500 group-hover:text-gray-900 transition-colors">{r.label}</span>
                        </label>
                    ))}
                    <label className="flex items-center gap-2 cursor-pointer group">
                        <input
                            type="radio"
                            name="priceRange"
                            checked={filters.priceMin === null}
                            onChange={() => setFilters(f => ({ ...f, priceMin: null, priceMax: null }))}
                            className="accent-[#C9A96E]"
                        />
                        <span className="font-sans-luxury text-xs text-gray-500 group-hover:text-gray-900 transition-colors">All Prices</span>
                    </label>
                </div>
            </div>

            {/* Metal */}
            <div className="mb-8">
                <p className="font-sans-luxury text-[10px] tracking-[0.4em] uppercase text-[#C9A96E] mb-3">Metal</p>
                <div className="flex flex-col gap-2">
                    {METALS.map(m => (
                        <label key={m} className="flex items-center gap-2 cursor-pointer group">
                            <input
                                type="checkbox"
                                checked={filters.metals.includes(m)}
                                onChange={() => {
                                    setFilters(f => ({
                                        ...f,
                                        metals: f.metals.includes(m) ? f.metals.filter(x => x !== m) : [...f.metals, m],
                                    }));
                                }}
                                className="accent-[#C9A96E]"
                            />
                            <span className="font-sans-luxury text-xs text-gray-500 group-hover:text-gray-900 transition-colors">{m}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Clear filters */}
            <button
                onClick={() => setFilters({ priceMin: null, priceMax: null, metals: [] })}
                className="font-sans-luxury text-xs tracking-widest uppercase text-red-400 hover:text-red-600 transition-colors"
            >
                Clear Filters
            </button>
        </div>
    );
}

export default function ShopPage() {
    const [sort, setSort] = useState('featured');
    const [page, setPage] = useState(1);
    const [showFilter, setShowFilter] = useState(false);
    const [filters, setFilters] = useState({ priceMin: null, priceMax: null, metals: [] });
    const ITEMS_PER_PAGE = 6;

    const filtered = products
        .filter(p => {
            if (filters.priceMin !== null && p.price < filters.priceMin) return false;
            if (filters.priceMax !== null && p.price > filters.priceMax) return false;
            if (filters.metals.length > 0 && !filters.metals.includes(p.metal)) return false;
            return true;
        })
        .sort((a, b) => {
            switch (sort) {
                case 'price-asc': return a.price - b.price;
                case 'price-desc': return b.price - a.price;
                case 'rating': return b.rating - a.rating;
                default: return 0;
            }
        });

    const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
    const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

    return (
        <div className="py-12">
            <Container>
                {/* Breadcrumb */}
                <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Shop' }]} />

                {/* Header */}
                <div className="mt-8 mb-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
                    <div>
                        <p className="font-sans-luxury text-[10px] tracking-[0.5em] uppercase text-[#C9A96E] mb-2">All Pieces</p>
                        <h1 className="font-serif text-4xl font-light">Our Jewellery</h1>
                        <p className="font-sans-luxury text-xs text-gray-400 mt-1">{filtered.length} pieces found</p>
                    </div>
                    <div className="flex items-center gap-4">
                        {/* Mobile filter toggle */}
                        <button
                            onClick={() => setShowFilter(!showFilter)}
                            className="md:hidden flex items-center gap-2 font-sans-luxury text-xs tracking-widest uppercase border border-gray-200 px-4 py-2 hover:border-[#C9A96E] transition-colors"
                        >
                            <IoFilterOutline size={16} /> Filter
                        </button>
                        <Select
                            options={SORT_OPTIONS}
                            value={sort}
                            onChange={e => { setSort(e.target.value); setPage(1); }}
                            className="w-48"
                        />
                    </div>
                </div>

                <div className="flex gap-10">
                    {/* Sidebar – desktop */}
                    <aside className="hidden md:block w-56 flex-shrink-0">
                        <FilterSidebar filters={filters} setFilters={setFilters} />
                    </aside>

                    {/* Mobile sidebar */}
                    {showFilter && (
                        <div className="fixed inset-0 z-50 bg-white p-8 md:hidden overflow-y-auto">
                            <FilterSidebar filters={filters} setFilters={setFilters} onClose={() => setShowFilter(false)} />
                        </div>
                    )}

                    {/* Product grid */}
                    <div className="flex-1">
                        {paginated.length === 0 ? (
                            <div className="text-center py-20 text-gray-400 font-sans-luxury text-sm">
                                No products found.
                            </div>
                        ) : (
                            <motion.div
                                key={`page-${page}-${sort}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                            >
                                {paginated.map(product => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </motion.div>
                        )}

                        {totalPages > 1 && (
                            <div className="mt-12">
                                <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </div>
    );
}
