import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/site-header';
import Footer from '@/components/site-footer';
import { business, galleryItems, serviceList, testimonials, formatPhoneHref } from '@/lib/site-data';
import styles from './page.module.scss';

export default function HomePage() {
  return (
    <div className={styles['page-shell']}>
      <Header />

      <main>
        <section className={`${styles.section} ${styles.hero}`} id="home">
          <div className={styles.hero__grid}>
            <div className={styles.hero__content}>
              <h1 className={styles.hero__title}>Dependable ATV &amp; Trailer Repair You Can Count On</h1>
              <p className={styles.hero__text}>
                Welcome to Hewitt&apos;s Rocking H Trailer &amp; ATV Repair. We take pride in providing honest,
                dependable repairs for ATVs, UTVs, side-by-sides, trailers, and other recreational equipment.
                Whether you need routine maintenance or major repairs, we work hard to get your equipment back on
                the trail safely and reliably.
              </p>

              <div className={styles.hero__actions}>
                <a href={formatPhoneHref(business.phone)} className={`${styles.button} ${styles['button--primary']}`}>
                  Call {business.phone}
                </a>
                <Link href="/contact" className={`${styles.button} ${styles['button--secondary']}`}>
                  Visit our contact page
                </Link>
              </div>
            </div>

            <div className={styles.hero__media}>
              <div className={styles.hero__image}>
                <Image
                  src="/images/shop-hero-exterior.jpg"
                  alt="Exterior view of the Rocking H shop and service building"
                  width={780}
                  height={1000}
                  priority
                />
              </div>
              <div className={styles.hero__badge}>
                <strong>{business.slogan}</strong>
                <span>Family-owned service in Viking, MN</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section} id="services">
          <header className={styles['section-header']}>
            <h2 className={styles['section-header__title']}>Services</h2>
            <p className={styles['section-header__subtitle']}>
              Built on hard work and honest repairs, from routine maintenance to major mechanical work.
            </p>
          </header>

          <div className={styles.services__grid}>
            {serviceList.map((service, index) => (
              <article className={styles['service-card']} key={service}>
                <div className={styles['service-card__icon']}>{index + 1}</div>
                <h3>{service}</h3>
                <p>Dependable workmanship and solid repair support for the work you put your equipment through.</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section} id="about">
          <header className={styles['section-header']}>
            <h2 className={styles['section-header__title']}>About us</h2>
          </header>

          <div className={styles.about__content}>
            <div className={styles.about__panel}>
              <p>
                At Hewitt&apos;s Rocking H Trailer &amp; ATV Repair, we believe in honest work and quality repairs.
                As a locally owned small-town business, we&apos;re committed to providing dependable service you can
                trust. Every machine is repaired with care and attention to detail because your satisfaction is our
                top priority.
              </p>
            </div>

            <div className={styles.about__panel}>
              <p>
                Our team works hard to keep your gear running strong, whether you&apos;re heading to the trails, the
                job site, or hauling equipment for the season. We value fair pricing, practical solutions, and the
                kind of neighborly service that keeps customers coming back.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section} id="gallery">
          <header className={styles['section-header']}>
            <h2 className={styles['section-header__title']}>Gallery</h2>
            <p className={styles['section-header__subtitle']}>
              Real work, real equipment, and a shop built around dependable repairs.
            </p>
          </header>

          <div className={styles.gallery__grid}>
            {galleryItems.map((item) => (
              <figure className={styles['gallery__item']} key={item.src}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={800}
                  height={600}
                  className={styles.gallery__image}
                />
                <figcaption className={styles['gallery__caption']}>{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className={styles.section} id="reviews">
          <header className={styles['section-header']}>
            <h2 className={styles['section-header__title']}>Reviews</h2>
            <p className={styles['section-header__subtitle']}>
              A few kind words from customers who rely on quality workmanship and honest service.
            </p>
          </header>

          <div className={styles.reviews__grid}>
            {testimonials.map((review) => (
              <article className={styles['review-card']} key={review.name}>
                <p className={styles['review-card__quote']}>“{review.quote}”</p>
                <p className={styles['review-card__author']}>{review.name}</p>
              </article>
            ))}
          </div>

          <a href={business.reviewDestination} className={styles['review-link']} target="_blank" rel="noreferrer noopener">
            Leave a review on Google
          </a>
        </section>

        <section className={styles['cta-shell']}>
          <div className={styles['cta-box']}>
            <h2>Need your ATV, UTV, or trailer repaired?</h2>
            <p>
              Give us a call today. We&apos;re ready to help get you back to work or back on the trail.
            </p>
            <div className={styles.hero__actions}>
              <a href={formatPhoneHref(business.phone)} className={`${styles.button} ${styles['button--primary']}`}>
                Call now
              </a>
              <Link href="/contact" className={`${styles.button} ${styles['button--secondary']}`}>
                Contact us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
