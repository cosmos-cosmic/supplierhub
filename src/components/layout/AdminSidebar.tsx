import Link from 'next/link';
import styles from './AdminSidebar.module.css';

const menuItems = [
    { label: 'Admin Dashboard', href: '/admin/dashboard', icon: '🛡️' },
    { label: 'User Management', href: '/admin/users', icon: '👤' },
    { label: 'Supplier Verifications', href: '/admin/verifications', icon: '✅' },
    { label: 'System Audit Logs', href: '/admin/logs', icon: '📜' },
    { label: 'Configuration', href: '/admin/config', icon: '⚙️' },
];

export const AdminSidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.logo}>
                <h2>System Admin</h2>
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
                    <div className={styles.avatar}>A</div>
                    <div className={styles.userDetails}>
                        <p className={styles.userName}>Super Admin</p>
                        <p className={styles.userRole}>Security Operations</p>
                    </div>
                </div>
                <Link href="/login" className={styles.logout}>
                    Logout
                </Link>
            </div>
        </aside>
    );
};
