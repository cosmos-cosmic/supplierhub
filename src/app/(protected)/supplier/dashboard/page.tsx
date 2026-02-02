import styles from './page.module.css';

export default function SupplierDashboard() {
    const stats = [
        { label: 'Active Tenders', value: '12', trend: '+2 this week', icon: '🔍' },
        { label: 'My Bids', value: '5', trend: '3 pending', icon: '📝' },
        { label: 'Won Contracts', value: '2', trend: 'Total value: $1.2M', icon: '🏆' },
        { label: 'Notifications', value: '8', trend: '4 unread', icon: '🔔' },
    ];

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div>
                    <h1 className={styles.title}>Supplier Dashboard</h1>
                    <p className={styles.subtitle}>Welcome back! Here's what's happening today.</p>
                </div>
                <div className={styles.date}>Monday, Feb 2, 2026</div>
            </header>

            <div className={styles.statsGrid}>
                {stats.map((stat) => (
                    <div key={stat.label} className={styles.statCard}>
                        <div className={styles.statIcon}>{stat.icon}</div>
                        <div className={styles.statInfo}>
                            <p className={styles.statLabel}>{stat.label}</p>
                            <h3 className={styles.statValue}>{stat.value}</h3>
                            <p className={styles.statTrend}>{stat.trend}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.contentGrid}>
                <section className={styles.mainSection}>
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <h3>Active Participations</h3>
                            <button className={styles.viewAll}>View All</button>
                        </div>
                        <div className={styles.tableWrapper}>
                            <table className={styles.table}>
                                <thead>
                                    <tr>
                                        <th>Tender Name</th>
                                        <th>Status</th>
                                        <th>Bid Amount</th>
                                        <th>Deadline</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Office Supplies 2026</td>
                                        <td><span className={`${styles.badge} ${styles.pending}`}>Pending</span></td>
                                        <td>$45,000</td>
                                        <td>Feb 15, 2026</td>
                                    </tr>
                                    <tr>
                                        <td>IT Infrastructure Upgrade</td>
                                        <td><span className={`${styles.badge} ${styles.submitted}`}>Submitted</span></td>
                                        <td>$120,500</td>
                                        <td>Feb 20, 2026</td>
                                    </tr>
                                    <tr>
                                        <td>Fleet Maintenance Services</td>
                                        <td><span className={`${styles.badge} ${styles.review}`}>In Review</span></td>
                                        <td>$88,000</td>
                                        <td>Feb 10, 2026</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                <aside className={styles.sideSection}>
                    <div className={styles.card}>
                        <h3>Recommended Tenders</h3>
                        <div className={styles.recommendationList}>
                            <div className={styles.recommendationItem}>
                                <p className={styles.recTitle}>Janitorial Services</p>
                                <p className={styles.recMeta}>Procurement Dept • $25k - $50k</p>
                            </div>
                            <div className={styles.recommendationItem}>
                                <p className={styles.recTitle}>Cloud Hosting Renewal</p>
                                <p className={styles.recMeta}>IT Dept • $100k+</p>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.card} ${styles.danCard}`}>
                        <div className={styles.danIcon}>✓</div>
                        <h3>DAN Verified</h3>
                        <p>Your organization is verified. You can participate in all open tenders.</p>
                    </div>
                </aside>
            </div>
        </div>
    );
}
