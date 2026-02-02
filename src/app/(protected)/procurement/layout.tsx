import { ProcurementSidebar } from '@/components/layout/ProcurementSidebar';
import styles from './layout.module.css';

export default function ProcurementLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={styles.layout}>
            <ProcurementSidebar />
            <main className={styles.content}>
                <div className={styles.inner}>
                    {children}
                </div>
            </main>
        </div>
    );
}
