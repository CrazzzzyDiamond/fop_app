import Link from 'next/link';

import cn from '@/utils/cn';

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
    const classes = cn(`
        px-3 py-2 border border-gray-300 inline-block text-center
        rounded-md focus:outline-none focus:border-blue-500 
        bg-blue-500 text-white hover:bg-blue-600
        transition duration-200 ease-in-out min-w-28
    `, variant === 'secondary' && `
        bg-white text-gray-900 border-gray-300
        hover:bg-gray-100
    `, fullWidth && 'w-full',
    className);

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