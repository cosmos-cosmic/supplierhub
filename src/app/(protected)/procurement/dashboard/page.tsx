import styles from './page.module.css';

export default function ProcurementDashboard() {
    const stats = [
        { label: 'Published Tenders', value: '42', trend: '+5 this month', icon: '📢' },
        { label: 'Active Proposals', value: '156', trend: 'Avg 8.4 per tender', icon: '📄' },
        { label: 'Pending Verifications', value: '12', trend: 'Suppliers waiting', icon: '👤' },
        { label: 'Avg. Evaluation Time', value: '4.2d', trend: '-0.5d from Q4', icon: '⏱️' },
    ];

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div>
                    <h1 className={styles.title}>Procurement Overview</h1>
                    <p className={styles.subtitle}>Manage your tenders, participants, and evaluations.</p>
                </div>
                <div className={styles.actions}>
                    <button className={styles.primaryBtn}>+ Create New Tender</button>
                </div>
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
                            <h3>Critical Tenders (Near Deadline)</h3>
                            <button className={styles.viewAll}>View All</button>
                        </div>
                        <div className={styles.tableWrapper}>
                            <table className={styles.table}>
                                <thead>
                                    <tr>
                                        <th>Tender Title</th>
                                        <th>Submissions</th>
                                        <th>Time Remaining</th>
                                        <th>Priority</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Medical Supplies Q1</td>
                                        <td>24</td>
                                        <td className={styles.urgent}>2h 15m</td>
                                        <td><span className={styles.highPriority}>High</span></td>
                                    </tr>
                                    <tr>
                                        <td>Office Laptops Batch B</td>
                                        <td>18</td>
                                        <td>1d 4h</td>
                                        <td><span className={styles.medPriority}>Medium</span></td>
                                    </tr>
                                    <tr>
                                        <td>Software License Renewal</td>
                                        <td>5</td>
                                        <td>3d 12h</td>
                                        <td><span className={styles.lowPriority}>Low</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                <aside className={styles.sideSection}>
                    <div className={styles.card}>
                        <h3>Recent Submissions</h3>
                        <div className={styles.submissionList}>
                            <div className={styles.submissionItem}>
                                <p className={styles.subTitle}>Mongol Mining Corp</p>
                                <p className={styles.subMeta}>Medical Supplies • $1.2M • 5m ago</p>
                            </div>
                            <div className={styles.submissionItem}>
                                <p className={styles.subTitle}>Erdenet Tech LLC</p>
                                <p className={styles.subMeta}>Laptops Batch B • $45k • 2h ago</p>
                            </div>
                            <div className={styles.submissionItem}>
                                <p className={styles.subTitle}>Skyline Services</p>
                                <p className={styles.subMeta}>Cleaning Contract • $12k • 4h ago</p>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}
