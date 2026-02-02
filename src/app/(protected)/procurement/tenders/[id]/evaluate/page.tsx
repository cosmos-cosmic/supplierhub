'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import styles from './page.module.css';

export default function EvaluateTender({ params }: { params: { id: string } }) {
    const [selectedBid, setSelectedBid] = useState<any>(null);

    const bids = [
        { id: 'B-101', supplier: 'Mongol Mining Corp', amount: '$45,000', score: 0, docs: ['Technical.pdf', 'Financial.xlsx'] },
        { id: 'B-102', supplier: 'Altai Construction', amount: '$42,500', score: 0, docs: ['Proposal_V2.pdf'] },
        { id: 'B-103', supplier: 'Gobi Enterprises', amount: '$48,200', score: 0, docs: ['Full_Specs.pdf', 'Budget.pdf'] },
    ];

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Evaluation: T-2026-001</h1>
                <p className={styles.subtitle}>Office Furniture Supply • Closing Date: Feb 15, 2026</p>
            </header>

            <div className={styles.grid}>
                <div className={styles.bidsColumn}>
                    <div className={styles.card}>
                        <h3>Participating Bids</h3>
                        <div className={styles.bidList}>
                            {bids.map((bid) => (
                                <div
                                    key={bid.id}
                                    className={`${styles.bidItem} ${selectedBid?.id === bid.id ? styles.selected : ''}`}
                                    onClick={() => setSelectedBid(bid)}
                                >
                                    <div className={styles.bidMain}>
                                        <p className={styles.supplierName}>{bid.supplier}</p>
                                        <p className={styles.bidAmount}>{bid.amount}</p>
                                    </div>
                                    <div className={styles.bidBadge}>
                                        {bid.score > 0 ? `Score: ${bid.score}` : 'Pending'}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles.scoringColumn}>
                    {selectedBid ? (
                        <div className={styles.card}>
                            <div className={styles.cardHeader}>
                                <h3>Scoring: {selectedBid.supplier}</h3>
                                <span className={styles.bidId}>{selectedBid.id}</span>
                            </div>

                            <div className={styles.docSection}>
                                <h4>Submitted Documents</h4>
                                <div className={styles.docGrid}>
                                    {selectedBid.docs.map((doc: string) => (
                                        <div key={doc} className={styles.docPill}>{doc}</div>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.scoringForm}>
                                <div className={styles.scoreField}>
                                    <label>Technical Compliance (40%)</label>
                                    <input type="number" max="40" placeholder="0-40" />
                                </div>
                                <div className={styles.scoreField}>
                                    <label>Experience & References (20%)</label>
                                    <input type="number" max="20" placeholder="0-20" />
                                </div>
                                <div className={styles.scoreField}>
                                    <label>Financial Score (40%)</label>
                                    <input type="number" max="40" placeholder="Auto-calculated" disabled />
                                </div>

                                <div className={styles.summaryBox}>
                                    <strong>Total Weighted Score: 0/100</strong>
                                </div>

                                <div className={styles.actions}>
                                    <Button variant="outline">Save Draft</Button>
                                    <Button className={styles.winnerBtn}>Award Contract</Button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className={styles.emptyState}>
                            <p>Select a bid from the list to start evaluation.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
