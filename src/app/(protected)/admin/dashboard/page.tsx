import styles from './page.module.css';

export default function AdminDashboard() {
    const adminStats = [
        { label: 'Total Users', value: '1,420', trend: 'Admin: 5, Officer: 15', icon: '👤' },
        { label: 'Pending Verifications', value: '18', trend: 'Average wait: 4h', icon: '✅' },
        { label: 'System Health', value: '100%', trend: 'No issues detected', icon: '🛡️' },
        { label: 'Audit Logs (24h)', value: '842', trend: '3 critical events', icon: '📜' },
    ];

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div>
                    <h1 className={styles.title}>System Administration</h1>
                    <p className={styles.subtitle}>Overview of system users, security, and verification workflows.</p>
                </div>
                <div className={styles.serverStatus}>
                    <span className={styles.statusDot}></span> Server: Production-14 (online)
                </div>
            </header>

            <div className={styles.statsGrid}>
                {adminStats.map((stat) => (
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
                <div className={styles.main}>
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <h3>Recent User Activity</h3>
                            <button className={styles.viewLink}>Audit Log &rarr;</button>
                        </div>
                        <div className={styles.activityList}>
                            <div className={styles.activityItem}>
                                <div className={styles.activityIcon}>🔑</div>
                                <div className={styles.activityInfo}>
                                    <p className={styles.activityText}><strong>Admin</strong> reset password for officer <strong>P.Bat</strong></p>
                                    <p className={styles.activityTime}>2 minutes ago</p>
                                </div>
                            </div>
                            <div className={styles.activityItem}>
                                <div className={styles.activityIcon}>📝</div>
                                <div className={styles.activityInfo}>
                                    <p className={styles.activityText}><strong>System</strong> updated tender status: <strong>T-2026-001 (Closed)</strong></p>
                                    <p className={styles.activityTime}>15 minutes ago</p>
                                </div>
                            </div>
                            <div className={styles.activityItem}>
                                <div className={styles.activityIcon}>⚠️</div>
                                <div className={styles.activityInfo}>
                                    <p className={styles.activityText}><strong>Security</strong> detected 3 failed login attempts from IP: 202.131.2.4</p>
                                    <p className={styles.activityTime}>1 hour ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <aside className={styles.sidebar}>
                    <div className={`${styles.card} ${styles.verificationCard}`}>
                        <h3>Verification Action</h3>
                        <p>There are 5 suppliers waiting for DAN verification review.</p>
                        <button className={styles.actionBtn}>Review Requests</button>
                    </div>

                    <div className={styles.card}>
                        <h3>Global Configuration</h3>
                        <div className={styles.configItem}>
                            <span>Maintenance Mode</span>
                            <div className={styles.toggle}>Off</div>
                        </div>
                        <div className={styles.configItem}>
                            <span>New Registrations</span>
                            <div className={styles.toggleOn}>On</div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}
