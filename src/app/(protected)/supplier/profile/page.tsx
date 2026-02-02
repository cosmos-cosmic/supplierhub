import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import styles from './page.module.css';

export default function CompanyProfile() {
    const company = {
        name: 'Mongol Mining Corp',
        registerNo: '1234567',
        type: 'LLC',
        vatPayer: 'Yes',
        address: 'Sukhbaatar District, Ulaanbaatar, Mongolia',
        phone: '+976 9911-2233',
        email: 'info@mongolmining.mn',
        website: 'https://mongolmining.mn',
        contactPerson: 'Bat-Erdene P.',
        position: 'Procurement Manager',
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Company Profile</h1>
                <p className={styles.subtitle}>View and manage your organization's information.</p>
            </header>

            <div className={styles.grid}>
                <div className={styles.main}>
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <h3>Organization Details</h3>
                            <div className={styles.statusBadge}>Verified</div>
                        </div>

                        <div className={styles.formGrid}>
                            <Input label="Company Name" value={company.name} disabled />
                            <Input label="State Registration #" value={company.registerNo} disabled />
                            <Input label="Organization Type" value={company.type} disabled />
                            <Input label="VAT Payer" value={company.vatPayer} disabled />
                        </div>

                        <div className={styles.divider}></div>

                        <div className={styles.formGrid}>
                            <div style={{ gridColumn: 'span 2' }}>
                                <Input label="Official Address" value={company.address} />
                            </div>
                            <Input label="Phone Number" value={company.phone} />
                            <Input label="Email Address" value={company.email} />
                            <Input label="Website" value={company.website} />
                        </div>
                    </div>

                    <div className={styles.card}>
                        <h3>Contact Person</h3>
                        <div className={styles.formGrid}>
                            <Input label="Full Name" value={company.contactPerson} />
                            <Input label="Job Title" value={company.position} />
                        </div>
                    </div>

                    <div className={styles.actions}>
                        <Button>Save Changes</Button>
                        <Button variant="outline">Reset to Verified</Button>
                    </div>
                </div>

                <aside className={styles.sidebar}>
                    <div className={styles.card}>
                        <h3>Documents</h3>
                        <div className={styles.docList}>
                            <div className={styles.docItem}>
                                <span className={styles.docIcon}>📄</span>
                                <div className={styles.docInfo}>
                                    <p className={styles.docName}>State Certificate.pdf</p>
                                    <p className={styles.docMeta}>Oct 20, 2025 • 1.2 MB</p>
                                </div>
                            </div>
                            <div className={styles.docItem}>
                                <span className={styles.docIcon}>📜</span>
                                <div className={styles.docInfo}>
                                    <p className={styles.docName}>VAT Certificate.pdf</p>
                                    <p className={styles.docMeta}>Dec 12, 2025 • 0.8 MB</p>
                                </div>
                            </div>
                            <div className={styles.docItem}>
                                <span className={styles.docIcon}>🏗️</span>
                                <div className={styles.docInfo}>
                                    <p className={styles.docName}>Special License #24A.pdf</p>
                                    <p className={styles.docMeta}>Jan 05, 2026 • 2.5 MB</p>
                                </div>
                            </div>
                        </div>
                        <Button variant="outline" size="sm" style={{ width: '100%', marginTop: '1.5rem' }}>Upload New Document</Button>
                    </div>

                    <div className={`${styles.card} ${styles.verificationCard}`}>
                        <h3>DAN Integration</h3>
                        <p>Your data is synced with the official state registry. Some fields cannot be edited directly.</p>
                        <Button variant="ghost" size="sm" style={{ color: 'white', border: '1px solid white', marginTop: '1rem' }}>Re-verify with DAN</Button>
                    </div>
                </aside>
            </div>
        </div>
    );
}
