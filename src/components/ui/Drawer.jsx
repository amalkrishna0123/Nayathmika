import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';

export default function Drawer({ isOpen, onClose, title, children, position = 'right' }) {
    const slideFrom = {
        left: { initial: { x: '-100%' }, animate: { x: 0 }, exit: { x: '-100%' } },
        right: { initial: { x: '100%' }, animate: { x: 0 }, exit: { x: '100%' } },
    };

    useEffect(() => {
        if (isOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[9998] flex">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className={`${position === 'right' ? '' : 'order-last'} flex-1 bg-black/50 backdrop-blur-sm`}
                    />
                    {/* Drawer panel */}
                    <motion.div
                        initial={slideFrom[position].initial}
                        animate={slideFrom[position].animate}
                        exit={slideFrom[position].exit}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className={`
              w-80 max-w-[90vw] bg-white h-full flex flex-col shadow-2xl
              ${position === 'left' ? 'order-first' : 'order-last'}
            `}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-100">
                            {title && <h2 className="font-serif text-lg tracking-widest uppercase">{title}</h2>}
                            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors ml-auto">
                                <IoClose size={20} />
                            </button>
                        </div>
                        {/* Content */}
                        <div className="flex-1 overflow-y-auto">{children}</div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
