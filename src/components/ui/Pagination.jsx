import { motion } from 'framer-motion';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    const getVisiblePages = () => {
        if (totalPages <= 5) return pages;
        if (currentPage <= 3) return [...pages.slice(0, 5), '...', totalPages];
        if (currentPage >= totalPages - 2) return [1, '...', ...pages.slice(totalPages - 5)];
        return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
    };

    return (
        <div className="flex items-center justify-center gap-2">
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-10 h-10 flex items-center justify-center border border-gray-200 hover:border-[#C9A96E] hover:text-[#C9A96E] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
                <IoChevronBack size={16} />
            </motion.button>

            {getVisiblePages().map((page, index) =>
                page === '...' ? (
                    <span key={`dots-${index}`} className="w-10 h-10 flex items-center justify-center text-gray-400">
                        ···
                    </span>
                ) : (
                    <motion.button
                        key={page}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onPageChange(page)}
                        className={`
              w-10 h-10 flex items-center justify-center font-sans-luxury text-sm tracking-wider
              border transition-all duration-200
              ${currentPage === page
                                ? 'bg-[#C9A96E] text-white border-[#C9A96E]'
                                : 'border-gray-200 hover:border-[#C9A96E] hover:text-[#C9A96E]'
                            }
            `}
                    >
                        {page}
                    </motion.button>
                )
            )}

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-10 h-10 flex items-center justify-center border border-gray-200 hover:border-[#C9A96E] hover:text-[#C9A96E] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
                <IoChevronForward size={16} />
            </motion.button>
        </div>
    );
}
