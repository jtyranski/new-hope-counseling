'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
  children?: ReactNode;
}

export function PageHero({ title, subtitle, imageSrc, imageAlt, children }: PageHeroProps) {
  return (
    <section className="relative h-[340px] sm:h-[400px] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
          onError={(e) => {
            const target = e?.currentTarget;
            if (target) target.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate_blue-900/70 via-slate_blue-900/60 to-slate_blue-900/80" />
      </div>
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 h-full flex flex-col justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-4"
        >
          {title ?? ''}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-slate_blue-200 text-lg sm:text-xl max-w-2xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
        {children}
      </div>
    </section>
  );
}
