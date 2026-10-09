'use client';

import Link from 'next/link';
import { useState } from 'react';
import { navLinks } from '@/lib/site-data';
import styles from './site-header.module.scss';

export default function SiteHeader() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className={styles['site-header']}>
      <div className={styles['site-header__inner']}>
        <Link href="/" className={styles['site-header__brand']} onClick={() => setIsNavOpen(false)}>
          Hewitt&apos;s Rocking H
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
