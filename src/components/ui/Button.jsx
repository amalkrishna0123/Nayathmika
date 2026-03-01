import { motion } from 'framer-motion';

const variants = {
    primary: 'bg-[#C9A96E] text-white hover:bg-[#A07840] shadow-[0_0_20px_rgba(201,169,110,0.3)] hover:shadow-[0_0_30px_rgba(201,169,110,0.5)]',
    secondary: 'bg-[#1a1a1a] text-white hover:bg-[#333]',
    outline: 'border border-[#C9A96E] text-[#C9A96E] hover:bg-[#C9A96E] hover:text-white',
    ghost: 'text-[#C9A96E] hover:bg-[#C9A96E]/10',
    white: 'bg-white text-[#1a1a1a] hover:bg-[#FDFAF5] shadow-md',
};

const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
    xl: 'px-10 py-5 text-lg',
};

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    disabled = false,
    loading = false,
    onClick,
    type = 'button',
    fullWidth = false,
    ...props
}) {
    return (
        <motion.button
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
            whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
            className={`
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? 'w-full' : ''}
        font-sans-luxury tracking-widest uppercase font-medium
        transition-all duration-300 ease-out
        rounded-none
        inline-flex items-center justify-center gap-2
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
            {...props}
        >
            {loading ? (
                <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            ) : null}
            {children}
        </motion.button>
    );
}
