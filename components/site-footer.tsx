import Link from 'next/link';
import packageJson from '../package.json';
import { business, formatEmailHref, formatPhoneHref, navLinks } from '@/lib/site-data';
import styles from './site-footer.module.scss';

export default function SiteFooter() {
  return (
    <footer className={styles['site-footer']}>
      <div className={styles['site-footer__inner']}>
        <div className={styles['site-footer__brand']}>
          <p className={styles['site-footer__name']}>{business.name}</p>
          <p className={styles['site-footer__tagline']}>{business.slogan}</p>
        </div>

        <nav className={styles['site-footer__nav']} aria-label="Footer navigation">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles['site-footer__details']}>
          <a href={formatPhoneHref(business.phone)}>{business.phone}</a>
          <a href={formatEmailHref(business.email)}>{business.email}</a>
          <span>{business.address}</span>
        </div>
      </div>

      <div className={styles['site-footer__meta']}>
        <small>v{packageJson.version}</small>
      </div>
    </footer>
  );
}
