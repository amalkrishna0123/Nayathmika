import { Link } from 'react-router-dom';
import { IoChevronForward } from 'react-icons/io5';

export default function Breadcrumb({ items }) {
    return (
        <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1 font-sans-luxury text-xs tracking-widest uppercase text-gray-400">
                {items.map((item, index) => (
                    <li key={index} className="flex items-center gap-1">
                        {index > 0 && <IoChevronForward size={12} className="text-gray-300" />}
                        {item.href && index < items.length - 1 ? (
                            <Link
                                to={item.href}
                                className="hover:text-[#C9A96E] transition-colors"
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <span className="text-[#C9A96E]">{item.label}</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
