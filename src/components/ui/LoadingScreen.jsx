import { motion } from 'framer-motion';

const spinTransition = {
    repeat: Infinity,
    ease: 'linear',
    duration: 1.2,
};

export default function LoadingScreen() {
    return (
        <div className="fixed inset-0 z-[99999] bg-white flex flex-col items-center justify-center gap-8">
            {/* Logo */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
            >
                <h1 className="font-serif text-4xl tracking-[0.25em] text-[#1a1a1a] uppercase">
                    Nayathmika
                </h1>
                <p className="font-sans-luxury text-xs tracking-[0.4em] text-[#C9A96E] uppercase mt-2">
                    Fine Jewellery
                </p>
            </motion.div>

            {/* Animated gold ring */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={spinTransition}
                className="w-12 h-12 rounded-full border-2 border-[#C9A96E]/20 border-t-[#C9A96E]"
            />

            {/* Decorative line */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent"
            />
        </div>
    );
}
