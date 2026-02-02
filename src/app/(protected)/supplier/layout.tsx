import { SupplierSidebar } from '@/components/layout/SupplierSidebar';
import styles from './layout.module.css';

export default function SupplierLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={styles.layout}>
            <SupplierSidebar />
            <main className={styles.content}>
                <div className={styles.inner}>
                    {children}
                </div>
            </main>
        </div>
    );
}
