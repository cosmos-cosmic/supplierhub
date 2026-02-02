'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import styles from './page.module.css';

export default function BidSubmission({ params }: { params: { id: string } }) {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isStep1Complete, setIsStep1Complete] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Mock submission
        setTimeout(() => {
            setIsSubmitting(false);
            router.push('/supplier/my-bids');
        }, 2000);
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Link href={`/supplier/tenders/${params.id}`} className={styles.backLink}>&larr; Back to Tender</Link>
                <h1 className={styles.title}>Submit Bid: T-2026-001</h1>
                <p className={styles.subtitle}>Office Furniture Supply 2026</p>
            </header>

            {!isStep1Complete ? (
                <div className={styles.card}>
                    <h3>Step 1: Intent to Participate</h3>
                    <p className={styles.description}>
                        By clicking "Confirm Intent", you formalize your interest in this tender. This action will be logged and you will be able to proceed with the financial and technical submission.
                    </p>
                    <div className={styles.checklist}>
                        <div className={styles.checkItem}>
                            <input type="checkbox" id="check1" required />
                            <label htmlFor="check1">I have read and understood the technical requirements.</label>
                        </div>
                        <div className={styles.checkItem}>
                            <input type="checkbox" id="check2" required />
                            <label htmlFor="check2">I confirm my organization meets all eligibility criteria.</label>
                        </div>
                    </div>
                    <Button className={styles.actionBtn} onClick={() => setIsStep1Complete(true)}>Confirm Intent to Participate</Button>
                </div>
            ) : (
                <form className={styles.card} onSubmit={handleSubmit}>
                    <h3>Step 2: Bid Details</h3>

                    <div className={styles.formGroup}>
                        <Input label="Total Bid Amount" type="number" placeholder="0.00" required />
                        <select className={styles.select}>
                            <option>MNT (Mongolian Tugrik)</option>
                            <option>USD (US Dollar)</option>
                        </select>
                    </div>

                    <div className={styles.divider}></div>

                    <div className={styles.uploadSection}>
                        <h4>Technical Proposal</h4>
                        <div className={styles.dropzone}>
                            <span>Click or drag files here to upload (PDF, DOCX)</span>
                        </div>
                    </div>

                    <div className={styles.uploadSection}>
                        <h4>Financial Proposal</h4>
                        <div className={styles.dropzone}>
                            <span>Click or drag files here to upload (Excel, PDF)</span>
                        </div>
                    </div>

                    <div className={styles.actions}>
                        <Button variant="outline" type="button" onClick={() => setIsStep1Complete(false)}>Back</Button>
                        <Button type="submit" isLoading={isSubmitting}>Submit Official Bid</Button>
                    </div>
                </form>
            )}

            <aside className={styles.sidebar}>
                <div className={styles.deadlineCard}>
                    <span className={styles.label}>Submission Deadline</span>
                    <span className={styles.value}>Feb 15, 2026 • 18:00</span>
                    <div className={styles.countdown}>12 days 4 hours remaining</div>
                </div>
            </aside>
        </div>
    );
}
