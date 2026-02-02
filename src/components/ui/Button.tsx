import { ButtonHTMLAttributes, forwardRef } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', isLoading, children, ...props }, ref) => {
        const rootClassName = [
            styles.button,
            styles[variant],
            styles[size],
            className
        ].filter(Boolean).join(' ');

        return (
            <button ref={ref} className={rootClassName} disabled={isLoading || props.disabled} {...props}>
                {isLoading ? <span className={styles.loader} /> : children}
            </button>
        );
    }
);

Button.displayName = 'Button';
