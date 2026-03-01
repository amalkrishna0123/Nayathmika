import { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoCheckmarkCircle, IoAlertCircle, IoInformationCircle, IoClose } from 'react-icons/io5';

const ToastContext = createContext(null);

const icons = {
    success: <IoCheckmarkCircle className="text-green-500" size={20} />,
    error: <IoAlertCircle className="text-red-500" size={20} />,
    info: <IoInformationCircle className="text-[#C9A96E]" size={20} />,
    warning: <IoAlertCircle className="text-yellow-500" size={20} />,
};

export function ToastProvider({ children }) {
    const [toasts, setToasts] = useState([]);

    const toast = useCallback((message, type = 'info') => {
        const id = Date.now();
        setToasts(prev => [...prev, { id, message, type }]);
        setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 4000);
    }, []);

    const remove = (id) => setToasts(prev => prev.filter(t => t.id !== id));

    return (
        <ToastContext.Provider value={{ toast }}>
            {children}
            {/* Toast container */}
            <div className="fixed top-6 right-6 z-[99999] flex flex-col gap-3 w-80">
                <AnimatePresence>
                    {toasts.map(t => (
                        <motion.div
                            key={t.id}
                            initial={{ opacity: 0, x: 100, scale: 0.9 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: 100, scale: 0.9 }}
                            className="flex items-start gap-3 bg-white border border-gray-100 p-4 shadow-xl"
                        >
                            {icons[t.type]}
                            <p className="flex-1 text-sm text-gray-700 font-sans-luxury">{t.message}</p>
                            <button onClick={() => remove(t.id)} className="text-gray-400 hover:text-gray-600">
                                <IoClose size={16} />
                            </button>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </ToastContext.Provider>
    );
}

export function useToast() {
    const ctx = useContext(ToastContext);
    if (!ctx) throw new Error('useToast must be used within ToastProvider');
    return ctx;
}
