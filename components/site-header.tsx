'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { navLinks } from '@/lib/site-data';
import styles from './site-header.module.scss';

export default function SiteHeader() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 0);

    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });

    return () => window.removeEventListener('scroll', updateScrollState);
  }, []);

  return (
    <header className={styles['site-header']} data-scrolled={isScrolled}>
      <div className={styles['site-header__inner']}>
        <Link
          href="/"
          className={styles['site-header__brand']}
          aria-label="Hewitt's Rocking H Trailer and ATV Repair home"
          onClick={() => setIsNavOpen(false)}
        >
          <Image
            src="/images/head-honcho-net-logo-simplified.jpg"
            alt="Hewitt's Rocking H Trailer and ATV Repair logo"
            width={760}
            height={200}
            className={styles['site-header__logo']}
            priority
          />
        </Link>

        <button
          type="button"
          className={styles['site-header__toggle']}
          aria-label={isNavOpen ? 'Close navigation menu' : 'Toggle navigation'}
          aria-expanded={isNavOpen}
          onClick={() => setIsNavOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          className={styles['site-header__nav']}
          data-open={isNavOpen}
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={styles['site-header__link']}
              onClick={() => setIsNavOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
