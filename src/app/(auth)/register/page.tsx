'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import styles from './page.module.css';

export default function RegisterPage() {
    const [step, setStep] = useState(1);
    const [registerNo, setRegisterNo] = useState('');
    const [isVerifying, setIsVerifying] = useState(false);
    const [companyInfo, setCompanyInfo] = useState<any>(null);

    const handleDanVerify = async () => {
        if (!registerNo) return;
        setIsVerifying(true);

        // Mock DAN API call
        setTimeout(() => {
            setCompanyInfo({
                name: 'Mongol Mining Corp',
                type: 'LLC',
                vatPayer: true,
                address: 'Sukhbaatar District, Ulaanbaatar',
                stateRegistration: registerNo,
            });
            setIsVerifying(false);
            setStep(2);
        }, 1500);
    };

    return (
        <div className={styles.container}>
            <Link href="/" className={styles.backLink}>&larr; Back to Home</Link>

            <div className={styles.card}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Supplier Registration</h1>
                    <p className={styles.subtitle}>Step {step} of 2: {step === 1 ? 'Organization Verification' : 'Contact Details'}</p>
                </div>

                {step === 1 && (
                    <div className={styles.stepContent}>
                        <div className={styles.infoBox}>
                            <p>We use the <strong>DAN</strong> system to automatically verify your organization details. Please enter your State Registration Number.</p>
                        </div>

                        <div className={styles.verificationForm}>
                            <Input
                                label="State Registration Number"
                                placeholder="e.g., 1234567"
                                value={registerNo}
                                onChange={(e) => setRegisterNo(e.target.value)}
                            />
                            <Button
                                onClick={handleDanVerify}
                                isLoading={isVerifying}
                                disabled={!registerNo || isVerifying}
                                className={styles.verifyButton}
                            >
                                Verify with DAN
                            </Button>
                        </div>
                    </div>
                )}

                {step === 2 && companyInfo && (
                    <form className={styles.form}>
                        <div className={styles.verifiedBadge}>
                            ✓ Verified: {companyInfo.name}
                        </div>

                        <div className={styles.grid}>
                            <Input label="Organization Type" value={companyInfo.type} disabled />
                            <Input label="VAT Payer" value={companyInfo.vatPayer ? 'Yes' : 'No'} disabled />
                        </div>

                        <div className={styles.divider}><span>Contact Person</span></div>

                        <div className={styles.grid}>
                            <Input label="Last Name" required />
                            <Input label="First Name" required />
                        </div>

                        <Input label="Email Address" type="email" required />
                        <Input label="Phone Number" type="tel" required />

                        <div className={styles.actions}>
                            <Button type="button" variant="ghost" onClick={() => setStep(1)}>Back</Button>
                            <Button type="submit">Complete Registration</Button>
                        </div>
                    </form>
                )}

                <div className={styles.footer}>
                    Already have an account? <Link href="/login">Sign In</Link>
                </div>
            </div>
        </div>
    );
}
