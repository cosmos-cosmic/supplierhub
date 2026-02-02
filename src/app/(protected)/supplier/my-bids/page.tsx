import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import styles from './page.module.css';

export default function MyBids() {
    const bids = [
        { id: 'B-101', tenderId: 'T-2026-001', title: 'Office Furniture Supply', amount: '$45,000', submittedAt: 'Feb 02, 2026', status: 'Submitted' },
        { id: 'B-098', tenderId: 'T-2025-442', title: 'IT Infrastructure Upgrade', amount: '$120,500', submittedAt: 'Jan 28, 2026', status: 'In Review' },
        { id: 'B-085', tenderId: 'T-2025-310', title: 'Fleet Maintenance Services', amount: '$88,000', submittedAt: 'Jan 15, 2026', status: 'Awarded' },
        { id: 'B-072', tenderId: 'T-2025-205', title: 'Security Services Q4', amount: '$22,000', submittedAt: 'Dec 10, 2025', status: 'Not Awarded' },
    ];

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>My Bids</h1>
                <p className={styles.subtitle}>Track your submissions and tender results.</p>
            </header>

            <div className={styles.card}>
                <div className={styles.tableWrapper}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Bid ID</th>
                                <th>Tender</th>
                                <th>Amount</th>
                                <th>Submitted</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bids.map((bid) => (
                                <tr key={bid.id}>
                                    <td className={styles.bidId}>{bid.id}</td>
                                    <td>
                                        <p className={styles.tenderTitle}>{bid.title}</p>
                                        <p className={styles.tenderId}>{bid.tenderId}</p>
                                    </td>
                                    <td className={styles.amount}>{bid.amount}</td>
                                    <td className={styles.date}>{bid.submittedAt}</td>
                                    <td>
                                        <span className={`${styles.badge} ${styles[bid.status.toLowerCase().replace(' ', '')]}`}>
                                            {bid.status}
                                        </span>
                                    </td>
                                    <td>
                                        <Button variant="ghost" size="sm">View Submission</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
