'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import styles from './page.module.css';

const MOCK_TENDERS = [
    { id: 'T-2026-001', title: 'Office Furniture Supply', category: 'Goods', status: 'Open', deadline: '2026-02-15', department: 'Admin' },
    { id: 'T-2026-002', title: 'Road Maintenance Block A', category: 'Works', status: 'Open', deadline: '2026-03-01', department: 'Infrastructure' },
    { id: 'T-2026-003', title: 'Financial Audit 2025', category: 'Consulting', status: 'Open', deadline: '2026-02-28', department: 'Finance' },
    { id: 'T-2026-004', title: 'IT Support Services', category: 'Services', status: 'Closing Soon', deadline: '2026-02-05', department: 'IT' },
    { id: 'T-2026-005', title: 'Catering for Annual Summit', category: 'Services', status: 'Open', deadline: '2026-04-10', department: 'Events' },
];

export default function TendersMarketplace() {
    const [search, setSearch] = useState('');

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Tender Marketplace</h1>
                <p className={styles.subtitle}>Discover and participate in new procurement opportunities.</p>
            </header>

            <div className={styles.filters}>
                <div className={styles.searchWrapper}>
                    <Input
                        placeholder="Search tenders by name or ID..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className={styles.selectGroup}>
                    <select className={styles.select}>
                        <option>All Categories</option>
                        <option>Goods</option>
                        <option>Works</option>
                        <option>Services</option>
                        <option>Consulting</option>
                    </select>
                    <select className={styles.select}>
                        <option>All Statuses</option>
                        <option>Open</option>
                        <option>Closing Soon</option>
                    </select>
                </div>
            </div>

            <div className={styles.grid}>
                {MOCK_TENDERS.filter(t => t.title.toLowerCase().includes(search.toLowerCase())).map((tender) => (
                    <div key={tender.id} className={styles.card}>
                        <div className={styles.cardMain}>
                            <div className={styles.badge}>{tender.category}</div>
                            <h3 className={styles.tenderTitle}>{tender.title}</h3>
                            <p className={styles.tenderMeta}>ID: {tender.id} • {tender.department}</p>
                        </div>

                        <div className={styles.cardFooter}>
                            <div className={styles.deadlineInfo}>
                                <span className={styles.label}>Deadline:</span>
                                <span className={styles.value}>{tender.deadline}</span>
                            </div>
                            <Button variant="outline" size="sm">View Details</Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
