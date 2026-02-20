import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import styles from './styles.module.scss';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', asChild = false, className, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    const variantClass = variant === 'primary' ? styles.primary : styles.secondary;
    const classes = [styles.button, variantClass, className].filter(Boolean).join(' ');

    return <Comp ref={ref} className={classes} {...props} />;
  }
);

Button.displayName = 'Button';

