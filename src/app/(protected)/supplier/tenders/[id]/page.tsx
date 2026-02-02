import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import styles from './page.module.css';

export default function TenderDetail({ params }: { params: { id: string } }) {
    // Mock data for a single tender
    const tender = {
        id: params.id || 'T-2026-001',
        title: 'Office Furniture Supply 2026',
        category: 'Goods',
        status: 'Open',
        deadline: 'Feb 15, 2026',
        department: 'Administrative Services',
        description: 'Procurement of ergonomic chairs, height-adjustable desks, and modular storage units for the headquarters office renovation.',
        requirements: [
            'Proof of business registration',
            'At least 3 years of experience in furniture supply',
            'Ability to deliver within 30 days of contract signing',
            'Warranty service for at least 24 months',
        ],
        documents: [
            { name: 'Technical_Specifications.pdf', size: '1.5 MB' },
            { name: 'Standard_Bidding_Document.doc', size: '2.1 MB' },
            { name: 'Office_Layout_Diagram.png', size: '4.8 MB' },
        ]
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.headerLeft}>
                    <Link href="/supplier/tenders" className={styles.backLink}>&larr; Back to Tenders</Link>
                    <h1 className={styles.title}>{tender.title}</h1>
                    <div className={styles.meta}>
                        <span className={styles.badge}>{tender.category}</span>
                        <span className={styles.id}>ID: {tender.id}</span>
                        <span className={styles.status}>Status: {tender.status}</span>
                    </div>
                </div>
                <div className={styles.headerRight}>
                    <div className={styles.deadlineBox}>
                        <span className={styles.label}>Closing Date</span>
                        <span className={styles.date}>{tender.deadline}</span>
                    </div>
                    <Link href={`/supplier/tenders/${tender.id}/bid`}>
                        <Button size="lg">Participate in Tender</Button>
                    </Link>
                </div>
            </header>

            <div className={styles.contentGrid}>
                <div className={styles.main}>
                    <section className={styles.section}>
                        <h3>Project Overview</h3>
                        <p className={styles.description}>{tender.description}</p>
                    </section>

                    <section className={styles.section}>
                        <h3>Key Requirements</h3>
                        <ul className={styles.list}>
                            {tender.requirements.map((req, i) => (
                                <li key={i}>{req}</li>
                            ))}
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h3>Questions & Answers</h3>
                        <div className={styles.qaPlaceholder}>
                            <p>No questions have been asked yet.</p>
                            <Button variant="outline" size="sm">Ask a Question</Button>
                        </div>
                    </section>
                </div>

                <aside className={styles.sidebar}>
                    <div className={styles.card}>
                        <h3>Attached Documents</h3>
                        <div className={styles.docList}>
                            {tender.documents.map((doc) => (
                                <div key={doc.name} className={styles.docItem}>
                                    <div className={styles.docInfo}>
                                        <p className={styles.docName}>{doc.name}</p>
                                        <p className={styles.docMeta}>{doc.size}</p>
                                    </div>
                                    <Button variant="ghost" size="sm">Download</Button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.supportCard}>
                        <h4>Need Help?</h4>
                        <p>Contact our procurement desk if you have technical issues with the bidding process.</p>
                        <p className={styles.supportContact}>support@supplierhub.mn</p>
                    </div>
                </aside>
            </div>
        </div>
    );
}
