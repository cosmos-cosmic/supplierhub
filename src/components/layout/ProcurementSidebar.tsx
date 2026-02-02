import Link from 'next/link';
import styles from './ProcurementSidebar.module.css';

const menuItems = [
    { label: 'Dashboard', href: '/procurement/dashboard', icon: '📈' },
    { label: 'Create Tender', href: '/procurement/tenders/create', icon: '➕' },
    { label: 'All Tenders', href: '/procurement/tenders', icon: '📁' },
    { label: 'Suppliers', href: '/procurement/suppliers', icon: '👥' },
    { label: 'Reports', href: '/procurement/reports', icon: '📊' },
];

export const ProcurementSidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.logo}>
                <h2>Officer Hub</h2>
            </div>

            <nav className={styles.nav}>
                {menuItems.map((item) => (
                    <Link key={item.href} href={item.href} className={styles.navItem}>
                        <span className={styles.icon}>{item.icon}</span>
                        {item.label}
                    </Link>
                ))}
            </nav>

            <div className={styles.footer}>
                <div className={styles.userInfo}>
                    <div className={styles.avatar}>P</div>
                    <div className={styles.userDetails}>
                        <p className={styles.userName}>Officer Name</p>
                        <p className={styles.userRole}>Procurement Dpt</p>
                    </div>
                </div>
                <Link href="/login" className={styles.logout}>
                    Logout
                </Link>
            </div>
        </aside>
    );
};
