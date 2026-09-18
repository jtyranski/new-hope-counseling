'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export function HeaderWrapper() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate_blue-900/95 backdrop-blur-md shadow-lg'
          : 'bg-slate_blue-900/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-serif text-gold-400 text-lg sm:text-xl tracking-wide group-hover:text-gold-300 transition-colors">
              New Hope Counseling
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks?.map?.((link) => (
              <Link
                key={link?.href ?? ''}
                href={link?.href ?? '/'}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  pathname === link?.href
                    ? 'bg-gold-400/20 text-gold-300'
                    : 'text-slate_blue-200 hover:bg-slate_blue-700/50 hover:text-gold-300'
                }`}
              >
                {link?.label ?? ''}
              </Link>
            )) ?? []}
            <a
              href="tel:2245176234"
              className="ml-3 flex items-center gap-2 bg-gold-400 text-slate_blue-900 px-4 py-2 rounded-md text-sm font-semibold hover:bg-gold-300 transition-colors"
            >
              <Phone size={14} />
              224-517-6234
            </a>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-gold-400 p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate_blue-900/98 backdrop-blur-md border-t border-slate_blue-700/50"
          >
            <div className="max-w-[1200px] mx-auto px-4 py-4 space-y-1">
              {navLinks?.map?.((link) => (
                <Link
                  key={link?.href ?? ''}
                  href={link?.href ?? '/'}
                  className={`block px-4 py-3 rounded-md text-sm font-medium transition-all ${
                    pathname === link?.href
                      ? 'bg-gold-400/20 text-gold-300'
                      : 'text-slate_blue-200 hover:bg-slate_blue-700/50'
                  }`}
                >
                  {link?.label ?? ''}
                </Link>
              )) ?? []}
              <a
                href="tel:2245176234"
                className="flex items-center gap-2 mt-3 bg-gold-400 text-slate_blue-900 px-4 py-3 rounded-md text-sm font-semibold"
              >
                <Phone size={14} />
                224-517-6234
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
