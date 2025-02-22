import Link from 'next/link';
import { clsx } from 'clsx';
import s from './button.module.css';

type ButtonPropsBase = {
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
    fullWidth?: boolean;
    linkTo?: string;
    className?: string;
};

type ButtonWithLabel = ButtonPropsBase & {
    label: string;
    children?: never;
};

type ButtonWithChildren = ButtonPropsBase & {
    children: React.ReactNode;
    label?: never;
};

type ButtonProps = ButtonWithLabel | ButtonWithChildren;

const Button = ({ 
    onClick, 
    label,
    children,
    variant = 'primary',
    fullWidth,
    linkTo,
    className,
 }: ButtonProps) => {
    const classes = clsx(
        s.button,
        variant === 'secondary' && s.buttonSecondary,
        fullWidth && s.buttonFullWidth,
        className,
    )

    if (linkTo) {
        return (
            <Link
                href={linkTo}
                className={classes}
                onClick={onClick}
            >
                {label || children}
            </Link>
        );
    }

    return (
        <button
            className={classes}
            onClick={onClick}
        >
            {label || children}
        </button>
    );
};

export default Button;