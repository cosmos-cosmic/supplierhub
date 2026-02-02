import { AdminSidebar } from '@/components/layout/AdminSidebar';
import styles from './layout.module.css';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={styles.layout}>
            <AdminSidebar />
            <main className={styles.content}>
                <div className={styles.inner}>
                    {children}
                </div>
            </main>
        </div>
    );
}
