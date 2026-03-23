"use client"
import { useState } from 'react';
import Link from 'next/link';
import { HeaderItem } from '../../../../types/menu';
import { usePathname } from 'next/navigation';

const HeaderLink: React.FC<{ item: HeaderItem; sticky?: boolean }> = ({
  item,
}) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const path = usePathname()
  const handleMouseEnter = () => {
    if (item.submenu) {
      setSubmenuOpen(true);
    }
  };

  const handleMouseLeave = () => {
    setSubmenuOpen(false);
  };

  
  
  const isActive =
    path === item.href ||
    (path.startsWith('/blog') && item.href === '/blog') ||
    (path.startsWith('/portfolio') && item.href === '/portfolio')

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={item.href}
        className={[
          'text-base flex items-center gap-1 py-2 px-3 font-medium rounded-lg transition-all duration-200',
          // 'hover:bg-gray-100 dark:hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2',
          // Always readable: dark text on white (light), light text on orange (dark)
          'text-black dark:text-white hover:text-orange dark:hover:text-teal',
          // Active styling - distinct so it's visible when selected
          isActive
            ? 'text-orange font-semibold bg-orange/10 dark:bg-white/20 dark:text-white dark:font-semibold'
            : '',
        ].join(' ')}
      >
        {item.label}
        {item.submenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.25em"
            height="1.25em"
            viewBox="0 0 24 24"
            className={`transition-transform duration-200 ${submenuOpen ? 'rotate-180' : ''}`}
          >
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7 10l5 5l5-5" />
          </svg>
        )}
      </Link>
      {submenuOpen && (
        <div
          className="absolute py-2 left-0 mt-1 top-full w-56 bg-white dark:bg-orange shadow-xl rounded-xl border border-gray-100 dark:border-orange/20 overflow-hidden"
          data-aos="fade-up"
          data-aos-duration="200"
        >
          {item.submenu?.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href}
              className={`block px-4 py-2.5 text-[15px] transition-colors duration-150 ${
                path === subItem.href
                  ? 'bg-orange/10 text-orange dark:bg-white/10 dark:text-white font-medium'
                  : 'text-black hover:bg-gray-100 dark:text-white dark:hover:bg-white/10'
              }`}
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeaderLink;
