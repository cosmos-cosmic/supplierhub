import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            Transparent & Efficient <br />
            <span className={styles.highlight}>Supplier Portal</span>
          </h1>
          <p className={styles.description}>
            The centralized platform for public procurement. Connect, bid, and grow your business with fair and open opportunities.
          </p>
          <div className={styles.ctaGroup}>
            <Link href="/login">
              <Button size="lg">Login to Portal</Button>
            </Link>
            <Link href="/register">
              <Button variant="outline" size="lg">Register as Supplier</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.statCard}>
          <h3>245+</h3>
          <p>Open Tenders</p>
        </div>
        <div className={styles.statCard}>
          <h3>1.2k</h3>
          <p>Registered Suppliers</p>
        </div>
        <div className={styles.statCard}>
          <h3>$45M</h3>
          <p>Total Contract Value</p>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.featureCard}>
          <h3>Transparency</h3>
          <p>Full visibility into the procurement process. All tenders, bids, and awards are openly published and auditable.</p>
        </div>
        <div className={styles.featureCard}>
          <h3>Efficiency</h3>
          <p>Digital submission of bids, automated notifications, and streamlined evaluation processes save time for everyone.</p>
        </div>
        <div className={styles.featureCard}>
          <h3>Fair Competition</h3>
          <p>Equal access to opportunities for all qualified suppliers. Rigorous verification ensures a level playing field.</p>
        </div>
      </section>

      {/* Open Tenders Preview */}
      <section className={styles.tendersPreview}>
        <h2>Latest Opportunities</h2>
        <div className={styles.tenderList}>
          {/* Mock Tender Item */}
          <div className={styles.tenderItem}>
            <div className={styles.tenderInfo}>
              <h4>Office Equipment Supply 2024</h4>
              <span className={styles.tenderTag}>Goods</span>
            </div>
            <div className={styles.tenderMeta}>
              <span>Deadline: 2 days left</span>
              <Button variant="ghost" size="sm">View &rarr;</Button>
            </div>
          </div>

          {/* Mock Tender Item */}
          <div className={styles.tenderItem}>
            <div className={styles.tenderInfo}>
              <h4>Construction of Community Center</h4>
              <span className={styles.tenderTag}>Works</span>
            </div>
            <div className={styles.tenderMeta}>
              <span>Deadline: 14 days left</span>
              <Button variant="ghost" size="sm">View &rarr;</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
