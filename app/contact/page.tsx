import Link from 'next/link';
import Header from '@/components/site-header';
import Footer from '@/components/site-footer';
import { business, formatEmailHref, formatPhoneHref } from '@/lib/site-data';
import styles from './page.module.scss';

export default function ContactPage() {
  return (
    <div>
      <Header />

      <main className={styles.page}>
        <section className={styles.contactCard}>
          <h1 className={styles.title}>We&apos;re here to help get you back on track.</h1>
          <p className={styles.copy}>
            Need your ATV, UTV, or trailer repaired? Give us a call today. We&apos;re ready to help get you back to
            work or back on the trail.
          </p>

          <div className={styles.contactList}>
            <a href={formatPhoneHref(business.phone)} className={styles.contactLink}>
              <span className={styles.label}>Phone</span>
              <span>{business.phone}</span>
            </a>

            <a href={formatEmailHref(business.email)} className={styles.contactLink}>
              <span className={styles.label}>Email</span>
              <span>{business.email}</span>
            </a>

            <div className={styles.contactLink}>
              <span className={styles.label}>Location</span>
              <span>{business.address}</span>
            </div>
          </div>

          <div className={styles.actions}>
            <a href={formatPhoneHref(business.phone)} className={styles.primaryButton}>
              Call now
            </a>
            <Link href="/" className={styles.secondaryButton}>
              Back to home
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
