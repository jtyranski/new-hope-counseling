'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate_blue-900 text-slate_blue-200">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-gold-400 text-xl mb-4">New Hope Counseling Ltd.</h3>
            <p className="text-sm text-slate_blue-300 leading-relaxed">
              Professional, compassionate counseling for individuals, couples, and families. A safe place to begin healing.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gold-400 mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/services" className="block text-sm hover:text-gold-300 transition-colors">Services</Link>
              <Link href="/about" className="block text-sm hover:text-gold-300 transition-colors">About Us</Link>
              <Link href="/contact" className="block text-sm hover:text-gold-300 transition-colors">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gold-400 mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <a href="tel:2245176234" className="flex items-center gap-2 text-sm hover:text-gold-300 transition-colors">
                <Phone size={14} className="text-gold-400" /> 224-517-6234
              </a>
              <a href="mailto:newhope@counselingmail.com" className="flex items-center gap-2 text-sm hover:text-gold-300 transition-colors">
                <Mail size={14} className="text-gold-400" /> newhope@counselingmail.com
              </a>
              <div className="flex items-start gap-2 text-sm">
                <MapPin size={14} className="text-gold-400 mt-0.5 flex-shrink-0" />
                <span>37W040 Highland Ave<br />Elgin, IL 60124</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-slate_blue-700/50 text-center text-xs text-slate_blue-400">
          © {new Date().getFullYear()} New Hope Counseling Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
