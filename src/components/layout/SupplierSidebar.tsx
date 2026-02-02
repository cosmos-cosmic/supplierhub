import Link from 'next/link';
import styles from './SupplierSidebar.module.css';

const menuItems = [
    { label: 'Dashboard', href: '/supplier/dashboard', icon: '📊' },
    { label: 'Open Tenders', href: '/supplier/tenders', icon: '🔍' },
    { label: 'My Bids', href: '/supplier/my-bids', icon: '📝' },
    { label: 'Company Profile', href: '/supplier/profile', icon: '🏢' },
    { label: 'Notifications', href: '/supplier/notifications', icon: '🔔' },
];

export const SupplierSidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.logo}>
                <h2>Supplier Hub</h2>
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
                    <div className={styles.avatar}>M</div>
                    <div className={styles.userDetails}>
                        <p className={styles.userName}>Mongol Mining</p>
                        <p className={styles.userRole}>Supplier</p>
                    </div>
                </div>
                <Link href="/login" className={styles.logout}>
                    Logout
                </Link>
            </div>
        </aside>
    );
};
