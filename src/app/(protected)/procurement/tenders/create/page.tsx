'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import styles from './page.module.css';

export default function CreateTender() {
    const [step, setStep] = useState(1);
    const [tenderData, setTenderData] = useState({
        title: '',
        category: 'Goods',
        department: '',
        description: '',
        deadline: '',
    });

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Create New Tender</h1>
                <div className={styles.stepper}>
                    <div className={`${styles.step} ${step >= 1 ? styles.active : ''}`}>1. Basics</div>
                    <div className={`${styles.step} ${step >= 2 ? styles.active : ''}`}>2. Requirements</div>
                    <div className={`${styles.step} ${step >= 3 ? styles.active : ''}`}>3. Schedule</div>
                </div>
            </header>

            <div className={styles.card}>
                {step === 1 && (
                    <div className={styles.stepContent}>
                        <h3>Basic Information</h3>
                        <div className={styles.formGrid}>
                            <div style={{ gridColumn: 'span 2' }}>
                                <Input
                                    label="Tender Title"
                                    placeholder="e.g., Supply of Medical Grade Oxygen"
                                    value={tenderData.title}
                                    onChange={(e) => setTenderData({ ...tenderData, title: e.target.value })}
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>Category</label>
                                <select
                                    className={styles.select}
                                    value={tenderData.category}
                                    onChange={(e) => setTenderData({ ...tenderData, category: e.target.value })}
                                >
                                    <option>Goods</option>
                                    <option>Works</option>
                                    <option>Services</option>
                                    <option>Consulting</option>
                                </select>
                            </div>
                            <Input
                                label="Issuing Department"
                                placeholder="e.g., Health Services"
                                value={tenderData.department}
                                onChange={(e) => setTenderData({ ...tenderData, department: e.target.value })}
                            />
                            <div style={{ gridColumn: 'span 2' }}>
                                <label className={styles.label}>Short Description</label>
                                <textarea
                                    className={styles.textarea}
                                    rows={4}
                                    placeholder="Briefly describe the procurement scope..."
                                ></textarea>
                            </div>
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className={styles.stepContent}>
                        <h3>Requirements & Documents</h3>
                        <div className={styles.requirementSection}>
                            <h4>Technical Requirements</h4>
                            <p className={styles.hint}>Add specific technical qualifications or datasheet requirements.</p>
                            <div className={styles.addList}>
                                <Input placeholder="Enter a requirement..." />
                                <Button variant="outline" size="sm">+ Add</Button>
                            </div>
                        </div>

                        <div className={styles.divider}></div>

                        <div className={styles.requirementSection}>
                            <h4>Required Documents</h4>
                            <div className={styles.checklist}>
                                <label><input type="checkbox" checked readOnly /> Business Registration Certificate</label>
                                <label><input type="checkbox" checked readOnly /> VAT Certificate</label>
                                <label><input type="checkbox" /> Technical Proposal</label>
                                <label><input type="checkbox" /> Financial Proposal (Price Schedule)</label>
                                <label><input type="checkbox" /> Reference Letters</label>
                            </div>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className={styles.stepContent}>
                        <h3>Schedule & Finalize</h3>
                        <div className={styles.formGrid}>
                            <Input label="Publishing Date" type="datetime-local" />
                            <Input label="Submission Deadline" type="datetime-local" />
                        </div>
                        <div className={styles.summaryBox}>
                            <p><strong>Ready to Publish?</strong></p>
                            <p>Once published, the tender will be visible to all verified suppliers in the marketplace. You can still post clarifications later.</p>
                        </div>
                    </div>
                )}

                <div className={styles.actions}>
                    {step > 1 && <Button variant="outline" onClick={prevStep}>Back</Button>}
                    <div style={{ flex: 1 }}></div>
                    {step < 3 ? (
                        <Button onClick={nextStep}>Continue</Button>
                    ) : (
                        <Button className={styles.publishBtn}>Publish Tender</Button>
                    )}
                </div>
            </div>
        </div>
    );
}
