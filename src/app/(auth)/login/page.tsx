import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import styles from './page.module.css';

export default function LoginPage() {
    return (
        <div className={styles.container}>
            <Link href="/" className={styles.backLink}>&larr; Back to Home</Link>

            <div className={styles.card}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Welcome Back</h1>
                    <p className={styles.subtitle}>Sign in to access your supplier dashboard</p>
                </div>

                <form className={styles.form}>
                    <Input
                        label="Email or Username"
                        placeholder="name@company.com"
                        type="email"
                        required
                        id="email"
                    />

                    <div className={styles.passwordGroup}>
                        <Input
                            label="Password"
                            placeholder="Enter your password"
                            type="password"
                            required
                            id="password"
                        />
                        <Link href="/forgot-password" className={styles.forgotLink}>
                            Forgot password?
                        </Link>
                    </div>

                    <Button type="submit" className={styles.submitButton} size="lg">
                        Sign In
                    </Button>

                    <div className={styles.divider}>
                        <span>New Supplier?</span>
                    </div>

                    <Link href="/register" style={{ width: '100%' }}>
                        <Button variant="outline" className={styles.registerButton}>
                            Create an Account
                        </Button>
                    </Link>
                </form>
            </div>
        </div>
    );
}
