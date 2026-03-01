import { motion } from 'framer-motion';

export default function Card({
    children,
    className = '',
    hover = true,
    padding = true,
    onClick,
}) {
    return (
        <motion.div
            onClick={onClick}
            whileHover={hover ? { y: -4, boxShadow: '0 20px 40px rgba(201, 169, 110, 0.15)' } : {}}
            transition={{ duration: 0.3 }}
            className={`
        bg-white border border-gray-100
        transition-all duration-300
        ${padding ? 'p-6' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
        >
            {children}
        </motion.div>
    );
}
